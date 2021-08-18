 


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

# NumPy array creation: arange() function

Last update on February 26 2020 08:08:51 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## numpy.arange() function

The arange() function is used to get evenly spaced values within a given interval.  
Values are generated within the half-open interval \[start, stop\]. For integer arguments the function is equivalent to the Python built-in range function, but returns an ndarray rather than a list.  
When using a non-integer step, such as 0.1, the results will often not be consistent. It is better to use linspace for these cases.

**Syntax:**

    numpy.arange([start, ]stop, [step, ]dtype=None)

![NumPy array: arange() function](https://www.w3resource.com/w3r_images/numpy-arange-function-image-a.png)

**Version:** 1.15.0

**Parameter:**

<table><thead><tr class="header"><th>Name</th><th>Description</th><th>Required /<br />
Optional</th></tr></thead><tbody><tr class="odd"><td>start</td><td>Start of interval. The interval includes this value. The default start value is 0.</td><td>Optional</td></tr><tr class="even"><td>stop</td><td>End of interval. The interval does not include this value, except in some cases where step is not an integer and floating point round-off affects the length of out.</td><td>Required</td></tr><tr class="odd"><td>step</td><td>Spacing between values. For any output out, this is the distance between two adjacent values, out[i+1] - out[i]. The default step size is 1. If step is specified as a position argument, start must also be given.</td><td>Optional</td></tr><tr class="even"><td>dtytpe</td><td>The type of the output array. If dtype is not given, infer the data type from the other input arguments.</td><td>Optional</td></tr></tbody></table>

**Return value:**

arange : ndarray - Array of evenly spaced values.  
For floating point arguments, the length of the result is ceil((stop - start)/step). Because of floating point overflow, this rule may result in the last element of out being greater than stop.

**NumPy.arange() method Example - 1:**

    >>> import numpy as np
    >>> np.arange(5)
    array([0, 1, 2, 3, 4])
    >>> np.arange(5.0)
    array([ 0.,  1.,  2.,  3.,  4.])

**Pictorial Presentation:**

![NumPy array: arange() function](https://www.w3resource.com/w3r_images/numpy-arange-function-image-1.png)  
![NumPy array: arange() function](https://www.w3resource.com/w3r_images/numpy-arange-function-image-1-a.png)

**NumPy.arange() method Example - 2:**

    >>> import numpy as np
    >>> np.arange(5,9)
    array([5, 6, 7, 8])
    >>> np.arange(5,9,3)
    array([5, 8])

**Python - NumPy Code Editor:**

**Previous:** [loadtxt()](https://www.w3resource.com/numpy/array-creation/loadtxt.php)  
**Next:** [linspace()](https://www.w3resource.com/numpy/array-creation/linspace.php)

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

 

 
