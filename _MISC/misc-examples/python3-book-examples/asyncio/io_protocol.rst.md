Asynchronous I/O with Protocol Class Abstractions
=================================================

Up to this point the examples have all avoided mingling concurrency and
I/O operations to focus on one concept at a time. However, switching
contexts when I/O blocks is one of the primary use cases for `asyncio`.
Building on the concurrency concepts already introduced, this section
examines two sample programs implementing a simple echo server and
client, similar to the examples used in the `socket`{.interpreted-text
role="mod"} and `socketserver`{.interpreted-text role="mod"} sections. A
client can connect to the server, send some data, and then receive the
same data as a response. Each time an I/O operation is initiated, the
executing code gives up control to the event loop, allowing other tasks
to run until the I/O is ready.

Echo Server
-----------

The server starts by importing the modules it needs to set up `asyncio`
and `logging`{.interpreted-text role="mod"}, and then it creates an
event loop object.

::: {.literalinclude caption="" lines="9-14,44-51"}
asyncio\_echo\_server\_protocol.py
:::

It then defines a subclass of `asyncio.Protocol` to handle client
communication. The protocol object\'s methods are invoked based on
events associated with the server socket.

::: {.literalinclude lines="16"}
asyncio\_echo\_server\_protocol.py
:::

Each new client connection triggers a call to `connection_made()`. The
transport argument is an instance of `asyncio.Transport`, which provides
an abstraction for doing asynchronous I/O using the socket. Different
types of communication provide different transport implementations, all
with the same API. For example, there are separate transport classes for
working with sockets and for working with pipes to subprocesses. The
address of the incoming client is available from the transport through
`get_extra_info()`, an implementation-specific method.

::: {.literalinclude lines="18-24"}
asyncio\_echo\_server\_protocol.py
:::

After a connection is established, when data is sent from the client to
the server the `data_received()` method of the protocol is invoked to
pass the data in for processing. Data is passed as a byte string, and it
is up to the application to decode it in an appropriate way. Here the
results are logged, and then a response is sent back to the client
immediately by calling `transport.write()`.

::: {.literalinclude lines="26-29"}
asyncio\_echo\_server\_protocol.py
:::

Some transports support a special end-of-file indicator (\"EOF\"). When
an EOF is encountered, the `eof_received()` method is called. In this
implementation, the EOF is sent back to the client to indicate that it
was received. Because not all transports support an explicit EOF, this
protocol asks the transport first whether it is safe to send EOF.

::: {.literalinclude lines="31-34"}
asyncio\_echo\_server\_protocol.py
:::

When a connection is closed, either normally or as the result of an
error, the protocol\'s `connection_lost()` method is called. If there
was an error, the argument contains an appropriate exception object.
Otherwise it is `None`.

::: {.literalinclude lines="36-41"}
asyncio\_echo\_server\_protocol.py
:::

There are two steps to starting the server. First the application tells
the event loop to create a new server object using the protocol class
and the hostname and socket on which to listen. The `create_server()`
method is a coroutine, so the results must be processed by the event
loop in order to actually start the server. Completing the coroutine
produces a `asyncio.Server` instance tied to the event loop.

::: {.literalinclude lines="53-57"}
asyncio\_echo\_server\_protocol.py
:::

Then the event loop needs to be run in order to process events and
handle client requests. For a long-running service, the `run_forever()`
method is the simplest way to do this. When the event loop is stopped,
either by the application code or by signaling the process, the server
can be closed to clean up the socket properly, and then the event loop
can be closed to finish handling any other coroutines before the program
exits.

::: {.literalinclude lines="59-"}
asyncio\_echo\_server\_protocol.py
:::

Echo Client
-----------

Constructing a client using a protocol class is very similar to
constructing a server. The code again starts by importing the modules it
needs to set up `asyncio` and `logging`{.interpreted-text role="mod"},
and then creating an event loop object.

::: {.literalinclude caption="" lines="9-20,62-69"}
asyncio\_echo\_client\_protocol.py
:::

The client protocol class defines the same methods as the server, with
different implementations. The class constructor accepts two arguments,
a list of the messages to send and a `Future` instance to use to signal
that the client has completed a cycle of work by receiving a response
from the server.

::: {.literalinclude lines="22-28"}
asyncio\_echo\_client\_protocol.py
:::

When the client successfully connects to the server, it starts
communicating immediately. The sequence of messages is sent one at a
time, although the underlying networking code may combine multiple
messages into one transmission. When all of the messages are exhausted,
an EOF is sent.

Although it appears that the data is all being sent immediately, in fact
the transport object buffers the outgoing data and sets up a callback to
actually transmit when the socket\'s buffer is ready to receive data.
This is all handled transparently, so the application code can be
written as though the I/O operation is happening right away.

::: {.literalinclude lines="30-43"}
asyncio\_echo\_client\_protocol.py
:::

When the response from the server is received, it is logged.

::: {.literalinclude lines="45-46"}
asyncio\_echo\_client\_protocol.py
:::

And when either an end-of-file marker is received or the connection is
closed from the server\'s side, the local transport object is closed and
the future object is marked as done by setting a result.

::: {.literalinclude lines="48-59"}
asyncio\_echo\_client\_protocol.py
:::

Normally the protocol class is passed to the event loop to create the
connection. In this case, because the event loop has no facility for
passing extra arguments to the protocol constructor, it is necessary to
create a `partial` to wrap the client class and pass the list of
messages to send and the `Future` instance. That new callable is then
used in place of the class when calling `create_connection()` to
establish the client connection.

::: {.literalinclude lines="71-81"}
asyncio\_echo\_client\_protocol.py
:::

To trigger the client to run, the event loop is called once with the
coroutine for creating the client and then again with the `Future`
instance given to the client to communicate when it is finished. Using
two calls like this avoids having an infinite loop in the client
program, which likely wants to exit after it has finished communicating
with the server. If only the first call was used to wait for the
coroutine to create the client, it might not process all of the response
data and clean up the connection to the server properly.

::: {.literalinclude lines="83-"}
asyncio\_echo\_client\_protocol.py
:::

Output
------

Running the server in one window and the client in another produces the
following output.

``` {.sourceCode .none}
$ python3 asyncio_echo_client_protocol.py
asyncio: Using selector: KqueueSelector
main: waiting for client to complete
EchoClient: connecting to ::1 port 10000
EchoClient: sending b'This is the message. '
EchoClient: sending b'It will be sent '
EchoClient: sending b'in parts.'
EchoClient: received b'This is the message. It will be sent in parts.'
EchoClient: received EOF
EchoClient: server closed connection
main: closing event loop

$ python3 asyncio_echo_client_protocol.py
asyncio: Using selector: KqueueSelector
main: waiting for client to complete
EchoClient: connecting to ::1 port 10000
EchoClient: sending b'This is the message. '
EchoClient: sending b'It will be sent '
EchoClient: sending b'in parts.'
EchoClient: received b'This is the message. It will be sent in parts.'
EchoClient: received EOF
EchoClient: server closed connection
main: closing event loop

$ python3 asyncio_echo_client_protocol.py
asyncio: Using selector: KqueueSelector
main: waiting for client to complete
EchoClient: connecting to ::1 port 10000
EchoClient: sending b'This is the message. '
EchoClient: sending b'It will be sent '
EchoClient: sending b'in parts.'
EchoClient: received b'This is the message. It will be sent in parts.'
EchoClient: received EOF
EchoClient: server closed connection
main: closing event loop
```

Although the client always sends the messages separately, the first time
the client runs the server receives one large message and echoes that
back to the client. These results vary in subsequent runs, based on how
busy the network is and whether the network buffers are flushed before
all of the data is prepared.

``` {.sourceCode .none}
$ python3 asyncio_echo_server_protocol.py
asyncio: Using selector: KqueueSelector
main: starting up on localhost port 10000
EchoServer_::1_63347: connection accepted
EchoServer_::1_63347: received b'This is the message. It will be sent in parts.'
EchoServer_::1_63347: sent b'This is the message. It will be sent in parts.'
EchoServer_::1_63347: received EOF
EchoServer_::1_63347: closing

EchoServer_::1_63387: connection accepted
EchoServer_::1_63387: received b'This is the message. '
EchoServer_::1_63387: sent b'This is the message. '
EchoServer_::1_63387: received b'It will be sent in parts.'
EchoServer_::1_63387: sent b'It will be sent in parts.'
EchoServer_::1_63387: received EOF
EchoServer_::1_63387: closing

EchoServer_::1_63389: connection accepted
EchoServer_::1_63389: received b'This is the message. It will be sent '
EchoServer_::1_63389: sent b'This is the message. It will be sent '
EchoServer_::1_63389: received b'in parts.'
EchoServer_::1_63389: sent b'in parts.'
EchoServer_::1_63389: received EOF
EchoServer_::1_63389: closing
```
