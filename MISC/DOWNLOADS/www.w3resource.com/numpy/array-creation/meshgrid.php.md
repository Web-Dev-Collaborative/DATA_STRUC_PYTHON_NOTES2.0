 


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

# NumPy array creation: meshgrid() function

Last update on February 26 2020 08:08:51 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## numpy.meshgrid() function

The meshgrid() function is used to get coordinate matrices from coordinate vectors.  
Make N-D coordinate arrays for vectorized evaluations of N-D scalar/vector fields over N-D grids, given one-dimensional coordinate arrays x1, x2,…, xn.

**Syntax:**

    numpy.meshgrid(*xi, **kwargs)

**Version:** 1.15.0

**Parameter:**

<table><thead><tr class="header"><th>Name</th><th>Description</th><th>Required /<br />
Optional</th></tr></thead><tbody><tr class="odd"><td>x1, x2,…, xn</td><td>1-D arrays representing the coordinates of a grid.</td><td> </td></tr><tr class="even"><td>indexing</td><td>Cartesian (‘xy’, default) or matrix (‘ij’) indexing of output. See Notes for more details.<br />
New in version 1.7.0.</td><td>optional</td></tr><tr class="odd"><td>sparse</td><td>If True a sparse grid is returned in order to conserve memory. Default is False.<br />
New in version 1.7.0.</td><td>optional</td></tr><tr class="even"><td>endpoint</td><td>If True, stop is the last sample. Otherwise, it is not included. Default is True.</td><td>optional</td></tr><tr class="odd"><td>copy</td><td>If False, a view into the original arrays are returned in order to conserve memory. Default is True. Please note that sparse=False, copy=False will likely return non-contiguous arrays. Furthermore, more than one element of a broadcast array may refer to a single memory location. If you need to write to the arrays, make copies first.<br />
New in version 1.7.0.</td><td>optional</td></tr></tbody></table>

**Return value:**

X1, X2,…, XN : ndarray - For vectors x1, x2,…, ‘xn’ with lengths Ni=len(xi) , return (N1, N2, N3,...Nn) shaped arrays if indexing=’ij’ or (N2, N1, N3,...Nn) shaped arrays if indexing=’xy’ with the elements of xi repeated to fill the matrix along the first dimension for x1, the second for x2 and so on.

**Example-1: NumPy.meshgrid() function**

    >>> import numpy as np
    >>> ab, ac = (4, 2)
    >>> b = np.linspace(0, 1, ab)
    >>> c = np.linspace(0, 1, ac)
    >>> bd, cd = np.meshgrid(b, c)
    >>> bd
    array([[ 0.        ,  0.33333333,  0.66666667,  1.        ],
           [ 0.        ,  0.33333333,  0.66666667,  1.        ]])
    >>> cd
    array([[ 0.,  0.,  0.,  0.],
           [ 1.,  1.,  1.,  1.]])
    >>> bd, cd = np.meshgrid(b, c, sparse=True) #make sparse output arrays
    >>> bd
    array([[ 0.        ,  0.33333333,  0.66666667,  1.        ]])
    >>> cd
    array([[ 0.],
           [ 1.]])

**Example - 2: NumPy.meshgrid() function**

    >>> import numpy as np
    >>> import matplotlib.pyplot as plt
    >>> import numpy as np
    >>> a = np.arange(-4, 4, 0.1)
    >>> b = np.arange(-4, 4, 0.1)
    >>> aa, bb = np.meshgrid(a, b, sparse=True)
    >>> c = np.sin(aa**2) / (aa**2 + bb**2)
    >>> m = plt.contourf(a,b,c)
    >>> plt.show()

**numpy.logspace.plot show**

![NumPy.meshgrid() method example](https://www.w3resource.com/w3r_images/numpy-meshgrid-plot.png)

**Python - NumPy Code Editor:**

**Previous:** [geomspace()](https://www.w3resource.com/numpy/array-creation/geomspace.php)  
**Next:** [mgrid()](https://www.w3resource.com/numpy/array-creation/mgrid.php)

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
