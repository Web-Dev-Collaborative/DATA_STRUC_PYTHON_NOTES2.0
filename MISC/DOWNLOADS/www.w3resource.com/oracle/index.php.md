 


- [Home](/index.php)
- [Oracle Home](/oracle/index.php)
- [Data Types](/oracle/oracle-data-types.php)
- [Literals](/oracle/oracle-literals.php)
- [Operators](/oracle/operators/index.php)
- [Numeric Functions](/oracle/oracle-numeric-functions/index.php)
- [Datetime Functions](/oracle/datetime-functions/index.php)
- [Character Functions](/oracle/character-functions/index.php)
- [JOINS](/oracle/joins/index.php)
- [more...]()

# Oracle Tutorial

Last update on February 25 2021 11:50:05 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Introduction

Oracle is a trademark of Oracle Corporation and in common usage, refers to the database ( a relational database with added object-oriented features) engine and a range of front-end products. Oracle database products deliver innovative technologies and leading price/performance, from the enterprise to small workgroups, from the cloud to mobile devices, from super-clusters to single servers.  
Over the past few decades, Oracle grew from being one of many vendors that developed database product to being widely recognized as the database market leader. In every database release, Oracle has improved the scalability, functionality, and manageability of the database.

**History:**

- 1977: Larry Ellison, Bob Miner, and Ed Oates founded Software Development Laboratories.
- 1978: Oracle Version 1, written in assembly language, runs on PDP-11 under RSX, in 128K of memory.
- 1979: Software Development Laboratories changed its company-name to "Relational Software, Inc." (RSI) and introduced its product Oracle V2 as an early relational database system.
- 1982: RSI in its turn changed its name, becoming known as "Oracle Corporation".
- 1983: The company released Oracle version 3.
- 1984: Oracle Corporation released Oracle version 4, which supported read-consistency.
- 1985: Oracle Corporation released Oracle version 5, which supported the client-server model.
- 1986: Oracle version 5.1 started supporting distributed queries.
- 1988: Oracle RDBMS version 6 came out with support for PL/SQL embedded within Oracle Forms v3, row-level locking, and hot backups.
- 1989: Oracle Corporation entered the application-products market and developed its ERP product, based on the Oracle relational database.
- 1990: the release of Oracle Applications release 8.
- 1992: Oracle version 7 appeared with support for referential integrity, stored procedures and triggers.
- 1997: Oracle Corporation released version 8, which supported object-oriented development and multimedia applications.
- 2001: Oracle9i went into release with 400 new features, including the ability to read and write XML documents. 9i also provided an option for Oracle RAC, or "Real Application Clusters", a computer-cluster database, as a replacement for the Oracle Parallel Server (OPS) option.
- 2002: the release of Oracle 9i Database Release 2
- 2003: Oracle Corporation released Oracle Database 10g, which supported regular expressions.
- 2005: Oracle Database 10.2.0.1 also known as Oracle Database 10g Release 2.
- 2007: Oracle Database 10g release 2 sets a new world record TPC-H 3000 GB benchmark result.
- 2007: Oracle Corporation released Oracle Database 11g for Linux and for Microsoft Windows.
- 2013: Oracle Corporation released Oracle Database 12c for Linux (c stands for 'cloud'), Solaris and Windows.

**Oracle Database Editions**

Oracle database is available in five editions, each edition is suitable for different development and deployment scenarios. There are also several database options, packs, and other products that enhance the capabilities of Oracle database for specific purposes. Here is the list of Oracle database editions :

- Oracle Database Standard Edition One:
  - Delivers unprecedented ease of use, power, and performance for workgroup, department-level, and Web applications.
  - Includes all the facilities necessary to build business-critical applications from single-server environments for small business to highly distributed branch environments,
- Oracle Database Standard Edition : Delivers the unprecedented ease of use, power, and performance of Standard Edition One, with support for larger machines and clustering of services with Oracle Real Application Clusters (Oracle RAC).
- Oracle Database Enterprise Edition
  - Provides the performance, availability, scalability, and security required for mission-critical applications such as high-volume online transaction processing applications, query-intensive data warehouses, and demanding Internet applications.
  - Contains all of the components of Oracle Database, and can be further enhanced with the purchase of the options and packs
- Oracle Database Express Edition (Oracle Database XE):
  - It is an entry-level edition of Oracle Database that is quick to download, simple to install and manage, and is free to develop, deploy, and distribute.
  - It is easy to upgrade to the other editions of Oracle without costly and complex migrations.
  - It can be installed on any size machine with any number of CPUs, stores up to 11 GB of user data, using up to 1 GB of memory, and using only one CPU on the host machine.
  - Support is provided by an online forum.
- Oracle Database Personal Edition
  - This edition supports single-user development and deployment environments that require full compatibility with Oracle Database Standard Edition One.
  - Available on Windows and Linux platforms only.
  - The Management Packs are not included in Personal Edition.

Note: Oracle Database Standard Edition, and Oracle Database Enterprise Edition. Personal Edition includes all of the components that are included with Enterprise Edition, as well as all of the options that are available with Enterprise Edition, with the exception of the Oracle Real Application Clusters option, which cannot be used with Personal Edition.

**Oracle Database:**

Provides efficient, reliable, and secure data management for enterprise level, critical transactional applications, query-intensive data warehouses, and mixed workloads. Here are some important information on Oracle databases:

<table><thead><tr class="header"><th>Database</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>Oracle NoSQL Database</td><td>Provides multi-terabyte distributed key/value pair storage, enabling scalable throughput and performance.<br />
Oracle Database 12c Release 1 (12.1)</td></tr><tr class="even"><td>Oracle MySQL</td><td>Provides cost-effective delivery of reliable, high-performance, and scalable web and embedded applications through the world's most popular open source database.<br />
See <a href="https://www.w3resource.com/mysql/mysql-tutorials.php">here</a> for details.</td></tr><tr class="odd"><td>Oracle TimesTen In-Memory Database</td><td>A pure in-memory relational database that offers microsecond response time and extremely high throughput for online transaction processing (OLTP) applications. Applications connect and access the database using industry-standard interfaces. TimesTen also supports in-memory analytics and R programming.<br />
Oracle Database 11g Release 2 (11.2) Oracle Database 11g Release 1 (11.1)</td></tr><tr class="even"><td>Oracle Database Mobile Server</td><td>Provides secure connections of embedded devices and mobile applications to Oracle Database. Allows management applications, users, devices, and data on large deployments of mobile or remote devices.<br />
Release 11.3, Release 11.2, Release 11.1.0, Release 10.3, 10g (10.2.0) Oracle9i Lite.</td></tr><tr class="odd"><td>Oracle Berkeley DB</td><td>Provides an open source embeddable database library, allowing developers the choice of SQL, Key/Value, XML/XQuery or Java Object storage for their data model. At its core is a fast, scalable, transactional database engine with proven reliability and availability.<br />
Berkeley DB, Berkeley DB Java Edition. Berkeley DB XML.</td></tr><tr class="even"><td>Oracle Database Express Edition</td><td>An entry-level, small-footprint database based on the Oracle Database code base. It is free to develop, deploy, and distribute; fast to download; and simple to administer.<br />
11g Release 2 (11.2), 10g Release 2 (10.2).</td></tr><tr class="odd"><td>Java DB</td><td>Provides a fully transactional multiuser relational pure-Java database that can be embedded in data-rich applications or deployed as a stand-alone server. Its SQL and JDBC support ensure a path to an enterprise-level database when the need arises.</td></tr><tr class="even"><td>Oracle Rdb</td><td>Provides a full-featured, relational database management system for mission-critical applications on OpenVMS platforms.</td></tr><tr class="odd"><td>Oracle Essbase</td><td>Quickly leverage and integrate data from multiple existing data sources and distribute filtered information to end-user communities in the format that best meets the users's needs.</td></tr></tbody></table>

**Oracle Database Architecture**

An Oracle database is a collection of data treated as a unit. The purpose of a database is to store and retrieve related information. A database server is the key to solving the problems of information management. The database has logical structures and physical structures. Because the physical and logical structures are separate, the physical storage of data can be managed without affecting the access to logical storage structures. Here are some important information on Oracle databases architecture :

- Grid Architecture : The grid style of computing aims to solve some common problems with enterprise IT: the problem of application silos that lead to under utilized, dedicated hardware resources, the problem of monolithic, unwieldy systems that are expensive to maintain and difficult to change, and the problem of fragmented and disintegrated information that cannot be fully exploited by the enterprise as a whole.
- Application Architecture : There are two common ways to architect a database: client/server or multitier. As internet computing becomes more prevalent in computing environments, many database management systems are moving to a multitier environment.
- Physical Database Structures : Every Oracle database has one or more physical datafiles (contain all the database data). The data of logical database structures, such as tables and indexes, is physically stored in the datafiles allocated for a database. The characteristics of datafiles are :
  - A datafile can be associated with only one database.
  - Datafiles can have certain characteristics set to let them automatically extend when the database runs out of space.
  - One or more datafiles form a logical unit of database storage called a tablespace.
- Logical Database Structures : The logical storage structures, including data blocks, extents, and segments, enable Oracle to have fine-grained control of disk space use.
- Schemas and Common Schema Objects : A schema is a collection of database objects and is owned by a database user and has the same name as that user. Schema objects are the logical structures that directly refer to the database's data. It includes structures like tables, views, and indexes.
- Oracle Data Dictionary : Each Oracle database has a data dictionary and the data dictionary is a set of tables and views that are used as a read-only reference about the database. For example, a data dictionary stores information about both the logical and physical structure of the database.
- Oracle Instance : Every time a Oracle database is started, a system global area (SGA) is allocated and Oracle background processes are started. The combination of the background processes and memory buffers is called an Oracle instance.
- Accessing the Database : Oracle Net Services is Oracle's mechanism for interfacing with the communication protocols used by the networks that facilitate distributed processing and distributed databases.
- Oracle Utilities : Oracle provides several utilities for data transfer, data maintenance, and database administration, including Data Pump Export and Import, SQL\*Loader, and LogMiner.

**Oracle Database Features**

- Scalability and Performance
- Manageability Features
- Database Backup and Recovery
- High Availability
- Business Intelligence
- Content Management
- Security Features
- Data Integrity and Triggers
- Information Integration Features

**Oracle Database Application Development**

SQL and PL/SQL form the core of Oracle's application development stack. Most enterprise and web applications access databases using SQL. Enterprise Applications generate XML from SQL queries, and content-repositories are built on top of SQL tables. It is a simple, widely understood, unified data model and also used in many standalone applications. It is invoked directly from Java (JDBC), Oracle Call Interface (OCI), Oracle C++ Call Interface (OCCI), or XSU (XML SQL Utility). Stored packages, procedures, and triggers can all be written in PL/SQL or in Java.

You will get details from [here](https://docs.oracle.com/cd/B19306_01/server.102/b14220/intro.htm#i62358).

ID ='TUTORIALS' **Tutorial objectives**

- The tutorial is based on Oracle Database Express Edition 11g Release 2.
- We have used Oracle Database 11g Express Edition to test the example code.
- A short and concise description to help you to understand about the topic / Oracle command.
- The syntax of the Oracle command with descriptions of all the parameters used.
- Display of the actual table on which the Oracle command is being applied.
- Explanation of the code.
- The output of the Oracle command when executed form SQL command prompt.
- You may refer [Oracle Database Online Documentation 11g Release 2](https://docs.oracle.com/cd/E11882_01/nav/portal_4.htm) along with this tutorial.

We have a comprehensive, _[SQL Tutorial -2003 standard](/sql/tutorials.php)_ , which will help you to understand how to prepare queries to fetch data against various conditions.

**Note:** If you are not habituated with database management system your can learn from [here](https://w3resource.com/gallery/database-management-system).

**Next:** [Data Types](https://www.w3resource.com/oracle/oracle-data-types.php)



---

<span class="underline"></span>

- **New Content published on w3resource:**
- [Scala Programming Exercises, Practice, Solution](https://www.w3resource.com/scala-exercises/index.php)
- [Python Itertools exercises](https://www.w3resource.com/python-exercises/itertools/index.php)
- [Python Numpy exercises](https://www.w3resource.com/python-exercises/numpy/index.php)
- [Python GeoPy Package exercises](https://www.w3resource.com/python-exercises/geopy/index.php)
- [Python Pandas exercises](https://www.w3resource.com/python-exercises/pandas/index.php)
- [Python nltk exercises](https://www.w3resource.com/python-exercises/nltk/index.php)
- [Python BeautifulSoup exercises](https://www.w3resource.com/python-exercises/BeautifulSoup/index.php)
- [Form Template](https://www.w3resource.com/form-template/)
- [Composer - PHP Package Manager](https://www.w3resource.com/php/composer/a-gentle-introduction-to-composer.php)
- [PHPUnit - PHP Testing](https://www.w3resource.com/php/PHPUnit/a-gentle-introduction-to-unit-test-and-testing.php)
- [Laravel - PHP Framework](https://www.w3resource.com/laravel/laravel-tutorial.php)
- [Angular - JavaScript Framework](https://www.w3resource.com/angular/getting-started-with-angular.php)
- [React - JavaScript Library](https://www.w3resource.com/react/react-js-overview.php)
- [Vue - JavaScript Framework](https://www.w3resource.com/vue/installation.php)
- [Jest - JavaScript Testing Framework](https://www.w3resource.com/jest/jest-getting-started.php)

---

 

 
