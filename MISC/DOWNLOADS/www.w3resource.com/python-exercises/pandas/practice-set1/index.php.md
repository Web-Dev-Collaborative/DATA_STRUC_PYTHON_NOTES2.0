 

 

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

# Pandas Practice Set-1: Exercises, Practice, Solution

Last update on September 16 2020 13:34:28 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

\[_An editor is available at the bottom of the page to write and execute the scripts._\]

## Pandas Practice Set-1 \[65 exercises with solution\]

**Diamonds:**

This classic dataset contains the prices and other attributes of almost 54,000 diamonds. It's a great dataset for beginners learning to work with data analysis and visualization.

![Pandas Dataset Exercises](https://www.w3resource.com/w3r_images/diamond-dataset.png)

**Content**

<table><thead><tr class="header"><th>Column Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>price</td><td>price in US dollars (\$326--\$18,823)</td></tr><tr class="even"><td>carat</td><td>weight of the diamond (0.2--5.01)</td></tr><tr class="odd"><td>cut</td><td>quality of the cut (Fair, Good, Very Good, Premium, Ideal)</td></tr><tr class="even"><td>color</td><td>diamond colour, from J (worst) to D (best)</td></tr><tr class="odd"><td>clarity</td><td>a measurement of how clear the diamond is (I1 (worst), SI2, SI1, VS2, VS1, VVS2, VVS1, IF (best))</td></tr><tr class="even"><td>x</td><td>length in mm (0--10.74)</td></tr><tr class="odd"><td>y</td><td>width in mm (0--58.9)</td></tr><tr class="even"><td>z</td><td>depth in mm (0--31.8)</td></tr><tr class="odd"><td>depth</td><td>total depth percentage = z / mean(x, y) = 2 * z / (x + y) (43--79)</td></tr><tr class="even"><td>table</td><td>width of top of diamond relative to widest point (43--95)</td></tr></tbody></table>

**Access dimond.csv**

    import pandas as pd
    diamonds = pd.read_csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/diamonds.csv')
    print(diamonds)

Source: https://www.kaggle.com/shivam2503/diamonds

**1.** Write a Pandas program to read a csv file from a specified source and print the first 5 rows. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-1.php)

**2.** Write a Pandas program to read a dataset from diamonds DataFrame and modify the default columns values and print the first 6 rows. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-2.php)

**3.** Write a Pandas program to select a series from diamonds DataFrame. Print the content of the series. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-3.php)

**4.** Write a Pandas program to create a new 'Quality -color' Series (use bracket notation to define the Series name) of the diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-4.php)

**5.** Write a Pandas program to find the number of rows and columns and data type of each column of diamonds Dataframe. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-5.php)

**6.** Write a Pandas program to summarize only 'object' columns of the diamonds Dataframe. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-6.php)

**7.** Write a Pandas program to rename two of the columns of the diamonds Dataframe. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-7.php)

**8.** Write a Pandas program to rename all the columns of the diamonds Dataframe. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-8.php)

**9.** Write a Pandas program to remove the second column of the diamonds Dataframe. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-9.php)

<span class="underline"></span>

**10.** Write a Pandas program to remove multiple columns at once of the diamonds Dataframe. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-10.php)

**11.** Write a Pandas program to remove multiple rows at once (axis=0 refers to rows) from diamonds dataframe. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-11.php)

**12.** Write a Pandas program to sort the 'cut' Series in ascending order (returns a Series) of diamonds Dataframe. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-12.php)

**13.** Write a Pandas program to sort the 'price' Series in descending order (returns a Series) of diamonds Dataframe. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-13.php)

**14.** Write a Pandas program to sort the entire diamonds DataFrame by the 'carat' Series in ascending and descending order. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-14.php)

**15.** Write a Pandas program to filter the DataFrame rows to only show carat weight at least 0.3. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-15.php)

**16.** Write a Pandas program to convert a python list to pandas series. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-16.php)

**17.** Write a Pandas program to find the details of the diamonds where length&gt;5, width&gt;5 and depth&gt;5. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-17.php)

**18.** Write a Pandas program to find the diamonds that are either Premium or Ideal. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-18.php)

**19.** Write a Pandas program to find the diamonds that are with a Fair or Good or Premium. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-19.php)

**20.** Write a Pandas program to display all column labels of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-20.php)

**21.** Write a Pandas program to read only a subset of 3 rows from diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-21.php)

**22.** Write a Pandas program to iterate through diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-22.php)

**23.** Write a Pandas program to drop all non-numeric columns from diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-23.php)

**24.** Write a Pandas program to include only numeric columns in the diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-24.php)

**25.** Write a Pandas program to pass a list of data types to only describe certain types of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-25.php)

**26.** Write a Pandas program to calculate the mean of each numeric column of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-26.php)

**27.** Write a Pandas program to calculate the mean of each row of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-27.php)

**28.** Write a Pandas program to calculate the mean of price for each cut of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-28.php)

**29.** Write a Pandas program to calculate count, minimum, maximum price for each cut of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-29.php)

**30.** Write a Pandas program to create a side-by-side bar plot of the diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-30.php)

**31.** Write a Pandas program to count how many times each value in cut series of diamonds DataFrame occurs. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-31.php)

**32.** Write a Pandas program to display percentages of each value of cut series occurs in diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-32.php)

**33.** Write a Pandas program to display the unique values in cut series of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-33.php)

**34.** Write a Pandas program to count the number of unique values in cut series of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-34.php)

**35.** Write a Pandas program to compute a cross-tabulation of two Series in diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-35.php)

**36.** Write a Pandas program to calculate various summary statistics of cut series of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-36.php)

**37.** Write a Pandas program to create a histogram of the 'carat' Series (distribution of a numerical variable) of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-37.php)

**38.** Write a Pandas program to create a bar plot of the 'value_counts' for the 'cut' series of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-38.php)

**39.** Write a Pandas program to create a DataFrame of booleans (True if missing, False if not missing) from diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-39.php)

**40.** Write a Pandas program to count the number of missing values in each Series of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-40.php)

**41.** Write a Pandas program to check the number of rows and columns and drop those row if 'any' values are missing in a row of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-41.php)

**42.** Write a Pandas program to drop a row if any or all values in a row are missing of diamonds DataFrame on two specific columns. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-42.php)

**43.** Write a Pandas program to set an existing column as the index of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-43.php)

**44.** Write a Pandas program to set an existing column as the index of diamonds DataFrame and restore the index name, and move the index back to a column. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-44.php)

**45.** Write a Pandas program to access a specified Series index and the Series values of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-45.php)

**46.** Write a Pandas program to sort a Series by its values and index of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-46.php)

**47.** Write a Pandas program to calculate the multiply of length, width and depth for each cut of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-47.php)

**48.** Write a Pandas program to concatenate the diamonds DataFrame with the 'color' Series. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-48.php)

**49.** Write a Pandas program to read specified rows and all columns of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-49.php)

**50.** Write a Pandas program to read rows 0, 5, 7 and all columns of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-50.php)

**51.** Write a Pandas program to read rows 2 through 5 and all columns of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-51.php)

**52.** Write a Pandas program to read rows 0 through 2 (inclusive), columns 'color' and 'price' of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-52.php)

**53.** Write a Pandas program to read rows 0 through 2 (inclusive), columns 'color' through 'price' (inclusive) of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-53.php)

**54.** Write a Pandas program to read rows in which the 'cut' is 'Premium', column 'color' of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-54.php)

**55.** Write a Pandas program to read rows in positions 0 and 1, columns in positions 0 and 3 of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-55.php)

**56.** Write a Pandas program to read rows in positions 0 through 4, columns in positions 1 through 4 of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-56.php)

**57.** Write a Pandas program to read rows in positions 0 through 4 (exclusive) and all columns of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-57.php)

**58.** Write a Pandas program to read rows 2 through 5 (inclusive), columns in positions 0 through 2 (exclusive) of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-58.php)

**59.** Write a Pandas program to print a concise summary of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-59.php)

**60.** Write a Pandas program to get the true memory usage by diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-60.php)

**61.** Write a Pandas program to calculate the memory usage for each Series (in bytes) of diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-61.php)

**62.** Write a Pandas program to get randomly sample rows from diamonds DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-62.php)

**63.** Write a Pandas program to get sample 75% of the diamonds DataFrame's rows without replacement and store the remaining 25% of the rows in another DataFrame. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-practice-set1-exercise-63.php)

**64.** Write a Pandas program to read the diamonds DataFrame and detect duplicate color. [Go to the editor](#EDITOR)  
Note: duplicated () function returns boolean Series denoting duplicate rows, optionally only considering certain columns.  
[Click me to see the sample solution](pandas-practice-set1-exercise-64.php)

**65.** Write a Pandas program to count the duplicate rows of diamonds DataFrame.  
[Click me to see the sample solution](pandas-practice-set1-exercise-65.php)

**Python Code Editor:**

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
