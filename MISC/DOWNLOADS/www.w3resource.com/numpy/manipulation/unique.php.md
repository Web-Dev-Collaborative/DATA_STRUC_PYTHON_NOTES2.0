 


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

# NumPy Array manipulation: unique() function

Last update on September 11 2020 06:50:22 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## numpy.unique() function

The unique() function is used to find the unique elements of an array.Returns the sorted unique elements of an array. There are three optional outputs in addition to the unique elements:

- the indices of the input array that give the unique values
- the indices of the unique array that reconstruct the input array
- the number of times each unique value comes up in the input array

**Syntax:**

    numpy.unique(filt, trim='fb')

![NumPy manipulation: unique() function](https://www.w3resource.com/w3r_images/numpy-manipulation-unique-function-image-a.png)

**Version:** 1.15.0

**Parameter:**

<table><thead><tr class="header"><th>Name</th><th>Description</th><th>Required /<br />
Optional</th></tr></thead><tbody><tr class="odd"><td>ar</td><td>Input array. Unless axis is specified, this will be flattened if it is not already 1-D.</td><td>Required</td></tr><tr class="even"><td>return_index</td><td>If True, also return the indices of ar (along the specified axis, if provided, or in the flattened array) that result in the unique array.</td><td>Optional</td></tr><tr class="odd"><td>return_inverse</td><td>If True, also return the indices of the unique array (for the specified axis, if provided) that can be used to reconstruct ar.</td><td>Optional</td></tr><tr class="even"><td>return_counts</td><td>If True, also return the number of times each unique item appears in ar.</td><td>Optional</td></tr><tr class="odd"><td>axis</td><td>The axis to operate on. If None, ar will be flattened. If an integer, the subarrays indexed by the given axis will be flattened and treated as the elements of a 1-D array with the dimension of the given axis, see the notes for more details. Object arrays or structured arrays that contain objects are not supported if the axis kwarg is used. The default is None.</td><td>Optional</td></tr></tbody></table>

**Return value:**

unique : ndarray - The sorted unique values.  
unique_indices : ndarray, optional - The indices of the first occurrences of the unique values in the original array. Only provided if return_index is True.  
unique_inverse : ndarray, optional - The indices to reconstruct the original array from the unique array. Only provided if return_inverse is True.  
unique_counts : ndarray, optional - The number of times each of the unique values comes up in the original array. Only provided if return_counts is True.  
New in version 1.9.0.

**Example-1: numpy.unique() function**

    >>> import numpy as np
    >>> np.unique([0,1,2,0,2,3,4,3,0,4])
    array([0, 1, 2, 3, 4])

**Pictorial Presentation:**

![NumPy manipulation: unique() function](https://www.w3resource.com/w3r_images/numpy-manipulation-unique-function-image-1.png)

**Example-2: numpy.unique() function**

    >>> import numpy as np
    >>> x = np.array([[1, 1], [2,3], [3,4]])
    >>> np.unique(x)
    array([1, 2, 3, 4])

**Pictorial Presentation:**

![Python NumPy manipulation: unique() function](https://www.w3resource.com/w3r_images/numpy-manipulation-unique-function-image-2.png)

**Example-3: numpy.unique() function**

    >>> import numpy as np
    >>> x = np.array(['o', 'p', 'y', 't', 'h', 'o', 'p'])
    >>> u, indices = np.unique(x, return_index=True)
    >>> u
    array(['h', 'o', 'p', 't', 'y'],
          dtype='<U1')
    >>> indices
    array([4, 0, 1, 3, 2])
    >>> x[indices]
    array(['h', 'o', 'p', 't', 'y'],
          dtype='<U1')

**Example-4: numpy.unique() function**

    >>> import numpy as np
    >>> x = np.array([0, 1, 2, 5, 2, 6, 5, 2, 3, 1])
    >>> u, indices = np.unique(x, return_inverse=True)
    >>> u
    array([0, 1, 2, 3, 5, 6])

**Pictorial Presentation:**

![NumPy manipulation: unique() function](https://www.w3resource.com/w3r_images/numpy-manipulation-unique-function-image-3.png)

**Example-5: numpy.unique() function**

    >>> import numpy as np
    >>> x = np.array([0, 1, 2, 5, 2, 6, 5, 2, 3, 1])
    >>> indices
    array([0, 1, 2, 4, 2, 5, 4, 2, 3, 1])
    >>> u[indices]
    array([0, 1, 2, 5, 2, 6, 5, 2, 3, 1])

**Example-6: numpy.unique() function**

    >>> import numpy as np
    >>> x = np.array([1,2,5,3,4,2,3,2,5,4])
    >>> u, indices = np.unique(x, return_inverse=True)
    >>> u
    array([1, 2, 3, 4, 5])

**Pictorial Presentation:**

![NumPy manipulation: unique() function](https://www.w3resource.com/w3r_images/numpy-manipulation-unique-function-image-4.png)

**Example-7: numpy.unique() function**

    >>> import numpy as np
    >>> x = np.array([1,2,5,3,4,2,3,2,5,4])
    >>> u, indices = np.unique(x, return_inverse=True)
    >>> indices
    array([0, 1, 4, 2, 3, 1, 2, 1, 4, 3])
    >>> u[indices]
    array([1, 2, 5, 3, 4, 2, 3, 2, 5, 4])

**Python - NumPy Code Editor:**

**Previous:** [trim_zeros()](https://www.w3resource.com/numpy/manipulation/trim-zeros.php)  
**Next:** [Rearrangeing elements flip()](https://www.w3resource.com/numpy/manipulation/flip.php)



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
