 


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

# NumPy Array manipulation: tile() function

Last update on February 26 2020 08:08:51 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## numpy.tile() function

The tile() function is used to construct an array by repeating A the number of times given by reps.  
If reps has length d, the result will have dimension of max(d, A.ndim).  
If A.ndim &lt; d, A is promoted to be d-dimensional by prepending new axes. So a shape (3,) array is promoted to (1, 3) for 2-D replication, or shape (1, 1, 3) for 3-D replication. If this is not the desired behavior, promote A to d-dimensions manually before calling this function.  
If A.ndim &gt; d, reps is promoted to A.ndim by pre-pending 1’s to it. Thus for an A of shape (2, 3, 4, 5), a reps of (2, 2) is treated as (1, 1, 2, 2).

Note: Although tile may be used for broadcasting, it is strongly recommended to use numpy’s broadcasting operations and functions

**Syntax:**

    numpy.tile(A, reps)

![NumPy manipulation: flatten() function](https://www.w3resource.com/w3r_images/numpy-manipulation-tile-function-image-a.png)

**Version:** 1.15.0

**Parameter:**

<table><thead><tr class="header"><th>Name</th><th>Description</th><th>Required /<br />
Optional</th></tr></thead><tbody><tr class="odd"><td>a</td><td>The input array.</td><td>Required</td></tr><tr class="even"><td>reps</td><td>The number of repetitions of A along each axis.</td><td>Required</td></tr></tbody></table>

**Return value:**

c \[ndarray\] The tiled output array.

**Example-1: numpy.tile() function**

    >>> import numpy as np
    >>> x = np.array([3, 5, 7])
    >>> np.tile(x, 3)
    array([3, 5, 7, 3, 5, 7, 3, 5, 7])
    >>> np.tile(x, (3,3))
    array([[3, 5, 7, 3, 5, 7, 3, 5, 7],
           [3, 5, 7, 3, 5, 7, 3, 5, 7],
           [3, 5, 7, 3, 5, 7, 3, 5, 7]])

**Pictorial Presentation:**

![NumPy manipulation: tile() function](https://www.w3resource.com/w3r_images/numpy-manipulation-tile-function-image-2.png)

**Example-2: numpy.tile() function**

    >>> import numpy as np
    >>> x = np.array([3, 5, 7])
    >>> np.tile(x, (3, 1, 3))
    array([[[3, 5, 7, 3, 5, 7, 3, 5, 7]],

           [[3, 5, 7, 3, 5, 7, 3, 5, 7]],

           [[3, 5, 7, 3, 5, 7, 3, 5, 7]]])

**Example-3: numpy.tile() function**

    >>> import numpy as np
    >>> y = np.array([[3, 4], [5, 6]])
    >>> np.tile(y, 3)
    array([[3, 4, 3, 4, 3, 4],
           [5, 6, 5, 6, 5, 6]])

**Pictorial Presentation:**

![NumPy manipulation: tile() function](https://www.w3resource.com/w3r_images/numpy-manipulation-tile-function-image-1.png)

**Example-4: numpy.tile() function**

    >>> import numpy as mp
    >>> np.tile(y, (3, 1))
    array([[3, 4],
           [5, 6],
           [3, 4],
           [5, 6],
           [3, 4],
           [5, 6]])
    >>> z = np.array([3, 5, 7, 9])
    >>> np.tile(z,(4,1))
    array([[3, 5, 7, 9],
           [3, 5, 7, 9],
           [3, 5, 7, 9],
           [3, 5, 7, 9]])

**Python - NumPy Code Editor:**

**Previous:** [vsplit()](https://www.w3resource.com/numpy/manipulation/vsplit.php)  
**Next:** [repeat()](https://www.w3resource.com/numpy/manipulation/repeat.php)



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
