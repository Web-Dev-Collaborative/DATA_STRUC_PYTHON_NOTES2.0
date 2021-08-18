 


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

# NumPy Binary operations: unpackbits() function

Last update on February 26 2020 08:08:51 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## numpy.unpackbits() function

The unpackbits() function is used to unpack elements of a uint8 array into a binary-valued output array.  
Note: Each element of myarray represents a bit-field that should be unpacked into a binary-valued output array. The shape of the output array is either 1-D (if axis is None) or the same shape as the input array with unpacking done along the axis specified.

**Version:** 1.15.0

**Syntax:**

    numpy.unpackbits(myarray, axis=None)

**Parameter:**

Name

Description

Required /  
Optional

myarray

Input array

Required

axis

The dimension over which bit-unpacking is done. None implies unpacking the flattened array.

Optional

**Return value:**  
unpacked \[ndarray, uint8 type\]  
The elements are binary-valued (0 or 1).

**Example: numpy.unpackbits()** **function**

    >>> import numpy as np
    >>> x = np.array([[3], [5], [15]], dtype=np.uint8)
    >>> x
    array([[ 3],
           [ 5],
           [15]], dtype=uint8)
    >>> y = np.unpackbits(x, axis=1)
    >>> y
    array([[0, 0, 0, 0, 0, 0, 1, 1],
           [0, 0, 0, 0, 0, 1, 0, 1],
           [0, 0, 0, 0, 1, 1, 1, 1]], dtype=uint8)

**Python Code Editor:**

**Previous:** [packbits()](https://www.w3resource.com/numpy/binary-operations/packbits.php)  
**Next:** [binary_repr()](https://www.w3resource.com/numpy/binary-operations/binary-repr.php)

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
