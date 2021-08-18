 


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

# NumPy array creation: tri() function

Last update on February 26 2020 08:08:51 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## numpy.tri() function

The tri() function is used to get an array with ones at and below the given diagonal and zeros elsewhere.

**Syntax:**

    numpy.tri(N, M=None, k=0, dtype=<class 'float'>)

![NumPy array: tri() function](https://www.w3resource.com/w3r_images/numpy-tri-function-image-a.png)

**Version:** 1.15.0

**Parameter:**

<table><thead><tr class="header"><th>Name</th><th>Description</th><th>Required /<br />
Optional</th></tr></thead><tbody><tr class="odd"><td>N</td><td>Number of rows in the array.</td><td>int</td></tr><tr class="even"><td>M</td><td>Number of columns in the array. By default, M is taken equal to N.</td><td>optional</td></tr><tr class="odd"><td>k</td><td>The sub-diagonal at and below which the array is filled. k = 0 is the main diagonal, while k &lt; 0 is below it, and k &gt; 0 is above. The default is 0.</td><td>optional</td></tr><tr class="even"><td>dtype</td><td>Data type of the returned array. The default is float.</td><td>optional</td></tr></tbody></table>

**Return value:**

tri : ndarray of shape (N, M) - Array with its lower triangle filled with ones and zero elsewhere; in other words T\[i,j\] == 1 for i &lt;= j + k, 0 otherwise.

**Example-1: NumPy.tri() function main diagonal**

    >>> import numpy as np
    >>> np.tri(4, 6, 0, dtype=int)
    array([[1, 0, 0, 0, 0, 0],
           [1, 1, 0, 0, 0, 0],
           [1, 1, 1, 0, 0, 0],
           [1, 1, 1, 1, 0, 0]])

**Pictorial Presentation:**

![NumPy array: tri() function main diagonal](https://www.w3resource.com/w3r_images/numpy-tri-function-main-diagonal.png)

**Example-2: NumPy.tri() function above main diagonal**

    >>> import numpy as np
    >>> np.tri(4, 6, 1, dtype=int)
    array([[1, 1, 0, 0, 0, 0],
           [1, 1, 1, 0, 0, 0],
           [1, 1, 1, 1, 0, 0],
           [1, 1, 1, 1, 1, 0]])

**Pictorial Presentation:**

![NumPy array: tri() function above main diagonal](https://www.w3resource.com/w3r_images/numpy-tri-function-above-main-diagonal.png)

**Example-3: NumPy.tri() function below main diagonal**

    >>> import numpy as np
    >>> np.tri(4, 6, -1, dtype=int)
    array([[0, 0, 0, 0, 0, 0],
           [1, 0, 0, 0, 0, 0],
           [1, 1, 0, 0, 0, 0],
           [1, 1, 1, 0, 0, 0]])

**Pictorial Presentation:**

![NumPy array: tri() function below main diagonal](https://www.w3resource.com/w3r_images/numpy-tri-function-below-main-diagonal.png)

**Python - NumPy Code Editor:**

**Previous:** [diagflat()](https://www.w3resource.com/numpy/array-creation/diagflat.php)  
**Next:** [tril()](https://www.w3resource.com/numpy/array-creation/tril.php)

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
