 


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

# NumPy array creation: vander() function

Last update on February 26 2020 08:08:51 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## numpy.vander() function

The vander() function is used to generate a Vandermonde matrix.  
The columns of the output matrix are powers of the input vector. The order of the powers is determined by the increasing boolean argument. Specifically, when increasing is False, the i-th output column is the input vector raised element-wise to the power of N - i - 1. Such a matrix with a geometric progression in each row is named for Alexandre- Theophile Vandermonde.

**Syntax:**

    numpy.vander(x, N=None, increasing=False)

![NumPy array: vander() function](https://www.w3resource.com/w3r_images/numpy-vander-function-image-a.png)

**Version:** 1.15.0

<table><thead><tr class="header"><th>Name</th><th>Discription</th><th>Required / Optional</th></tr></thead><tbody><tr class="odd"><td>x</td><td>1-D input array.</td><td>Required</td></tr><tr class="even"><td>N</td><td>Number of columns in the output. If N is not specified, a square array is returned (N = len(x)).</td><td>optional</td></tr><tr class="odd"><td>increasing</td><td>Order of the powers of the columns. If True, the powers increase from left to right, if False (the default) they are reversed.<br />
</td><td>optional</td></tr></tbody></table>

**Return value:**

out : ndarray - Vandermonde matrix. If increasing is False, the first column is x^(N-1), the second x^(N-2) and so forth. If increasing is True, the columns are x^0, x^1, ..., x^(N-1).

**Example-1: NumPy.vander() function**

    >>> import numpy as np
    >>> a = np.array ([1,2,4,6])
    >>> Y=4
    >>> np.vander(a, Y)
    array([[  1,   1,   1,   1],
           [  8,   4,   2,   1],
           [ 64,  16,   4,   1],
           [216,  36,   6,   1]])
    >>> np.column_stack([a**(Y-1-i) for i in range(Y)])
    array([[  1,   1,   1,   1],
           [  8,   4,   2,   1],
           [ 64,  16,   4,   1],
           [216,  36,   6,   1]])

**Pictorial Presentation:**

![NumPy array: vander() function](https://www.w3resource.com/w3r_images/numpy-vander-function-image-1.png)

**Example-2: NumPy.vander() function**

    >>> import numpy as np
    >>> a = np.array([1,2,4,5])
    >>> np.vander(a)
    array([[  1,   1,   1,   1],
           [  8,   4,   2,   1],
           [ 64,  16,   4,   1],in
           [125,  25,   5,   1]])
    >>> np.vander(a, increasing=True)
    array([[  1,   1,   1,   1],
           [  1,   2,   4,   8],
           [  1,   4,  16,  64],
           [  1,   5,  25, 125]])

**Pictorial Presentation:**

![NumPy array: vander() function](https://www.w3resource.com/w3r_images/numpy-vander-function-image-1-a.png)

The determinant of a square Vandermonde matrix is the product of the differences between the values of the input vector:

    >>> import numpy as np
    >>> a = np.array([1,2,4,5])
    >>> np.linalg.det(np.vander(a))
    72.000000000000071
    >>> (5-4)*(5-2)*(5-1)*(4-2)*(4-1)*(2-1)
    72

**Python - NumPy Code Editor:**

**Previous:** [triu()](https://www.w3resource.com/numpy/array-creation/triu.php)  
**Next:** [The Matrix class mat()](https://www.w3resource.com/numpy/array-creation/mat.php)

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
