 


- [Home](/index.php)
- [Python Home](/python/python-tutorial.php)
- [Python Exercises](/python-exercises/)
- ▼Python NumPy
- [NumPy Home](/python-exercises/numpy/index.php)
- [NumPy Basic](/python-exercises/numpy/basic/index.php)
- [NumPy Array](/python-exercises/numpy/index-array.php)
- [NumPy Linear Algebra](/python-exercises/numpy/linear-algebra/index.php)
- [NumPy Random](/python-exercises/numpy/python-numpy-random.php)
- [Sorting and Searching](/python-exercises/numpy/python-numpy-sorting-and-searching.php)
- [NumPy Mathematics](/python-exercises/numpy/python-numpy-math.php)
- [NumPy Statistics](/python-exercises/numpy/python-numpy-stat.php)
- [NumPy DateTime](/python-exercises/numpy/python-numpy-datetime.php)
- [NumPy String](/python-exercises/numpy/python-numpy-string.php)
- [..More to come..]()

# NumPy: Statistics Exercises, Practice, Solution

Last update on November 04 2020 10:50:12 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## NumPy Statistics \[14 exercises with solution\]

\[_An editor is available at the bottom of the page to write and execute the scripts._\]

![NumPy Statistics](https://www.w3resource.com/w3r_images/numpy-statistics.svg)

**1.** Write a Python program to find the maximum and minimum value of a given flattened array. [Go to the editor](#EDITOR)  
Expected Output:  
Original flattened array:  
\[\[0 1\]  
\[2 3\]\]  
Maximum value of the above flattened array:  
3  
Minimum value of the above flattened array:  
0  
[Click me to see the sample solution](python-numpy-stat-exercise-1.php)

**2.** Write a NumPy program to get the minimum and maximum value of a given array along the second axis. [Go to the editor](#EDITOR)  
Expected Output:  
Original array:  
\[\[0 1\]  
\[2 3\]\]  
Maximum value along the second axis:  
\[1 3\]  
Minimum value along the second axis:  
\[0 2\]  
[Click me to see the sample solution](python-numpy-stat-exercise-2.php)

**3.** Write a NumPy program to calculate the difference between the maximum and the minimum values of a given array along the second axis. [Go to the editor](#EDITOR)  
Expected Output:  
Original array:  
\[\[ 0 1 2 3 4 5\]  
\[ 6 7 8 9 10 11\]\]  
Difference between the maximum and the minimum values of the said array:  
\[5 5\]  
[Click me to see the sample solution](python-numpy-stat-exercise-3.php)

**4.** Write a NumPy program to compute the 80th percentile for all elements in a given array along the second axis. [Go to the editor](#EDITOR)  
Expected Output:  
Original array:  
\[1.0, 2.0, 3.0, 4.0\]  
Largest integer smaller or equal to the division of the inputs:  
\[ 0. 1. 2. 2.\]  
[Click me to see the sample solution](python-numpy-stat-exercise-4.php)

**5.** Write a NumPy program to compute the median of flattened given array. [Go to the editor](#EDITOR)  
Note: First array elements raised to powers from second array  
Expected Output:  
Original array:  
\[\[ 0 1 2 3 4 5\]  
\[ 6 7 8 9 10 11\]\]  
Median of said array:  
5.5  
[Click me to see the sample solution](python-numpy-stat-exercise-5.php)

**6.** Write a NumPy program to compute the weighted of a given array. [Go to the editor](#EDITOR)  
Sample Output:  
Original array:  
\[0 1 2 3 4\]  
Weighted average of the said array:  
2.6666666666666665  
[Click me to see the sample solution](python-numpy-stat-exercise-6.php)

**7.** Write a NumPy program to compute the mean, standard deviation, and variance of a given array along the second axis. [Go to the editor](#EDITOR)  
Sample output:  
Original array:  
\[0 1 2 3 4 5\]  
Mean: 2.5  
std: 1  
variance: 2.9166666666666665  
[Click me to see the sample solution](python-numpy-stat-exercise-7.php)

**8.** Write a NumPy program to compute the covariance matrix of two given arrays. [Go to the editor](#EDITOR)  
Sample Output:  
Original array1:  
\[0 1 2\]  
Original array1:  
\[2 1 0\]  
Covariance matrix of the said arrays:  
\[\[ 1. -1.\]  
\[-1. 1.\]\]  
[Click me to see the sample solution](python-numpy-stat-exercise-8.php)

**9.** Write a NumPy program to compute cross-correlation of two given arrays. [Go to the editor](#EDITOR)  
Sample Output:  
Original array1:  
\[0 1 3\]  
Original array1:  
\[2 4 5\]  
Cross-correlation of the said arrays:  
\[\[2.33333333 2.16666667\]  
\[2.16666667 2.33333333\]\]  
[Click me to see the sample solution](python-numpy-stat-exercise-9.php)

**10.** Write a NumPy program to compute pearson product-moment correlation coefficients of two given arrays. [Go to the editor](#EDITOR)  
Sample Output:  
Original array1:  
\[0 1 3\]  
Original array1:  
\[2 4 5\]  
Pearson product-moment correlation coefficients of the said arrays:  
\[\[1. 0.92857143\]  
\[0.92857143 1. \]\]  
[Click me to see the sample solution](python-numpy-stat-exercise-10.php)

**11.** Write a NumPy program to test element-wise of a given array for finiteness (not infinity or not Not a Number), positive or negative infinity, for NaN, for NaT (not a time), for negative infinity, for positive infinity. [Go to the editor](#EDITOR)  
Sample output:  
Test element-wise for finiteness (not infinity or not Not a Number):  
True  
True  
False  
Test element-wise for positive or negative infinity:  
True  
False  
True  
Test element-wise for NaN:  
\[ True False False\]  
Test element-wise for NaT (not a time):  
\[ True False\]  
Test element-wise for negative infinity:  
\[1 0 0\]  
Test element-wise for positive infinity:  
\[0 0 1\]  
[Click me to see the sample solution](python-numpy-stat-exercise-11.php)

**12.** Write a Python NumPy program to compute the weighted average along the specified axis of a given flattened array. [Go to the editor](#EDITOR)  
From Wikipedia: The weighted arithmetic mean is similar to an ordinary arithmetic mean (the most common type of average), except that instead of each of the data points contributing equally to the final average, some data points contribute more than others. The notion of weighted mean plays a role in descriptive statistics and also occurs in a more general form in several other areas of mathematics.  
Sample output:  
Original flattened array:  
\[\[0 1 2\]  
\[3 4 5\]  
\[6 7 8\]\]  
Weighted average along the specified axis of the above flattened array:  
\[1.2 4.2 7.2\]  
[Click me to see the sample solution](python-numpy-stat-exercise-12.php)

**13.** Write a Python program to count number of occurrences of each value in a given array of non-negative integers. [Go to the editor](#EDITOR)  
Note: bincount() function count number of occurrences of each value in an array of non-negative integers in the range of the array between the minimum and maximum values including the values that did not occur.  
Sample Output:  
Original array:  
\[0, 1, 6, 1, 4, 1, 2, 2, 7\]  
Number of occurrences of each value in array:  
\[1 3 2 0 1 0 1 1\]  
[Click me to see the sample solution](python-numpy-stat-exercise-13.php)

**14.** Write a NumPy program to compute the histogram of nums against the bins. [Go to the editor](#EDITOR)  
Sample Output:  
nums: \[0.5 0.7 1. 1.2 1.3 2.1\]  
bins: \[0 1 2 3\]  
Result: (array(\[2, 3, 1\], dtype=int64), array(\[0, 1, 2, 3\]))  
![NumPy Statistics: Compute the histogram of nums against the bins](https://www.w3resource.com/w3r_images/python-numpy-stat-exercise-14.png)  
[Click me to see the sample solution](python-numpy-stat-exercise-14.php)

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
