 


- [Home](https://www.w3resource.com/)
- ▼Java Tutorial
- [Introduction](/java-tutorial/)
- [Java Program Structure](/java-tutorial/java-program-structure.php)
- [Java Primitive data type](/java-tutorial/java-premitive-data-type.php)
- ▼Development environment setup
- [Download and Install JDK, Eclipse (IDE)](/java-tutorial/download-and-Install-JDK-Eclipse-IDE.php)
- [Compiling, running and debugging Java programs](/java-tutorial/compiling-running-and-debugging-java-programs.php)
- ▼Declaration and Access control
- [Class, methods, instance variables](/java-tutorial/java-class-methods-instance-variables.php)
- [Java Packages](/java-tutorial/java-packages.php)
- ▼OOPS Concepts
- [Java Object Oriented Programming concepts](/java-tutorial/java-object-oriented-programming.php)
- [Is-A and Has-A relationship](/java-tutorial/inheritance-composition-relationship.php)
- ▼Assignments
- [Arrays - 2D array and Multi dimension array](/java-tutorial/java-arrays.php)
- [Wrapper classes](/java-tutorial/java-wrapper-classes.php)
- ▼Operators
- [Assignment Operator](/java-tutorial/java-assignment-operators.php)
- [Arithmetic Operator](/java-tutorial/java-arithmetic-operators.php)
- [Conditional Operator](/java-tutorial/java-conditional-operators.php)
- [Logical Operator](/java-tutorial/java-logical-operators.php)
- ▼Flow Control
- [Switch Satement](/java-tutorial/java-switch-break-continue-statements.php)
- [While and Do loop](/java-tutorial/java-while-do-while-loop.php)
- [For loop](/java-tutorial/java-for-loop.php)
- [Java Branching Statements](/java-tutorial/java-branching-statements.php)
- ▼Exceptions
- [Handling Exceptions](/java-tutorial/exception-in-java.php)
- [Checked and unchecked](/java-tutorial/types-of-exception.php)
- [Custom Exception](/java-tutorial/custom-exception.php)
- [Try with resource feature of Java 7](/java-tutorial/try-with-resource-Java7-excution-features.php)
- ▼String Class
- [String Class](/java-tutorial/the-string-class.php)
- [Important methods of String class with example](/java-tutorial/exploring-methods-of-string-class.php)
- [String buffer class and string builder class](/java-tutorial/stringbuffer-stringbuilder.php)
- ▼File I/O and serialization
- [File Input and Output](/java-tutorial/file-input-and-output.php)
- [Reading file](/java-tutorial/reading-the-file.php)
- [Writing file](/java-tutorial/writing-the-file.php)
- [Java Property File Processing](/java-tutorial/java-propertyfile-processing.php)
- [Java Serialization](/java-tutorial/java-serialization.php)
- ▼Java Collection
- [Java Collection Framework](/java-tutorial/java-collections.php)
- [Java ArrayList and Vector](/java-tutorial/java-arraylist-and-vector.php)
- [Java LinkedList Class](/java-tutorial/java-linkedlist.php)
- [Java HashSet](/java-tutorial/java-hashset.php)
- [Java TreeSet](/java-tutorial/java-treeset.php)
- [Java Linked HashSet](/java-tutorial/java-linked-hashset.php)
- [Java Maps](/java-tutorial/java-maps.php)
- [Java Utility Class](/java-tutorial/java-collections-utility-class.php)
- ▼Java Thread
- [Java Defining, Instantiating and Starting Thread](/java-tutorial/java-defining-instantiating-and-starting-threads.php)
- [Java Thread States and Transitions](/java-tutorial/java-threadclass-methods-and-threadstates.php)
- [Java Thread Interaction](/java-tutorial/java-thread-interaction.php)
- [Java Code Synchronization](/java-tutorial/java-code-synchronization.php)
- ▼Java Package
- [Util](/java-tutorial/util/index.php)
- [Lang](/java-tutorial/string/index.php)
- ▼Miscellaneous
- [Garbage Collection in Java](/java-tutorial/garbage-collection-in-java.php)
- [BigDecimal Method](/java-tutorial/java-big-decimal-class.php)
- [More....]()

# Java Tutorial

Last update on February 26 2020 08:07:31 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Preface

This is the first article of w3resource's Java programming tutorial. The aim of this tutorial is to make beginners conversant with Java programming language.

**Introduction to Java programming language**

Today Java programming language is one of the most popular programming languages which is used in critical applications like stock market trading system on BSE, banking systems or android mobile application.

Java was developed by James Gosling from Sun Microsystems in 1995 as an object-oriented language for general-purpose business applications and for interactive, Web-based Internet applications. The goal was to provide a platform-independent alternative to C++. In other terms, it is architecturally neutral, which means that you can use Java to write a program that will run on any platform or device (operating system). Java program can run on a wide variety of computers because it does not execute instructions on a computer directly. Instead, Java runs on a Java Virtual Machine (JVM).

Java is a general-purpose programming language that’s used in all industries for almost any type of application. If you master it, your chances of getting employed as a software developer will be higher than if you specialize in some domain-specific programming languages. The Java language is object-oriented (OO), which allows you to easily relate program constructs to objects from the real world.

**History of Java Releases**

This program runs fine under GNU Gcc compiler. We have tested this on a Ubuntu Linux system. But if you are using any other compiler like Turbo C++, the program needs to be modified to be executed successfully. For the sake of simplicity, we have not included that additional stuff here.

<table><thead><tr class="header"><th>Java Version/CodeName</th><th>Release Date</th><th><strong>Important Features/Code Name</strong></th></tr></thead><tbody><tr class="odd"><td>JDK 1.0 (Oak)</td><td>23rd Jan 1996</td><td>Initial release</td></tr><tr class="even"><td>JDK 1.1</td><td>19th Feb 1997</td><td>Reflection, JDBC, Inner classes, RMI</td></tr><tr class="odd"><td>J2SE 1.2 (Playground)</td><td>8th Dec 1998</td><td>Collection, JIT, String memory map</td></tr><tr class="even"><td>J2SE 1.3 (Kestrel)</td><td>8th May 2000</td><td>Java Sound, Java Indexing, JNDI</td></tr><tr class="odd"><td>J2SE 1.4 (merlin)</td><td>6th Feb 2002</td><td>Assert, regex, exception chaining,</td></tr><tr class="even"><td>J2SE 5.0 (Tiger)</td><td>30th Sept 2004</td><td>Generics, autoboxing, enums</td></tr><tr class="odd"><td>Java SE 6.0 (Mustang)</td><td>11th Dec 2006</td><td>JDBC 4.0, java compiler API, Annotations</td></tr><tr class="even"><td>Java SE 7.0 (Dolphin)</td><td>28th July 2011</td><td>String in switch-case, Java nio, exception handling new way</td></tr></tbody></table>

**The Java Program Life Cycle**

Java requires the source code of your program to be compiled first. It gets converted to either machine-specific code or a byte code that is understood by some run-time engine or a java virtual machine.

Not only will the program be checked for syntax errors by a Java compiler, but some other libraries of Java code can be added (linked) to your program after the compilation is complete (deployment stage).

![Java Program Life Cycle](https://www.w3resource.com/w3r_images/Java-Program-Life-Cycle.png)

**Step1 :** Create a source document using any editor and save file as .java (e.g. abc.java)

**Step2 :** Compile the abc.java file using “javac” command or eclipse will compile it automatically.

**Step3 :** Byte Code (abc.class) will be generated on disk.

**Step4 :** This byte code can run on any platform or device having JVM (java.exe convert byte code in machine language)

Let’s get familiar with various terminologies used by java programmers.

**JDK (Java Development Kit):** JDK contains JRE along with various development tools like Java libraries, Java source compilers, Java debuggers, bundling and deployment tools

**JRE (Java Runtime Environment):** It is part of JDK but can be used independently to run any byte code (compiled java program). It can be called as JVM implementation.

**JVM (Java Virtual Machine):** ‘JVM’ is software that can be ported to various hardware platforms. JVM will become an instance of JRE at runtime of java program. Byte codes are the machine language for the JVM. Like a real computing machine, JVM has an instruction set which manipulates various memory areas at run time. Thus for different hardware platforms, one has corresponding the implementation of JVM available as vendor supplied JREs.

**Java API (Application Programming Interface) :** Set of classes’ written using Java programming language which runs on JVM. These classes will help programmers by providing standard methods like reading from the console, writing to the console, saving objects in data structure etc.

**Advantages of Java programming language**

- Built-in support for multi-threading, socket communication, and memory management (automatic garbage collection).
- Object Oriented (OO).
- Better portability than other languages across operating systems.
- Supports Web-based applications (Applet, Servlet, and JSP), distributed applications (sockets, RMI, EJB etc.) and network protocols (HTTP, JRMP etc.) with the help of extensive standardized APIs (Application Programming Interfaces).

**Summary**

- Java is platform independent programming language which means compile once and run anywhere.
- Java provides built-in functionality for Thread, collection, File IO etc.
- The Java language is object-oriented (OO) programming language which will allow the programmer to relate java domain objects with real life objects.

In next session, we will discuss how to install JDK, Eclipse (IDE) and the basic structure of Java program. Compiling, running and debugging java program.

**Previous:**[Java Thread Interaction](https://www.w3resource.com/java-tutorial/java-thread-interaction.php)  
**Next:** [Java Program Structure](https://www.w3resource.com/java-tutorial/java-program-structure.php)

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
