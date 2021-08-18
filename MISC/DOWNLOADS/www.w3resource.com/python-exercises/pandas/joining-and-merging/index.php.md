 


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

# Pandas Joining and merging DataFrame : Exercises, Practice, Solution

Last update on August 11 2020 13:11:36 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

\[_An editor is available at the bottom of the page to write and execute the scripts._\]

## Pandas Joining and merging DataFrame \[ 15 exercises with solution\]

**1.** Write a Pandas program to join the two given dataframes along rows and assign all data. [Go to the editor](#EDITOR)  
**Test Data:**

    student_data1:
      student_id              name  marks
    0         S1  Danniella Fenton    200
    1         S2      Ryder Storey    210
    2         S3      Bryce Jensen    190
    3         S4         Ed Bernal    222
    4         S5       Kwame Morin    199

    student_data2:
      student_id              name  marks
    0         S4  Scarlette Fisher    201
    1         S5  Carla Williamson    200
    2         S6       Dante Morse    198
    3         S7    Kaiser William    219
    4         S8   Madeeha Preston    201

[Click me to see the sample solution](pandas-joining-and-merging-dataframe-exercise-1.php)

**2.** Write a Pandas program to join the two given dataframes along columns and assign all data. [Go to the editor](#EDITOR)  
**Test Data:**

    student_data1:
      student_id              name  marks
    0         S1  Danniella Fenton    200
    1         S2      Ryder Storey    210
    2         S3      Bryce Jensen    190
    3         S4         Ed Bernal    222
    4         S5       Kwame Morin    199

    student_data2:
      student_id              name  marks
    0         S4  Scarlette Fisher    201
    1         S5  Carla Williamson    200
    2         S6       Dante Morse    198
    3         S7    Kaiser William    219
    4         S8   Madeeha Preston    201

[Click me to see the sample solution](pandas-joining-and-merging-dataframe-exercise-2.php)

**3.** Write a Pandas program to append rows to an existing DataFrame and display the combined data. [Go to the editor](#EDITOR)  
**Test Data:**

    tudent_data1
      student_id              name  marks
    0         S1  Danniella Fenton    200
    1         S2      Ryder Storey    210
    2         S3      Bryce Jensen    190
    3         S4         Ed Bernal    222
    4         S5       Kwame Morin    199

    New Row(s)
    student_id                  S6
    name          Scarlette Fisher
    marks                      205
    dtype: object

[Click me to see the sample solution](pandas-joining-and-merging-dataframe-exercise-3.php)

**4.** Write a Pandas program to append a list of dictioneries or series to a existing DataFrame and display the combined data. [Go to the editor](#EDITOR)  
**Test Data:**

      student_id              name  marks
    0         S1  Danniella Fenton    200
    1         S2      Ryder Storey    210
    2         S3      Bryce Jensen    190
    3         S4         Ed Bernal    222
    4         S5       Kwame Morin    199

    Dictionary:
    student_id                  S6
    name          Scarlette Fisher
    marks                      205
    dtype: object

[Click me to see the sample solution](pandas-joining-and-merging-dataframe-exercise-4.php)

**5.** Write a Pandas program to join the two given dataframes along rows and merge with another dataframe along the common column id. [Go to the editor](#EDITOR)  
**Test Data:**

    student_data1:
      student_id              name  marks
    0         S1  Danniella Fenton    200
    1         S2      Ryder Storey    210
    2         S3      Bryce Jensen    190
    3         S4         Ed Bernal    222
    4         S5       Kwame Morin    199

    student_data2:
      student_id              name  marks
    0         S4  Scarlette Fisher    201
    1         S5  Carla Williamson    200
    2         S6       Dante Morse    198
    3         S7    Kaiser William    219
    4         S8   Madeeha Preston    201

    exam_data:
       student_id  exam_id
    0          S1       23
    1          S2       45
    2          S3       12
    3          S4       67
    4          S5       21
    5          S7       55
    6          S8       33
    7          S9       14
    8         S10       56
    9         S11       83
    10        S12       88
    11        S13       12

[Click me to see the sample solution](pandas-joining-and-merging-dataframe-exercise-5.php)

**6.** Write a Pandas program to join the two dataframes using the common column of both dataframes. [Go to the editor](#EDITOR)  
**Test Data:**

    student_data1:
      student_id              name  marks
    0         S1  Danniella Fenton    200
    1         S2      Ryder Storey    210
    2         S3      Bryce Jensen    190
    3         S4         Ed Bernal    222
    4         S5       Kwame Morin    199

    student_data2:
      student_id              name  marks
    0         S4  Scarlette Fisher    201
    1         S5  Carla Williamson    200
    2         S6       Dante Morse    198
    3         S7    Kaiser William    219
    4         S8   Madeeha Preston    201

[Click me to see the sample solution](pandas-joining-and-merging-dataframe-exercise-6.php)

**7.** Write a Pandas program to join the two dataframes with matching records from both sides where available. [Go to the editor](#EDITOR)  
**Test Data:**

    student_data1:
      student_id              name  marks
    0         S1  Danniella Fenton    200
    1         S2      Ryder Storey    210
    2         S3      Bryce Jensen    190
    3         S4         Ed Bernal    222
    4         S5       Kwame Morin    199

    student_data2:
      student_id              name  marks
    0         S4  Scarlette Fisher    201
    1         S5  Carla Williamson    200
    2         S6       Dante Morse    198
    3         S7    Kaiser William    219
    4         S8   Madeeha Preston    201

[Click me to see the sample solution](pandas-joining-and-merging-dataframe-exercise-7.php)

**8.** Write a Pandas program to join (left join) the two dataframes using keys from left dataframe only. [Go to the editor](#EDITOR)  
**Test Data:**

    data1:
      key1 key2   P   Q
    0   K0   K0  P0  Q0
    1   K0   K1  P1  Q1
    2   K1   K0  P2  Q2
    3   K2   K1  P3  Q3

    data2:
      key1 key2   R   S
    0   K0   K0  R0  S0
    1   K1   K0  R1  S1
    2   K1   K0  R2  S2
    3   K2   K0  R3  S3

[Click me to see the sample solution](pandas-joining-and-merging-dataframe-exercise-8.php)

**9.** Write a Pandas program to join two dataframes using keys from right dataframe only. [Go to the editor](#EDITOR)  
**Test Data:**

    data1:
      key1 key2   P   Q
    0   K0   K0  P0  Q0
    1   K0   K1  P1  Q1
    2   K1   K0  P2  Q2
    3   K2   K1  P3  Q3

    data2:
      key1 key2   R   S
    0   K0   K0  R0  S0
    1   K1   K0  R1  S1
    2   K1   K0  R2  S2
    3   K2   K0  R3  S3

[Click me to see the sample solution](pandas-joining-and-merging-dataframe-exercise-9.php)

**10.** Write a Pandas program to merge two given datasets using multiple join keys. [Go to the editor](#EDITOR)  
**Test Data:**

    data1:
      key1 key2   P   Q
    0   K0   K0  P0  Q0
    1   K0   K1  P1  Q1
    2   K1   K0  P2  Q2
    3   K2   K1  P3  Q3

    data2:
      key1 key2   R   S
    0   K0   K0  R0  S0
    1   K1   K0  R1  S1
    2   K1   K0  R2  S2
    3   K2   K0  R3  S3

[Click me to see the sample solution](pandas-joining-and-merging-dataframe-exercise-10.php)

**11.** Write a Pandas program to create a new DataFrame based on existing series, using specified argument and override the existing columns names. [Go to the editor](#EDITOR)  
[Click me to see the sample solution](pandas-joining-and-merging-dataframe-exercise-11.php)

**12.** Write a Pandas program to create a combination from two dataframes where a column id combination appears more than once in both dataframes.[Go to the editor](#EDITOR)  
**Test Data:**

    data1:
      key1 key2   P   Q
    0   K0   K0  P0  Q0
    1   K0   K1  P1  Q1
    2   K1   K0  P2  Q2
    3   K2   K1  P3  Q3

    data2:
      key1 key2   R   S
    0   K0   K0  R0  S0
    1   K1   K0  R1  S1
    2   K1   K0  R2  S2
    3   K2   K0  R3  S3

[Click me to see the sample solution](pandas-joining-and-merging-dataframe-exercise-12.php)

**13.** Write a Pandas program to combine the columns of two potentially differently-indexed DataFrames into a single result DataFrame. [Go to the editor](#EDITOR)  
**Test Data:**

    data1:
         A   B
    K0  A0  B0
    K1  A1  B1
    K2  A2  B2

    data2:
         C   D
    K0  C0  D0
    K2  C2  D2
    K3  C3  D3

[Click me to see the sample solution](pandas-joining-and-merging-dataframe-exercise-13.php)

**14.** Write a Pandas program to merge two given dataframes with different columns. [Go to the editor](#EDITOR)  
**Test Data:**

    data1:
      key1 key2   P   Q
    0   K0   K0  P0  Q0
    1   K0   K1  P1  Q1
    2   K1   K0  P2  Q2
    3   K2   K1  P3  Q3

    data2:
      key1 key2   R   S
    0   K0   K0  R0  S0
    1   K1   K0  R1  S1
    2   K1   K0  R2  S2
    3   K2   K0  R3  S3

[Click me to see the sample solution](pandas-joining-and-merging-dataframe-exercise-14.php)

**15.** Write a Pandas program to Combine two DataFrame objects by filling null values in one DataFrame with non-null values from other DataFrame. [Go to the editor](#EDITOR)  
**Test Data:**

    Original DataFrames:
         A  B
    0  NaN  3
    1  0.0  4
    2  NaN  5

       A    B
    0  1  3.0
    1  1  NaN
    2  3  3.0

[Click me to see the sample solution](pandas-joining-and-merging-dataframe-exercise-15.php)

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
