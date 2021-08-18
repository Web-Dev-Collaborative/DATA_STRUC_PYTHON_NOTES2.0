 


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

# Pandas Filter: Exercises, Practice, Solution

Last update on August 29 2020 14:27:49 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

\[_An editor is available at the bottom of the page to write and execute the scripts._\]

## Pandas Filter \[ 27 exercises with solution \]

**World alcohol consumption dataset**  
This is a global beverage consumption record dataset. The first column means the year of the record, the second column refers to the place where the beverage was produced, and the third column refers to the place where the beverage was consumed. The fourth columns refer to the types of beverages, and the fifth column refers to the average consumption of beverages per person.

<table><thead><tr class="header"><th>Year</th><th>WHO Region</th><th>Country</th><th>Beverage Types</th><th>Display Value</th></tr></thead><tbody><tr class="odd"><td>1986</td><td>'Western Pacific'</td><td>'Viet Nam'</td><td>'Wine'</td><td>0</td></tr><tr class="even"><td>1986</td><td>'Americas'</td><td>'Uruguay'</td><td>'Other'</td><td>0.5</td></tr><tr class="odd"><td>1985</td><td>'Africa'</td><td>'Cte d'Ivoire '</td><td>'Wine'</td><td>1.62</td></tr><tr class="even"><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr><tr class="odd"><td>1985</td><td>'South-East Asia'</td><td>'Democratic People's Republic of Korea'</td><td>'Wine'</td><td>0</td></tr></tbody></table>

**[Click to see world_alcohol.csv](world_alcohol.php)**

**1.** Write a Pandas program to display the dimensions or shape of the World alcohol consumption dataset. Also extract the column names from the dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-1.php)

**2.** Write a Pandas program to select first 2 rows, 2 columns and specific two columns from World alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-2.php)

**3.** Write a Pandas program to select random number of rows, fraction of random rows from World alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-3.php)

**4.** Write a Pandas program to find and drop the missing values from World alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-4.php)

**5.** Write a Pandas program to remove the duplicates from 'WHO region' column of World alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-5.php)

**6.** Write a Pandas program to find out the alcohol consumption of a given year from the world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-6.php)

**7.** Write a Pandas program to find out the alcohol consumption details in the year '1987' or '1989' from the world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-7.php)

**8.** Write a Pandas program to find out the alcohol consumption details by the 'Americas' in the year '1985' from the world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-time-series-exercise-8.php)

**9.** Write a Pandas program to find out the alcohol consumption details in the year '1986' where WHO region is 'Western Pacific' and country is 'VietNam' from the world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-9.php)

**10.** Write a Pandas program to find out the alcohol consumption details in the year '1986' or '1989' where WHO region is 'Americas' from the world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-time-series-exercise-10.php)

**11.** Write a Pandas program to find out the alcohol consumption details in the year '1986' or '1989' where WHO region is 'Americas' or 'Europe' from the world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-11.php)

**12.** Write a Pandas program to find out the 'WHO region, 'Country', 'Beverage Types' in the year '1986' or '1989' where WHO region is 'Americas' or 'Europe' from the world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-12.php)

**13.** Write a Pandas program to find out the records where consumption of beverages per person average &gt;=5 and Beverage Types is Beer from world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-13.php)

**14.** Write a Pandas program to find out the records where consumption of beverages per person average &gt;=4 and Beverage Types is Beer, Wine, Spirits from world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-14.php)

**15.** Write a Pandas program to filter the specified columns and records by range from world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-15.php)

**16.** Write a Pandas program to filter those records where WHO region contains "Ea" substring from world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-16.php)

**17.** Write a Pandas program to filter those records where WHO region matches with multiple values (Africa, Eastern Mediterranean, Europe) from world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-17.php)

**18.** Write a Pandas program to filter those records which not appears in a given list from world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-18.php)

**19.** Write a Pandas program to filter all records where the average consumption of beverages per person from .5 to 2.50 in world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-19.php)

**20.** Write a Pandas program to find average consumption of wine per person greater than 2 in world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-20.php)

**21.** Write a Pandas program to filter rows based on row numbers ended with 0, like 0, 10, 20, 30 from world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-21.php)

**22.** Write a Pandas program to select consecutive columns and also select rows with Index label 0 to 9 with some columns from world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-22.php)

**23.** Write a Pandas program to rename all and only some of the column names from world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-23.php)

**24.** Write a Pandas program to find which years have all non-zero values and which years have any non-zero values from world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-24.php)

**25.** Write a Pandas program to filter all columns where all entries present, check which rows and columns has a NaN and finally drop rows with any NaNs from world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-25.php)

**26.** Write a Pandas program to filter all records starting from the 'Year' column, access every other column from world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-26.php)

**27.** Write a Pandas program to filter all records starting from the 2nd row, access every 5th row from world alcohol consumption dataset. [Go to the editor](#EDITOR)  
**Test Data:**

       Year       WHO region                Country Beverage Types  Display Value
    0  1986  Western Pacific               Viet Nam           Wine           0.00
    1  1986         Americas                Uruguay          Other           0.50
    2  1985           Africa           Cte d'Ivoire           Wine           1.62
    3  1986         Americas               Colombia           Beer           4.27
    4  1987         Americas  Saint Kitts and Nevis           Beer           1.98

[Click me to see the sample solution](pandas-filter-exercise-27.php)

[Click to download world_alcohol.csv](world_alcohol.csv)

**Python Code Editor:**

**More to Come !**

**Do not submit any solution of the above exercises at here, if you want to contribute go to the appropriate exercise page.**

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
