 


- [Home](/index.php)
- [MySQL Home](/mysql/mysql-tutorials.php)
- [MySQL Installation](/mysql/mysql-installation-on-linux-and-windows.php)
- [MySQL Administration Tools](/mysql/administration-tools/mysql-workbench-tutorial.php)
- [MySQL Connectors and APIs](/mysql/mysql-connectors-and-apis.php)
- [MySQL Storage Engines (table types)](/mysql/mysql-storage-engines.php)
- [MySQL Language Structure](/mysql/mysql-language-structure.php)
- [MySQL Data Types](/mysql/mysql-data-types.php)
- [Connecting to and disconnecting from MySQL](/mysql/mysql-connection.php)
- [MySQL CREATE DATABASES, TABLES](/mysql/creating-using-databases-tables/what-are-database-and-tables.php)
- [MySQL CONSTRAINT](/mysql/creating-table-advance/constraint.php)
- [MySQL CREATE INDEX](/mysql/creating-table-advance/create-index.php)
- [MySQL ALTER TABLE](/mysql/altering-table/altering-table.php)
- [MySQL Partitioning](/mysql/mysql-partition.php)
- [MySQL Insert](/mysql/inserting-updating-deleting/MySQL-insert-into-statement.php)
- [MySQL Update](/mysql/update-table/update-table.php)
- [MySQL Delete](/mysql/inserting-updating-deleting/mysql-delete.php)
- [MySQL basic select statement](/mysql/basic-select-statement/mysql-basic-select-statement.php)
- [MySQL UNION](/mysql/mysql-union.php)
- [Aggregate functions and grouping](/mysql/aggregate-functions-and-grouping/aggregate-functions-and-grouping-in-mysql.php)
- [MySQL functions and operators](/mysql/mysql-functions-and-operators.php)
- [Advance queries in MySQL](/mysql/advance-query-in-mysql/find-duplicate-data-mysql.php)
- [MySQL JOINS](/mysql/advance-query-in-mysql/mysql-joins.php)
- [MySQL Subqueries](/mysql/subqueries/index.php)
- [MySQL Procedure](/mysql/mysql-procedure.php)
- [MySQL Triggers](/mysql/mysql-triggers.php)
- [MySQL Transaction](/mysql/mysql-transaction.php)
- [MySQL Views](/mysql/mysql-views.php)
- [MySQL Security](/mysql/mysql-security.php)
- [MySQL Show Commands](/mysql/mysql-show.php)
- [MySQL DROP](/mysql/drop-table/drop-table.php)
- [Exporting and importing data between mysql and microsoft excel](/mysql/exporting-and-importing-data-between-mysql-and-microsoft-excel.php)
- [MySQL backup and restore](/mysql/mysql-backup-and-restore.php)
- [Working with PDO](/php/pdo/php-pdo.php)
- [MySQL Cluster Overview](/mysql/mysql-cluster-overview.php)
- [MySQL Questions Answers](/mysql/mysql-question-answer.php)
- [MySQL Exercises](/mysql-exercises/)

# MySQL Tutorial

Last update on February 26 2020 08:08:22 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Introduction

MySQL is (as of July 2013) the world's most widely used open-source relational database management system (RDBMS), enabling the cost-effective delivery of reliable, high-performance and scalable Web-based and embedded database applications. It is widely-used as the database component of LAMP (Linux, Apache, MySQL, Perl/PHP/Python) web application software stack.

MySQL was developed by [Michael Widenius](https://en.wikipedia.org/wiki/Michael_Widenius) and [David Axmark](https://en.wikipedia.org/wiki/David_Axmark) in 1994. Presently MySQL is maintained by Oracle (formerly Sun, formerly MySQL AB).

MySQL tutorial of w3resource is a comprehensive tutorial to learn MySQL(5.6). We have hundreds of examples covered, often with PHP code. This helps you to learn how to create PHP-MySQL based web applications.

Production Releases MySQL 5.6 : Latest General Availability (Production) release

**Table of Contents :**

- [What is MySQL?](#MYSQL)
- [MySQL Editions](#EDITIONS)
- [Who uses MySQL](#USES)
- [Supported platforms Third party tools & Front ends tools](#TOOLS)
- [Key features, relational database features of MySQL](#FEATURE)
- [w3resource MySQL tutorials](#TUTORIALS)
- [Database Management System](#DBMS)

**What is MySQL**

- MySQL is a database management system.
- MySQL databases are [relational](https://www.w3resource.com/sql/sql-basic/codd-12-rule-relation.php).
- MySQL software is Open Source.
- The MySQL Database Server is fast, reliable, scalable, and easy to use.
- MySQL Server works in client/server or embedded systems.
- Initial release : 23 May 1995
- Current stable release : 5.6.13 / 30 July 2013
- Written in : C, C++
- Operating system : Cross-platform
- Available in : English
- The license of MySQL is available under GNU General Public License (version 2) or proprietary EULA.
- MySQL reduces the Total Cost of Ownership (TCO)
  - Reducing database licensing costs by over 90%
  - Cutting systems downtime by 60%
  - Lowering hardware expenditure by 70%
  - Reducing administration, engineering and support costs by up to 50%

**MySQL Editions**

There are five types MySQL editions.

- MySQL Enterprise Edition : This edition includes the most comprehensive set of advanced features, management tools and technical support to achieve the highest levels of MySQL scalability, security, reliability, and uptime.
- MySQL Standard Edition : This edition enables you to deliver high-performance and scalable Online Transaction Processing (OLTP) applications. It provides the ease of use that has made MySQL famous along with industrial-strength performance and reliability.
- MySQL Classic Edition : This edition is the ideal embedded database for ISVs, OEMs, and VARs developing read-intensive applications using the MyISAM storage engine.
- MySQL Cluster CGE : MySQL Cluster is a scalable, real-time, ACID-compliant database, combining 5 x 9s availability and open source technology. With a distributed, multi-master architecture and no single point of failure, MySQL Cluster scales horizontally on commodity hardware accessed via SQL and NoSQL APIs.
- MySQL Embedded (OEM/ISV) : MySQL Database is a full-featured, zero-administration database that more than 3000 ISVs, OEMs, and VARs rely on to bring their products to market faster and make them more competitive.

**Who uses MySQL**

- Some of the most visited websites like Flickr, Facebook, Wikipedia, Google (not for search), YouTube.
- Content Management Systems like WordPress, phpBB, Drupal, Joomla, TYPO3, MODx.
- Last but not least, a large number of web developers across the world.

**MySQL supported platforms**

MySQL runs on

- Linux (RedHat, SUSE, Mandrake, Debian)
- Embedded Linux (MontaVista, LynuxWorks BlueCat)
- Unix (Solaris, HP-UX, AIX)
- BSD (Mac OS X, FreeBSD)
- Windows (Windows 2000, Windows NT)
- RTOS (QNX)

**MySQL supported third party tools**

**Drivers :**

- ODBC
- JDBC
- .NET
- C++

**Languages :**

- C
- C++
- C\#
- Java
- Delphi
- Visual Basic
- Perl
- Python
- PHP

**Development Tools :**

- Microsoft Visual Studio
- Borland Delphi and JBuilder
- Eclipse
- NetBeans

**Some of the widely used MySQL front ends (tools for managing MySQL)**

The MySQL GUI Tools Bundle is a cross-platform open source suite of desktop applications, building and manipulating the data within MySQL databases Development on the GUI Tools bundle has stopped, The GUI Tools bundle has been replaced by MySQL Workbench with the beta releases of [MySQL Workbench](https://www.w3resource.com/mysql/administration-tools/mysql-workbench-tutorial.php) 5.2. Currently, MySQL Workbench Team are working on Version 6.0. The first public beta, labeled version 6.0.2, was released on June 14, 2013.  
There are a lot of third-party free and proprietary graphical administration applications available that integrate with MySQL and users to work with the database. Here are some third-party tools for managing MySQL :

<table><thead><tr class="header"><th>Tools</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>phpMyAdmin</td><td>Third party, Free, Web-based</td></tr><tr class="even"><td>HeidiSQL</td><td>Third party, Free, For Windows</td></tr><tr class="odd"><td>Adminer</td><td>Third party, Free</td></tr><tr class="even"><td>DBEdit</td><td>Third party, Free</td></tr><tr class="odd"><td>dbForge GUI Tools</td><td>Third party, Free</td></tr><tr class="even"><td>Navicat</td><td>Third party, Commercial</td></tr><tr class="odd"><td>Maatkit</td><td>Third party, Command line, free</td></tr><tr class="even"><td>MySQL Sandbox</td><td>Third party, Command line, free</td></tr><tr class="odd"><td>SQLBuddy</td><td>A free Web-based front end, developed in PHP.</td></tr><tr class="even"><td>SQLyog</td><td>Commercial, but a free 'community' edition is available.</td></tr><tr class="odd"><td>Toad for MySQL</td><td>Third party, free from Quest Software</td></tr></tbody></table>

**Key features of MySQL**

- MySQL follows ANSI [SQL](https://www.w3resource.com/sql/tutorials.php) 99, the standard SQL.
- Cross Platform.
- Unicode support
- [ACID](https://www.w3resource.com/mongodb/nosql.php) compliance
- [Stored procedures](https://www.w3resource.com/mysql/mysql-procedure.php)
- [Triggers](https://www.w3resource.com/mysql/mysql-triggers.php)
- [Cursors](https://www.w3resource.com/mysql/mysql-procedure.php#MCR)
- [Views](https://www.w3resource.com/mysql/mysql-views.php)
- Information schema
- Strict mode (ensures MySQL does not truncate or otherwise modify data to conform to an underlying data type when an incompatible value is inserted into that type)
- [Independent storage engines](https://www.w3resource.com/mysql/mysql-storage-engines.php)
- [Transactions](https://www.w3resource.com/mysql/mysql-transaction.php) with the InnoDB and NDB Cluster storage engines; savepoints with InnoDB
- SSL support
- Query caching
- [Sub-SELECTs (i.e. nested SELECTs)](https://www.w3resource.com/mysql/subqueries/index.php)
- Replication support (i.e. Master-Master Replication & Master-Slave Replication) with one master per slave, many slaves per master
- [Full-text indexing and searching](https://www.w3resource.com/mysql/mysql-full-text-search-functions.php) using MyISAM engine
- Embedded database library
- Shared-nothing clustering through MySQL Cluster
- Support for hotbackup
- [Multiple storage engines](https://www.w3resource.com/mysql/mysql-storage-engines.php), allowing one to choose the one that is most effective for each table in the application
- Commit grouping, gathering multiple transactions from multiple connections together to increase the number of commits per second.

**Key relational database features supported by MySQL**

- High-performance
- Main-memory tables with disk-based tables
- Single-User and Multi-User
- Multi-Threaded
- Multi-Process
- SQL-92 and SQL-99
- ACID Transactions
- Referential Integrity
- Cascading Updates and Deletes
- Multi-table Joins
- Row-level Locking
- Online Hot Backup
- Replication
- Clustering
- BLOBs (Binary Large Objects)
- UDFs (User Defined Objects)
- OLTP (On-Line Transaction Processing)
- Unicode and Double-Byte character support
- Drivers for ODBC, JDBC, .NET and C++

**Tutorial objectives**

1. A short and concise description to help you to understand about the topic / MySQL command.

2. The syntax of the MySQL command with descriptions of all the parameters used.

3. Display of the actual table on which the MySQL command is being applied.

4. How that MySQL command can be executed with PHP.

5. Explanation of the code.

6. The output of the MySQL command when executed from windows command prompt.

7. Display of the output with PHP in a separate browser window.

8. After reading this largest third party online MySQL tutorial by w3resource, you will be able to install, manage and develop PHP-MySQL web applications by your own.

9. You may refer [MySQL Documentation](https://dev.mysql.com/doc/) along with this tutorial.

We have a comprehensive, _[SQL TUTORIAL -2003 standard](/sql/tutorials.php)_ , which will help you to understand how to prepare queries to fetch data against various conditions.

**Database Management System**

**_If you are not habituated with database management system your can learn from the following :_**

[![Database Management System](https://www.w3resource.com/w3r_images/dbms.png)](https://w3resource.com/gallery/database-management-system)

[You may download the structure and data of the MySQL tables we have used throughout our tutorials here](mysql-TABLE%20STRUCTURE-and-data.txt).

**Next:** [MySQL Installation](https://www.w3resource.com/mysql/mysql-installation-on-linux-and-windows.php)

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

<span class="underline"></span>

<span class="underline"></span>

<span class="underline"></span>

[This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.](https://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US)

©w3resource.com 2011-2021

- [Privacy](https://www.w3resource.com/privacy.php)
- [About](https://www.w3resource.com/about.php)
- [Contact](https://www.w3resource.com/contact.php)
- [Feedback](https://www.w3resource.com/feedback.php)
- [Advertise](https://www.w3resource.com/advertise.php)
