 


- [Home](/index.php)
- [Python Home](/python/python-tutorial.php)
- [NumPy Home](/numpy/index.php)
- ▼NumPy Array creation routines
- [NumPy array Home](/numpy/array-creation/index.php)
- ▼Ones and Zeros
- [empty()](/numpy/array-creation/empty.php)
- [empty_like()](/numpy/array-creation/empty_like.php)
- [eye()](/numpy/array-creation/eye.php)
- [identity()](/numpy/array-creation/identity.php)
- [ones()](/numpy/array-creation/ones.php)
- [ones_like()](/numpy/array-creation/ones_like.php)
- [zeros()](/numpy/array-creation/zeros.php)
- [zeros_like()](/numpy/array-creation/zeros_like.php)
- [full()](/numpy/array-creation/full.php)
- [full_like()](/numpy/array-creation/full_like.php)
- ▼From existing data
- [array()](/numpy/array-creation/array.php)
- [asarray()](/numpy/array-creation/asarray.php)
- [asanyarray()](/numpy/array-creation/asanyarray.php)
- [ascontiguousarray()](/numpy/array-creation/ascontiguousarray.php)
- [asmatrix()](/numpy/array-creation/asmatrix.php)
- [copy()](/numpy/array-creation/copy.php)
- [fromfunction()](/numpy/array-creation/fromfunction.php)
- [fromiter()](/numpy/array-creation/fromiter.php)
- [fromstring()](/numpy/array-creation/fromstring.php)
- [loadtxt()](/numpy/array-creation/loadtxt.php)
- ▼Numerical ranges
- [arange()](/numpy/array-creation/arange.php)
- [linspace()](/numpy/array-creation/linspace.php)
- [logspace()](/numpy/array-creation/logspace.php)
- [geomspace()](/numpy/array-creation/geomspace.php)
- [meshgrid()](/numpy/array-creation/meshgrid.php)
- [mgrid()](/numpy/array-creation/mgrid.php)
- [ogrid()](/numpy/array-creation/ogrid.php)
- ▼Building matrices
- [diag()](/numpy/array-creation/diag.php)
- [diagflat()](/numpy/array-creation/diagflat.php)
- [tri()](/numpy/array-creation/tri.php)
- [tril()](/numpy/array-creation/tril.php)
- [triu()](/numpy/array-creation/triu.php)
- [vander()](/numpy/array-creation/vander.php)
- ▼The Matrix class
- [mat()](/numpy/array-creation/mat.php)
- [bmat()](/numpy/array-creation/bmat.php)

# NumPy array creation: loadtxt() function

Last update on February 26 2020 08:08:51 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## loadtxt() function

The loadtxt() function is used to load data from a text file.  
Each row in the text file must have the same number of values.

**Syntax:**

    numpy.loadtxt(fname, dtype=<class 'float'7gt;, comments='#', delimiter=None, converters=None, skiprows=0, usecols=None, unpack=False, ndmin=0, encoding='bytes')

![NumPy array: loadtxt() function](https://www.w3resource.com/w3r_images/numpy-loadtxt-function-image-a.png)

**Version:** 1.15.0

**Parameter:**

<table><thead><tr class="header"><th>Name</th><th>Description</th><th>Required /<br />
Optional</th></tr></thead><tbody><tr class="odd"><td>fname</td><td>File, filename, or generator to read. If the filename extension is .gz or .bz2, the file is first decompressed. Note that generators should return byte strings for Python 3k</td><td>Required</td></tr><tr class="even"><td>dtype</td><td>Data-type of the resulting array; default: float. If this is a structured data-type, the resulting array will be 1-dimensional, and each row will be interpreted as an element of the array. In this case, the number of columns used must match the number of fields in the data-type.</td><td>Optional</td></tr><tr class="odd"><td>comments</td><td>The characters or list of characters used to indicate the start of a comment. None implies no comments. For backwards compatibility, byte strings will be decoded as 'latin1'. The default is '#'.</td><td>Optional</td></tr><tr class="even"><td>delimiter</td><td>The string used to separate values. For backwards compatibility, byte strings will be decoded as ‘latin1’. The default is whitespace.</td><td>Optional</td></tr><tr class="odd"><td>converters</td><td>A dictionary mapping column number to a function that will parse the column string into the desired value. E.g., if column 0 is a date string: converters = {0: datestr2num}. Converters can also be used to provide a default value for missing data (but see also genfromtxt): converters = {3: lambda s: float(s. strip() or 0)}. Default: None.</td><td>optional</td></tr><tr class="even"><td>skiprows</td><td>Skip the first skiprows lines; default: 0</td><td>optional</td></tr><tr class="odd"><td>usecols</td><td>Which columns to read, with 0 being the first. For example, usecols = (1,4,5) will extract the 2nd, 5th and 6th columns. The default, None,results in all columns being read.<br />
Changed in version 1.11.0: When a single column has to be read it is possible to use an integer instead of a tuple. E.g usecols = 3 reads the fourth column the same way as usecols = (3,) would</td><td>optional</td></tr><tr class="even"><td>unpack</td><td>If True, the returned array is transposed, so that arguments may be unpacked using x, y, z = loadtxt(...). When used with a structured data-type, arrays are returned for each field. Default is False.</td><td>optional</td></tr><tr class="odd"><td>ndmin</td><td>The returned array will have at least ndmin dimensions. Otherwise monodimensional axes will be squeezed. Legal values: 0 (default), 1 or 2. New in version 1.6.0.</td><td>optional</td></tr><tr class="even"><td>encoding</td><td>Encoding used to decode the inputfile. Does not apply to input streams. The special value 'bytes' enables backward compatibility workarounds that ensures you receive byte arrays as results if possible and passes 'latin1' encoded strings to converters. Override this value to receive unicode arrays and pass strings as input to converters. If set to None the system default is used. The default value is 'bytes'. New in version 1.14.0.</td><td>optional</td></tr></tbody></table>

**Return value:**

\[ndarray\]  
Data read from the text file

**Example-1: NumPy.loadtxt() method**

    >>> import numpy as np
    >>> from io import StringIO
    >>> a = StringIO(u"0 1\n2 3")
    >>> np.loadtxt(a)
    array([[ 0.,  1.],
           [ 2.,  3.]])

**Pictorial Presentation:**

![NumPy array: loadtxt() function](https://www.w3resource.com/w3r_images/numpy-loadtxt-function-image-1.png)

**Example-2: NumPy.loadtxt() method**

    >>> import numpy as np
    >>> from io import StringIO
    >>> b = StringIO(u"M 45 85\nF 36 47")
    >>> np.loadtxt(b, dtype={'names': ('gender', 'age', 'weight'),   'formats': ('S1', 'i4', 'f4')})
    array([(b'M', 45, 85.0), (b'F', 36, 47.0)],
          dtype=[('gender', 'S1'), ('age', '<i4'), ('weight', '<f4')])

**Python - NumPy Code Editor:**

**Previous:** [fromstring()](https://www.w3resource.com/numpy/array-creation/fromstring.php)  
**Next:** [Numerical ranges arange()](https://www.w3resource.com/numpy/array-creation/arange.php)

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
