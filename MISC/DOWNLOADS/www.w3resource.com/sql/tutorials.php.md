 

 

- [Home](/index.php)
- [SQL Home](/sql/tutorials.php)
- [SQL Data Types](/sql/data-type.php)
- [SQL Syntax](/sql/sql-syntax.php)
- [Codd's 12-Rule Relational Database Definition](/sql/sql-basic/codd-12-rule-relation.php)
- [The Components of a Table](/sql/sql-basic/the-components-of-a-table.php)
- [Create/Alter/Drop Schema](/sql/sql-basic/create-schema.php)
- [Create/Alter Database](/sql/sql-basic/basic-create-database.php)
- [Create Table](/sql/creating-and-maintaining-tables/sql-create-table.php)
- [Primary Key](/sql/creating-and-maintaining-tables/primary-key.php)
- [Foreign Key](/sql/creating-and-maintaining-tables/foreign-key.php)
- [Constraints](/sql/creating-and-maintaining-tables/creating-table-constraint.php)
- [Alter Table](/sql/creating-and-maintaining-tables/sql-alter-table.php)
- [Basic Select Statement](/sql/select-statement/sql-select-statement.php)
- [Where Clause](/sql/where-clause.php)
- [SQL Operators](/sql/operators.php)
- [SQL Functions](/sql/sql-functions.php)
- [Order By](/sql/order-by.php)
- [Group By](/sql/group-by.php)
- [Having](/sql/having-clause/sql-having-clause.php)
- [Distinct](/sql/select-statement/queries-with-distinct.php)
- [Insert Statement](/sql/insert-statement/sql-insert-command.php)
- [Update Statement](/sql/update-statement/sql-update-command.php)
- [Delete Statement](/sql/delete-statement/deleting-records-from-a-table.php)
- [SQL Joins](/sql/joins/sql-joins.php)
- [Subqueries](/sql/subqueries/understanding-sql-subqueries.php)
- [Union](/sql/sql-union.php)
- [Create Alter View](/sql/creating-views/creating-view.php)
- [Update View](/sql/update-views/sql-update-views.php)
- [Create Alter Drop Index](/sql/creating-index/sql-creating-index.php)
- [SQL Drop](/sql/drop/sql-drop-statement.php)
- [SQL Procedure - Create, Alter, Drop](/sql/sql-procedure.php)
- [Controlling Transactions](/sql/controlling-transactions.php)
- [Database Security](/sql/database-security/create-users.php)
- [Advanced SQL Topics](/sql/advance-sql-topics/putting-text-in-query-output.php)
- [SQL Dual table](/sql/sql-dual-table.php)
- [SQL Injection](/sql/sql-injection/sql-injection.php)
- [SQL Question Answer](/sql/question-answer.php)
- [More..](https://www.w3resource.com/)
- []()

# SQL Tutorial

Last update on February 26 2020 08:07:43 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Learn Structured Query Language

SQL Tutorial of w3resource aims to meet the need of a beginner to learn SQL without any prior experience. Having said that, it by no means superficial. On the contrary, it offers all the material one needs to successfully build a database and write SQL queries ranging from a one liner like "SELECT \* FROM table_name" to fairly non-trivial ones taking multiple tables in the account.  
At the outset, we need to tell you, this _SQL Tutorial_ adheres to SQL:2003 standard of ANSI. This is important because if you are learning something as important as SQL, there is no point learning if you don't know which version or standard you are studying.  
We have diligently added as many features as possible while creating this _SQL Tutorial_. There is Syntax, Query, Explanation of a query and pictorial presentation to help you understand concepts better. On top of these, we have hundreds of [Exercises](https://www.w3resource.com/sql-exercises) with an online editor, [quizzes](https://w3resource.com/w3skills/sql-beginner/). So you may practice concepts and queries without leaving your browser.

**Contents:**

- [Introduction](#INTRODUC)
- [What is SQL?](#SQL)
- [History of SQL](#HISTSQL)
- [SQL Standard Revisions](#SQLSTANDARD)
- [Constructs of SQL](#SQLCONS)
- [Some Key terms of SQL 2003](#SQLKEYTERMS)
- [Database and Table Manipulation](#SQLDBASE)
- [Tutorial objectives](#SQLOBJ)
- [Summary](#SQLSUMMARY)

## Introduction

In June 1970 Dr. E. F. Codd published the paper, "A Relational Model of Data for Large Shared Data Banks" in the Association of Computer Machinery (ACM) journal. Codd's model is now accepted as the definitive model for relational database management systems (RDBMS).  
Using Codd's model the language, Structured English Query Language (SEQUEL) was developed by IBM Corporation in San Jose Research Center. The language was first called SEQUEL but Official pronunciation of SQL is ESS QUE ELL.  
In 1979 Oracle introduced the first commercially available implementation of SQL. Later other players join in the race. Today, SQL is accepted as the standard RDBMS language.

**Note:** _If you are not habituated with database management system your can learn from_ **_[here](https://www.w3resource.com/slides/database-management-system.php)._**

## What is SQL?

SQL stands for Structured Query Language and it is an ANSI (American National Standards Institute) standard computer language for accessing and manipulating database systems. It is used for managing data in relational database management system which stores data in the form of tables and relationship between data is also stored in the form of tables. SQL statements are used to retrieve and update data in a database.  
SQL works with database programs like DB2, [MySQL](https://www.w3resource.com/mysql/mysql-tutorials.php), [PostgreSQL](https://w3resource.com/PostgreSQL/tutorial.php), [Oracle](https://www.w3resource.com/oracle/index.php), [SQLite](https://www.w3resource.com/sqlite/), SQL Server, Sybase, MS Access and much more. There are many different versions of the SQL language, but to be in compliance with the ANSI standard, they support the major keyword such as SELECT, UPDATE, DELETE, INSERT, WHERE, and others. The following picture shows the communicating with an RDBMS using SQL.

![communicating with RDBMS using SQL](https://www.w3resource.com/w3r_images/sql-works-with-rdbms.gif)

## History of SQL

Here is the year wise development history :

- 1970 E.F. Codd publishes [Definition of Relational Model](https://www.w3resource.com/sql/sql-basic/codd-12-rule-relation.php)
- 1975 Initial version of SQL Implemented (D. Chamberlin)
- IBM experimental version: System R (1977) w/revised SQL
- IBM commercial versions: SQL/DS and DB2 (the early 1980s)
- Oracle introduces commercial version before IBM's SQL/DS
- INGRES 1981 & 85
- ShareBase 1982 & 86
- Data General (1984)
- Sybase (1986)
- by 1992 over 100 SQL products

## SQL Standard Revisions

- SEQUEL/Original SQL - 1974
- SQL/86 - Ratification and acceptance of a formal SQL standard by ANSI (American National Standards Institute) and ISO (International Standards Organization).
- SQL/92 - Major revision (ISO 9075), Entry Level SQL-92 adopted as FIPS 127-2.
- SQL/99 - Added regular expression matching, recursive queries (e.g. transitive closure), triggers, support for procedural and control-of-flow statements, non-scalar types, and some object-oriented features (e.g. structured types).
- SQL/2003 - Introduced XML-related features (SQL/XML), Window functions, Auto generation.
- SQL/2006 - Lots of XML Support for XQuery, an XML-SQL interface standard.
- SQL/2008 - Adds INSTEAD OF triggers, TRUNCATE statement.

## Constructs of SQL

Here is list of the key elements of SQL along with a brief description:

- Queries : Retrieves data against some criteria.
- Statements : Controls transactions, program flow, connections, sessions, or diagnostics.
- Clauses : Components of Queries and Statements.
- Expressions : Combination of symbols and operators and a key part of the SQL statements.
- Predicates : Specifies conditions.

## Some Key terms of SQL 2003

To know the key terms of SQL 2003, you should know the statement classes of both SQL 92 AND SQL 2003, since both are used to refer SQL features and statements.  
In SQL 92, SQL statements are grouped into following categories:

- **Data manipulation :** The Data Manipulation Language (DML) is the subset of SQL which is used to add, update and delete data.
- **Data definition :** The Data Definition Language (DDL) is used to manage table and index structure. CREATE, ALTER, RENAME, DROP and TRUNCATE statements are to name a few data definition elements.
- **Data control :** The Data Control Language (DCL) is used to set permissions to users and groups of users whether they can access and manipulate data.
- **Transaction :** A transaction contains a number of SQL statements. After the transaction begins, all of the SQL statements are executed and at the end of the transaction, permanent changes are made in the associated tables.
- **Procedure :** Using a stored procedure, a method is created which contains source code for performing repetitive tasks.

In SQL 2003 statements are grouped into seven categories which are called classes. See the following table :

<table><thead><tr class="header"><th>Class</th><th>Example</th></tr></thead><tbody><tr class="odd"><td>SQL data statements</td><td>SELECT, INSERT, UPDATE, DELETE</td></tr><tr class="even"><td>SQL connection statements</td><td>CONNECT, DISCONNECT</td></tr><tr class="odd"><td>SQL schema statements</td><td>ALTER, CREATE, DROP</td></tr><tr class="even"><td>SQL control statements</td><td>CALL, RETURN</td></tr><tr class="odd"><td>SQL diagnostic statements</td><td>GET DIAGNOSTICS</td></tr><tr class="even"><td>SQL session statements</td><td>SET CONSTRAINT</td></tr><tr class="odd"><td>SQL transaction statements</td><td>COMMIT, ROLLBACK</td></tr></tbody></table>

**PL-SQL, TSQL and PL/pgSQL**

- PL/SQL - Procedural Language/Structured Query Language ( PL/SQL) is Oracle Corporation's procedural extension language for SQL and the Oracle relational database.
- TSQL - Transact-SQL (T-SQL) is Microsoft's and Sybase's proprietary extension to SQL.
- PL/pgSQL - Procedural Language/PostgreSQL(PL/pgSQL) is a procedural programming language supported by the PostgreSQL.

## Database and Table Manipulation

<table><thead><tr class="header"><th>Command</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>CREATE DATABASE database_name</td><td>Create a database</td></tr><tr class="even"><td>DROP DATABASE database_name</td><td>Delete a database</td></tr><tr class="odd"><td>CREATE TABLE "table_name" ("column_1" "column_1_data_type", "column_2" "column_2_data_type", ... )</td><td>Create a table in a database.</td></tr><tr class="even"><td>ALTER TABLE table_name ADD column_name column_datatype</td><td>Add columns in an existing table.</td></tr><tr class="odd"><td>ALTER TABLE table_name DDROP column_name column_datatype</td><td>Delete columns in an existing table.</td></tr><tr class="even"><td>DROP TABLE table_name</td><td>Delete a table.</td></tr></tbody></table>

## Data Types:

<table><thead><tr class="header"><th><strong>Data Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr class="odd"><td>CHARACTER(n)</td><td>Character string, fixed length n.</td></tr><tr class="even"><td>CHARACTER VARYING(n) or<br />
VARCHAR(n)</td><td>Variable length character string, maximum length n.</td></tr><tr class="odd"><td>BINARY(n)</td><td>Fixed-length binary string, maximum length n.</td></tr><tr class="even"><td>BOOLEAN</td><td>Stores truth values - either TRUE or FALSE.</td></tr><tr class="odd"><td>BINARY VARYING(n) or<br />
VARBINARY(n)</td><td>Variable length binary string, maximum length n.</td></tr><tr class="even"><td>INTEGER(p)</td><td>Integer numerical, precision p.</td></tr><tr class="odd"><td>SMALLINT</td><td>Integer numerical precision 5.</td></tr><tr class="even"><td>INTEGER</td><td>Integer numerical, precision 10.</td></tr><tr class="odd"><td>BIGINT</td><td>Integer numerical, precision 19.</td></tr><tr class="even"><td>DECIMAL(p, s)</td><td>Exact numerical, precision p, scale s.</td></tr><tr class="odd"><td>NUMERIC(p, s)</td><td>Exact numerical,<br />
precision p, scale s.<br />
(Same as DECIMAL ).</td></tr><tr class="even"><td>FLOAT(p)</td><td>Approximate numerical, mantissa precision p.</td></tr><tr class="odd"><td>REAL</td><td>Approximate numerical<br />
mantissa precision 7.</td></tr><tr class="even"><td>FLOAT</td><td>Approximate numerical<br />
mantissa precision 16.</td></tr><tr class="odd"><td>DOUBLE PRECISION</td><td>Approximate numerical<br />
mantissa precision 16.</td></tr><tr class="even"><td>DATE<br />
TIME<br />
TIMESTAMP</td><td>Composed of a number of integer fields, representing an absolute point in time, depending on sub-type.</td></tr><tr class="odd"><td>INTERVAL</td><td>Composed of a number of integer fields, representing a period of time, depending on the type of interval.</td></tr><tr class="even"><td>COLLECTION  (ARRAY, MULTISET)</td><td>ARRAY(offered in SQL99) is a set-length and ordered the collection of elements.</td></tr><tr class="odd"><td>XML</td><td>Stores XML data. It can be used wherever a SQL data type is allowed, such as a column of a table.</td></tr></tbody></table>

## Index Manipulation:

<table><thead><tr class="header"><th>Command</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>CREATE INDEX index_name ON table_name (column_name_1, column_name_2, ...)</td><td>Create a simple index.</td></tr><tr class="even"><td>CREATE UNIQUE INDEX index_name ON table_name (column_name_1, column_name_2, ...)</td><td>Create a unique index.</td></tr><tr class="odd"><td>DROP INDEX table_name.index_name</td><td>Drop a index.</td></tr></tbody></table>

## SQL Operators:

<table><thead><tr class="header"><th>Operators</th><th><strong>Description</strong></th></tr></thead><tbody><tr class="odd"><td>SQL Arithmetic Operator</td><td>Arithmetic operators are addition(+), subtraction(-), multiplication(*) and division(/). The + and - operators can also be used in date arithmetic.</td></tr><tr class="even"><td>SQL Comparison Operator</td><td>A comparison (or relational) operator is a mathematical symbol which is used to compare two values.</td></tr><tr class="odd"><td>SQL Assignment operator</td><td>In SQL the assignment operator ( = ) assigns a value to a variable or of a column or field of a table.</td></tr><tr class="even"><td>SQL Bitwise Operator</td><td>The bitwise operators are &amp; ( Bitwise AND ), | ( Bitwise OR ) and ^ ( Bitwise Exclusive OR or XOR ). The valid datatypes for bitwise operators are BINARY, BIT, INT, SMALLINT, TINYINT, and VARBINARY.</td></tr><tr class="odd"><td>SQL Logical Operator</td><td>The Logical operators are those that are true or false. The logical operators are AND , OR, NOT, IN, BETWEEN, ANY, ALL, SOME, EXISTS, and LIKE.</td></tr><tr class="even"><td>SQL Unary Operator</td><td>The SQL Unary operators perform such an operation which contain only one expression of any of the datatypes in the numeric datatype category.</td></tr></tbody></table>

## Insert, Update and Delete:

<table><thead><tr class="header"><th>Command</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>INSERT INTO table_name VALUES (value_1, value_2,....)<br />
INSERT INTO table_name (column1, column2,...) VALUES (value_1, value_2,....)<br />
</td><td>Insert new rows into a table.</td></tr><tr class="even"><td>UPDATE table_name SET column_name_1 = new_value_1, column_name_2 = new_value_2 WHERE column_name = some_value</td><td>Update one or several columns in rows.</td></tr><tr class="odd"><td>DELETE FROM table_name WHERE column_name = some_value</td><td>Delete rows in a table.</td></tr></tbody></table>

## Select:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Command</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><p>SELECT column_name(s) FROM table_name<br />
<br />
</p></td><td>Select data from a table.</td></tr><tr class="even"><td>SELECT * FROM table_name</td><td>Select all data from a table.</td></tr><tr class="odd"><td>SELECT DISTINCT column_name(s) FROM table_name</td><td>Select only distinct (different) data from a table.</td></tr><tr class="even"><td>SELECT column_name(s) FROM table_name WHERE column operator value AND column operator value OR column operator value AND (... OR ...) ...</td><td>Select only certain data from a table.</td></tr><tr class="odd"><td>SELECT column_name(s) FROM table_name WHERE column_name IN (value1, value2, ...)</td><td>The IN operator may be used if you know the exact value you want to return for at least one of the columns.</td></tr><tr class="even"><td>SELECT column_name(s) FROM table_name ORDER BY row_1, row_2 DESC, row_3 ASC, ...</td><td>Select data from a table with sort the rows.</td></tr><tr class="odd"><td>SELECT column_1, ..., SUM(group_column_name) FROM table_name GROUP BY group_column_name</td><td>The GROUP BY clause is used with the SELECT statement to make a group of rows based on the values of a specific column or expression. The SQL AGGREGATE function can be used to get summary information for every group and these are applied to individual group.</td></tr><tr class="even"><td>SELECT column_name(s) INTO new_table_name FROM source_table_name WHERE query</td><td>Select data from table(S) and insert it into another table.</td></tr><tr class="odd"><td>SELECT column_name(s) IN external_database_name FROM source_table_name WHERE query</td><td>Select data from table(S) and insert it in another database.</td></tr></tbody></table>

## Functions:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>SQL functions</th><th><strong>Description</strong></th></tr></thead><tbody><tr class="odd"><td>Aggregate Function</td><td>This function can produce a single value for an entire group or table. Some Aggregate functions are -<br />
<br />
<ul><li>SQL Count function</li><li>SQL Sum function</li><li>SQL Avg function</li><li>SQL Max function</li><li>SQL Min function</li></ul></td></tr><tr class="even"><td>Arithmetic Function</td><td>A mathematical function executes a mathematical operation usually based on input values that are provided as arguments, and return a numeric value as the result of the operation.<br />
Some Arithmetic functions are -<br />
<br />
<ul><li>abs()</li><li>ceil()</li><li>floor()</li><li>exp()</li><li>ln()</li><li>mod()</li><li>power()</li><li>sqrt()</li></ul></td></tr><tr class="odd"><td>Character Function</td><td>A character or string function is a function which takes one or more characters or numbers as parameters and returns a character value. Some Character functions are -<br />
<br />
<ul><li>lower()</li><li>upper()</li><li>trim()</li><li>translate()</li></ul></td></tr></tbody></table>

## Joins:

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>SQL EQUI JOIN</td><td>The SQL EQUI JOIN is a simple SQL join uses the equal sign(=) as the comparison operator for the condition. It has two types - SQL Outer join and SQL Inner join.<br />
SQL INNER JOIN returns all rows from tables where the key record of one table is equal to the key records of another table.<br />
SQL OUTER JOIN returns all rows from one table and only those rows from the secondary table where the joined condition is satisfying i.e. the columns are equal in both tables.</td></tr><tr class="even"><td>SQL NON EQUI JOIN</td><td>The SQL NON EQUI JOIN is a join uses comparison operator other than the equal sign like &gt;, &lt;, &gt;=, &lt;= with the condition.</td></tr></tbody></table>

## Union:

<table><thead><tr class="header"><th>Command</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>SQL_Statement_1 UNION SQL_Statement_2</td><td>Select all different values from SQL_Statement_1 and SQL_Statement_2</td></tr><tr class="even"><td>SQL_Statement_1 UNION ALL SQL_Statement_2</td><td>Select all values from SQL_Statement_1 and SQL_Statement_2</td></tr></tbody></table>

## View:

<table><thead><tr class="header"><th>Command</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>CREATE VIEW view_name AS SELECT column_name(s) FROM table_name WHERE condition</td><td>Create a virtual table based on the result-set of a SELECT statement.</td></tr></tbody></table>

## Tutorial objectives

SQL tutorial of w3resource is a comprehensive tutorial to learn SQL. We have followed SQL:2003 standard of ANSI. There are hundreds of examples given in this tutorial. Output are shown with Oracle 10G/MySQL. Often outputs are followed by a pictorial presentation and explanation for better understanding. You will hardly find a vendor neutral SQL tutorial covering SQL in such great detail. Following is a list of the features we have included in our tutorials :

- A simple but thorough description.
- SQL Syntax.
- Description of the Parameters used in the SQL command.
- Sample table with data.
- SQL command.
- Explanation of the SQL command.
- The output of the SQL command.
- Model database. [](/sql/sql-table.php)
- Online practice.

## Summary

- SQL stands for Structured Query Language.
- SQL is easy to learn.
- SQL is an ANSI standard computer language.
- SQL allows us to access a database.
- SQL use to access and manipulate data in various databases like Oracle, Sybase, Microsoft SQL Server, DB2, Access, MySQL, PostgreSQL and other database systems.
- SQL execute queries against a database.
- SQL can insert new records into a database.
- SQL can update records in a database.
- SQL can delete records from a database.

**Practice SQL Exercises**

[SQL Exercises, Practice, Solution](/sql-exercises/index.php)

[SQL Retrieve data from tables \[33 Exercises\]](/sql-exercises/sql-retrieve-from-table.php)

[SQL Boolean and Relational operators \[12 Exercises\]](/sql-exercises/sql-boolean-operators.php)

[SQL Wildcard and Special operators \[22 Exercises\]](/sql-exercises/sql-wildcard-special-operators.php)

[SQL Aggregate Functions \[25 Exercises\]](/sql-exercises/sql-aggregate-functions.php)

[SQL Formatting query output \[10 Exercises\]](/sql-exercises/sql-fromatting-output-exercises.php)

[SQL Quering on Multiple Tables \[7 Exercises\]](s/sql-exercises/ql-exercises-quering-on-multiple-table.php)

[FILTERING and SORTING on HR Database \[38 Exercises\]](/sql-exercises/sorting-and-filtering-hr/index.php)

SQL JOINS

- [SQL JOINS \[29 Exercises\]](/sql-exercises/sql-joins-exercises.php)
- [SQL JOINS on HR Database \[27 Exercises\]](/sql-exercises/joins-hr/index.php)

SQL SUBQUERIES

- [SQL SUBQUERIES \[39 Exercises\]](/sql-exercises/subqueries/index.php)
- [SQL SUBQUERIES on HR Database \[55 Exercises\]](/sql-exercises/sql-subqueries-exercises.php)

[SQL Union\[9 Exercises\]](/sql-exercises/union/sql-union.php)

[SQL View\[16 Exercises\]](/sql-exercises/view/sql-view.php)

[SQL User Account Management \[16 Exercise\]](/sql-exercises/sql-user-management.php)

Movie Database

- [BASIC queries on movie Database \[10 Exercises\]](/sql-exercises/movie-database-exercise/basic-exercises-on-movie-database.php)
- [SUBQUERIES on movie Database \[16 Exercises\]](/sql-exercises/movie-database-exercise/subqueries-exercises-on-movie-database.php)
- [JOINS on movie Database \[24 Exercises\]](/sql-exercises/movie-database-exercise/joins-exercises-on-movie-database.php)

Soccer Database

- [Introduction](/sql-exercises/soccer-database-exercise/index.php)
- [BASIC queries on soccer Database \[29 Exercises\]](/sql-exercises/soccer-database-exercise/basic-exercises-on-soccer-database.php)
- [SUBQUERIES on soccer Database \[33 Exercises\]](/sql-exercises/soccer-database-exercise/subqueries-exercises-on-soccer-database.php)

<!-- -->

- [JOINS queries on soccer Database \[61 Exercises\]](/sql-exercises/soccer-database-exercise/joins-exercises-on-soccer-database.php)

Hospital Database

- [Introduction](/sql-exercises/hospital-database-exercise/index.php)
- [BASIC, SUBQUERIES, and JOINS \[39 Exercises\]](/sql-exercises/hospital-database-exercise/sql-exercise-on-hospital-database.php)

Employee Database

- [BASIC queries on employee Database \[115 Exercises\]](/sql-exercises/employee-database-exercise/index.php)
- [SUBQUERIES on employee Database \[77 Exercises\]](/sql-exercises/employee-database-exercise/subqueries-exercises-on-employee-database.php)

More to come!

**Want to improve the above article? Contribute your Notes/Comments/Examples through Disqus.**

**Next:** [SQL Data Types](https://www.w3resource.com/sql/data-type.php)

---

<span class="underline"></span>

---

 

---

<span class="underline"></span>

<span class="underline"></span>

<span class="underline"></span>

 
