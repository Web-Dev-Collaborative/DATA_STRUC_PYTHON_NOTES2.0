 


- [Home](/index.php)
- [Python Home](/python/python-tutorial.php)
- [Python NumPy Home](/numpy/index.php)
- ▼NumPy Binary operations routines
- [NumPy Binary operation Home](/numpy/binary-operations/index.php)
- ▼Binary operations
- [bitwise_and()](/numpy/binary-operations/bitwise-and.php)
- [bitwise_or()](/numpy/binary-operations/bitwise-or.php)
- [bitwise_xor()](/numpy/binary-operations/bitwise-xor.php)
- [invert()](/numpy/binary-operations/invert.php)
- [left_shift()](/numpy/binary-operations/left-shift.php)
- [right_shift()](/numpy/binary-operations/right-shift.php)
- ▼Bit packing
- [packbits()](/numpy/binary-operations/packbits.php)
- [unpackbits()](/numpy/binary-operations/unpackbits.php)
- ▼Output formatting
- [binary_repr()](/numpy/binary-operations/binary-repr.php)

# NumPy Binary operations: bitwise_or() function

Last update on February 26 2020 08:08:51 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## numpy.bitwise_or() function

The bitwise_or() function is used to compute the bit-wise OR of two arrays element-wise.

**Version:** 1.15.0

**Syntax:**

    numpy.bitwise_or(x1, x2, /, out=None, *, where=True, casting=’same_kind’, order=’K’, dtype=None,
    subok=True[, signature, extobj ]) = <ufunc 'bitwise_or'>

**Parameter:**

<table><thead><tr class="header"><th>Name</th><th>Description</th><th>Required /<br />
Optional</th></tr></thead><tbody><tr class="odd"><td>x1,x2</td><td>Only integer and boolean types are handled.</td><td>Required</td></tr><tr class="even"><td>out</td><td>A location into which the result is stored. If provided, it must have a shape that the inputs broadcast to. If not provided or None, a freshly-allocated array is returned.</td><td>Optional</td></tr><tr class="odd"><td>where</td><td>Values of True indicate to calculate the ufunc at that position, values of False indicate to leave the value in the output alone.</td><td>Optional</td></tr><tr class="even"><td>**kwargs</td><td>For other keyword-only arguments.</td><td></td></tr></tbody></table>

**Return value:**  
out: \[ndarray or scalar\]  
Result: This is a scalar if both x1 and x2 are scalars.

**Example-1: numpy.bitwise_or() function**

    >>> import numpy as np
    >>> np.bitwise_or(34, 4)
    38
    >>> np.bitwise_or([34, 4], 3)
    array([35,  7])
    >>> np.bitwise_or([34, 4], [2, 3])
    array([34,  7])

**Example-2: numpy.bitwise_or() function**

    >>> import numpy as np
    >>> np.bitwise_or(np.array([2, 3, 256]), np.array([3, 3, 3]))
    array([  3,   3, 259])
    >>> np.array([2, 3, 256]) | np.array([3, 3, 3])
    array([  3,   3, 259])
    >>> np.bitwise_or([True, True], [False, True])
    array([ True,  True], dtype=bool)

**Python Code Editor:**

**Previous:** [bitwise_and()](https://www.w3resource.com/numpy/binary-operations/bitwise-and.php)  
**Next:** [bitwise_xor()](https://www.w3resource.com/numpy/binary-operations/bitwise-xor.php)

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

 

 
