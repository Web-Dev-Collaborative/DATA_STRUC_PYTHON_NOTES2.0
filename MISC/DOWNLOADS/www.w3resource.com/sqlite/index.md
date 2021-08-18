 

 

- [Home](/index.php)
- [SQLite3 Home](/sqlite/index.php)
- [Download, installation and getting started](/sqlite/sqlite-download-installation-getting-started.php)
- [DOT(.) Commands](/sqlite/sqlite-dot-commands.php)
- [Attach, Detach Database](/sqlite/sqlite-attach-detach-database.php)
- [Data Types](/sqlite/sqlite-data-types.php)
- [Create, Alter, Drop table](/sqlite/sqlite-create-alter-drop-table.php)
- [Constraint](/sqlite/sqlite-constraint.php)
- [Create, Alter, Drop index](/sqlite/sqlite-create-drop-index.php)
- [SELECT statement](/sqlite/sqlite-select-query-statement.php)
- [Operators](/sqlite/operators.php)
- [Insert](/sqlite/sqlite-insert-into.php)
- [Update](/sqlite/sqlite-update.php)
- [Delete](/sqlite/sqlite-delete.php)
- [Union](/sqlite/sqlite-union.php)
- [Collating Sequences](/sqlite/sqlite-collating-function-or-sequence.php)
- [Aggregate Functions](/sqlite/aggregate-functions-and-grouping-avg.php)
- [Core Functions](/sqlite/core-functions-abs.php)
- [Date and Time Functions](/sqlite/sqlite-date-time-functions-introduction.php)
- [Create, Drop views](/sqlite/sqlite-create-drop-views.php)
- [JOINS](/sqlite/sqlite-inner-join.php)
- [Subqueries](/sqlite/sqlite-subqueries.php)
- [Triggers](/sqlite/sqlite-triggers.php)
- [SQLite Exercises](/sqlite-exercises/)
- [..More to come..]()

# SQLite Tutorial

Last update on February 26 2020 08:08:49 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Introduction

SQLite is a lightweight, in-process library that implements a self-contained, serverless, zero-configuration, transactional [SQL](https://www.w3resource.com/sql/tutorials.php) database engine. The code for SQLite is available in the [public domain](copyright.html) and thus it is free for use for any purpose, commercial or private.

**Design**

- SQLite is an embedded SQL database engine
- SQLite does not have a separate server process like most other SQL databases.
- [](/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php) SQLite reads and writes directly to ordinary disk files.
- A single disk file stores the entire SQL database (multiple tables, indices, triggers, and views) as a single cross-platform file on a host machine.

**History**

- D. Richard Hipp designed SQLite in the spring of 2000.
- In August 2000, version 1.0 of SQLite was released, based on gdbm (GNU Database Manager).
- [](/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php)SQLite 2.0 replaced gdbm with a custom B-tree implementation, adding support for transactions.
- SQLite 3.0.2 beta was released on 2004-06-30.
- In 2011 Hipp announced his plans to add an UnQL interface to SQLite databases and to develop UnQLite, an embeddable document-oriented database
- Howard Chu ported SQLite 3.7.7.1 to use Openldap MDB instead of the original Btree code and called it sqlightning.
- To check the latest stable release and the details release history click [here](https://www.sqlite.org/changes.html).

**Features**

- Self-contained: no external dependencies.
- Written in ANSI-C.
- Zero-configuration - no setup or administration needed.
- A complete database is stored in a single cross-platform disk file.
- The database file format is cross-platform (Linux, Mac OS-X, Android, iOS and Windows) - you can freely copy a database between 32-bit and 64-bit systems or between big-endian and little-endian architectures.
- Great for use as an application file format.
- Available as a single ANSI-C source-code file that can be easily dropped into another project.
- Simple, easy to use API.
- Implements most of the SQL92 except some features.
- Transactions are ACID (atomic, consistent, isolated, and durable) compatible, even after system crashes and power failures.
- Comes with a standalone command-line interface (CLI) client that can be used to administer SQLite databases.

**Where SQLite Works Well**

- Website Database. Because it requires no configuration and stores information in ordinary disk files, SQLite is a popular choice as the database to back small to medium-sized websites.
- Application File Format. Rather than using fopen() to write XML, JSON, CSV, or some proprietary format into disk files used by your application, use an SQLite database. You'll avoid having to write and troubleshoot a parser, your data will be more easily accessible and cross-platform, and your updates will be transactional.
- Database For Gadgets. SQLite is the popular choice for the database engine in cell phones, PDAs, MP3 players, set-top boxes, and other electronic gadgets. SQLite has a small code footprint, makes efficient use of memory, disk space, and disk bandwidth, is highly reliable, and requires no maintenance from a Database Administrator.
- Stand-in For An Enterprise RDBMS. SQLite is often used as a surrogate for an enterprise RDBMS for demonstration purposes or for testing. SQLite is fast and requires no setup, which takes a lot of the hassle out of testing and which makes demos perky and easy to launch.

**Programming languages**

SQLite has bindings for a large number of programming languages, here is a list:

<table><tbody><tr class="odd"><td>BASIC</td><td>Delphi</td><td>C</td><td>C#</td><td>C++</td><td>Clipper//Harbour</td><td>Common Lisp</td><td>Curl</td></tr><tr class="even"><td>D</td><td>Free Pascal</td><td>Go</td><td>Haskell</td><td>Java (on JVM and DVM)</td><td>JavaScript</td><td>Julia</td><td>Livecode</td></tr><tr class="odd"><td>Lua</td><td>newLisp</td><td>Objective-C (on OS X and iOS)</td><td>OCaml</td><td>Perl</td><td>PHP</td><td>Pike</td><td>PureBasic</td></tr><tr class="even"><td>Pytdon</td><td>R</td><td>REALbasic</td><td>REBOL</td><td>Ruby</td><td>Scheme</td><td>Smalltalk</td><td>Tcl</td></tr><tr class="odd"><td>Visual Basic</td><td>Xojo</td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr></tbody></table>

**Web application frameworks**

- Bugzilla, Mozilla's bug database.
- Django, a Python web framework.
- As of version 7, Drupal, a PHP-based content management system for making websites and blogs, has an option to install using SQLite.
- Ruby on Rails.
- web2py, a Python web framework.

**Who uses SQLite**

- Google : Google uses SQLite in their Desktop for Mac, in Google Gears, in the Android cell-phone operating system, and in the Chrome Web Browser.
- Dropbox : Dropbox uses SQLite as the primary data store on the client-side for archiving and synchronization service.
- Mozilla : Mozilla uses SQLite as the primary meta-data storage format for the Firefox, Web Browser, and the Thunderbird Email Reader.
- McAfee : McAfee uses SQLite in its antivirus programs.
- Flame : Flame is a malware spy program uses SQLite.
- Microsoft : It can be inferred from traffic on the SQLite mailing list that at least one group within Microsoft is using SQLite in the development of a game program.
- Skype : Skype uses SQLite in the Skype client for Mac OS X and Windows.
- Adobe : Adobe uses SQLite as the application file format for their Photoshop Lightroom product.
- Airbus : Airbus uses SQLite in their flight software.
- Apple : Apple uses SQLite for many functions within Mac OS X, including Apple Mail, Safari, and in Aperture. Apple uses SQLite in the iPhone and in the iPod touch and in iTunes software.
- Intuit : Intuit apparently uses SQLite in QuickBooks and in TurboTax
- PHP : PHP programming language comes with both SQLite2 and SQLite3 built in.
- Python : SQLite comes bundled with the Python programming language since Python 2.5.
- REALbasic : The REALbasic programming environment comes bundled with an enhanced version of SQLite that supports AES encryption.
- Tcl/Tk : The Tcl/Tk programming language now comes with SQLite built-in.

**Limits in SQLite**

- Maximum database size : Every database consists of one or more "pages" with different sizes between 512 and 65536. The maximum size of a database file is 2147483646 pages.
- Maximum number of tables in a schema : Each table and index require at least one page in the database file. The maximum number of pages in a database file is 2147483646, therefore this is an upper bound on the number of tables and indices in a schema.
- [](/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php)Maximum number of rows in a table : The theoretical maximum number of rows in a table is 264 (18446744073709551616 or about 1.8e+19). This limit is unreachable since the maximum database size of 140 terabytes will be reached first.
- Maximum number of attached databases : The number of simultaneously databases connection is limited to SQLITE_MAX_ATTACHED which is set to 10 by default. The code generator in SQLite uses bitmaps to keep track of attached databases. That means that the number of attached databases cannot be increased above 62.
- Maximum length of a string or BLOB : The maximum number of bytes in a string or BLOB in SQLite is defined by the preprocessor macro SQLITE_MAX_LENGTH. The default value of this macro is 1 billion (1 thousand million or 1,000,000,000).
- Maximum number of columns : The SQLITE_MAX_COLUMN compile-time parameter is used to set an upper bound on the number of columns in a table. The default setting for SQLITE_MAX_COLUMN is 2000. You can change it at compile time to values as large as 32767.
- Maximum length of an SQL statement : The maximum number of bytes in the text of an SQL statement is limited to SQLITE_MAX_SQL_LENGTH which defaults to 1000000. You can redefine this limit to be as large as the smaller of SQLITE_MAX_LENGTH and 1073741824.
- Maximum number of tables in a join : SQLite does not support joins containing more than 64 tables.
- Maximum number of arguments on a function : The SQLITE_MAX_FUNCTION_ARG parameter determines the maximum number of parameters that can be passed to an SQL function and the upper bound on SQLITE_MAX_FUNCTION_ARG of 127.
- Maximum number of terms in a compound SELECT statement : A compound SELECT statement is two or more SELECT statements connected by operators UNION, UNION ALL, EXCEPT, or INTERSECT. The maximum number of terms is SQLITE_MAX_COMPOUND_SELECT which defaults to 500.

**SQLite-related tools**

- [SQLite Database Browser (multi-platform)](http://sqlitebrowser.org/)
- [SQLite Manager](https://addons.mozilla.org/en-US/firefox/addon/sqlite-manager/)
- [SQLiteMan (multi-platform)](http://sqliteman.yarpen.cz/)
- [SpatiaLite](http://sqlitestudio.pl/)

**SQL features not implemented in SQLite**

- RIGHT and FULL OUTER JOIN
- Complete ALTER TABLE support
- Complete trigger support
- Writing to VIEWs
- GRANT and REVOKE

**SQLite3 tutorial from w3resource**

Before starting this tutorial you should have some knowledge on SQL, like how the data is stored into the table, how updated, how deleted, how searched etc.

**Tutorial objectives:**

- A short and concise description to help you to understand about the topic / SQLite command.
- The syntax of the SQLite command with descriptions of all the parameters used.
- Explanation of the code.
- The output of the SQLite command when executed form command prompt.

**SQLite Exercises, Practice, Solution :** You can practice hundreds of SQLite exercises from [here](https://www.w3resource.com/sqlite-exercises/), these exercises will help you to improve your SQLite skills.

**Next:** [Download, installation and getting started](https://www.w3resource.com/sqlite/sqlite-download-installation-getting-started.php)

---

<span class="underline"></span>

 

---

 

 
