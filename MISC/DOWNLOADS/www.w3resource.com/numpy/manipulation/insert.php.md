 


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

# NumPy Array manipulation: insert() function

Last update on February 26 2020 08:08:50 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## numpy.insert() function

The insert() function is used to insert values along the given axis before the given indices.

**Syntax:**

    numpy.insert(arr, obj, values, axis=None)

![NumPy manipulation: insert() function](https://www.w3resource.com/w3r_images/numpy-manipulation-insert-function-image-a.png)

**Version:** 1.15.0

**Parameter:**

<table><thead><tr class="header"><th>Name</th><th>Description</th><th>Required /<br />
Optional</th></tr></thead><tbody><tr class="odd"><td>arr</td><td>Input array.</td><td>Required</td></tr><tr class="even"><td>obj</td><td>Object that defines the index or indices before which values is inserted.<br />
Support for multiple insertions when obj is a single scalar or a sequence with one element (similar to calling insert multiple times).</td><td>Required</td></tr><tr class="odd"><td>values</td><td>[array_like] Values to insert into arr. If the type of values is different from that of arr, values is converted to the type of arr. values should be shaped so that arr[...,obj,.. .] = values is legal</td><td>Optional</td></tr><tr class="even"><td>axis</td><td>Axis along which to insert values. If axis is None then arr is flattened first.</td><td>Optional</td></tr></tbody></table>

**Return value:**

out \[ndarray\] A copy of arr with values inserted. Note that insert does not occur in-place: a new array is returned. If axis is None, out is a flattened array.

**Example-1: numpy.insert()**

    >>> import numpy as np
    >>> x = np.array([[0,0], [1,1], [2,2]])
    >>> x
    array([[0, 0],
           [1, 1],
           [2, 2]])
    >>> np.insert(x, 2, 4)
    array([0, 0, 4, 1, 1, 2, 2])
    >>> np.insert(x, 2, 4, axis=1)
    array([[0, 0, 4],
           [1, 1, 4],
           [2, 2, 4]])

**Pictorial Presentation:**

![NumPy manipulation: insert() function](https://www.w3resource.com/w3r_images/numpy-manipulation-insert-function-image-1.png)

**Example-2: numpy.insert()**

    >>> import numpy as np
    >>> x = np.array([[0,0], [1,1], [2,2]])
    >>> np.insert(x, [1], [[3], [4], [5]], axis=1)
    array([[0, 3, 0],
           [1, 4, 1],
           [2, 5, 2]])
    >>> np.array_equal(np.insert(x, 1, [3, 4, 5], axis=1), np.insert(x, [1], [[3], [4], [5]], axis=1))
    True

**Pictorial Presentation:**

![NumPy manipulation: insert() function](https://www.w3resource.com/w3r_images/numpy-manipulation-insert-function-image-2.png)

**Example-3: numpy.insert()**

    >>> import numpy as np
    >>> x = np.array([[0,0], [1,1], [2,2]])
    >>> y = x.flatten()
    >>> y
    array([0, 0, 1, 1, 2, 2])
    >>> np.insert(y, [3,3], [6,7])
    array([0, 0, 1, 6, 7, 1, 2, 2])
    >>> np.insert(y, slice(3,5),[7,8])
    array([0, 0, 1, 7, 1, 8, 2, 2])
    >>> np.insert(y, [3,3], [8.12, False])
    array([0, 0, 1, 8, 0, 1, 2, 2])

**Example-4: numpy.insert()**

    >>> import numpy as np
    >>> z = np.arange(12).reshape(3,4)
    >>> idz = (1, 3)
    >>> np.insert(z, idz, 777, axis=1)
    array([[  0, 777,   1,   2, 777,   3],
           [  4, 777,   5,   6, 777,   7],
           [  8, 777,   9,  10, 777,  11]])

**Pictorial Presentation:**

![NumPy manipulation: insert() function](https://www.w3resource.com/w3r_images/numpy-manipulation-insert-function-image-3.png)

**Python - NumPy Code Editor:**

**Previous:** [delete()](https://www.w3resource.com/numpy/manipulation/delete.php)  
**Next:** [append()](https://www.w3resource.com/numpy/manipulation/append.php)

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
