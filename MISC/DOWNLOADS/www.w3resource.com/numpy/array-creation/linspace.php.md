 


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

# NumPy array creation: linspace() function

Last update on February 26 2020 08:08:51 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## numpy.linspace() function

The linspace() function returns evenly spaced numbers over a specified interval \[start, stop\].  
The endpoint of the interval can optionally be excluded.

**Syntax:**

    numpy.linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None)

![NumPy array: linspace() function](https://www.w3resource.com/w3r_images/numpy-linspace-function-image-a.png)

**Version:** 1.15.0

**Parameter:**

<table><thead><tr class="header"><th>Name</th><th>Description</th><th>Required /<br />
Optional</th></tr></thead><tbody><tr class="odd"><td>start</td><td>The starting value of the sequence.</td><td>Required</td></tr><tr class="even"><td>stop</td><td>The end value of the sequence, unless endpoint is set to False. In that case, the sequence consists of all but the last of num + 1 evenly spaced samples, so that stop is excluded. Note that the step size changes when endpoint is False.</td><td>Required</td></tr><tr class="odd"><td>num</td><td>Number of samples to generate. Default is 50. Must be non-negative.</td><td>Optional</td></tr><tr class="even"><td>endpoint</td><td>If True, stop is the last sample. Otherwise, it is not included. Default is True.</td><td>Optional</td></tr><tr class="odd"><td>retstep</td><td>If True, return (samples, step), where step is the spacing between samples.</td><td>Optional</td></tr><tr class="even"><td>dtype</td><td>The type of the output array. If dtype is not given, infer the data type from the other input arguments.<br />
New in version 1.9.0.</td><td>Optional</td></tr></tbody></table>

**Return value:**

ndarray - There are num equally spaced samples in the closed interval \[start, stop\] or the half-open interval \[start, stop) (depending on whether endpoint is True or False).

step : float, optional - Only returned if retstep is True  
Size of spacing between samples.

**Example-1: NumPy.linspace() method**

    >>> import numpy as np
    >>> np.linspace(3.0, 4.0, num=7)
    array([ 3.        ,  3.16666667,  3.33333333,  3.5       ,  3.66666667,
            3.83333333,  4.        ])
    >>> np.linspace(3.0,4.0, num=7, endpoint=False)
    array([ 3.        ,  3.14285714,  3.28571429,  3.42857143,  3.57142857,
            3.71428571,  3.85714286])
    >>> np.linspace(3.0,4.0, num=7, retstep=True)
    (array([ 3.        ,  3.16666667,  3.33333333,  3.5       ,  3.66666667,
            3.83333333,  4.        ]), 0.16666666666666666)

**Pictorial Presentation:**

![NumPy array: linspace() function](https://www.w3resource.com/w3r_images/numpy-linspace-function-image-1.png)  
![NumPy array: linspace() function](https://www.w3resource.com/w3r_images/numpy-linspace-function-image-1-a.png)

**Example-2: NumPy.linspace() method**

    >>> import numpy as np
    >>> import matplotlib.pyplot as plt
    >>> A = 5
    >>> x = np.zeros(A)
    >>> a1 = np.linspace(0, 10, A, endpoint=True)
    >>> a2 = np.linspace(0, 10, A, endpoint=False)
    >>> plt.plot(a1, x, 'o')
    [<matplotlib.lines.Line2D object at 0x7f3d13a48080>]
    >>> plt.plot(a2, x + 0.5, 'o')
    [<matplotlib.lines.Line2D object at 0x7f3d1b582438>]
    >>> plt.ylim([-5.0, 1])
    (-5.0, 1)
    >>> plt.show()

**numpy.linspace.plot show**

![NumPy.linspace() method example](https://www.w3resource.com/w3r_images/numpy-linspace-plot.png)

**Python - NumPy Code Editor:**

**Previous:** [arange()](https://www.w3resource.com/numpy/array-creation/arange.php)  
**Next:** [logspace()](https://www.w3resource.com/numpy/array-creation/logspace.php)

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
