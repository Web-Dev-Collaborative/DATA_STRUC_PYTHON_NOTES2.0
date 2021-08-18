 


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

# NumPy array creation: geomspace() function

Last update on February 26 2020 08:08:51 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## numpy.geomspace() function

The geomspace() function is used to get numbers spaced evenly on a log scale (a geometric progression).  
This is similar to logspace, but with endpoints specified directly. Each output sample is a constant multiple of the previous.

**Syntax:**

    numpy.geomspace(start, stop, num=50, endpoint=True, dtype=None)

![NumPy array: geomspace() function](https://www.w3resource.com/w3r_images/numpy-geomspace-function-image-a.png)

**Version:** 1.15.0

**Parameter:**

<table><thead><tr class="header"><th>Name</th><th>Description</th><th>Required /<br />
Optional</th></tr></thead><tbody><tr class="odd"><td>start</td><td>The starting value of the sequence.</td><td>Required</td></tr><tr class="even"><td>stop</td><td>The final value of the sequence, unless endpoint is False. In that case, num + 1 values are spaced over the interval in log-space, of which all but the last (a sequence of length num) are returned.</td><td>Required</td></tr><tr class="odd"><td>num</td><td>Number of samples to generate. Default is 50.</td><td>Optional</td></tr><tr class="even"><td>endpoint</td><td>If True, stop is the last sample. Otherwise, it is not included. Default is True.</td><td>Optional</td></tr><tr class="odd"><td>dtype</td><td>The type of the output array. If dtype is not given, infer the data type from the other input arguments.</td><td></td></tr></tbody></table>

**Return value:**

ndarray - num samples, equally spaced on a log scale.

**Example-1: NumPy.geomspace() function**

    >>> import numpy as np
    >>> np.geomspace(1, 1000, num=4)
    array([    1.,    10.,   100.,  1000.])
    >>> np.geomspace(1, 1000, num=3, endpoint=False)
    array([   1.,   10.,  100.])
    >>> np.geomspace(1, 1000, num=4, endpoint=False)
    array([   1.        ,    5.62341325,   31.6227766 ,  177.827941  ])
    >>> np.geomspace(1, 256, num=9)
    array([   1.,    2.,    4.,    8.,   16.,   32.,   64.,  128.,  256.])

**Pictorial Presentation:**

![NumPy array: geomspace() function](https://www.w3resource.com/w3r_images/numpy-geomspace-function-image-1.png)  
![NumPy array: geomspace() function](https://www.w3resource.com/w3r_images/numpy-geomspace-function-image-1-a.png)

**Example-2: NumPy.geomspace() method**

    >>> import numpy as np
    >>> import matplotlib.pyplot as plt
    >>> N = 10
    >>> y = np.zeros(N)
    >>> plt.semilogx(np.geomspace(1, 1000, N, endpoint=True), y + 1, 'o')
    >>> plt.semilogx(np.geomspace(1, 1000, N, endpoint=False), y + 2, 'o')
    >>> plt.axis([0.5, 2000, 0, 3])
    >>> plt.grid(True, color='0.7', linestyle='-', which='both', axis='both')
    >>> plt.show()

**Python - NumPy Code Editor:**

**Previous:** [logspace()](https://www.w3resource.com/numpy/array-creation/logspace.php)  
**Next:** [meshgrid()](https://www.w3resource.com/numpy/array-creation/meshgrid.php)

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
