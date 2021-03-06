shelve \-\-- Persistent Storage of Objects
==========================================

::: {.module synopsis="Persistent storage of objects"}
shelve
:::

Purpose

:   The shelve module implements persistent storage for arbitrary Python
    objects that can be pickled, using a dictionary-like API.

The `shelve` module can be used as a simple persistent storage option
for Python objects when a relational database is not required. The shelf
is accessed by keys, just as with a dictionary. The values are pickled
and written to a database created and managed by `dbm`{.interpreted-text
role="mod"}.

Creating a new Shelf
--------------------

The simplest way to use `shelve` is via the `DbfilenameShelf` class. It
uses `dbm`{.interpreted-text role="mod"} to store the data. The class
can be used directly, or by calling `shelve.open()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
shelve\_create.py
:::

To access the data again, open the shelf and use it like a dictionary.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
shelve\_existing.py
:::

Running both sample scripts produces the following output.

``` {.sourceCode .none}
$ python3 shelve_create.py
$ python3 shelve_existing.py

{'int': 10, 'float': 9.5, 'string': 'Sample data'}
```

The `dbm`{.interpreted-text role="mod"} module does not support multiple
applications writing to the same database at the same time, but it does
support concurrent read-only clients. If a client will not be modifying
the shelf, tell `shelve` to open the database read-only by passing
`flag='r'`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
shelve\_readonly.py
:::

If the program tries to modify the database while it is opened
read-only, an access error exception is generated. The exception type
depends on the database module selected by `dbm`{.interpreted-text
role="mod"} when the database was created.

``` {.sourceCode .none}
$ python3 shelve_readonly.py

Existing: {'int': 10, 'float': 9.5, 'string': 'Sample data'}
ERROR: cannot add item to database
```

Write-back
----------

Shelves do not track modifications to volatile objects, by default. That
means if the contents of an item stored in the shelf are changed, the
shelf must be updated explicitly by storing the entire item again.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
shelve\_withoutwriteback.py
:::

In this example, the dictionary at `'key1'` is not stored again, so when
the shelf is re-opened, the changes have not been preserved.

``` {.sourceCode .none}
$ python3 shelve_create.py
$ python3 shelve_withoutwriteback.py

{'int': 10, 'float': 9.5, 'string': 'Sample data'}
{'int': 10, 'float': 9.5, 'string': 'Sample data'}
```

To automatically catch changes to volatile objects stored in the shelf,
open it with writeback enabled. The `writeback` flag causes the shelf to
remember all of the objects retrieved from the database using an
in-memory cache. Each cache object is also written back to the database
when the shelf is closed.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
shelve\_writeback.py
:::

Although it reduces the chance of programmer error, and can make object
persistence more transparent, using writeback mode may not be desirable
in every situation. The cache consumes extra memory while the shelf is
open, and pausing to write every cached object back to the database when
it is closed slows down the application. All of the cached objects are
written back to the database because there is no way to tell if they
have been modified. If the application reads data more than it writes,
writeback will impact performance unnecessarily.

``` {.sourceCode .none}
$ python3 shelve_create.py
$ python3 shelve_writeback.py

Initial data:
{'float': 9.5, 'int': 10, 'string': 'Sample data'}

Modified:
{'float': 9.5,
 'int': 10,
 'new_value': 'this was not here before',
 'string': 'Sample data'}

Preserved:
{'float': 9.5,
 'int': 10,
 'new_value': 'this was not here before',
 'string': 'Sample data'}
```

Specific Shelf Types {#shelve-shelf-types}
--------------------

The earlier examples all used the default shelf implementation. Using
`shelve.open()` instead of one of the shelf implementations directly is
a common usage pattern, especially if it does not matter what type of
database is used to store the data. There are times, however, when the
database format is important. In those situations, use `DbfilenameShelf`
or `BsdDbShelf` directly, or even subclass `Shelf` for a custom
solution.

::: {.seealso}
-   `shelve`{.interpreted-text role="pydoc"}
-   `dbm`{.interpreted-text role="mod"} \-- The `dbm` module finds an
    available DBM library to create a new database.
-   [feedcache](https://bitbucket.org/dhellmann/feedcache) \-- The
    `feedcache` module uses `shelve` as a default storage option.
-   [shove](http://pypi.python.org/pypi/shove/) \-- Shove implements a
    similar API with more back-end formats.
:::
