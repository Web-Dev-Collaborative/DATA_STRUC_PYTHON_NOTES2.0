 

 

- [Home](/index.php)
- [Python Home](/python/python-tutorial.php)
- [Python Exercises](/python-exercises/)
- ▼Python Pandas
- [Pandas Home](/python-exercises/pandas/index.php)
- [Pandas DataSeries](/python-exercises/pandas/index-data-series.php)
- [Pandas DataFrame](/python-exercises/pandas/index-dataframe.php)
- [Pandas Index](/python-exercises/pandas/index/index.php)
- [Pandas String and Regular Expression](/python-exercises/pandas/string/index.php)
- [Pandas Joining and merging DataFrames](/python-exercises/pandas/joining-and-merging/index.php)
- [Pandas Time Series](/python-exercises/pandas/time-series/index.php)
- [Pandas Filter](/python-exercises/pandas/filter/index.php)
- [Pandas Grouping and Aggregating](/python-exercises/pandas/groupby/index.php)
- [Pandas Missing Values](/python-exercises/pandas/missing-values/index.php)
- [Pandas Style](/python-exercises/pandas/style/index.php)
- [Excel](/python-exercises/pandas/excel/index.php)
- [Pivot Table](/python-exercises/pandas/excel/index-pivot.php)
- [Datetime](/python-exercises/pandas/datetime/index.php)
- [Plotting](/python-exercises/pandas/plotting/index.php)
- [Pandas SQL database Queries](/python-exercises/pandas/sql/index.php)
- [IMDb Movies Queries](/python-exercises/pandas/movies/index.php)
- [Practice-1](/python-exercises/pandas/practice-set1/index.php)
- [..More to come..]()

# Pandas SQL Query: Exercises, Practice, Solution

Last update on August 13 2020 09:43:40 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

\[_An editor is available at the bottom of the page to write and execute the scripts._\]

## Pandas HR database Query \[24 exercises with solution\]

[Click to see Structure of HR database](#HRdatabase)

**1.** Write a Pandas program to display all the records of REGIONS file. [Go to the editor](#EDITOR)

**REGION.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-1.php)

**2.** Write a Pandas program to display all the location id from locations file. [Go to the editor](#EDITOR)

**LOCATIONS.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-2.php)

**3.** Write a Pandas program to extract first 7 records from employees file. [Go to the editor](#EDITOR)

**EMPLOYEES.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-3.php)

**4.** Write a Pandas program to select distinct department id from employees file. [Go to the editor](#EDITOR)

**DEPARTMENTS.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-4.php)

**5.** Write a Pandas program to display the first and last name, and department number for all employees whose last name is "McEwen". [Go to the editor](#EDITOR)

**EMPLOYEES.csv**

**DEPARTMENTS.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-5.php)

**6.** Write a Pandas program to display the first, last name, salary and department number for those employees whose first name starts with the letter 'S'. [Go to the editor](#EDITOR)

**EMPLOYEES.csv**

**DEPARTMENTS.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-6.php)

**7.** Write a Pandas program to display the first, last name, salary and department number for those employees whose first name does not contain the letter 'M'. [Go to the editor](#EDITOR)

**DEPARTMENTS.csv**

**EMPLOYEES.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-7.php)

**8.** Write a Pandas program to display the first name, last name, salary and department number in ascending order by department number. [Go to the editor](#EDITOR)

**DEPARTMENTS.csv**

**EMPLOYEES.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-8.php)

**9.** Write a Pandas program to display the first name, last name, salary and department number in descending order by first name. [Go to the editor](#EDITOR)

**DEPARTMENTS.csv**

**EMPLOYEES.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-9.php)

**10.** Write a Pandas program to display the first name, last name, salary and manger id where manager ids are null. [Go to the editor](#EDITOR)

**EMPLOYEES.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-10.php)

**11.** Write a Pandas program to display the first name, last name, salary and manger id where manager ids are not null. [Go to the editor](#EDITOR)

**EMPLOYEES.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-11.php)

**12.** Write a Pandas program to create and display a boolean series, where True for not null and False for null values or missing values in state_province column of locations file. [Go to the editor](#EDITOR)

**LOCATIONS.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-12.php)

**13.** Write a Pandas program to create a boolean series selecting rows with one or more nulls from locations file. [Go to the editor](#EDITOR)

**LOCATIONS.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-13.php)

**14.** Write a Pandas program to count the NaN values of all the columns of locations file. [Go to the editor](#EDITOR)

**LOCATIONS.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-14.php)

**15.** Write a Pandas program to display the first name, last name, salary and department number for those employees whose first name ends with the letter 'm'. [Go to the editor](#EDITOR)

**EMPLOYEES.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-15.php)

**16.** Write a Pandas program to display the first name, last name, salary and department number for those employees whose first name ends with the letter 'd' or 'n' or 's' and also arrange the result in descending order by department id. [Go to the editor](#EDITOR)

**EMPLOYEES.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-16.php)

**17.** Write a Pandas program to display the first name, last name, salary and department number for employees who works either in department 70 or 90. [Go to the editor](#EDITOR)

**EMPLOYEES.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-17.php)

**18.** Write a Pandas program to display the first name, last name, salary and department number for those employees whose managers are hold the ID 120, 103 or 145. [Go to the editor](#EDITOR)

**EMPLOYEES.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-18.php)

**19.** Write a Pandas program to display the first, last name, salary and department number for those employees who holds a letter n as a 3rd character in their first name. [Go to the editor](#EDITOR)

**EMPLOYEES.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-19.php)

**20.** Write a Pandas program to display the first name, job id, salary and department for those employees not working in the departments 50,30 and 80. [Go to the editor](#EDITOR)

**EMPLOYEES.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-20.php)

**21.** Write a Pandas program to display the ID for those employees who did two or more jobs in the past. [Go to the editor](#EDITOR)

**JOB_HISTORY.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-21.php)

**22.** Write a Pandas program to calculate minimum, maximum and mean salary from employees file. [Go to the editor](#EDITOR)

**EMPLOYEES.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-22.php)

**23.** Write a Pandas program to display the details of jobs in descending sequence on job title. [Go to the editor](#EDITOR)

**JOBS.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-23.php)

**24.** Write a Pandas program to display the first and last name and date of joining of the employees who is either Sales Representative or Sales Man. [Go to the editor](#EDITOR)

**EMPLOYEES.csv**

[Click me to see the sample solution](python-pandas-hr-database-queries-exercise-24.php)

**Python Code Editor:**

Structure of HR database :

![HR database](https://www.w3resource.com/w3r_images/database-model-hr-new.gif)

\[ Want to contribute to Python Pandas exercises? Send your code (attached with a .zip file) to us at w3resource\[at\]yahoo\[dot\]com. Please avoid copyrighted materials.\]

Test your Python skills with w3resource's [quiz](https://www.w3resource.com/quizzes/python/index.php)

---

<span class="underline"></span>

## Python: Tips of the Day

**Join Strings in an Iterable:**

    >>> words = ('Hello', 'Python', 'Programmers')
    >>> '!'.join(words)
    'Hello!Python!Programmers'
    >>> words_dict = {0: 'zero', 1: 'one', 2: 'two', 3: 'three'}
    >>> '&'.join(words_dict.values())
    'zero&one&two&three'

---

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
