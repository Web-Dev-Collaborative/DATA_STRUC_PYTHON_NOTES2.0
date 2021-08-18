 


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

# Pandas Exercises, Practice, Solution

Last update on March 18 2021 12:59:10 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Pandas

pandas is a Python package providing fast, flexible, and expressive data structures designed to make working with 'relationa' or 'labeled' data both easy and intuitive. It aims to be the fundamental high-level building block for doing practical, real world data analysis in Python.

**List of Pandas Exercises:**

- [Pandas Data Series \[ 40 exercises with solution \]](/python-exercises/pandas/index-data-series.php)
- [Pandas DataFrame \[ 81 exercises with solution \]](/python-exercises/pandas/index-dataframe.php)
- [Pandas Index \[ 26 exercises with solution \]](/python-exercises/pandas/index/index.php)
- [Pandas String and Regular Expression \[ 41 exercises with solution \]](/python-exercises/pandas/string/index.php)
- [Pandas Joining and merging DataFrames \[ 15 exercises with solution \]](/python-exercises/pandas/joining-and-merging/index.php)
- [Pandas Time Series \[ 20 exercises with solution \]](/python-exercises/pandas/time-series/index.php)
- [Pandas Filter \[ 27 exercises with solution \]](/python-exercises/pandas/filter/index.php)
- [Pandas Grouping and Aggregating \[ 32 exercises with solution \]](/python-exercises/pandas/groupby/index.php)
- [Pandas Handling Missing Values \[ 20 exercises with solution \]](/python-exercises/pandas/missing-values/index.php)
- [Pandas Style \[ 15 exercises with solution \]](/python-exercises/pandas/style/index.php)
- [Pandas Excel Data Analysis \[ 25 exercises with solution \]](/python-exercises/pandas/excel/index.php)
- [Pandas Pivot Table \[ 32 exercises with solution \]](/python-exercises/pandas/excel/index-pivot.php)
- [Pandas Datetime \[ 25 exercises with solution \]](/python-exercises/pandas/datetime/index.php)
- [Pandas Plotting \[ 19 exercises with solution \]](/python-exercises/pandas/plotting/index.php)
- [Pandas SQL database Queries \[ 24 exercises with solution \]](/python-exercises/pandas/sql/index.php)
- [Pandas IMDb Movies Queries \[ 17 exercises with solution \]](/python-exercises/pandas/movies/index.php)
- [Pandas Practice Set-1 \[ 65 exercises with solution \]](/python-exercises/pandas/practice-set1/index.php)
- More to come

<!-- -->

- [Python Projects Numbers: \[ 11 Projects with solution \]](https://www.w3resource.com/projects/python/index.php)
- [Python Web Programming: \[ 12 Projects with solution \]](https://www.w3resource.com/projects/python/web-programming/index.php)
- [Python Projects: Novel Coronavirus (COVID-19) \[ 14 Exercises with Solution \]](https://www.w3resource.com/python-exercises/project/covid-19/index.php)
- More to come

![Pandas Data structure](https://www.w3resource.com/w3r_images/pandas-data-structure.svg)

pandas is well suited for many different kinds of data:

- Tabular data with heterogeneously-typed columns, as in an SQL table or Excel spreadsheet
- Ordered and unordered (not necessarily fixed-frequency) time series data.
- Arbitrary matrix data with row and column labels
- Any other form of observational / statistical data sets.

Binary Installers: <https://pypi.org/project/pandas>

Source Repository: [http://github.com/pandas-dev/pandas](https://github.com/pandas-dev/pandas)

Issues & Ideas: <https://github.com/pandas-dev/pandas/issues>

**Pandas Basic commands:**

Imports the following commands to start:

    import pandas as pd
    import numpy as np

**Pandas version:**

    import pandas as pd
    print(pd.__version__)

**Key and Imports**

df

pandas DataFrame object

s

pandas Series object

**Create Dataframe:**

    import pandas as pd
    df = pd.DataFrame({'X':[78,85,96,80,86], 'Y':[84,94,89,83,86],'Z':[86,97,96,72,83]});
    print(df)

Sample Output:

        X   Y   Z
    0  78  84  86
    1  85  94  97
    2  96  89  96
    3  80  83  72
    4  86  86  83

**Create DataSeries:**

    import pandas as pd
    s = pd.Series([2, 4, 6, 8, 10])
    print(s)

Sample Output:

    0     2
    1     4
    2     6
    3     8
    4    10
    dtype: int64

<span class="underline"></span>

**Create Test Objects**

<table><tbody><tr class="odd"><td>pd.DataFrame(np.random.rand(20,5))</td><td>5 columns and 20 rows of random floats</td></tr><tr class="even"><td>pd.Series(my_list)</td><td>Create a series from an iterable my_list</td></tr><tr class="odd"><td>df.index = pd.date_range('1900/1/30', periods=df.shape[0])</td><td>Add a date index</td></tr></tbody></table>

**Viewing/Inspecting Data**

<table><tbody><tr class="odd"><td>df.head(n)</td><td>First n rows of the DataFrame</td></tr><tr class="even"><td>df.tail(n)</td><td>Last n rows of the DataFrame</td></tr><tr class="odd"><td>df.shape</td><td>Number of rows and columns</td></tr><tr class="even"><td>df.info()</td><td>Index, Datatype and Memory information</td></tr><tr class="odd"><td>df.describe()</td><td>Summary statistics for numerical columns</td></tr><tr class="even"><td>s.value_counts(dropna=False)</td><td>View unique values and counts</td></tr><tr class="odd"><td>df.apply(pd.Series.value_counts)</td><td>Unique values and counts for all columns</td></tr></tbody></table>

**Selection**

<table><tbody><tr class="odd"><td>df[col]</td><td>Returns column with label col as Series</td></tr><tr class="even"><td>df[[col1, col2]]</td><td>Returns columns as a new DataFrame</td></tr><tr class="odd"><td>s.iloc[0]</td><td>Selection by position</td></tr><tr class="even"><td>s.loc['index_one']</td><td>Selection by index</td></tr><tr class="odd"><td>df.iloc[0,:]</td><td>First row</td></tr><tr class="even"><td>df.iloc[0,0]</td><td>First element of first column</td></tr></tbody></table>

**Data Cleaning**

<table><tbody><tr class="odd"><td>df.columns = ['a','b','c']</td><td>Rename columns</td></tr><tr class="even"><td>pd.isnull()</td><td>Checks for null Values, Returns Boolean Arrray</td></tr><tr class="odd"><td>pd.notnull()</td><td>Opposite of pd.isnull()</td></tr><tr class="even"><td>df.dropna()</td><td>Drop all rows that contain null values</td></tr><tr class="odd"><td>df.dropna(axis=1)</td><td>Drop all columns that contain null values</td></tr><tr class="even"><td>df.dropna(axis=1,thresh=n)</td><td>Drop all rows have have less than n non null values</td></tr><tr class="odd"><td>df.fillna(x)</td><td>Replace all null values with x</td></tr><tr class="even"><td>s.fillna(s.mean())</td><td>Replace all null values with the mean</td></tr><tr class="odd"><td>s.astype(float)</td><td>Convert the datatype of the series to float</td></tr><tr class="even"><td>s.replace(1,'one')</td><td>Replace all values equal to 1 with 'one'</td></tr><tr class="odd"><td>s.replace([2,3],['two', 'three'])</td><td>Replace all 2 with 'two' and 3 with 'three'</td></tr><tr class="even"><td>df.rename(columns=lambda x: x + 1)</td><td>Mass renaming of columns</td></tr><tr class="odd"><td>df.rename(columns={'old_name': 'new_ name'})</td><td>Selective renaming</td></tr><tr class="even"><td>df.set_index('column_one')</td><td>Change the index</td></tr><tr class="odd"><td>df.rename(index=lambda x: x + 1)</td><td>Mass renaming of index</td></tr></tbody></table>

**Filter, Sort, and Groupby**

<table><tbody><tr class="odd"><td>df[df[col] &gt; 0.6]</td><td>Rows where the column col is greater than 0.6</td></tr><tr class="even"><td>df[(df[col] &gt; 0.6) &amp; (df[col] &lt; 0.8)]</td><td>Rows where 0.8 &gt; col &gt; 0.6</td></tr><tr class="odd"><td>df.sort_values(col1)</td><td>Sort values by col1 in ascending order</td></tr><tr class="even"><td>df.sort_values(col2,ascending=False)</td><td>Sort values by col2 in descending order.5</td></tr><tr class="odd"><td>df.sort_values([col1,col2],ascending=[True,False])</td><td>Sort values by col1 in ascending order then col2 in descending order</td></tr><tr class="even"><td>df.groupby(col)</td><td>Returns a groupby object for values from one column</td></tr><tr class="odd"><td>df.groupby([col1,col2])</td><td>Returns groupby object for values from multiple columns</td></tr><tr class="even"><td>df.groupby(col1)[col2]</td><td>Returns the mean of the values in col2, grouped by the values in col1</td></tr><tr class="odd"><td>df.pivot_table(index=col1,values=[col2,col3],aggfunc=mean)</td><td>Create a pivot table that groups by col1 and calculates the mean of col2 and col3</td></tr><tr class="even"><td>df.groupby(col1).agg(np.mean)</td><td>Find the average across all columns for every unique col1 group</td></tr><tr class="odd"><td>df.apply(np.mean)</td><td>Apply the function np.mean() across each column</td></tr><tr class="even"><td>nf.apply(np.max,axis=1)</td><td>Apply the function np.max() across each row</td></tr></tbody></table>

**Join/Combine**

<table><tbody><tr class="odd"><td>df1.append(df2)</td><td>Add the rows in df1 to the end of df2 (columns should be identical)</td></tr><tr class="even"><td>pd.concat([df1, df2],axis=1)</td><td>Add the columns in df1 to the end of df2 (rows should be identical)</td></tr><tr class="odd"><td>df1.join(df2,on=col1, how='inner')</td><td>SQL-style join the columns in df1 with the columns on df2 where the rows for col have identical values. The 'how' can be 'left', 'right', 'outer' or 'inner'</td></tr></tbody></table>

**Statistics**

<table><tbody><tr class="odd"><td>df.describe()</td><td>Summary statistics for numerical columns</td></tr><tr class="even"><td>df.mean()</td><td>Returns the mean of all columns</td></tr><tr class="odd"><td>df.corr()</td><td>Returns the correlation between columns in a DataFrame</td></tr><tr class="even"><td>df.count()</td><td>Returns the number of non-null values in each DataFrame column</td></tr><tr class="odd"><td>df.max()</td><td>Returns the highest value in each column</td></tr><tr class="even"><td>df.min()</td><td>Returns the lowest value in each column</td></tr><tr class="odd"><td>df.median()</td><td>Returns the median of each column</td></tr><tr class="even"><td>df.std()</td><td>Returns the standard deviation of each column</td></tr></tbody></table>

**Importing Data**

<table><tbody><tr class="odd"><td>pd.read_csv(filename)</td><td>From a CSV file</td></tr><tr class="even"><td>pd.read_table(filename)</td><td>From a delimited text file (like TSV)</td></tr><tr class="odd"><td>pd.read_excel(filename)</td><td>From an Excel file</td></tr><tr class="even"><td>pd.read_sql(query, connection_object)</td><td>Read from a SQL table/database</td></tr><tr class="odd"><td>pd.read_json(json_string)</td><td>Read from a JSON formatted string, URL or file.</td></tr><tr class="even"><td>pd.read_html(url)</td><td>Parses an html URL, string or file and extracts tables to a list of dataframes</td></tr><tr class="odd"><td>pd.read_clipboard()</td><td>Takes the contents of your clipboard and passes it to read_table()</td></tr><tr class="even"><td>pd.DataFrame(dict)</td><td>From a dict, keys for columns names, values for data as lists</td></tr></tbody></table>

**Exporting Data**

<table><tbody><tr class="odd"><td>df.to_csv(filename)</td><td>Write to a CSV file</td></tr><tr class="even"><td>df.to_excel(filename)</td><td>Write to an Excel file</td></tr><tr class="odd"><td>df.to_sql(table_name, connection_object)</td><td>Write to a SQL table</td></tr><tr class="even"><td>df.to_json(filename)</td><td>Write to a file in JSON format</td></tr></tbody></table>

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
