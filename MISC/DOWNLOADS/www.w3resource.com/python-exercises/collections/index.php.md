 


- [Home](/index.php)
- [Python Home](/python/python-tutorial.php)
- ▼Python Exercises
- [Exercises Home](/python-exercises/)
- [Basic - Part-I](/python-exercises/python-basic-exercises.php)
- [Basic - Part-II](/python-exercises/basic/)
- [Modules](/python-exercises/modules/index.php)
- [String](/python-exercises/string/)
- [JSON](/python-exercises/python-json-index.php)
- [List](/python-exercises/list/)
- [Dictionary](/python-exercises/dictionary/)
- [Tuple](/python-exercises/tuple/)
- [Sets](/python-exercises/sets/)
- [Collections](/python-exercises/collections/index.php)
- [Heap queue algorithm](/python-exercises/heap-queue-algorithm/index.php)
- [Array](/python-exercises/array/)
- [Enum](/python-exercises/enum/)
- [Bisect](/python-exercises/bisect/)
- [Condition Statements and Loops](/python-exercises/python-conditional-statements-and-loop-exercises.php)
- [Functions](/python-exercises/python-functions-exercises.php)
- [Lambda](/python-exercises/lambda/index.php)
- [Map](/python-exercises/map/index.php)
- [Operating System Services](/python-exercises/os/index.php)
- [Date Time](/python-exercises/date-time-exercise/index.php)
- [Class](/python-exercises/class-exercises/index.php)
- [Search and Sorting](/python-exercises/data-structures-and-algorithms/index.php)
- [Linked List](/python-exercises/data-structures-and-algorithms/python-linked-list.php)
- [Binary Search Tree](/python-exercises/data-structures-and-algorithms/python-binary-search-tree-index.php)
- [Recursion](/python-exercises/data-structures-and-algorithms/python-recursion.php)
- [Math](/python-exercises/math/index.php)
- [File I/O](/python-exercises/file/index.php)
- [Regular Expression](/python-exercises/re/index.php)
- [SQLite Database](/python-exercises/sqlite/index.php)
- [CSV Read, Write](/python-exercises/csv/index.php)
- [Itertools](/python-exercises/itertools/index.php)
- [Requests](/python-exercises/requests/index.php)
- ▼Python GUI tkinter
- [tkinter Basic](/python-exercises/tkinter/index-basic.php)
- [tkinter widgets](/python-exercises/tkinter/index.php)
- ▼Python NumPy
- [Python NumPy Home](/python-exercises/numpy/index.php)
- ▼Python GeoPy
- [Python GeoPy Home](/python-exercises/geopy/index.php)
- ▼BeautifulSoup
- [BeautifulSoup Home](/python-exercises/BeautifulSoup/index.php)
- ▼Arrow Module
- [Arrow Home](/python-exercises/arrow/index.php)
- ▼Python Pandas
- [Python Pandas Home](/python-exercises/pandas/index.php)
- ▼Python Machine Learning
- [Machine Learning Home](/machine-learning/scikit-learn/iris/index.php)
- ▼Python Web Scraping
- [Web Scraping](/python-exercises/web-scraping/index.php)
- ▼Python Challenges
- [Challenges-1](/python-exercises/challenges/1/index.php)
- ▼Python Mini Project
- [Python Projects](/projects/python/index.php)
- ▼Python Natural Language Toolkit
- [Python NLTK](/python-exercises/nltk/index.php)
- ▼Python Project
- [Novel Coronavirus (COVID-19)](/python-exercises/project/covid-19/index.php)
- [..More to come..]()

# Python Data Types: Collections - Exercises, Practice, Solution

Last update on December 31 2020 11:06:32 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Python Collections \[ 36 exercises with solution\]

\[_An editor is available at the bottom of the page to write and execute the scripts._\]

Collections module implements specialized container datatypes providing alternatives to Python's general purpose built-in containers, dict, list, set, and tuple.

**1.** Write a Python program that iterate over elements repeating each as many times as its count. [Go to the editor](#EDITOR)  
Sample Output: \['p', 'p', 'p', 'p', 'q', 'q'\]

[Click me to see the sample solution](python-collections-exercise-1.php)

**2.** Write a Python program to find the most common elements and their counts of a specified text. [Go to the editor](#EDITOR)  
Original string: lkseropewdssafsdfafkpwe  
Most common three characters of the said string:  
\[('s', 4), ('e', 3), ('f', 3)\]  
[Click me to see the sample solution](python-collections-exercise-2.php)

**3.** Write a Python program to create a new deque with three items and iterate over the deque's elements. [Go to the editor](#EDITOR)  
Sample Output:  
a  
e  
i  
o  
u  
[Click me to see the sample solution](python-collections-exercise-3.php)

**4.** Write a Python program to find the occurrences of 10 most common words in a given text. [Go to the editor](#EDITOR)  
Sample Output:  
\[('Python', 6), ('the', 6), ('and', 5), ('We', 2), ('with', 2), ('The', 1), ('Software', 1), ('Foundation', 1), ('PSF', 1), ('is', 1)\]  
[Click me to see the sample solution](python-collections-exercise-4.php)

**5.** Write a Python program that accept some words and count the number of distinct words. Print the number of distinct words and number of occurrences for each distinct word according to their appearance. [Go to the editor](#EDITOR)  
Input number of words: 5  
Input the words:  
Red  
Green  
Blue  
Black  
White  
5  
1 1 1 1 1  
[Click me to see the sample solution](python-collections-exercise-5.php)

**6.** Write a Python program that accept name of given subject and marks. Input number of subjects in first line and subject name,marks separated by a space in next line. Print subject name and marks in order of its first occurrence. [Go to the editor](#EDITOR)  
Sample Output:  
Powered by  
Number of subjects: 3  
Input Subject name and marks: Bengali 58  
Input Subject name and marks: English 62  
Input Subject name and marks: Math 68  
Bengali 58  
English 62  
Math 68  
[Click me to see the sample solution](python-collections-exercise-6.php)

**7.** Write a Python program to create a deque and append few elements to the left and right, then remove some elements from the left, right sides and reverse the deque. [Go to the editor](#EDITOR)  
Sample Output:  
deque(\['Red', 'Green', 'White'\])  
Adding to the left:  
deque(\['Pink', 'Red', 'Green', 'White'\])  
Adding to the right:  
deque(\['Pink', 'Red', 'Green', 'White', 'Orange'\])  
Removing from the right:  
deque(\['Pink', 'Red', 'Green', 'White'\])  
Removing from the left:  
deque(\['Red', 'Green', 'White'\])  
Reversing the deque:  
deque(\['White', 'Green', 'Red'\])  
[Click me to see the sample solution](python-collections-exercise-7.php)

**8.** Write a Python program to create a deque from an existing iterable object. [Go to the editor](#EDITOR)  
Sample Output:  
Original tuple:  
(2, 4, 6)  
&lt;class 'tuple'&gt;  
Original deque:  
deque(\[2, 4, 6\])  
New deque from an existing iterable object:  
deque(\[2, 2, 4, 6, 8, 10, 12\])  
&lt;class 'collections.deque'&gt;  
[Click me to see the sample solution](python-collections-exercise-8.php)

**9.** Write a Python program to add more number of elements to a deque object from an iterable object. [Go to the editor](#EDITOR)  
Sample Output:  
Even numbers:  
deque(\[2, 4, 6, 8, 10\])  
More even numbers:  
deque(\[2, 4, 6, 8, 10, 12, 14, 16, 18, 20\])  
[Click me to see the sample solution](python-collections-exercise-9.php)

**10.** Write a Python program to remove all the elements of a given deque object. [Go to the editor](#EDITOR)  
Sample Output:  
Original Deque object with odd numbers:  
deque(\[1, 3, 5, 7, 9\])  
Deque length: 5  
Deque object after removing all numbers- deque(\[\])  
Deque length:0  
[Click me to see the sample solution](python-collections-exercise-10.php)

**11.** Write a Python program to copy of a deque object and verify the shallow copying process. [Go to the editor](#EDITOR)  
Sample Output:  
Content of dq1:  
deque(\[1, 3, 5, 7, 9\])  
dq2 id:  
140706429557152  
Content of dq2:  
deque(\[1, 3, 5, 7, 9\])  
dq2 id:  
140706406914152  
Checking the first element of dq1 and dq2 are shallow copies:  
11065888  
11065888  
[Click me to see the sample solution](python-collections-exercise-11.php)

**12.** Write a Python program to count the number of times a specific element presents in a deque object. [Go to the editor](#EDITOR)  
Sample Output:  
Number of 2 in the sequence  
5  
Number of 4 in the sequence  
4  
[Click me to see the sample solution](python-collections-exercise-12.php)

**13.** Write a Python program to rotate a Deque Object specified number (positive) of times. [Go to the editor](#EDITOR)  
Sample Output:  
Deque before rotation:  
deque(\[2, 4, 6, 8, 10\])  
Deque after 1 positive rotation:  
deque(\[10, 2, 4, 6, 8\])  
Deque after 2 positive rotations:  
deque(\[6, 8, 10, 2, 4\])  
[Click me to see the sample solution](python-collections-exercise-13.php)

**14.** Write a Python program to rotate a Deque Object specified number (negative) of times. [Go to the editor](#EDITOR)  
Sample Output:  
Deque before rotation:  
deque(\[2, 4, 6, 8, 10\])  
Deque after 1 negative rotation:  
deque(\[4, 6, 8, 10, 2\])  
Deque after 2 negative rotations:  
deque(\[8, 10, 2, 4, 6\])  
[Click me to see the sample solution](python-collections-exercise-14.php)

**15.** Write a Python program to find the most common element of a given list. [Go to the editor](#EDITOR)  
Sample Output:  
Original list:  
\['PHP', 'PHP', 'Python', 'PHP', 'Python', 'JS', 'Python', 'Python', 'PHP', 'Python'\]  
Most common element of the said list:  
Python  
[Click me to see the sample solution](python-collections-exercise-15.php)

**16.** Write a Python program to perform Counter arithmetic and set operations for aggregating results. [Go to the editor](#EDITOR)  
Sample Output:  
C1: Counter({1: 1, 2: 1, 3: 1, 4: 1, 5: 1})  
C2: Counter({4: 1, 5: 1, 6: 1, 7: 1, 8: 1})  
Combined counts:  
Counter({4: 2, 5: 2, 1: 1, 2: 1, 3: 1, 6: 1, 7: 1, 8: 1})  
Subtraction:  
Counter({1: 1, 2: 1, 3: 1})  
Intersection (taking positive minimums):  
Counter({4: 1, 5: 1})  
Union (taking maximums):  
Counter({1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1})  
[Click me to see the sample solution](python-collections-exercise-16.php)

**17.** Write a Python program to find the majority element from a given array of size n using Collections module. [Go to the editor](#EDITOR)  
Sample Output:  
10  
[Click me to see the sample solution](python-collections-exercise-17.php)

**18.** Write a Python program to merge more than one dictionary in a single expression. [Go to the editor](#EDITOR)  
Sample Output:  
Original dictionaries:  
{'R': 'Red', 'B': 'Black', 'P': 'Pink'} {'G': 'Green', 'W': 'White'}  
Merged dictionary:  
{'B': 'Black', 'R': 'Red', 'P': 'Pink', 'G': 'Green', 'W': 'White'}  
Original dictionaries:  
{'R': 'Red', 'B': 'Black', 'P': 'Pink'} {'G': 'Green', 'W': 'White'} {'O': 'Orange', 'W': 'White', 'B': 'Black'}  
Merged dictionary:  
{'B': 'Black', 'R': 'Red', 'P': 'Pink', 'G': 'Green', 'W': 'White', 'O': 'Orange'}  
[Click me to see the sample solution](python-collections-exercise-18.php)

**19.** Write a Python program to break a given list of integers into sets of a given positive number. Return true or false. [Go to the editor](#EDITOR)  
Sample Output:  
Original list: \[1, 2, 3, 4, 5, 6, 7, 8\]  
Number to devide the said list: 4  
True  
Original list: \[1, 2, 3, 4, 5, 6, 7, 8\]  
Number to devide the said list: 3  
False  
[Click me to see the sample solution](python-collections-exercise-19.php)

**20.** Write a Python program to find the item with maximum frequency in a given list. [Go to the editor](#EDITOR)  
Sample Output:  
Original list:  
\[2, 3, 8, 4, 7, 9, 8, 2, 6, 5, 1, 6, 1, 2, 3, 2, 4, 6, 9, 1, 2\]  
Item with maximum frequency of the said list:  
(2, 5)  
[Click me to see the sample solution](python-collections-exercise-20.php)

**21.** Write a Python program to count most and least common characters in a given string. [Go to the editor](#EDITOR)  
Sample Output:  
Original string:  
hello world  
Most common character of the said string: l  
Least common character of the said string: h  
[Click me to see the sample solution](python-collections-exercise-21.php)

**22.** Write a Python program to insert an element at the beginning of a given OrderedDictionary. [Go to the editor](#EDITOR)  
Sample Output:  
Original OrderedDict:  
OrderedDict(\[('color1', 'Red'), ('color2', 'Green'), ('color3', 'Blue')\])  
Insert an element at the beginning of the said OrderedDict:  
Updated OrderedDict:  
OrderedDict(\[('color4', 'Orange'), ('color1', 'Red'), ('color2', 'Green'), ('color3', 'Blue')\])  
[Click me to see the sample solution](python-collections-exercise-22.php)

**23.** Write a Python program to get the frequency of the tuples in a given list. [Go to the editor](#EDITOR)  
Sample Output:  
Original list of tuples:  
\[(\['1', '4'\], \['4', '1'\], \['3', '4'\], \['2', '7'\], \['6', '8'\], \['5', '8'\], \['6', '8'\], \['5', '7'\], \['2', '7'\])\]  
Tuples frequency  
('1', '4') 2  
('3', '4') 1  
('2', '7') 2  
('6', '8') 2  
('5', '8') 1  
('5', '7') 1  
[Click me to see the sample solution](python-collections-exercise-23.php)

**24.** Write a Python program to calculate the maximum aggregate from the list of tuples (pairs). [Go to the editor](#EDITOR)  
Sample Output:  
Original list:  
\[('Juan Whelan', 90), ('Sabah Colley', 88), ('Peter Nichols', 7), ('Juan Whelan', 122), ('Sabah Colley', 84)\]  
Maximum aggregate value of the said list of tuple pair:  
('Juan Whelan', 212)  
[Click me to see the sample solution](python-collections-exercise-24.php)

**25.** Write a Python program to find the characters in a list of strings which occur more than and less than a given number. [Go to the editor](#EDITOR)  
Sample Output:  
Original list:  
\['abcd', 'iabhef', 'dsalsdf', 'sdfsas', 'jlkdfgd'\]  
Characters of the said list of strings which occur more than: 3  
\['a', 'd', 'f'\]  
Characters of the said list of strings which occur less than: 3  
\['c', 'b', 'h', 'e', 'i', 's', 'l', 'k', 'j', 'g'\]  
[Click me to see the sample solution](python-collections-exercise-25.php)

**26.** Write a Python program to find the difference between two list including duplicate elements. Use collections module. [Go to the editor](#EDITOR)  
Sample Output:  
Original lists:  
\[3, 3, 4, 7\]  
[Click me to see the sample solution](python-collections-exercise-26.php)

**27.** Write a Python program to remove duplicate words from a given string use collections module. [Go to the editor](#EDITOR)  
Sample Output:  
Original String:  
Python Exercises Practice Solution Exercises  
After removing duplicate words from the said string:  
Python Exercises Practice Solution  
[Click me to see the sample solution](python-collections-exercise-27.php)

**28.** Write a Python program to create a dictionary grouping a sequence of key-value pairs into a dictionary of lists. Use collections module. [Go to the editor](#EDITOR)  
Sample Output:  
Original list:  
\[('yellow', 1), ('blue', 2), ('yellow', 3), ('blue', 4), ('red', 1)\]  
Grouping a sequence of key-value pairs into a dictionary of lists:  
defaultdict(&lt;class 'list'&gt;, {'yellow': \[1, 3\], 'blue': \[2, 4\], 'red': \[1\]})  
[Click me to see the sample solution](python-collections-exercise-28.php)

**29.** Write a Python program to get the frequency of the elements in a given list of lists. Use collections module. [Go to the editor](#EDITOR)  
Sample Output:  
Original list of lists:  
\[\[1, 2, 3, 2\], \[4, 5, 6, 2\], \[7, 1, 9, 5\]\]  
Frequency of the elements in the said list of lists:  
Counter({2: 3, 1: 2, 5: 2, 3: 1, 4: 1, 6: 1, 7: 1, 9: 1})  
[Click me to see the sample solution](python-collections-exercise-29.php)

**30.** Write a Python program to count the occurrence of each element of a given list. [Go to the editor](#EDITOR)  
Sample Output:  
Original List:  
\['Green', 'Red', 'Blue', 'Red', 'Orange', 'Black', 'Black', 'White', 'Orange'\]  
Count the occurrence of each element of the said list:  
Counter({'Red': 2, 'Orange': 2, 'Black': 2, 'Green': 1, 'Blue': 1, 'White': 1})  
Original List:  
\[3, 5, 0, 3, 9, 5, 8, 0, 3, 8, 5, 8, 3, 5, 8, 1, 0, 2\]  
Count the occurrence of each element of the said list:  
Counter({3: 4, 5: 4, 8: 4, 0: 3, 9: 1, 1: 1, 2: 1})  
[Click me to see the sample solution](python-collections-exercise-30.php)

**31.** Write a Python program to count the most common words in a dictionary. [Go to the editor](#EDITOR)  
Sample Output:  
\[('pink', 6), ('black', 5), ('white', 5), ('red', 4)\]  
[Click me to see the sample solution](python-collections-exercise-31.php)

**32.** Write a Python program to find the class wise roll number from a tuple-of-tuples. [Go to the editor](#EDITOR)  
Sample Output:  
defaultdict(&lt;class 'list'&gt;, {'V': \[1, 2\], 'VI': \[1, 2, 3\], 'VII': \[1\]})  
[Click me to see the sample solution](python-collections-exercise-32.php)

**33.** Write a Python program to count the number of students of individual class. [Go to the editor](#EDITOR)  
Sample Output:  
Counter({'VI': 3, 'V': 2, 'VII': 1})  
[Click me to see the sample solution](python-collections-exercise-33.php)

**34.** Write a Python program to create an instance of an OrderedDict using a given dictionary. Sort the dictionary during the creation and print the members of the dictionary in reverse order. [Go to the editor](#EDITOR)  
Sample Output:  
Afghanistan 93  
Albania 355  
Algeria 213  
Andorra 376  
Angola 244  
In reverse order:  
Angola 244  
Andorra 376  
Algeria 213  
Albania 355  
Afghanistan 93  
[Click me to see the sample solution](python-collections-exercise-34.php)

**35.** Write a Python program to group a sequence of key-value pairs into a dictionary of lists. [Go to the editor](#EDITOR)  
Sample Output:  
\[('v', \[1, 3\]), ('vi', \[2, 4\]), ('vii', \[1\])\]  
[Click me to see the sample solution](python-collections-exercise-35.php)

**36.** Write a Python program to compare two unordered lists (not sets). [Go to the editor](#EDITOR)  
Sample Output:  
False  
[Click me to see the sample solution](python-collections-exercise-36.php)

## Python Code Editor:

**More to Come !**

**Do not submit any solution of the above exercises at here, if you want to contribute go to the appropriate exercise page.**

Test your Python skills with w3resource's [quiz](https://www.w3resource.com/quizzes/python/index.php)



---

<span class="underline"></span>

## Python: Tips of the Day

**Join Strings in an Iterable:**

    >>> words = ('Hello', 'Python', 'Programmers')
    >>> '!'.join(words)
    'Hello!Python!Programmers'
    >>> words_dict = {0: 'zero', 1: 'one', 2: 'two', 3: 'three'}
    >>> '&'.join(words_dict.values())
    'zero&one&two&three'

---

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
