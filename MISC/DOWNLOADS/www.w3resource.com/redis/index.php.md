 

 

- [Home](/index.php)
- [Redis Tutorial](/redis/index.php)
- [Redis Installation](/redis/redis-installation.php)
- [Redis Configuration](/redis/redis-configuration.php)
- [Redis Data Types](/redis/redis-data-types.php)
- ▼Commands
- [Redis Keys](/redis/redis-del-key.php)
- [Redis Strings](/redis/redis-set-key-value.php)
- [Redis Hashes](/redis/redis-hdel-key-field2.php)
- [Redis Lists](/redis/redis-blpop-key1-timeout.php)
- [Redis Sets](/redis/redis-sadd-key-member1.php)
- [Redis Sorted Sets](/redis/redis-zadd-key-score1-member1.php)
- [Redis HyperLogLog](/redis/redis-pfadd-key-element.php)
- [Redis Pub/Sub](/redis/redis-psubscribe-pattern.php)
- [Redis Transactions](/redis/redis-discard.php)
- [Redis Scripting](/redis/redis-eval-script-numkeys-key.php)
- [Redis Connection](/redis/redis-auth-password.php)
- [Redis Server](/redis/redis-server-bgrewriteaof.php)
- ▼Administration
- [Backup and Restore](/redis/redis-backup.php)
- [More ...]()

# Redis Tutorial

Last update on February 26 2020 08:08:39 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Introduction to Redis

Redis, developed in 2009, is a flexible, open-source (BSD licensed), in-memory data structure store, used as database, cache, and message broker. Following in the footsteps of other NoSQL databases, such as Cassandra, CouchDB, and MongoDB, Redis allows the user to store vast amounts of data without the limits of a relational database.  
It supports various data structures such as strings, hashes, sets, lists, sorted sets, bitmaps, hyperloglogs and geospatial indexes with radius queries.  
Redis has built-in replication, Lua scripting, LRU eviction, transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster.  
Redis can be compiled and used on Linux, OSX, OpenBSD, NetBSD, FreeBSD. It supports big endian and little endian architectures, and both 32 bit and 64 bit systems.  
Redis is maintained and developed by [Salvatore Sanfilippo](https://twitter.com/antirez). In the past, Pieter Noordhuis and Matt Stancliff provided a very significant amount of code and ideas to both the Redis core and client libraries.

**What does the name Redis mean?**

Redis stands for REmote DIctionary Server.

**What is Redis used for?**

Redis is an advanced key-value store that can function as a NoSQL database or as a memory-cache store to improve performance when serving data that is stored in system memory.

**How to interact with Redis?**

Once installed in a server, run the Redis CLI (Command Line Interface) to issue commands to Redis. While working on the CLI tool, your command-line prompt will change to: redis&gt;

**Features:**

- Speed : Redis loads the whole dataset in memory. It loads up to 110,000 SETs/second and 81,000 GETs/second can be achieved in an entry level Linux box. Redis supports Pipelining of commands and getting and setting multiple values in a single command to speed up communication with the client libraries.
- Persistence : While all the data lives in memory, changes are asynchronously saved on disk using flexible policies based on elapsed time and/or number of updates since last save. Redis supports an append-only file persistence mode. Check more on Persistence, or read the AppendOnlyFileHowto for more information.
- Data Structures : It supports data structures such as strings, hashes, sets, lists, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries.
- Atomic Operations : Redis operations working on the different Data Types are atomic, so setting or increasing a key, adding and removing elements from a set, increasing a counter will all be accomplished safely.
- Supported Languages : Many languages have Redis bindings, including: ActionScript, C, C++, C\#, Clojure, Common Lisp, D, Dart, Erlang, Go, Haskell, Haxe, Io, Java, JavaScript (Node.js), Julia, Lua, Objective-C, Perl, PHP, Pure Data, Python, R, Racket, Ruby, Rust, Scala, Smalltalk and Tcl.
- Master/Slave Replication : Redis supports a very simple and fast Master/Slave replication. Is so simple it takes only one line in the configuration file to set it up, and 21 seconds for a Slave to complete the initial sync of 10 MM key set on an Amazon EC2 instance.
- Sharding : Distributing the dataset across multiple Redis instances is easy in Redis, as in any other key-value store. And this depends basically on the Languages client libraries being able to do so.
- Portable : Redis is written in ANSI C and works in most POSIX systems like Linux, BSD, Mac OS X, Solaris, and so on. Redis is reported to compile and work under WIN32 if compiled with Cygwin, but there is no official support for Windows currently.

**Why is Redis is different compared to other key-value stores?**

- Redis is a different evolution path in the key-value DBs where values can contain more complex data types, with atomic operations defined on those data types. Redis data types are closely related to fundamental data structures and are exposed to the programmer as such, without additional abstraction layers.
- Redis is an in-memory but persistent on disk database, so it represents a different trade off where very high write and read speed is achieved with the limitation of data sets that can't be larger than memory. Another advantage of in memory databases is that the memory representation of complex data structures is much simpler to manipulate compared to the same data structure on disk, so Redis can do a lot, with little internal complexity. At the same time the two on-disk storage formats (RDB and AOF) don't need to be suitable for random access, so they are compact and always generated in an append-only fashion.

**What happens if Redis runs out of memory?**

Redis will either be killed by the Linux kernel OOM killer, crash with an error or will start to slow down. With modern operating systems malloc() returning NULL is not common, usually the server will start swapping, and Redis performance will degrade, so you'll probably notice there is something wrong.  
The INFO command will report the amount of memory Redis is using so you can write scripts that monitor your Redis servers checking for critical conditions.  
Redis has built-in protections allowing the user to set a max limit to memory usage, using the maxmemory option in the config file to put a limit to the memory Redis can use. If this limit is reached Redis will start to reply with an error to write commands, or you can configure it to evict keys when the max memory limit is reached in the case you are using Redis for caching.

You can easily build complex systems on top of Redis, here is a sample list :

- User defined indexing schemes
- Message queues with real time new element notification
- Directed and undirected graph stores for following or friending systems
- Real-time publish/subscribe notification systems
- Real-time analytics backends
- Bloom filter servers
- Task queues and job systems
- High score leaderboards
- User ranking systems
- Hierarchical/tree structured storage systems
- Individual personalized news or data feeds for your users

**Features of the w3resource Redis tutorials**

In this series of tutorials we have covered Redis 3.0.5 in detail. While creating this, we have take care that learners can master the basics of Redis.

Here is a list of features we have included in all of the chapters :

1. We have started from beginning i.e. from installation, with a clear and simple description.

2. We have clearly define Syntax / Usage so that you can remember how to write it.

3. Example(s) to show how the associated concept is implemented.

4. We have shown the Output of the usage.

5. Pictorial presentation to help you to understand the concept better.

6. You may refer [Redis Manual](http://redis.io/documentation) along with this tutorial.

**Next:** [Redis Installation](https://www.w3resource.com/redis/redis-installation.php)

---

<span class="underline"></span>

 

---

<span class="underline"></span>

<span class="underline"></span>

<span class="underline"></span>

 
