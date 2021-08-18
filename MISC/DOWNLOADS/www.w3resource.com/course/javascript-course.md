# JavaScript

### Course

<span class="small">Created by [w3resource.com](http://wwww.w3resource.com) / [@w3resource](https://twitter.com/w3resource)</span>

## Instructions

- Go through major sections using left or right arrow key
- Play within a section using up or down arrow key
- Press escape to see a slide overview
- Click on Live JSBin (available in most slides) to access JSBin editor with code

## JavaScript, The Language of the Web

## JAVASCRIPT IS EVERYWHERE

#### Write once, run everywhere

- Web Browser
- Desktop (browser, command line)
- Mobile Phone & Apps
- Server (node.js)
- Embeded System

## JAVASCRIPT LANGUAGE

- Interpreted
- C-style syntax
- Dynamic Typing
- Object-Oriented
- Prototype-based
- Functions
- Single-Threaded

## JAVASCRIPT BASICS

## Hello world

<a href="http://jsbin.com/zatuba/1/embed?js,console" class="jsbin-embed">JS Bin</a>

## Values

JavaScript recognizes the following types of primitive values.

- Numbers : 125, 14.24586
- Logical (Boolean) : true, false
- Strings : "JavaScript"
- null : A special keyword denoting a null value; null is also a primitive value.
- undefined : A top-level property whose value is undefined.

## VARIABLES

A JavaScript variable must start with a letter (A-Z, a-z), underscore (\_), or dollar sign ($), subsequent characters can also be digits (0-9).

\- Declaring variables -

- Using the keyword var. For example, var x = 100. Can be used to declare both local and global variables.
- Assigning it a value. For example, x = 100. It declares a global variable and cannot be changed at the local level.

# ALWAYS DECLARE YOUR VARIABLES WITH VAR!!!

## Literals & Expressions

Use literals to represent values in JavaScript which are fixed values, not variables.

- Array literals
- Boolean literals
- Integers
- Floating-point literals
- Object literals
- String literals

## Boolean literals

The Boolean type has two literal values :

- true
- false

## Integers

Integers can be expressed in decimal (base 10), hexadecimal (base 16), and octal (base 8). An integer must have at least one digit (0-9).

- No comma or blanks are allowed within an integer.
- It does not contain any fractional part.
- It can be either positive or negative, if no sign precedes it is assumed to be positive.

## Floating-point literals

A floating number has the following parts.

- A decimal integer.
- A decimal point ('.').
- A fraction.
- An exponent.

The exponent part is an "e" or "E" followed by an integer, which can be signed (preceded by "+" or "-").

## Expressions

An expression is any valid unit of code that resolves to a value. Conceptually, there are two types of expressions: those that assign a value to a variable (a = 12) and those that simply have a value (5-3).

Expression categories

- Arithmetic: evaluates to a number, for example 120.230.
- String: evaluates to a character string, for example, "w3r" or "2001".
- Logical: evaluates to true or false.
- Object: evaluates to an object.

## Operators

JavaScript has the following types of operators.

- Assignment operators
- Comparison operators
- Arithmetic operators
- Bitwise operators
- Logical operators
- String operators
- Special operators

## Arithmetic operators

addition (+), subtraction (-), multiplication (\*), and division (/). In addition, JavaScript provides the following arithmetic operators.

<table><tbody><tr class="odd"><td>% (Modulus)</td><td>Returns the integer remainder of dividing the two operands.</td><td>16 % 5 returns 1.</td></tr><tr class="even"><td>++ (Increment)</td><td>Unary operator. Adds one to its operand.</td><td>If x is 3, then ++x returns 4, whereas x++ returns 3.</td></tr><tr class="odd"><td>-- (Decrement)</td><td>Unary operator.</td><td>If x is 3, then --x returns 2, whereas x-- returns 3.</td></tr><tr class="even"><td>- (Unary negation)</td><td>Unary operator. Returns the negation of its operand.</td><td>If x is 3, then -x returns -3.</td></tr></tbody></table>

## Assignment operators (1/2)

<table><thead><tr class="header"><th><strong>Shorthand</strong></th><th><strong>Expression</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr class="odd"><td><span class="even">a +=b</span></td><td>a = a + b</td><td><span class="even">Adds 2 numbers and assigns the result to the first.</span></td></tr><tr class="even"><td><span class="odd">a -= b</span></td><td>a = a - b</td><td><span class="odd">Subtracts 2 numbers and assigns the result to the first.</span></td></tr><tr class="odd"><td><span class="even">a *= b</span></td><td>a = a*b</td><td><span class="even">Multiplies 2 numbers and assigns the result to the first.</span></td></tr><tr class="even"><td><span class="odd">a /=b</span></td><td><span class="odd">a = a/b</span></td><td><span class="odd">Divides 2 numbers and assigns the result to the first.</span></td></tr><tr class="odd"><td><span class="even">a %= b </span></td><td>a = a%b</td><td>Computes the modulus of 2 numbers and assigns the result to the first.</td></tr></tbody></table>

## Assignment operators (2/2)

<table><tbody><tr class="odd"><td>a&lt;&lt;=b</td><td>a = a&lt;&lt;b</td><td>Performs a left shift and assigns the result to the first operand.</td></tr><tr class="even"><td>a&gt;&gt;=b</td><td>a = a&gt;&gt;b</td><td>Performs a sign-propagating right shift and assigns the result to the first operand.</td></tr><tr class="odd"><td>a&gt;&gt;&gt;=b</td><td>a = a&gt;&gt;&gt;b</td><td>Performs a zero-fill right shift and assigns the result to the first operand.</td></tr><tr class="even"><td>a&amp;= b</td><td>a = a&amp;b</td><td>Performs a bitwise AND and assigns the result to the first operand.</td></tr><tr class="odd"><td>a^= b</td><td>a = a^b</td><td>Performs a bitwise XOR and assigns the result to the first operand.</td></tr><tr class="even"><td>a |=b</td><td>a = a|b</td><td>Performs a bitwise OR and assigns the result to the first operand.</td></tr></tbody></table>

## Comparison Operators(1/2)

<table><thead><tr class="header"><th>Operator</th><th>Comparisons<br />
</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>Equal (==)</td><td>x == y</td><td>Returns true if the operands are equal.</td></tr><tr class="even"><td>Strict equal (===)</td><td>x === y</td><td>Returns true if the operands are equal and of the same type.</td></tr><tr class="odd"><td>Not equal (!=)</td><td>x != y</td><td>Returns true if the operands are not equal.</td></tr><tr class="even"><td>Strict not equal (!==)</td><td>x !== y</td><td>Returns true if the operands are not equal and/or not of the same type.</td></tr></tbody></table>

## Comparison Operators(2/2)

<table><thead><tr class="header"><th>Operator</th><th>Comparisons<br />
</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>Greater than (&gt;)</td><td>x&gt;y</td><td>Returns true if the left operand is greater than the right operand.</td></tr><tr class="even"><td>Greater than or equal (&gt;=)</td><td>x&gt;=y</td><td>Returns true if the left operand is greater than or equal to the right operand.</td></tr><tr class="odd"><td>Less than (&lt;)</td><td>x&lt;y</td><td>Returns true if the left operand is less than the right operand.</td></tr><tr class="even"><td>Less than or equal (&lt;=)</td><td>x&lt;=y</td><td>Returns true if the left operand is less than or equal to the right operand.</td></tr></tbody></table>

## Bitwise Operators(1/2)

**Operator**

**Usage**

**Description**

Bitwise AND

a & b

Returns a one in each bit position if bits of both left and right operands are ones.

Bitwise OR

a | b

Returns a one in each bit if bits of either left or right operand is one.

Bitwise XOR

a ^ b

Returns a one in a bit position if bits of one but not both left and right operand are one.

Bitwise NOT

~ a

Flips the bits of its operand.

## Bitwise Operators(2/2)

<table><thead><tr class="header"><th><strong>Operator</strong></th><th><strong>Usage</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr class="odd"><td>Left shift</td><td>a &lt;&lt; b</td><td>Shifts a in binary representation b bits to the left, shifting in zeros from the right.</td></tr><tr class="even"><td>Sign-propagating right shift</td><td>a &gt;&gt; b</td><td>Shifts a in binary representation b bits to the right, discarding bits shifted off.</td></tr><tr class="odd"><td>Zero-fill right shift</td><td>a &gt;&gt;&gt; b</td><td>Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left.</td></tr></tbody></table>

## Logical Operators

<table><thead><tr class="header"><th>Operator</th><th>Usage</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>Logical AND &amp;&amp;</td><td>a &amp;&amp; b</td><td>is true if both a and b are true.</td></tr><tr class="even"><td>Logical OR ||</td><td>a || b</td><td>is true if either a or b is true.</td></tr><tr class="odd"><td>Logical NOT !</td><td>!a</td><td>is true if a is not true.</td></tr></tbody></table>

## String Operators

When working with JavaScript strings sometimes you need to join two or more strings together in to a single string. Joining multiple strings together is known as concatenation.

The concatenation operator (+) concatenates two or more string values together and return another string which is the union of the two operand strings.

## Special Operators

JavaScript has the following special operators.

- Comma operator
- new operators
- delete operators
- in operators
- instanceof operators
- this operators
- typeof operators
- void operators

## new Operator

The new operator is used to create an instance of a user-defined object type or of one of the predefined object types Array, Boolean, Date, Function, Image, Number, Object, Option, RegExp, or String.

Syntax : var objectName = new objectType(\[param1, param2, ..., paramN\]);

## this Operator

The this operator is used to refer the current object. In general, this refers to the calling object in a method.

Syntax : this\["propertyName"\]

## Label statement

Label statement provides an identifier for a statement that lets you refer to it using a break or continue statement.

<a href="http://jsbin.com/somubo/1/embed?js,console" class="jsbin-embed">JS Bin</a>

## JavaScript Objects

In JavaScript all values except the primitive types of JavaScript (true, false, numbers, strings, null and undefined) are objects.

Here objects contain -&gt; propertyName: propertyValue pairs.

## Predefined Core Objects

JavaScript has the following predefined objects.

- Array Object
- Boolean Object
- Date Object
- Function Object
- Math Object
- Number Object
- RegExp Object
- String Object

Thank you for your time and attention, [Go to Home page](https://www.w3resource.com)
