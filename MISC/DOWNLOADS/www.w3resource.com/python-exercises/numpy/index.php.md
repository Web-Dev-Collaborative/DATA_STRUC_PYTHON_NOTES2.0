 


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

# NumPy Exercises, Practice, Solution

Last update on March 13 2021 06:35:36 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## NumPy

NumPy is a Python package providing fast, flexible, and expressive data structures designed to make working with 'relationa' or 'labeled' data both easy and intuitive. It aims to be the fundamental high-level building block for doing practical, real world data analysis in Python.

The best way we learn anything is by practice and exercise questions. Here you have the opportunity to practice the NumPy concepts by solving the exercises starting from basic to more complex exercises. A sample solution is provided for each exercise. It is recommended to do these exercises by yourself first before checking the solution.

Hope, these exercises help you to improve your NumPy coding skills. Currently, following sections are available, we are working hard to add more exercises .... Happy Coding!

**List of NumPy Exercises:**

- [NumPy Basic \[ 59 exercises with solution \]](/python-exercises/numpy/basic/index.php)
- [NumPy arrays \[ 205 exercises with solution \]](/python-exercises/numpy/index-array.php)
- [NumPy Linear Algebra \[ 19 exercises with solution \]](/python-exercises/numpy/linear-algebra/index.php)
- [NumPy Random \[ 17 exercises with solution \]](/python-exercises/numpy/python-numpy-random.php)
- [NumPy Sorting and Searching \[ 9 exercises with solution \]](/python-exercises/numpy/python-numpy-sorting-and-searching.php)
- [NumPy Mathematics \[ 41 exercises with solution \]](/python-exercises/numpy/python-numpy-math.php)
- [NumPy Statistics \[ 14 exercises with solution \]](/python-exercises/numpy/python-numpy-stat.php)
- [NumPy DateTime \[ 7 exercises with solution \]](/python-exercises/numpy/python-numpy-datetime.php)
- [NumPy String \[ 22 exercises with solution \]](/python-exercises/numpy/python-numpy-string.php)
- More to come

<!-- -->

- [Python Projects Numbers: \[ 11 Projects with solution \]](https://www.w3resource.com/projects/python/index.php)
- [Python Web Programming: \[ 12 Projects with solution \]](https://www.w3resource.com/projects/python/web-programming/index.php)
- [Python Projects: Novel Coronavirus (COVID-19) \[ 14 Exercises with Solution \]](https://www.w3resource.com/python-exercises/project/covid-19/index.php)
- More to come

**NumPy Basics**

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>np.array([1,2,3])</td><td>1d array</td></tr><tr class="even"><td>np.array([(1,2,3),(4,5,6)])</td><td>2d array</td></tr><tr class="odd"><td>np.arange(start,stop,step)</td><td>range array</td></tr></tbody></table>

**Placeholders**

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>np.linspace(0,2,9)</td><td>Add evenly spaced values btw interval to array of length</td></tr><tr class="even"><td>np.zeros((1,2))</td><td>Create and array filled with zeros</td></tr><tr class="odd"><td>np.ones((1,2))</td><td>Creates an array filled with ones</td></tr><tr class="even"><td>np.random.random((5,5))</td><td>Creates random array</td></tr><tr class="odd"><td>np.empty((2,2))</td><td>Creates an empty array</td></tr></tbody></table>

**Array**

<table><thead><tr class="header"><th>Syntax</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>array.shape</td><td>Dimensions (Rows,Columns)</td></tr><tr class="even"><td>len(array)</td><td>Length of Array</td></tr><tr class="odd"><td>array.ndim</td><td>Number of Array Dimensions</td></tr><tr class="even"><td>array.dtype</td><td>Data Type</td></tr><tr class="odd"><td>array.astype(type)</td><td>Converts to Data Type</td></tr><tr class="even"><td>type(array)</td><td>Type of Array</td></tr></tbody></table>

**Copying/Sorting**

<table><thead><tr class="header"><th>Operators</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>np.copy(array)</td><td>Creates copy of array</td></tr><tr class="even"><td>other = array.copy()</td><td>Creates deep copy of array</td></tr><tr class="odd"><td>array.sort()</td><td>Sorts an array</td></tr><tr class="even"><td>array.sort(axis=0)</td><td>Sorts axis of array</td></tr></tbody></table>

**Array Manipulation**

**Adding or Removing Elements**

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>np.append(a,b)</td><td>Append items to array</td></tr><tr class="even"><td>np.insert(array, 1, 2, axis)</td><td>Insert items into array at axis 0 or 1</td></tr><tr class="odd"><td>np.resize((2,4))</td><td>Resize array to shape(2,4)</td></tr><tr class="even"><td>np.delete(array,1,axis)</td><td>Deletes items from array</td></tr></tbody></table>

**Combining Arrays**

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>np.concatenate((a,b),axis=0)</td><td>Concatenates 2 arrays, adds to end</td></tr><tr class="even"><td>np.vstack((a,b))</td><td>Stack array row-wise</td></tr><tr class="odd"><td>np.hstack((a,b))</td><td>Stack array column wise</td></tr></tbody></table>

**Splitting Arrays**

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>numpy.split()</td><td>Split an array into multiple sub-arrays.</td></tr><tr class="even"><td>np.array_split(array, 3)</td><td>Split an array in sub-arrays of (nearly) identical size</td></tr><tr class="odd"><td>numpy.hsplit(array, 3)</td><td>Split the array horizontally at 3rd index</td></tr></tbody></table>

**More**

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>other = ndarray.flatten()</td><td>Flattens a 2d array to 1d</td></tr><tr class="even"><td>array = np.transpose(other)<br />
array.T</td><td>Transpose array</td></tr><tr class="odd"><td>inverse = np.linalg.inv(matrix)</td><td>Inverse of a given matrix</td></tr><tr class="even"><td></td><td></td></tr></tbody></table>

**Mathematics**

**Operations**

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>np.add(x,y)<br />
x + y</td><td>Addition</td></tr><tr class="even"><td>np.substract(x,y)<br />
x - y</td><td>Subtraction</td></tr><tr class="odd"><td>np.divide(x,y)<br />
x / y</td><td>Division</td></tr><tr class="even"><td>np.multiply(x,y)<br />
x @ y</td><td>Multiplication</td></tr><tr class="odd"><td>np.sqrt(x)</td><td>Square Root</td></tr><tr class="even"><td>np.sin(x)</td><td>Element-wise sine</td></tr><tr class="odd"><td>np.cos(x)</td><td>Element-wise cosine</td></tr><tr class="even"><td>np.log(x)</td><td>Element-wise natural log</td></tr><tr class="odd"><td>np.dot(x,y)</td><td>Dot product</td></tr><tr class="even"><td>np.roots([1,0,-4])</td><td>Roots of a given polynomial coefficients</td></tr></tbody></table>

**Comparison**

Operator

Description

==

Equal

!=

Not equal

&lt;

Smaller than

&gt;

Greater than

&lt;=

Smaller than or equal

&gt;=

Greater than or equal

np.array_equal(x,y)

Array-wise comparison

**Basic Statistics**

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>np.mean(array)</td><td>Mean</td></tr><tr class="even"><td>np.median(array)</td><td>Median</td></tr><tr class="odd"><td>array.corrcoef()</td><td>Correlation Coefficient</td></tr><tr class="even"><td>np.std(array)</td><td>Standard Deviation</td></tr></tbody></table>

**More**

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>array.sum()</td><td>Array-wise sum</td></tr><tr class="even"><td>array.min()</td><td>Array-wise minimum value</td></tr><tr class="odd"><td>array.max(axis=0)</td><td>Maximum value of specified axis</td></tr><tr class="even"><td>array.cumsum(axis=0)</td><td>Cumulative sum of specified axis</td></tr></tbody></table>

**Slicing and Subsetting**

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>array[i]</td><td>1d array at index i</td></tr><tr class="even"><td>array[i,j]</td><td>2d array at index[i][j]</td></tr><tr class="odd"><td>array[i&lt;4]</td><td>Boolean Indexing, see Tricks</td></tr><tr class="even"><td>array[0:3]</td><td>Select items of index 0, 1 and 2</td></tr><tr class="odd"><td>array[0:2,1]</td><td>Select items of rows 0 and 1 at column 1</td></tr><tr class="even"><td>array[:1]</td><td>Select items of row 0 (equals array[0:1, :])</td></tr><tr class="odd"><td>array[1:2, :]</td><td>Select items of row 1</td></tr><tr class="even"><td>[comment]: &lt;&gt; (</td><td>array[1,...]</td></tr><tr class="odd"><td>array[ : :-1]</td><td>Reverses array</td></tr></tbody></table>

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
