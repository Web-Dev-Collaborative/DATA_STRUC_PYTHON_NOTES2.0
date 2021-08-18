 


- [Home](/index.php)
- ▼C Programming
- [Overview of C](/c-programming/programming-in-c.php)
- [C Tutorial](/c-programming/c-tutorial.php)
- [Compile and execute C program in Linux and Windows](/c-programming/compile-and-execute-c-program-in-linux-and-windows.php)
- [C Basic](/c-programming/c-basic.php)
- [C Variables and Constants](/c-programming/c-variable.php)
- [C Data Types](/c-programming/c-data-types.php)
- [C Operators](/c-programming/c-operators.php)
- [C printf()](/c-programming/c-printf-statement.php)
- [C if else](/c-programming/c-if-else-statement.php)
- [C for loop](/c-programming/c-for-loop.php)
- [C while loop](/c-programming/c-while-loop.php)
- [C do while loop](/c-programming/c-do-while-loop.php)
- [C array](/c-programming/c-array.php)
- [More....]()

# C programming

Last update on February 26 2020 08:08:50 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Introduction

C is a general-purpose programming language developed at AT & T's Bell Telephone Laboratories (USA) in 1972 by Dennis Ritchie. Since it was originally designed for and implemented on the UNIX operating system, therefore, it is strongly associated with UNIX though nowadays it is running on almost all operating systems. Here are most common reasons why C is still so popular:

![c tutorial ](https://www.w3resource.com/w3r_images/c-programming.png)

\- C is one of the most popular programming languages of all time to create system software as well as application software.

\- C is a standardized programming language with international standards.

\- C is the base for almost all popular programming languages.

\- C is one of the foundations for modern computer science and information technology.

\- The language of choice for serious programming.

\- Ease of understanding and learning, and one of the most commonly used programming languages in colleges and universities.

\- Once students have learned C, then it will be easy for them to pick up any other languages.

Let's look at a simple application in C:

    /*welcome.c (program name)*/
    /*The following program displays the message "Welcome to C Programming"*
    #include <stdio.h>
    main()
    {
    printf("Welcome to C Programming");
    }

## Note

This program runs fine under GNU Gcc compiler. We have tested this in a Ubuntu Linux system. But if you are using any other compiler like Turbo C++, the program needs to be modified to be executed successfully. For the sake of simplicity, we have not included those additional stuff here.

## Structure of the above C Program

## Comments

Comments are a good way to better understanding of the program statements. In C programming language the comment entries start with a "/\*" and terminate with "\*/" at the end of the line. The compiler (a compiler is a computer program which translates source code written in a programming language into object code.) ignores the comment statements.

In the above program, the lines

/\*welcome.c ( program name )\*/  
/\*This program displays the message "Welcome to C Programming"\*/

are comment lines.

## \#include directive

The \#include directive instructs the compiler to include the contents of the file "stdio.h" (standard input-output header file) enclosed within angular brackets.

## main() function

In C programming language the main() function serves a special purpose, it tells the compiler where the program start. Every C program must have one and only one main() function otherwise compiler can not understand the starting position of a program. The body of the main function surrounded by curly braces ( { } ). In the above program there is only one statement \[ printf("Welcome to C Programming"); \] between the curly braces. Each statement in a C program terminated with a semicolon( ; ).

![format of main function in c](https://www.w3resource.com/w3r_images/format-of-c-programming.png)

## Output using printf

The only executable statement in above program is : printf ("Welcome to C Programming"); which displays the enclosed text i.e.  
Welcome to C Programming

**Next:** [C Tutorial](https://www.w3resource.com/c-programming/c-tutorial.php)

---

<span class="underline"></span>

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

 

[This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.](https://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US)

©w3resource.com 2011-2021

- [Privacy](https://www.w3resource.com/privacy.php)
- [About](https://www.w3resource.com/about.php)
- [Contact](https://www.w3resource.com/contact.php)
- [Feedback](https://www.w3resource.com/feedback.php)
- [Advertise](https://www.w3resource.com/advertise.php)
