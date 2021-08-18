 


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

# NumPy Binary operations: binary_repr() function

Last update on February 26 2020 08:08:51 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## numpy.binary_repr() <span class="heading">function</span>

The binary_repr() function is used to get the binary representation of the given input number as a string.

Note: For negative numbers, if width is not given, a minus sign is added to the front. If width is given, the two’s complement of the number is returned, with respect to that width.  
In a two’s-complement system negative numbers are represented by the two’s complement of the absolute value.  
A N-bit two’s-complement system can represent every integer in the range −2<sup>N−1</sup> to +2<sup>N−1</sup> − 1.

**Version:** 1.15.0

**Syntax:**

    numpy.binary_repr(num, width=None)

**Parameter:**

Name

Description

Required /  
Optional

num

Only an integer decimal number can be used.

Required

width

The length of the returned string if num is positive, or the length of the two’s complement if num is negative, provided that width is at least a sufficient number of bits for num to be represented in the designated form.

Optional

**Return value:**  
bin \[str\]  
Binary representation of num or two’s complement of num.

**Example-1: numpy.binary_repr() function**

    >>> import numpy as np
    >>> np.binary_repr(5)
    '101'
    >>> np.binary_repr(-5)
    '-101'
    >>> np.binary_repr(5, width=4)
    '0101

**Example-2: numpy.binary_repr() function**

    >>> import numpy as np
    >>> np.binary_repr(-5, width=4)
    '1011'
    >>> np.binary_repr(-5, width=5)
    '11011'

**Python Code Editor:**

**Previous:** [unpackbits()](https://www.w3resource.com/numpy/binary-operations/unpackbits.php)  
**Next:** [NumPy String operation Home](https://www.w3resource.com/numpy/string-operations/index.php)

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

 

 
