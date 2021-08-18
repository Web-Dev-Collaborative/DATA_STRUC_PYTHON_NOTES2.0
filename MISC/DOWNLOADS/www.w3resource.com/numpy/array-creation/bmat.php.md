 


- [Home](/index.php)
- [Python Home](/python/python-tutorial.php)
- [NumPy Home](/numpy/index.php)
- ▼NumPy Array creation routines
- [NumPy array Home](/numpy/array-creation/index.php)
- ▼Ones and Zeros
- [empty()](/numpy/array-creation/empty.php)
- [empty_like()](/numpy/array-creation/empty_like.php)
- [eye()](/numpy/array-creation/eye.php)
- [identity()](/numpy/array-creation/identity.php)
- [ones()](/numpy/array-creation/ones.php)
- [ones_like()](/numpy/array-creation/ones_like.php)
- [zeros()](/numpy/array-creation/zeros.php)
- [zeros_like()](/numpy/array-creation/zeros_like.php)
- [full()](/numpy/array-creation/full.php)
- [full_like()](/numpy/array-creation/full_like.php)
- ▼From existing data
- [array()](/numpy/array-creation/array.php)
- [asarray()](/numpy/array-creation/asarray.php)
- [asanyarray()](/numpy/array-creation/asanyarray.php)
- [ascontiguousarray()](/numpy/array-creation/ascontiguousarray.php)
- [asmatrix()](/numpy/array-creation/asmatrix.php)
- [copy()](/numpy/array-creation/copy.php)
- [fromfunction()](/numpy/array-creation/fromfunction.php)
- [fromiter()](/numpy/array-creation/fromiter.php)
- [fromstring()](/numpy/array-creation/fromstring.php)
- [loadtxt()](/numpy/array-creation/loadtxt.php)
- ▼Numerical ranges
- [arange()](/numpy/array-creation/arange.php)
- [linspace()](/numpy/array-creation/linspace.php)
- [logspace()](/numpy/array-creation/logspace.php)
- [geomspace()](/numpy/array-creation/geomspace.php)
- [meshgrid()](/numpy/array-creation/meshgrid.php)
- [mgrid()](/numpy/array-creation/mgrid.php)
- [ogrid()](/numpy/array-creation/ogrid.php)
- ▼Building matrices
- [diag()](/numpy/array-creation/diag.php)
- [diagflat()](/numpy/array-creation/diagflat.php)
- [tri()](/numpy/array-creation/tri.php)
- [tril()](/numpy/array-creation/tril.php)
- [triu()](/numpy/array-creation/triu.php)
- [vander()](/numpy/array-creation/vander.php)
- ▼The Matrix class
- [mat()](/numpy/array-creation/mat.php)
- [bmat()](/numpy/array-creation/bmat.php)

# NumPy array creation: bmat() function

Last update on February 26 2020 08:08:51 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## numpy.bmat() function

The <span class="heading">numpy.bmat() function </span> is used to built a matrix object from a string, nested sequence, or array.

**Syntax:**

    numpy.bmat(obj, ldict=None, gdict=None)

![NumPy array: bmat() function](https://www.w3resource.com/w3r_images/numpy-bmat-function-image-a.png)

**Version:** 1.15.0

<table><thead><tr class="header"><th>Name</th><th>Discription</th><th>Required / Optional</th></tr></thead><tbody><tr class="odd"><td>obj</td><td>Input data. If a string, variables in the current scope may be referenced by name.</td><td>Required</td></tr><tr class="even"><td>ldict</td><td>A dictionary that replaces local operands in current frame. Ignored if obj is not a string or gdict is None.</td><td>Optional</td></tr><tr class="odd"><td>gdict</td><td>A dictionary that replaces global operands in current frame. Ignored if obj is not a string.</td><td>Optional</td></tr></tbody></table>

**Return value:**

matrix - Returns a matrix object, which is a specialized 2-D array.

All the following expressions construct the same block matrix:

**Example-1: NumPy.bmat() method**

    >>> import numpy as np
    >>> P = np.mat('3 3; 4 4')
    >>> Q = np.mat('5 5; 5 5')
    >>> R = np.mat('3 4; 5 8')
    >>> S = np.mat('6 7; 8 9')
    >>> np.bmat([[P,Q], [R, S]])
    matrix([[3, 3, 5, 5],
            [4, 4, 5, 5],
            [3, 4, 6, 7],
            [5, 8, 8, 9]])

**Pictorial Presentation:**

![NumPy array: bmat() function](https://www.w3resource.com/w3r_images/numpy-bmat-function-image-1.png)

**Example-2: NumPy.bmat() method**

    >>> import numpy as np
    >>> P = np.mat('3 3; 4 4')
    >>> Q = np.mat('5 5; 5 5')
    >>> R = np.mat('3 4; 5 8')
    >>> S = np.mat('6 7; 8 9')
    >>> np.bmat(np.r_[np.c_[P, Q], np.c_[R, S]])
    matrix([[3, 3, 5, 5],
            [4, 4, 5, 5],
            [3, 4, 6, 7],
            [5, 8, 8, 9]])
    >>> np.bmat('P, Q; R, S')
    matrix([[3, 3, 5, 5],
            [4, 4, 5, 5],
            [3, 4, 6, 7],
            [5, 8, 8, 9]])

**Pictorial Presentation:**

![NumPy array: bmat() function](https://www.w3resource.com/w3r_images/numpy-bmat-function-image-1-a.png)

**Python - NumPy Code Editor:**

**Previous:** [mat()](https://www.w3resource.com/numpy/array-creation/mat.php)  
**Next:** [NumPy Array manipulation Home](https://www.w3resource.com/numpy/manipulation/index.php)

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

 
