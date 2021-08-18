 


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

# NumPy Binary operations: left_shift() function

Last update on February 26 2020 08:08:51 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## numpy.left_shift() function

The left_shift() function is used to shift the bits of an integer to the left.  
Note: Bits are shifted to the left by appending x2 0s at the right of x1. Since the internal representation of numbers is in binary format, this operation is equivalent to multiplying x1 by 2\*\*x2

**Version:** 1.15.0

**Syntax:**

    numpy.left_shift(x1, x2, /, out=None, *, where=True, casting=’same_kind’, order=’K’, dtype=None,
    subok=True[, signature, extobj ]) = <ufunc 'left_shift'>

**Parameter:**

<table><thead><tr class="header"><th>Name</th><th>Description</th><th>Required /<br />
Optional</th></tr></thead><tbody><tr class="odd"><td>x1</td><td>Input values.</td><td>Required</td></tr><tr class="even"><td>x2</td><td>Number of zeros to append to x1. Has to be non-negative</td><td>Required</td></tr><tr class="odd"><td>out</td><td>A location into which the result is stored. If provided, it must have a shape that the inputs broadcast to. If not provided or None, a freshly-allocated array is returned.</td><td>Optional</td></tr><tr class="even"><td>where</td><td>Values of True indicate to calculate the ufunc at that position, values of False indicate to leave the value in the output alone.</td><td>Optional</td></tr><tr class="odd"><td>**kwargs</td><td>For other keyword-only arguments.</td><td></td></tr></tbody></table>

**Return value:**

out: \[array of integer type\]  
Return x1 with bits shifted x2 times to the left. This is a scalar if both x1 and x2 are scalars.

**Example-1: numpy.left_shift() function**

    >>> import numpy as np
    >>> np.invert(np.array([True, False]))
    array([False,  True])
    >>> np.binary_repr(8)
    '1000'
    >>> np.left_shift(8,2)
    32
    >>> np.binary_repr(32)
    '100000'

**Example-2: numpy.left_shift() function**

    >>> import numpy as np
    >>> np.left_shift(8,[1,2,3])
    array([16, 32, 64], dtype=int32)

**Python Code Editor:**

**Previous:** [invert()](https://www.w3resource.com/numpy/binary-operations/invert.php)  
**Next:** [right_shift()](https://www.w3resource.com/numpy/binary-operations/right-shift.php)

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

 

[This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.](https://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US)

©w3resource.com 2011-2021

- [Privacy](https://www.w3resource.com/privacy.php)
- [About](https://www.w3resource.com/about.php)
- [Contact](https://www.w3resource.com/contact.php)
- [Feedback](https://www.w3resource.com/feedback.php)
- [Advertise](https://www.w3resource.com/advertise.php)
