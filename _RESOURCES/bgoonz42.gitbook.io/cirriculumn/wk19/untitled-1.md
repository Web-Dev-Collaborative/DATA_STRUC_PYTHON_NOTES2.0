# D3

### Overview <a id="overview"></a>

A dictionary is like a list, but instead of accessing values with an index, you access values with a "key." A "key" can be any type of object \(string, number, list, etc.\). Also, unlike lists, dictionaries do not have an order.

### Follow Along <a id="follow-along"></a>

Let's use a dictionary to create a collection that maps first names as keys \(strings\) to phone numbers as values.

```pythonthonext
phonebook = {} # creates an empty dictionary
phonebook["Abe"] = 4569874321
phonebook["Bill"] = 7659803241
phonebook["Barry"] = 6573214789

print(phonebook)
# {'Abe': 4569874321, 'Bill': 7659803241, 'Barry': 6573214789}
```

Instead of adding one key-value pair at a time, we can initialize the dictionary to have the same values.

```pythonthonext
phonebook = {
    "Abe": 4569874321,
    "Bill": 7659803241,
    "Barry": 6573214789
}

print(phonebook)
# {'Abe': 4569874321, 'Bill': 7659803241, 'Barry': 6573214789}
```

We can iterate over a dictionary as we iterated over a list. We can use the `items()` method, which returns a tuple with the key and value for each item in the dictionary.

```pythonthonext
for name, number in phonebook.items():
    print("Name: %s, Number: %s" % (name, number))

# Name: Abe, Number: 4569874321
# Name: Bill, Number: 7659803241
# Name: Barry, Number: 6573214789
```

To remove a key-value pair from a dictionary, you need to use the `del` keyword or use the `pop()` method available on dictionary objects. The difference is `pop()` deletes the item from the dictionary and returns the value. When you use the `del` keyword, you've written a statement that doesn't evaluate to anything.

```pythonthonext
phonebook = {
    "Abe": 4569874321,
    "Bill": 7659803241,
    "Barry": 6573214789
}

del phonebook["Abe"]

print(phonebook.pop("Bill"))
# 7659803241
```

{% embed url="https://replit.com/@bgoonz/cs-unit-1-sprint-1-module-1-dictionaries-1\#main.py" %}

- [ Home](https://lambdaschool.instructure.com/courses/1575)
- [Grades](https://lambdaschool.instructure.com/courses/1575/grades)
- [Modules](https://lambdaschool.instructure.com/courses/1575/modules)

## Objective 01 - Perform basic dictionary operations

### Overview <a id="overview"></a>

A dictionary is like a list, but instead of accessing values with an index, you access values with a "key." A "key" can be any type of object \(string, number, list, etc.\). Also, unlike lists, dictionaries do not have an order.

### Follow Along <a id="follow-along"></a>

Let's use a dictionary to create a collection that maps first names as keys \(strings\) to phone numbers as values.

```pythonthonext
phonebook = {} # creates an empty dictionary
phonebook["Abe"] = 4569874321
phonebook["Bill"] = 7659803241
phonebook["Barry"] = 6573214789

print(phonebook)
# {'Abe': 4569874321, 'Bill': 7659803241, 'Barry': 6573214789}
```

Instead of adding one key-value pair at a time, we can initialize the dictionary to have the same values.

```pythonthonext
phonebook = {
    "Abe": 4569874321,
    "Bill": 7659803241,
    "Barry": 6573214789
}

print(phonebook)
# {'Abe': 4569874321, 'Bill': 7659803241, 'Barry': 6573214789}
```

We can iterate over a dictionary as we iterated over a list. We can use the `items()` method, which returns a tuple with the key and value for each item in the dictionary.

```pythonthonext
for name, number in phonebook.items():
    print("Name: %s, Number: %s" % (name, number))

# Name: Abe, Number: 4569874321
# Name: Bill, Number: 7659803241
# Name: Barry, Number: 6573214789
```

To remove a key-value pair from a dictionary, you need to use the `del` keyword or use the `pop()` method available on dictionary objects. The difference is `pop()` deletes the item from the dictionary and returns the value. When you use the `del` keyword, you've written a statement that doesn't evaluate to anything.

```pythonthonext
phonebook = {
    "Abe": 4569874321,
    "Bill": 7659803241,
    "Barry": 6573214789
}

del phonebook["Abe"]

print(phonebook.pop("Bill"))
# 7659803241
```

### Challenge <a id="challenge"></a>

### Additional Resources <a id="additional-resources"></a>

- [https://www.w3schools.com/python/python_dictionaries.asp \(Links to an external site.\)](https://www.w3schools.com/python/python_dictionaries.asp)
- [https://docs.python.org/3/tutorial/datastructures.html\#dictionaries \(Links to an external site.\)](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

![](../../.gitbook/assets/devider%20%284%29.png)

## Objective 02 - Recognize mutable and immutable objects

### Overview <a id="overview"></a>

In Python, everything is an object.

```pythonthonext
>>> a = 1
>>> b = "hello"
>>> c = [1,2,3]
>>> isinstance(a, object)
True
>>> isinstance(b, object)
True
>>> isinstance(c, object)
True
>>>
```

Additionally, all objects in Python have three things:

1. Identity
2. Type
3. Value

```pythonthonext
>>> a = 1
>>> # Identity
... id(a)
4483164816
>>> # Type
... type(a)
<class 'int'>
>>> # Value
... a
1
>>>
```

### Follow Along <a id="follow-along"></a>

#### Identity <a id="identity"></a>

An object's **identity** can never change once it has been created. You can think of an object's identity as its specific address in memory. In the code above, `a = 1` created a new object in memory whose identity is represented by the integer `4483164816`.

Python has an `is` operator that allows you to compare two object's identities.

```pythonthonext
>>> a = 1
>>> b = 2
>>> a is b
False
>>> b = a
>>> a is b
True
>>>
```

In the code above, we first assign `1` to the variable `a`. Then, we assign `2` to the variable `b`. These are two different objects in memory and thus have different identities. We verify that they are different by using the `is` operator, which returns `False`. The line `b = a` assigns the variable `b` the object that the variable `a` is pointed to. Now, both `a` and `b` are referencing the same object in memory. We can use the `id()` function to verify that this is the case as well:

```pythonthonext
>>> id(a)
4483164816
>>> id(b)
4483164816
>>>
```

#### Type <a id="type"></a>

The **type** of an object determines what are its possible values and what operations that object supports. The `type()` function will return what type an object is:

```pythonthonext
>>> a = 'Hello'
>>> type(a)
<class 'str'>
>>> b = 100
>>> type(b)
<class 'int'>
>>> c = True
>>> type(c)
<class 'bool'>
>>>
```

Just like an object's identity, once an object is created, its identity can never change. It's an object's type that determines whether an object is **mutable** or **immutable.**

#### Value <a id="value"></a>

The value of some objects _can be changed_ after they are created. The value of some objects _cannot be changed_ after they are created. If the object's value can be changed, that object is considered to be **mutable** \(changeable\). If the object's value cannot be changed, that object is considered to be **immutable** \(unchangeable\).

#### Mutable Objects <a id="mutable-objects"></a>

A mutable object is an object whose value can be changed after it is created. The word mutable is defined as:

> liable to change

The following types of objects are mutable:

- list
- set
- dict
- byte array
- instances of user-defined classes

Let's look at a few examples in code:

**Lists**

```pythonthonext
>>> my_list = ['laughter', 'happiness', 'love']
>>> type(my_list)
<class 'list'>
>>> my_list[2] = 'joy'
>>> my_list.append('excellent')
>>> my_list
['laughter', 'happiness', 'joy', 'excellent']
>>>
```

In the first line, we create a list object with three elements and assign it to the variable `my_list`. Then, because lists are mutable, we change `'love'` at index 2 to be `'joy'` instead. We also can grow our list by appending a new element to the list.

**Sets**

```pythonthonext
>>> my_set = {'laughter', 'happiness', 'love'}
>>> type(my_set)
<class 'set'>
>>> my_set.add('happy')
>>> my_set
{'love', 'happy', 'happiness', 'laughter'}
>>> my_set.remove('happiness')
>>> my_set
{'love', 'happy', 'laughter'}
```

In the first line, we create a set object with three elements and assign it to the variable `my_set`. Because set objects are mutable, we can add `'happy'` to the set and remove `'happiness'` from the set.

**Dicts**

```pythonthonext
>>> my_dict = {"first_name": "Mattieu", "last_name": "Ricard"}
>>> type(my_dict)
<class 'dict'>
>>> my_dict["location"] = "Nepal"
>>> my_dict
{'first_name': 'Mattieu', 'last_name': 'Ricard', 'location': 'Nepal'}
>>> del my_dict['location']
>>> my_dict
{'first_name': 'Mattieu', 'last_name': 'Ricard'}
```

On line one, we create a dict object that has two key-value pairs. Then, because dict objects are mutable, we add key-value pair `"location": "Nepal"`. Last, we delete that same key-value pair.

Mutable objects work great when you know you will likely need to change the size of the object as you use and interact with it. Changing mutable objects is cheap \(because you don't have to copy all existing elements to a new object\).

**Aliasing with Mutable Objects**

Below, I'm going to walk through what happens when you **alias** a mutable object. In Python, aliasing happens whenever a variable's value is assigned to another variable because variables are just names that store references to values.

Let me illustrate this with a helpful code visualizer tool called [Python Tutor \(Links to an external site.\)](http://www.pythontutor.com/):

![https://tk-assets.lambdaschool.com/ba46ee2f-6bb4-421e-8be7-cba3a55eedcf_Untitled.png](https://tk-assets.lambdaschool.com/ba46ee2f-6bb4-421e-8be7-cba3a55eedcf_Untitled.png)

On line 1, we instantiate a new list object with three elements \(`1`, `2`, and `3`\). The name `my_list_orig` is the variable that we assign the new list to.

![https://tk-assets.lambdaschool.com/23cd8845-e086-4cf6-9b50-70b37a11731b_Untitled-2.png](https://tk-assets.lambdaschool.com/23cd8845-e086-4cf6-9b50-70b37a11731b_Untitled-2.png)

Then, on line 2, we create an alias of `my_list_orig` by pointing `my_list_alias` to whatever object `my_list_orig` is pointing at. Notice in the image above that there is still only one list object. However, there are two variables in the global frame, and they are both pointing to the same object.

![https://tk-assets.lambdaschool.com/604c130d-254c-4126-87a8-49625e676ef4_Untitled-3.png](https://tk-assets.lambdaschool.com/604c130d-254c-4126-87a8-49625e676ef4_Untitled-3.png)

On line 3, we append a new element to `my_list_orig`. Notice that, because both variables are referencing the same object, even though we appended to `my_list_orig`, we also modified `my_list_alias`.

![https://tk-assets.lambdaschool.com/f1655834-f68c-4b49-95ca-93d4a1578423_Untitled-4.png](https://tk-assets.lambdaschool.com/f1655834-f68c-4b49-95ca-93d4a1578423_Untitled-4.png)

On line 4, we removed the element `1` from `my_list_orig`. Notice, just like when we added to the list, `my_list_alias` is also affected.

_This behavior is something you need to be aware of if you ever use aliasing with mutable objects in your code._

#### Immutable Objects <a id="immutable-objects"></a>

An immutable object is an object whose value cannot be changed after it is created. Immutable means _not changeable_. Anytime you try to update the value of an immutable object, a new object is created instead.

The following types are immutable:

- Numbers \(int, float, complex\)
- Strings
- Bytes
- Booleans
- Tuples

Immutable objects are useful when you want to make sure that the object you created will always maintain the same value. Immutable objects are more _expensive_ to change \(in terms of time and space complexity\) because changing the object requires making a copy of the existing object.

Let's look at a few examples:

**Numbers**

```pythonthonext
>>> my_int = 1
>>> id(my_int)
4513307280
>>> type(my_int)
<class 'int'>
>>> my_int
1
>>> my_int = 2
>>> id(my_int)
4513307312
>>> type(my_int)
<class 'int'>
>>> my_int
2
>>>
```

In the code above, the first line creates a new int object, and the variable `my_int` now points at that object. You can see that this object has `int` for its type, `4513307280` for its identity \(location in memory\), and `1` for its value.

Then, we assign `2` to `my_int`which creates a whole new object and assigns it to the variable `my_int`. This object has `int` for its type, `4513307312` for its identity \(which you can see is different from the first object\), and `2` for its value.

**Strings**

Let's look at how string concatenation works in Python. Remember that str objects are immutable.

```pythonthonext
>>> my_str = 'a'
>>> type(my_str)
<class 'str'>
>>> id(my_str)
140716674193840
>>> my_str
'a'
>>> my_str += 'b'
>>> type(my_str)
<class 'str'>
>>> id(my_str)
140716674658992
>>> my_str
'ab'
>>>
```

So, on line 1, we create a string object with the value `'a'` and assign it to the variable `my_str`. We verify that the object is of type `str`, we print its identity \(`140716674193840`\) and print its value.

Then, we concatenate `'b'` onto the existing string with the line `my_str += 'b'`. Now, because string objects are immutable, we cannot change a string object's value after it has been created. To concatenate, we create a new string object and assign the value `'ab'` to that object.

This behavior in Python is vital to be aware of when working with string concatenation. If you have to add and remove frequently from a string, this will be inefficient if you work with string objects directly.

**Tuples**

Tuples are an immutable container of names, where each name has an unchangeable \(immutable\) binding to an object in memory. You cannot change the bindings of the names to the objects.

```pythonthonext
>>> my_tuple = ('love', [1,2,3], True)
>>> my_tuple[0]
'love'
>>> my_tuple[0] = 'laughter'
Traceback (most recent call last):
 File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>>
```

Here we created a tuple using `(` and `)` to denote the tuple literal syntax. Just like a list, tuples can contain elements of any type. Above, we've included a string, a list, and a boolean as our tuple elements. We are proving the tuple object's immutability by showing the error that occurs when trying to assign a new item to a position in the tuple.

One thing that often causes confusion surrounding the immutability of tuples in Python is demonstrated by the following behavior:

```pythonthonext
>>> my_tuple[1] = [4,5,6]
Traceback (most recent call last):
 File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>> id(my_tuple[1])
140716674620864
>>> my_tuple[1][0] = 4
>>> my_tuple[1][1] = 5
>>> my_tuple[1][2] = 6
>>> my_tuple[1]
[4, 5, 6]
>>> my_tuple
('love', [4, 5, 6], True)
>>> id(my_tuple[1])
140716674620864
>>>
```

Notice that we cannot create a new list object and bind it to the name at position 1 of our tuple. This is demonstrated when `my_tuple[1] = [4,5,6]` raises a `TypeError`. However, we can assign new objects to the list that is at position 1 of our tuple? Why is that? Well, what do we know about lists in Python? Lists are mutable objects. So, we can modify a list without creating a new object. So, when we are modifying the list directly \(instead of assigning a new object\), it doesn't affect our tuple's immutability. Notice that the identity \(`140716674620864`\) of the list at `my_tuple[1]` doesn't change after replacing its three elements with `4`, `5`, and `6`.

#### Passing Objects to Functions <a id="passing-objects-to-functions"></a>

Mutable and immutable objects are not treated the same when they are passed as arguments to functions. When mutable objects are passed into a function, they are passed by reference. So, suppose you change the mutable object that was passed in as an argument. In that case, you are changing the original object as well.

**Mutable Objects as Arguments**

```pythonthonext
>>> my_list = [1,2,3]
>>> def append_num_to_list(lst, num):
... lst.append(num)
...
>>> append_num_to_list(my_list, 4)
>>> my_list
[1, 2, 3, 4]
>>>
```

![https://tk-assets.lambdaschool.com/5528e90f-2784-4199-b520-a4d03adccbbc_mutable-object-passed-as-argument-to-function.gif](https://tk-assets.lambdaschool.com/5528e90f-2784-4199-b520-a4d03adccbbc_mutable-object-passed-as-argument-to-function.gif)

Notice that when `append_num_to_list` is called and `my_list` is passed in as an argument. When `my_list` is bound to `lst` in that stack frame, `lst` points to the original `my_list` in memory. The function call did not create a copy of `my_list`. This behavior is because lists are mutable objects in Python.

**Immutable Objects as Arguments**

Next, let's see how Python behaves when we pass an immutable object as an argument to a function:

```pythonthonext
>>> my_string = "I am an immutable object."
>>> def concatenate_string_to_string(orig_string, string_to_add):
... return orig_string + string_to_add
...
>>> concatenate_string_to_string(my_string, " I hope!")
'I am an immutable object. I hope!'
>>> my_string
'I am an immutable object.'
>>>
```

![https://tk-assets.lambdaschool.com/3e6a1461-9853-4494-8c17-33919e641eb0_immutable-object-passed-argument-to-function.gif](https://tk-assets.lambdaschool.com/3e6a1461-9853-4494-8c17-33919e641eb0_immutable-object-passed-argument-to-function.gif)

Notice when an immutable object is passed into a function, the object is copied and bound to the parameter name. In the example above, when `my_string` is passed into `concatenate_string_to_string`, `my_string` is copied to a new object bound to the name `orig_string`.

### Challenge <a id="challenge"></a>

{% embed url="https://replit.com/@bgoonz/cs-unit-1-sprint-1-module-3-mutable-and-immutable-objects-1" %}

- [ Home](https://lambdaschool.instructure.com/courses/1575)
- [Grades](https://lambdaschool.instructure.com/courses/1575/grades)
- [Modules](https://lambdaschool.instructure.com/courses/1575/modules)

## Objective 02 - Recognize mutable and immutable objects

### Overview <a id="overview"></a>

In Python, everything is an object.

```pythonthonext
>>> a = 1
>>> b = "hello"
>>> c = [1,2,3]
>>> isinstance(a, object)
True
>>> isinstance(b, object)
True
>>> isinstance(c, object)
True
>>>
```

Additionally, all objects in Python have three things:

1. Identity
2. Type
3. Value

```pythonthonext
>>> a = 1
>>> # Identity
... id(a)
4483164816
>>> # Type
... type(a)
<class 'int'>
>>> # Value
... a
1
>>>
```

### Follow Along <a id="follow-along"></a>

#### Identity <a id="identity"></a>

An object's **identity** can never change once it has been created. You can think of an object's identity as its specific address in memory. In the code above, `a = 1` created a new object in memory whose identity is represented by the integer `4483164816`.

Python has an `is` operator that allows you to compare two object's identities.

```pythonthonext
>>> a = 1
>>> b = 2
>>> a is b
False
>>> b = a
>>> a is b
True
>>>
```

In the code above, we first assign `1` to the variable `a`. Then, we assign `2` to the variable `b`. These are two different objects in memory and thus have different identities. We verify that they are different by using the `is` operator, which returns `False`. The line `b = a` assigns the variable `b` the object that the variable `a` is pointed to. Now, both `a` and `b` are referencing the same object in memory. We can use the `id()` function to verify that this is the case as well:

```pythonthonext
>>> id(a)
4483164816
>>> id(b)
4483164816
>>>
```

#### Type <a id="type"></a>

The **type** of an object determines what are its possible values and what operations that object supports. The `type()` function will return what type an object is:

```pythonthonext
>>> a = 'Hello'
>>> type(a)
<class 'str'>
>>> b = 100
>>> type(b)
<class 'int'>
>>> c = True
>>> type(c)
<class 'bool'>
>>>
```

Just like an object's identity, once an object is created, its identity can never change. It's an object's type that determines whether an object is **mutable** or **immutable.**

#### Value <a id="value"></a>

The value of some objects _can be changed_ after they are created. The value of some objects _cannot be changed_ after they are created. If the object's value can be changed, that object is considered to be **mutable** \(changeable\). If the object's value cannot be changed, that object is considered to be **immutable** \(unchangeable\).

#### Mutable Objects <a id="mutable-objects"></a>

A mutable object is an object whose value can be changed after it is created. The word mutable is defined as:

> liable to change

The following types of objects are mutable:

- list
- set
- dict
- byte array
- instances of user-defined classes

Let's look at a few examples in code:

**Lists**

```pythonthonext
>>> my_list = ['laughter', 'happiness', 'love']
>>> type(my_list)
<class 'list'>
>>> my_list[2] = 'joy'
>>> my_list.append('excellent')
>>> my_list
['laughter', 'happiness', 'joy', 'excellent']
>>>
```

In the first line, we create a list object with three elements and assign it to the variable `my_list`. Then, because lists are mutable, we change `'love'` at index 2 to be `'joy'` instead. We also can grow our list by appending a new element to the list.

**Sets**

```pythonthonext
>>> my_set = {'laughter', 'happiness', 'love'}
>>> type(my_set)
<class 'set'>
>>> my_set.add('happy')
>>> my_set
{'love', 'happy', 'happiness', 'laughter'}
>>> my_set.remove('happiness')
>>> my_set
{'love', 'happy', 'laughter'}
```

In the first line, we create a set object with three elements and assign it to the variable `my_set`. Because set objects are mutable, we can add `'happy'` to the set and remove `'happiness'` from the set.

**Dicts**

```pythonthonext
>>> my_dict = {"first_name": "Mattieu", "last_name": "Ricard"}
>>> type(my_dict)
<class 'dict'>
>>> my_dict["location"] = "Nepal"
>>> my_dict
{'first_name': 'Mattieu', 'last_name': 'Ricard', 'location': 'Nepal'}
>>> del my_dict['location']
>>> my_dict
{'first_name': 'Mattieu', 'last_name': 'Ricard'}
```

On line one, we create a dict object that has two key-value pairs. Then, because dict objects are mutable, we add key-value pair `"location": "Nepal"`. Last, we delete that same key-value pair.

Mutable objects work great when you know you will likely need to change the size of the object as you use and interact with it. Changing mutable objects is cheap \(because you don't have to copy all existing elements to a new object\).

**Aliasing with Mutable Objects**

Below, I'm going to walk through what happens when you **alias** a mutable object. In Python, aliasing happens whenever a variable's value is assigned to another variable because variables are just names that store references to values.

Let me illustrate this with a helpful code visualizer tool called [Python Tutor \(Links to an external site.\)](http://www.pythontutor.com/):

![https://tk-assets.lambdaschool.com/ba46ee2f-6bb4-421e-8be7-cba3a55eedcf_Untitled.png](https://tk-assets.lambdaschool.com/ba46ee2f-6bb4-421e-8be7-cba3a55eedcf_Untitled.png)

On line 1, we instantiate a new list object with three elements \(`1`, `2`, and `3`\). The name `my_list_orig` is the variable that we assign the new list to.

![https://tk-assets.lambdaschool.com/23cd8845-e086-4cf6-9b50-70b37a11731b_Untitled-2.png](https://tk-assets.lambdaschool.com/23cd8845-e086-4cf6-9b50-70b37a11731b_Untitled-2.png)

Then, on line 2, we create an alias of `my_list_orig` by pointing `my_list_alias` to whatever object `my_list_orig` is pointing at. Notice in the image above that there is still only one list object. However, there are two variables in the global frame, and they are both pointing to the same object.

![https://tk-assets.lambdaschool.com/604c130d-254c-4126-87a8-49625e676ef4_Untitled-3.png](https://tk-assets.lambdaschool.com/604c130d-254c-4126-87a8-49625e676ef4_Untitled-3.png)

On line 3, we append a new element to `my_list_orig`. Notice that, because both variables are referencing the same object, even though we appended to `my_list_orig`, we also modified `my_list_alias`.

![https://tk-assets.lambdaschool.com/f1655834-f68c-4b49-95ca-93d4a1578423_Untitled-4.png](https://tk-assets.lambdaschool.com/f1655834-f68c-4b49-95ca-93d4a1578423_Untitled-4.png)

On line 4, we removed the element `1` from `my_list_orig`. Notice, just like when we added to the list, `my_list_alias` is also affected.

_This behavior is something you need to be aware of if you ever use aliasing with mutable objects in your code._

#### Immutable Objects <a id="immutable-objects"></a>

An immutable object is an object whose value cannot be changed after it is created. Immutable means _not changeable_. Anytime you try to update the value of an immutable object, a new object is created instead.

The following types are immutable:

- Numbers \(int, float, complex\)
- Strings
- Bytes
- Booleans
- Tuples

Immutable objects are useful when you want to make sure that the object you created will always maintain the same value. Immutable objects are more _expensive_ to change \(in terms of time and space complexity\) because changing the object requires making a copy of the existing object.

Let's look at a few examples:

**Numbers**

```pythonthonext
>>> my_int = 1
>>> id(my_int)
4513307280
>>> type(my_int)
<class 'int'>
>>> my_int
1
>>> my_int = 2
>>> id(my_int)
4513307312
>>> type(my_int)
<class 'int'>
>>> my_int
2
>>>
```

In the code above, the first line creates a new int object, and the variable `my_int` now points at that object. You can see that this object has `int` for its type, `4513307280` for its identity \(location in memory\), and `1` for its value.

Then, we assign `2` to `my_int`which creates a whole new object and assigns it to the variable `my_int`. This object has `int` for its type, `4513307312` for its identity \(which you can see is different from the first object\), and `2` for its value.

**Strings**

Let's look at how string concatenation works in Python. Remember that str objects are immutable.

```pythonthonext
>>> my_str = 'a'
>>> type(my_str)
<class 'str'>
>>> id(my_str)
140716674193840
>>> my_str
'a'
>>> my_str += 'b'
>>> type(my_str)
<class 'str'>
>>> id(my_str)
140716674658992
>>> my_str
'ab'
>>>
```

So, on line 1, we create a string object with the value `'a'` and assign it to the variable `my_str`. We verify that the object is of type `str`, we print its identity \(`140716674193840`\) and print its value.

Then, we concatenate `'b'` onto the existing string with the line `my_str += 'b'`. Now, because string objects are immutable, we cannot change a string object's value after it has been created. To concatenate, we create a new string object and assign the value `'ab'` to that object.

This behavior in Python is vital to be aware of when working with string concatenation. If you have to add and remove frequently from a string, this will be inefficient if you work with string objects directly.

**Tuples**

Tuples are an immutable container of names, where each name has an unchangeable \(immutable\) binding to an object in memory. You cannot change the bindings of the names to the objects.

```pythonthonext
>>> my_tuple = ('love', [1,2,3], True)
>>> my_tuple[0]
'love'
>>> my_tuple[0] = 'laughter'
Traceback (most recent call last):
 File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>>
```

Here we created a tuple using `(` and `)` to denote the tuple literal syntax. Just like a list, tuples can contain elements of any type. Above, we've included a string, a list, and a boolean as our tuple elements. We are proving the tuple object's immutability by showing the error that occurs when trying to assign a new item to a position in the tuple.

One thing that often causes confusion surrounding the immutability of tuples in Python is demonstrated by the following behavior:

```pythonthonext
>>> my_tuple[1] = [4,5,6]
Traceback (most recent call last):
 File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>> id(my_tuple[1])
140716674620864
>>> my_tuple[1][0] = 4
>>> my_tuple[1][1] = 5
>>> my_tuple[1][2] = 6
>>> my_tuple[1]
[4, 5, 6]
>>> my_tuple
('love', [4, 5, 6], True)
>>> id(my_tuple[1])
140716674620864
>>>
```

Notice that we cannot create a new list object and bind it to the name at position 1 of our tuple. This is demonstrated when `my_tuple[1] = [4,5,6]` raises a `TypeError`. However, we can assign new objects to the list that is at position 1 of our tuple? Why is that? Well, what do we know about lists in Python? Lists are mutable objects. So, we can modify a list without creating a new object. So, when we are modifying the list directly \(instead of assigning a new object\), it doesn't affect our tuple's immutability. Notice that the identity \(`140716674620864`\) of the list at `my_tuple[1]` doesn't change after replacing its three elements with `4`, `5`, and `6`.

#### Passing Objects to Functions <a id="passing-objects-to-functions"></a>

Mutable and immutable objects are not treated the same when they are passed as arguments to functions. When mutable objects are passed into a function, they are passed by reference. So, suppose you change the mutable object that was passed in as an argument. In that case, you are changing the original object as well.

**Mutable Objects as Arguments**

```pythonthonext
>>> my_list = [1,2,3]
>>> def append_num_to_list(lst, num):
... lst.append(num)
...
>>> append_num_to_list(my_list, 4)
>>> my_list
[1, 2, 3, 4]
>>>
```

![https://tk-assets.lambdaschool.com/5528e90f-2784-4199-b520-a4d03adccbbc_mutable-object-passed-as-argument-to-function.gif](https://tk-assets.lambdaschool.com/5528e90f-2784-4199-b520-a4d03adccbbc_mutable-object-passed-as-argument-to-function.gif)

Notice that when `append_num_to_list` is called and `my_list` is passed in as an argument. When `my_list` is bound to `lst` in that stack frame, `lst` points to the original `my_list` in memory. The function call did not create a copy of `my_list`. This behavior is because lists are mutable objects in Python.

**Immutable Objects as Arguments**

Next, let's see how Python behaves when we pass an immutable object as an argument to a function:

```pythonthonext
>>> my_string = "I am an immutable object."
>>> def concatenate_string_to_string(orig_string, string_to_add):
... return orig_string + string_to_add
...
>>> concatenate_string_to_string(my_string, " I hope!")
'I am an immutable object. I hope!'
>>> my_string
'I am an immutable object.'
>>>
```

![https://tk-assets.lambdaschool.com/3e6a1461-9853-4494-8c17-33919e641eb0_immutable-object-passed-argument-to-function.gif](https://tk-assets.lambdaschool.com/3e6a1461-9853-4494-8c17-33919e641eb0_immutable-object-passed-argument-to-function.gif)

Notice when an immutable object is passed into a function, the object is copied and bound to the parameter name. In the example above, when `my_string` is passed into `concatenate_string_to_string`, `my_string` is copied to a new object bound to the name `orig_string`.

### Challenge <a id="challenge"></a>

### Additional Resources <a id="additional-resources"></a>

- [Mutable vs. Immutable Objects in Python - A Visual and Hands-On Guide \(Links to an external site.\)](https://www.freecodecamp.org/news/mutable-vs-immutable-objects-python/)
- [Python Basics: Mutable vs. Immutable Objects \(Links to an external site.\)](https://towardsdatascience.com/https-towardsdatascience-com-python-basics-mutable-vs-immutable-objects-829a0cb1530a)
- [What are mutable and immutable objects in Python3? \(Links to an external site.\)](https://www.educative.io/edpresso/what-are-mutable-and-immutable-objects-in-python3)

{% embed url="https://replit.com/@bgoonz/cs-unit-1-sprint-1-module-3-mutable-and-immutable-objects-1\#main.py" %}

![](../../.gitbook/assets/devider%20%284%29.png)

## Objective 03 - Compare the time complexity of different approaches to a problem using Big O notation

### Overview <a id="overview"></a>

#### What is an algorithm? <a id="what-is-an-algorithm"></a>

An algorithm is a set of instructions for accomplishing a task. Within this broad definition, we could call every piece of code an algorithm.

#### How do we measure how "good" an algorithm is? <a id="how-do-we-measure-how-good-an-algorithm-is"></a>

After coming up with a first-pass solution to a problem, we need to measure how "good" our answer is. Will it stand up to the test of millions of users? Is it fast enough that our users will be blown away by how quickly they get their results? Or will torturously slow speeds cause lag that scares them all away?

When given a choice between different algorithms, we want to choose the most efficient algorithm \(considering both _time_ and _space_ efficiency depending on our needs\).

_Note: It is common for your first solution to work with a few items or users and break as you add more. Making sure that the solutions scale is something all developers must look out for._

#### What is Big O notation? <a id="what-is-big-o-notation"></a>

We need a way to talk about efficiency \(number of operations in the worst case\) in a more general sense.

Big O notation is the language we use for describing how efficient an algorithm is.

The specific terms of Big O notation describe how fast the runtime grows \(relative to the input size\), focusing on when the input gets extremely large.

Why do we focus on the growth of runtime versus exact runtime? The actual runtime depends on the specific computer running the algorithm, so we cannot compare efficiencies that way. By focusing on the general growth, we can avoid exact runtime differences between machines and environments.

We also talk about runtime relative to the input size because we need to express our speed in terms of _something_. So we show the speed of the algorithm in terms of the input size. That way, we can see how the speed reacts as the input size grows.

We don't care about speed when the input size is small. The differences in speed are likely to be minimal when the input size is small. When the input size gets enormous, we can see the differences in efficiency between algorithms.

#### Common Big O run times <a id="common-big-o-run-times"></a>

Refer to the table below to see a list of the most common runtimes. The table is ordered from fastest to slowest.

| Classification         | Description                                                                                                                                       |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| Constant `O(1)`        | The runtime is entirely unaffected by the input size. This is the ideal solution.                                                                 |
| Logarithmic `O(log n)` | As the input size increases, the runtime will grow slightly slower. This is a pretty good solution.                                               |
| Linear `O(n)`          | As the input size increases, the runtime will grow at the same rate. This is a pretty good solution.                                              |
| Polynomial `O(n^c)`    | As the input size increases, the runtime will grow at a faster rate. This might work for small inputs but is not a scalable solution.             |
| Exponential `O(c^n)`   | As the input size increases, the runtime will grow at a much faster rate. This solution is inefficient.                                           |
| Factorial `O(n!)`      | As the input size increases, the runtime will grow astronomically, even with relatively small inputs. This solution is exceptionally inefficient. |

Besides the table, it's also essential to look at the curves of these different runtimes.

![https://tk-assets.lambdaschool.com/1b27038a-098f-46e5-bc20-03be9a3480b9_68747470733a2f2f746b2d6173736574732e6c616d6264617363686f6f6c2e636f6d2f65343335376235662d316436332d343463642d623861302d3439353732363061653965635f556e7469746c6564312e706e67.png](https://tk-assets.lambdaschool.com/1b27038a-098f-46e5-bc20-03be9a3480b9_68747470733a2f2f746b2d6173736574732e6c616d6264617363686f6f6c2e636f6d2f65343335376235662d316436332d343463642d623861302d3439353732363061653965635f556e7469746c6564312e706e67.png)

Again, `n` represents the size of the data, and on the chart above, `N` represents the number of operations. This visualization should help illustrate why `O(1)` or `O(log n)` is the most desirable.

_Note: Big O only matters for large data sets. An `O(n^3)` solution is adequate, as long as you can guarantee that your datasets will always be small._

#### A few examples <a id="a-few-examples"></a>

Let's look at a few different examples of Python functions that print something to the output. For each of these, the input will be `items`.

**Constant Time O\(1\)**

```pythonthonext
def print_only_one_thing(list_of_things):
    print(list_of_things[0])
```

Why is this constant time? Because no matter how large or small the input is \(1,000,000 or 10\), the number of computations within the function is the same.

**Linear Time O\(n\)**

```pythonthonext
def print_list(list_of_things):
    for thing in list_of_things:
        print(thing)
```

Why is this classified as linear time? Because the speed of the algorithm increases at the same rate as the input size. If `list_of_things` has ten items, then the function will print ten times. If it has 10,000 items, then the function will print 10,000 times.

**Quadratic Time O\(n^2\)**

```pythonthonext
def print_permutations(list_of_things):
    for thing_one in list_of_things:
        for thing_two in list_of_things:
            print(thing_one, thing_two)
```

Why is this quadratic time? The clue is the nested for loops. These nested for loops mean that for each item in `list_of_things` \(the outer loop\), we iterate through every item in `list_of_things` \(the inner loop\). For an input size of `n`, we have to print `n` \* `n` times or `n^2` times.

#### What are we supposed to do with the constants? <a id="what-are-we-supposed-to-do-with-the-constants"></a>

What if we had a function like this?

```pythonthonext
def do_a_bunch_of_stuff(list_of_things): # O(1 + n/2 + 2000)
    last_idx = len(list_of_things) - 1
    print(list_of_things[last_idx]) # O(1)

    middle_idx = len(list_of_things) / 2
    idx = 0
    while idx < middle_idx: # O(n/2)
        print(list_of_things[idx])
        idx = idx + 1

    for num in range(2000): # O(2000)
        print(num)
```

`print(items[last_idx])` is constant time because it doesn't change as the input changes. So, that portion of the function is `O(1)`.

The while loop that prints up to the middle index is 1/2 of whatever the input size is; we can say that portion of the function is `O(n/2)`.

The final portion will run 2000 times, no matter the size of the input.

So, putting it all together, we could say that the efficiency is `O(1 + n/2 + 2000)`. However, we don't say this. We describe this function as having linear time `O(n)` because we drop all of the constants. Why do we cut all of the constants? Because as the input size gets huge, adding 2000 or dividing by 2 has minimal effect on the algorithm's performance.

#### Most significant term <a id="most-significant-term"></a>

Let's consider the following function:

```pythonthonext
def do_different_things_in_the_same_function(list_of_things): # O(n + n^2)
    # print all each item in the list
    for thing in list_of_things: # O(n)
        print(thing)

    # print every possible pair of things in the list
    for thing_one in list_of_things: # O(n * n) = O(n^2)
        for thing_two in list_of_things:
            print(thing_one, thing_two)
```

We could describe this function as `O(n + n^2)`; however, we only need to keep the essential term, `n^2`, so this would be `O(n^2)`. Why can we do this? Because as the input size \(`n`\) gets larger and larger, the less significant terms have less effect, and only the most significant term is important.

#### Big O represents the worst-case <a id="big-o-represents-the-worst-case"></a>

Let's consider the following function:

```pythonthonext
def find_thing(list_of_things, thing_we_are_trying_to_find):
    for thing in list_of_things:
        if thing == thing_we_are_trying_to_find:
            return True

    return False
```

What would the result be if it just so happens that the `thing_we_are_trying_to_find` in `list_of_things` is the very first item in the list? The function would only have to look at one item in `list_of_things` before returning. In this case, it would be `O(1)`. But, when we talk about a function's complexity, we usually assume the "worst case." What would the "worst-case" be? It would be if it were the last item in `list_of_things`. In that case, we would have to look through all the `list_of_things`, and that complexity would be `O(n)`.

_Note: When talking about runtime complexity in casual conversation, engineers often blur the distinction between big theta and big O notation. In reality, these are two distinct ways of describing an algorithm. Big theta gives both an upper and a lower bound for the running time. Big O only provides an upper bound. Refer to the following articles for a deeper dive:_ [_Big-Theta notation \(Links to an external site.\)_](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation) _and_ [_Big-O notation \(Links to an external site.\)_](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-o-notation)_._

#### Do constants ever matter? <a id="do-constants-ever-matter"></a>

Complexity analysis with Big O notation is a valuable tool. It would be best if you got in the habit of thinking about the efficiency of the algorithms you write and use in your code. However, just because two algorithms have the same Big O notation doesn't mean they are equal.

Imagine you have a script that takes 1 hour to run. By improving the function, you can divide that runtime by six, and now it only takes 10 minutes to run. With Big O notation, `O(n)` and `O(n/6)` can both be written as `O(n)`, but that doesn't mean it isn't worth optimizing the script to save 50 minutes every time the script runs.

That being said, there is a term you should become familiar with: **premature optimization** \([xkcd: Optimization \(Links to an external site.\)](https://xkcd.com/1691/)\). Sometimes, you can sacrifice readability or spend too much time on something to improve its efficiency. Depending on the situation, it could be that having a finished product to iterate on is more important than maximally efficient code. It is your job as a developer to know when making your code more efficient is necessary. You will always be making calculated tradeoffs between runtime, memory, development time, readability, and maintainability. It takes time to develop the wisdom to strike the right balance depending on the scenario.

### Follow Along <a id="follow-along"></a>

Let's look at a few code snippets and classify their runtime complexity using Big O notation.

```pythonthonext
def foo(n):
    i = 1
    while i < n:
        print(i)
        i *= 2
```

First, let's think about what the above function is doing. It's printing `i`…but `i` is not being incremented by 1, as we usually see. It's _doubled_ every time we run the loop. So, for example, if `n = 100`, then the final result would be…

```pythonthonext
1
2
4
8
16
32
64
```

Or if `n = 10`, then we would print…

```pythonthonext
1
2
4
8
```

We can use the process of elimination to narrow down which runtime classification makes sense for this algorithm. The number of times the loop runs seems to vary based on the value of `n`, so this is NOT O\(1\).

From the above examples, we can also see that the number of times the loop runs is increasing _slower_ than the input size is increasing. `n` must be _doubled_ before the loop will run one more time. We can eliminate classifications such as `O(n log n)`, `O(n^c)`, `O(c^n)`, and `O(n!)`.

The only two options left at this point are logarithmic and linear. Since the two growth rates \(input, the number of operations\) are not the same, **this function must run in logarithmic time!**

### Challenge <a id="challenge"></a>

{% embed url="https://replit.com/@bgoonz/cs-unit-1-sprint-1-module-2-time-complexity-1" %}

![](../../.gitbook/assets/devider%20%284%29.png)
