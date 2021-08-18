 


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

# NumPy array creation: array() function

Last update on February 26 2020 08:08:51 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## array() function

The array() function is used to create an array.

**Syntax:**

    numpy.array(object, dtype=None, copy=True, order=’K’, subok=False, ndmin=0)

![NumPy array: array() function](https://www.w3resource.com/w3r_images/numpy-array-function-image-a.png)

**Version:** 1.15.0

**Parameter:**

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Name</th><th>Description</th><th>Required /<br />
Optional</th></tr></thead><tbody><tr class="odd"><td>object</td><td>An array, any object exposing the array interface, an object whose __array__ method returns an array, or any (nested) sequence.</td><td>Required</td></tr><tr class="even"><td>dtype</td><td>The desired data-type for the array. If not given, then the type will be determined as the minimum type required to hold the objects in the sequence. This argument can only be used to 'upcast' the array. For downcasting, use the .astype(t) method.</td><td>optional</td></tr><tr class="odd"><td>copy</td><td>If true (default), then the object is copied. Otherwise, a copy will only be made if __array__ returns a copy, if obj is a nested sequence, or if a copy is needed to satisfy any of the other requirements (dtype, order, etc.).</td><td>optional</td></tr><tr class="even"><td>order</td><td>Specify the memory layout of the array. If object is not an array, the newly created array will be in C order (row major) unless ‘F’ is specified, in which case it will be in Fortran order (column major). If object is an array the following holds.<table><thead><tr class="header"><th>order</th><th>nocopy</th><th>copy=True</th></tr></thead><tbody><tr class="odd"><td>'K'</td><td>unchanged</td><td>F &amp; C order preserved, otherwise most similar order</td></tr><tr class="even"><td>'A'</td><td>unchanged</td><td>F order if input is F and not C, otherwise C order</td></tr><tr class="odd"><td>'C'</td><td>C order</td><td>C order</td></tr><tr class="even"><td>'F'</td><td>F order</td><td>F order</td></tr></tbody></table><p>When copy=False and a copy is made for other reasons, the result is the same as if copy=True, with some exceptions for A, see the Notes section. The default order is ‘K’.</p></td><td>optional</td></tr><tr class="odd"><td>subok</td><td>If True, then sub-classes will be passed-through, otherwise the returned array will be forced to be a base-class array (default).</td><td>optional</td></tr><tr class="even"><td>ndmin</td><td>Specifies the minimum number of dimensions that the resulting array should have. Ones will be pre-pended to the shape as needed to meet this requirement</td><td>optional</td></tr></tbody></table>

**Return value:**

\[ndarray\] An array object satisfying the specified requirements

Example -1: numpy.array(0 function

    >>> import numpy as np
    >>> np.array([2, 4, 6])
    array([2, 4, 6])
    >>> np.array([2, 4, 6.0])
    array([ 2.,  4.,  6.])
    >>> np.array([[2, 3], [4, 5]])
    array([[2, 3],
           [4, 5]])

**Pictorial Presentation:**

![NumPy array: asanyarray() function](https://www.w3resource.com/w3r_images/numpy-array-function-image-1.png)  
![NumPy array: asanyarray() function](https://www.w3resource.com/w3r_images/numpy-array-function-image-1-a.png)

Example-2: numpy.ones_like() function

    >>> import numpy as np
    >>> a = np.array([(2,4),(5,6)], dtype=[('x', '<i4'), ('y','i4')])
    >>> a['y']
    array([4, 6], dtype=int32)
    >>> a['x']
    array([2, 5], dtype=int32)

Example-3: numpy.ones_like() function

    >>> import numpy as np
    >>> np.array(np.mat('2, 4; 5, 6'))
    array([[2, 4],
           [5, 6]])
    >>> np.array(np.mat('2 4; 6 8'))
    array([[2, 4],
           [6, 8]])

Example-4: numpy.ones_like() function

    >>> import numpy as np
    >>> np.array([2, 4, 6], ndmin=4)
    array([[[[2, 4, 6]]]])

Example-4: numpy.ones_like() function

    >>> import numpy as np
    >>> np.array(np.mat('2 4; 6 8'), subok=True )
    matrix([[2, 4],
            [6, 8]])
    >>> np.array(np.mat('2 4; 6 8'), subok=False)
    array([[2, 4],
           [6, 8]])

**Python - NumPy Code Editor:**

**Previous:** [full_like()](https://www.w3resource.com/numpy/array-creation/full_like.php)  
**Next:** [asarray()](https://www.w3resource.com/numpy/array-creation/asarray.php)

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

 

 
