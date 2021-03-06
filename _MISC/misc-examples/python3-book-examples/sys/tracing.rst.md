Tracing a Program As It Runs {#sys-tracing}
============================

There are two ways to inject code to watch a program run: *tracing* and
*profiling*. They are similar, but intended for different purposes and
so have different constraints. The easiest, but least efficient, way to
monitor a program is through a *trace hook*, which can be used to write
a debugger, monitor code coverage, or achieve many other purposes.

The trace hook is modified by passing a callback function to
`sys.settrace()`. The callback will receive three arguments: the stack
frame from the code being run, a string naming the type of notification,
and an event-specific argument value. `Event
Hooks for settrace()`{.interpreted-text role="table"} lists the seven
event types for different levels of information that occur as a program
is being executed.

  ------------------------------------------------------------------------
  Event          When it occurs               Argument value
  -------------- ---------------------------- ----------------------------
  call           Before a line is executed    `None`

  line           Before a line is executed    `None`

  return         Before a function returns    The value being returned

  exception      After an exception occurs    The (exception, value,
                                              traceback) tuple

  c\_call        Before a C function is       The C function object
                 called                       

  c\_return      After a C function returns   `None`

  c\_exception   After a C function throws an `None`
                 error                        
  ------------------------------------------------------------------------

  : Event Hooks for settrace()

Tracing Function Calls
----------------------

A `call` event is generated before every function call. The frame passed
to the callback can be used to find out which function is being called
and from where.

::: {.cssclass}
with-linenos

::: {.literalinclude linenos="" caption=""}
sys\_settrace\_call.py
:::
:::

This example ignores calls to `write()`, as used by `print` to write to
`sys.stdout`.

``` {.sourceCode .none}
$ python3 sys_settrace_call.py

* Call to a
*  on line 35 of sys_settrace_call.py
*  from line 41 of sys_settrace_call.py
inside a()

* Call to b
*  on line 31 of sys_settrace_call.py
*  from line 37 of sys_settrace_call.py
inside b()
```

Tracing Inside Functions
------------------------

The trace hook can return a new hook to be used inside the new scope
(the *local* trace function). It is possible, for instance, to control
tracing to only run line-by-line within certain modules or functions.

::: {.cssclass}
with-linenos

::: {.literalinclude linenos="" caption=""}
sys\_settrace\_line.py
:::
:::

In this example, the list of functions is kept in the variable
:py`to_be_traced`, so when `trace_calls()` runs it can return
`trace_lines()` to enable tracing inside of `b()`.

``` {.sourceCode .none}
$ python3 sys_settrace_line.py

* Call to a on line 49 of sys_settrace_line.py
* Call to b on line 43 of sys_settrace_line.py
*  b line 44
*  b line 45
* Call to c on line 38 of sys_settrace_line.py
input = 10
Leaving c()
*  b line 46
Leaving b()
Leaving a()
```

Watching the Stack
------------------

Another useful way to use the hooks is to keep up with which functions
are being called, and what their return values are. To monitor return
values, watch for the `return` event.

::: {.cssclass}
with-linenos

::: {.literalinclude linenos="" caption=""}
sys\_settrace\_return.py
:::
:::

The local trace function is used for watching return events, so
`trace_calls_and_returns()` needs to return a reference to itself when a
function is called, so the return value can be monitored.

``` {.sourceCode .none}
$ python3 sys_settrace_return.py

* Call to a on line 32 of sys_settrace_return.py
inside a()
* Call to b on line 27 of sys_settrace_return.py
inside b()
* b => response_from_b 
* a => response_from_b response_from_b 
```

Exception Propagation
---------------------

Exceptions can be monitored by looking for the `exception` event in a
local trace function. When an exception occurs, the trace hook is called
with a tuple containing the type of exception, the exception object, and
a traceback object.

::: {.cssclass}
with-linenos

::: {.literalinclude linenos="" caption=""}
sys\_settrace\_exception.py
:::
:::

Take care to limit where the local function is applied because some of
the internals of formatting error messages generate, and ignore, their
own exceptions. Every exception is seen by the trace hook, whether the
caller catches and ignores it or not.

``` {.sourceCode .none}
$ python3 sys_settrace_exception.py

* Tracing exception:
* RuntimeError "generating exception in c()"
* on line 31 of c

* Tracing exception:
* RuntimeError "generating exception in c()"
* on line 35 of b

* Tracing exception:
* RuntimeError "generating exception in c()"
* on line 40 of a

Exception handler: generating exception in c()
```

::: {.seealso}
-   `profile`{.interpreted-text role="mod"} \-- The `profile` module
    documentation shows how to use a ready-made profiler.
-   `trace`{.interpreted-text role="mod"} \-- The `trace` module
    implements several code analysis features.
-   [Types and
    Members](https://docs.python.org/3/library/inspect.html#types-and-members)
    \-- The descriptions of frame and code objects and their attributes.
-   [Tracing python
    code](http://www.dalkescientific.com/writings/diary/archive/2005/04/20/tracing_python_code.html)
    \-- Another `settrace()` tutorial.
-   [Wicked hack: Python bytecode
    tracing](http://nedbatchelder.com/blog/200804/wicked_hack_python_bytecode_tracing.html)
    \-- Ned Batchelder\'s experiments with tracing with more granularity
    than source line level.
-   [smiley](https://pypi.python.org/pypi/smiley) \-- Python Application
    Tracer
:::
