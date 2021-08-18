 


- [Home](/index.php)
- [Python Home](/python/python-tutorial.php)
- [NumPy Home](/numpy/index.php)
- ▼NumPy Array manipulation routines
- [NumPy Array manipulation Home](/numpy/manipulation/index.php)
- ▼Basic operations
- [copyto()](/numpy/manipulation/copyto.php)
- ▼Changing array shape
- [reshape()](/numpy/manipulation/reshape.php)
- [ravel()](/numpy/manipulation/ravel.php)
- [ndarray.flat()](/numpy/manipulation/ndarray-flat.php)
- [ndarray.flatten()](/numpy/manipulation/ndarray-flatten.php)
- ▼Transpose-like operations
- [moveaxis()](/numpy/manipulation/moveaxis.php)
- [rollaxis()](/numpy/manipulation/rollaxis.php)
- [swapaxes()](/numpy/manipulation/swapaxes.php)
- [ndarray.T()](/numpy/manipulation/ndarray-t.php)
- [transpose()](/numpy/manipulation/transpose.php)
- ▼Changing number of dimensions
- [atleast_1d()](/numpy/manipulation/atleast-1d.php)
- [atleast_2d()](/numpy/manipulation/atleast-2d.php)
- [atleast_3d()](/numpy/manipulation/atleast-3d.php)
- [broadcast](/numpy/manipulation/broadcast.php)
- [broadcast_to()](/numpy/manipulation/broadcast-to.php)
- [broadcast_arrays()](/numpy/manipulation/broadcast-arrays.php)
- [expand_dims()](/numpy/manipulation/expand-dims.php)
- [squeeze()](/numpy/manipulation/squeeze.php)
- ▼Changing kind of array
- [asfarray()](/numpy/manipulation/asfarray.php)
- [asfortranarray()](/numpy/manipulation/asfortranarray.php)
- [asarray_chkfinite()](/numpy/manipulation/asarray-chkfinite.php)
- [asscalar()](/numpy/manipulation/asscalar.php)
- [require()](/numpy/manipulation/require.php)
- ▼Joining arrays
- [concatenate()](/numpy/manipulation/concatenate.php)
- [stack()](/numpy/manipulation/stack.php)
- [column_stack()](/numpy/manipulation/column-stack.php)
- [dstack()](/numpy/manipulation/dstack.php)
- [hstack()](/numpy/manipulation/hstack.php)
- [vstack()](/numpy/manipulation/vstack.php)
- [block()](/numpy/manipulation/block.php)
- ▼Splitting arrays
- [split()](/numpy/manipulation/split.php)
- [array_split()](/numpy/manipulation/array-split.php)
- [dsplit()](/numpy/manipulation/dsplit.php)
- [hsplit()](/numpy/manipulation/hsplit.php)
- [vsplit()](/numpy/manipulation/vsplit.php)
- ▼Tiling arrays
- [tile()](/numpy/manipulation/tile.php)
- [repeat()](/numpy/manipulation/repeat.php)
- ▼Adding and removing elements
- [delete()](/numpy/manipulation/delete.php)
- [insert()](/numpy/manipulation/insert.php)
- [append()](/numpy/manipulation/append.php)
- [resize()](/numpy/manipulation/resize.php)
- [trim_zeros()](/numpy/manipulation/trim-zeros.php)
- [unique()](/numpy/manipulation/unique.php)
- ▼Rearrangeing elements
- [flip()](/numpy/manipulation/flip.php)
- [fliplr()](/numpy/manipulation/fliplr.php)
- [flipud()](/numpy/manipulation/flipud.php)
- [roll()](/numpy/manipulation/roll.php)
- [rot90()](/numpy/manipulation/rot90.php)

# NumPy Array manipulation: ravel() function

Last update on February 26 2020 08:08:50 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## numpy.ravel() function

The ravel() function is used to create a contiguous flattened array.  
A 1-D array, containing the elements of the input, is returned. A copy is made only if needed.  
As of NumPy 1.10, the returned array will have the same type as the input array. (for example, a masked array will be returned for a masked array input)

**Syntax:**

    numpy.ravel(a, order='C')

![NumPy manipulation: ravel() function](https://www.w3resource.com/w3r_images/numpy-manipulation-ravel-function-image-a.png)

**Version:** 1.15.0

**Parameter:**

Name

Description

Required /  
Optional

a

Input array. The elements in a are read in the order specified by order, and packed as a 1-D array.

Required

order

The elements of a are read using this index order. ‘C’ means to index the elements in row-major, C-style order, with the last axis index changing fastest, back to the first axis index changing slowest. ‘F’ means to index the elements in column-major, Fortran-style order, with the first index changing fastest, and the last index changing slowest. Note that the ‘C’ and ‘F’ options take no account of the memory layout of the underlying array, and only refer to the order of axis indexing. ‘A’ means to read the elements in Fortran-like index order if a is Fortran contiguous in memory, C-like order otherwise. ‘K’ means to read the elements in the order they occur in memory, except for reversing the data when strides are negative. By default, ‘C’ index order is used.

Ooptional

**Return value:**

y : array_like - y is an array of the same subtype as a, with shape (a.size,). Note that matrices are special cased for backward compatibility, if a is a matrix, then y is a 1-D ndarray.

**Example-1: numpy.ravel() function**

    >>> import numpy as np
    >>> x = np.array([[1, 2, 3], [4, 5, 6]])
    >>> print(np.ravel(x))
    [1 2 3 4 5 6]

**Pictorial Presentation:**

![Python NumPy manipulation: ravel() function](https://www.w3resource.com/w3r_images/numpy-manipulation-ravel-function-image-1.png)

**Example-2: numpy.ravel() function**

    >>> import numpy as np
    >>> x = np.array([[1, 2, 3], [4, 5, 6]])
    >>> print(x.reshape(-1))
    [1 2 3 4 5 6]
    >>> print(np.ravel(x, order='F'))
    [1 4 2 5 3 6]a.ravel

**Pictorial Presentation:**

![Python NumPy manipulation: ravel() function](https://www.w3resource.com/w3r_images/numpy-manipulation-ravel-function-image-2.png)  
![Python NumPy manipulation: ravel() function](https://www.w3resource.com/w3r_images/numpy-manipulation-ravel-function-image-3.png)

**Example-3: numpy.ravel() function**

    >>> import numpy as np
    >>> a = np.array([[2,3,4], [5,6,7]])
    >>> print(np.ravel(a, order='F'))
    [2 5 3 6 4 7]
    >>> print(np.ravel(a.T))
    [2 5 3 6 4 7]
    >>> print(np.ravel(a.T, order='A'))
    [2 3 4 5 6 7]
    >>> a = np.arange(2)[::-1]; a
    array([1, 0])
    >>> a.ravel(order='C')
    array([1, 0])
    >>> a.ravel(order='K')
    array([1, 0])
    >>> a.ravel(order='C')
    array([1, 0])
    >>> a = np.arange(12).reshape(2,3,2).swapaxes(1,2); a
    array([[[ 0,  2,  4],
            [ 1,  3,  5]],

           [[ 6,  8, 10],
            [ 7,  9, 11]]])
    >>> a.ravel(order='C')
    array([ 0,  2,  4,  1,  3,  5,  6,  8, 10,  7,  9, 11])
    >>> a.ravel(order='K')
    array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11])

**Python - NumPy Code Editor:**

**Previous:** [Changing array shape reshape()](https://www.w3resource.com/numpy/manipulation/reshape.php)  
**Next:** [ndarray.flat()](https://www.w3resource.com/numpy/manipulation/ndarray-flat.php)



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
