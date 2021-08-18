 


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

# NumPy: Array manipulation routines

Last update on February 26 2020 08:08:50 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Array manipulation routines

This section present the functions of Basic operations, Changing array shape, Transpose-like operations, Changing number of dimensions, Changing kind of array, Joining arrays, Splitting arrays, Tiling arrays, Adding and removing elements and Rearranging elements to access data and subarrays, and to split, reshape, and join the arrays.

![NumPy: numpy-logo](https://www.w3resource.com/w3r_images/numpy-1d-2d-3d-array.png)

**Basic operations**

Name

Description

Syntax

[copyto()](/numpy/manipulation/copyto.php)

Return a new array of given shape and type, without initializing entries.

empty(shape\[, dtype, order\])

**Changing array shape**

Name

Description

Syntax

[reshape()](/numpy/manipulation/reshape.php)

Gives a new shape to an array without changing its data.

reshape(a, newshape\[, order\])

[ravel()](/numpy/manipulation/ravel.php)

Return a contiguous flattened array.

ravel(a\[, order\])

[ndarray.flat](/numpy/manipulation/ndarray-flat.php)

A 1-D iterator over the array.

ndarray.flat

[ndarray.flatten()](/numpy/manipulation/ndarray-flatten.php)

Return a copy of the array collapsed into one dimension.

ndarray.flatten(\[order\])

**Transpose-like operations**

Name

Description

Syntax

[moveaxis()](/numpy/manipulation/moveaxis.php)

Move axes of an array to new positions.

moveaxis(a, source, destination)

[rollaxis](/numpy/manipulation/rollaxis.php)

Roll the specified axis backwards, until it lies in a given position.

rollaxis(a, axis\[, start\])

[swapaxes()](/numpy/manipulation/swapaxes.php)

Interchange two axes of an array.

swapaxes(a, axis1, axis2)

[ndarray.T](/numpy/manipulation/ndarray-t.php)

Same as self.transpose(), except that self is returned if self.ndim &lt; 2.

[transpose()](/numpy/manipulation/transpose.php)

Return a full array with the same shape and type as a given array.

full_like(a, fill_value\[, dtype, order, subok\])

**Changing number of dimensions**

Name

Description

Syntax

[atleast_1d()](/numpy/manipulation/atleast-1d.php)

Convert inputs to arrays with at least one dimension.

atleast_1d(\*arys)

[atleast_2d()](/numpy/manipulation/atleast-2d.php)

View inputs as arrays with at least two dimensions.

atleast_2d(\*arys)

[atleast_3d()](/numpy/manipulation/atleast-3d.php)

View inputs as arrays with at least three dimensions.

atleast_3d(\*arys)

[broadcast](/numpy/manipulation/broadcast.php)

Produce an object that mimics broadcasting.

broadcast

[broadcast_to()](/numpy/manipulation/broadcast-to.php)

Broadcast an array to a new shape.

broadcast_to(array, shape\[, subok\])

[broadcast_arrays()](/numpy/manipulation/broadcast-arrays.php)

Broadcast any number of arrays against each other.

broadcast_arrays(\*args, \*\*kwargs)

[expand_dims()](/numpy/manipulation/expand-dims.php)

Expand the shape of an array.

expand_dims(a, axis)

[squeeze()](/numpy/manipulation/squeeze.php)

Remove single-dimensional entries from the shape of an array.

squeeze(a\[, axis\])

**Changing kind of array**

Name

Description

Syntax

[asarray()](/numpy/manipulation/asarray.php)

Convert the input to an array.

asarray(a\[, dtype, order\])

[asanyarray()](/numpy/manipulation/asanyarray.php)

Convert the input to an ndarray, but pass ndarray subclasses through.

asanyarray(a\[, dtype, order\])

asmatrix()

Interpret the input as a matrix.

asmatrix(data\[, dtype\])

[asfarray()](/numpy/manipulation/asfarray.php)

Return an array converted to a float type.

asfarray(a\[, dtype\])

[asfortranarray()](/numpy/manipulation/asfortranarray.php)

Return an array laid out in Fortran order in memory.

asfortranarray(a\[, dtype\])

[ascontiguousarray()](/numpy/manipulation/ascontiguousarray.php)

Return a contiguous array in memory (C order).

ascontiguousarray(a\[, dtype\])

[asarray_chkfinite()](/numpy/manipulation/asarray-chkfinite.php)

Convert the input to an array, checking for NaNs or Infs.

asarray_chkfinite(a\[, dtype, order\])

[asscalar](/numpy/manipulation/asscalar.php)

Convert an array of size 1 to its scalar equivalent.

asscalar(a)

[require](/numpy/manipulation/require.php)

Return an ndarray of the provided type that satisfies requirements.

require(a\[, dtype, requirements\])

**Joining arrays**

Name

Description

Syntax

[concatenate()](/numpy/manipulation/concatenate.php)

Join a sequence of arrays along an existing axis.

concatenate((a1, a2, …)\[, axis, out\])

[stack()](/numpy/manipulation/stack.php)

Join a sequence of arrays along a new axis.

stack(arrays\[, axis, out\])

[column_stack()](/numpy/manipulation/column-stack.php)

Stack 1-D arrays as columns into a 2-D array.

column_stack(tup)

[dstack()](/numpy/manipulation/dstack.php)

Stack arrays in sequence depth wise (along third axis).

dstack(tup)

[hstack()](/numpy/manipulation/hstack.php)

Stack arrays in sequence horizontally (column wise).

hstack(tup)

[vstack()](/numpy/manipulation/vstack.php)

Stack arrays in sequence vertically (row wise).

vstack(tup)

[block()](/numpy/manipulation/block.php)

Assemble an nd-array from nested lists of blocks.

block(arrays)

**Splitting arrays**

Name

Description

Syntax

[split()](/numpy/manipulation/split.php)

Split an array into multiple sub-arrays.

split(ary, indices_or_sections\[, axis\])

[array_split()](/numpy/manipulation/array-split.php)

Split an array into multiple sub-arrays.

array_split(ary, indices_or_sections\[, axis\])

[dsplit()](/numpy/manipulation/dsplit.php)

Split array into multiple sub-arrays along the 3rd axis (depth).

dsplit(ary, indices_or_sections)

[hsplit()](/numpy/manipulation/hsplit.php)

Split an array into multiple sub-arrays horizontally (column-wise).

hsplit(ary, indices_or_sections)

[vsplit()](/numpy/manipulation/vsplit.php)

Split an array into multiple sub-arrays vertically (row-wise).

vsplit(ary, indices_or_sections)

**Tiling arrays**

Name

Description

Syntax

[tile()](/numpy/manipulation/tile.php)

Construct an array by repeating A the number of times given by reps.

tile(A, reps)

[repeat()](/numpy/manipulation/repeat.php)

Repeat elements of an array.

repeat(a, repeats\[, axis\])

**Adding and removing elements**

Name

Description

Syntax

[delete()](/numpy/manipulation/delete.php)

Return a new array with sub-arrays along an axis deleted.

delete(arr, obj\[, axis\])

[insert()](/numpy/manipulation/insert.php)

Insert values along the given axis before the given indices.

insert(arr, obj, values\[, axis\])

[append()](/numpy/manipulation/append.php)

Append values to the end of an array.

append(arr, values\[, axis\])

[resize()](/numpy/manipulation/resize.php)

Return a new array with the specified shape.

resize(a, new_shape)

[trim_zeros()](/numpy/manipulation/trim-zeros.php)

Trim the leading and/or trailing zeros from a 1-D array or sequence.

trim_zeros(filt\[, trim\])

[unique()](/numpy/manipulation/unique.php)

Find the unique elements of an array.

unique(ar\[, return_index, return_inverse, …\])

**Rearranging elements**

Name

Description

Syntax

[flip()](/numpy/manipulation/flip.php)

Reverse the order of elements in an array along the given axis.

flip(m\[, axis\])

[fliplr()](/numpy/manipulation/fliplr.php)

Flip array in the left/right direction.

fliplr(m)

[flipud()](/numpy/manipulation/flipud.php)

Flip array in the up/down direction.

flipud(m)

[reshape()](/numpy/manipulation/reshape.php)

Gives a new shape to an array without changing its data.

reshape(a, newshape\[, order\])

[roll()](/numpy/manipulation/roll.php)

Roll array elements along a given axis.

roll(a, shift\[, axis\])

[rot90()](/numpy/manipulation/rot90.php)

Rotate an array by 90 degrees in the plane specified by axes.

rot90(m\[, k, axes\]))

**Previous:** [bmat()](https://www.w3resource.com/numpy/array-creation/bmat.php)  
**Next:** [Basic operations copyto()](https://www.w3resource.com/numpy/manipulation/copyto.php)

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
