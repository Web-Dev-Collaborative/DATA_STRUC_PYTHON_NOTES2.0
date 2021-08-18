 


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

# NumPy Array manipulation: array_split() function

Last update on February 26 2020 08:08:50 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## numpy.array_split() function

The array_split() function split an given array into multiple sub-arrays.  
The only difference between these functions is that array_split allows indices_or_sections to be an integer that does not equally divide the axis. For an array of length l that should be split into n sections, it returns l % n sub-arrays of size l//n + 1 and the rest of size l//n.

**Syntax:**

    numpy.array_split(ary, indices_or_sections, axis=0)

![NumPy manipulation: array_split() function](https://www.w3resource.com/w3r_images/numpy-manipulation-array-split-function-image-a.png)

**Version:** 1.15.0

**Parameter:**

<table><thead><tr class="header"><th>Name</th><th>Description</th><th>Required /<br />
Optional</th></tr></thead><tbody><tr class="odd"><td>ary</td><td>Input array.</td><td>Required</td></tr><tr class="even"><td>indices_or_sections</td><td>Indices or sections.</td><td>Required</td></tr><tr class="odd"><td>axis</td><td>The axis along which values are appended. If axis is not given, both arr and values are flattened before use.</td><td>Optional</td></tr></tbody></table>

**Return value:**

**Example-1: numpy.array_split**()

    >>> import numpy as np
    >>> a = np.arange(9.0)
    >>> np.array_split(a, 4)
    [array([ 0.,  1.,  2.]), array([ 3.,  4.]), array([ 5.,  6.]), array([ 7.,  8.])]

**Pictorial Presentation:**

![NumPy manipulation: array-split() function](https://www.w3resource.com/w3r_images/numpy-manipulation-array-split-function-image-1.png)

**Example-2: numpy.array_split**()

    >>> import numpy as np
    >>> a = np.arange(7.0)
    >>> np.array_split(a, 3)
    [array([ 0.,  1.,  2.]), array([ 3.,  4.]), array([ 5.,  6.])]

**Pictorial Presentation:**

![NumPy manipulation: array-split() function](https://www.w3resource.com/w3r_images/numpy-manipulation-array-split-function-image-2.png)

**Python - NumPy Code Editor:**

**Previous:** [split()](https://www.w3resource.com/numpy/manipulation/split.php)  
**Next:** [dsplit()](https://www.w3resource.com/numpy/manipulation/dsplit.php)

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

 
