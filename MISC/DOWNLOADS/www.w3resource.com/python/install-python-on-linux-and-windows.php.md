 


- [Home](/index.php)
- [Python Home](/python/python-tutorial.php)
- [Python 2 vs 3](/python/python-2-vs-3.php)
- [Python Installation](/python/install-python-on-linux-and-windows.php)
- [Python IDLE](/python/python-ide.php)
- [CGI Programming](/python/cgi-programming.php)
- [Python Syntax](/python/python-syntax.php)
- [Python Print Statement](/python/python-print-statement.php)
- [Python Variable](/python/python-variable.php)
- [Python Data Type](/python/python-data-type.php)
- [Python Operators](/python/python-operators.php)
- [Python If elif else](/python/python-if-else-statements.php)
- [Python For Loop](/python/python-for-loop.php)
- [Python While Loop](/python/python-while-loop.php)
- [Python break, continue](/python/python-break-continue.php)
- [Python Bytes, Bytearray](/python/python-bytes.php)
- [Python Regular Expression](/python/python-regular-expression.php)
- [Python String](/python/python-string.php)
- [Python Lists](/python/python-list.php)
- [Python Dictionary](/python/python-dictionary.php)
- [Python Tuples](/python/python-tuple.php)
- [Python Sets](/python/python-sets.php)
- [Python Date and Time](/python/python-date-and-time.php)
- [Python User define function](/python/python-user-defined-functions.php)
- [Python Module](/python/python-module.php)
- [Python Library](/python/module/index.php)
- [Python Calendar Module](/python/module/calendar/)
- [Python Classes](/python/python-object-classes.php)
- [Python Built-in Functions](/python/built-in-function/)
- [Python Standard Library](/python/library/index.php)
- [..More to come..](%20)

# Python Installation on Fedora Linux and Windows 7

Last update on February 28 2020 12:05:03 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Install Python 3.2 on Fedora Linux

Remember that you must be Super User to install Python the way we discuss here.

**Download Python 3.2:**

wget http://www.python.org/ftp/python/3.2/Python-3.2.tar.bz2

Extract Files to a directory Python-3.2

tar -xjf Python-3.2.tar.bz2 cd Python-3.2

**Change to that directory:**

cd Python-3.2

**Run ./configure:**

![Python install configure](https://www.w3resource.com/w3r_images/Python-4.png)



**Run make:**

![Python install configure](https://www.w3resource.com/w3r_images/Python-5.png)



**Run make install:**

![make install python installation](https://www.w3resource.com/w3r_images/python-6.png)



And that's it. After this installation process, for all your Python Scripts, you have to add (if required) '\#!/opt/python3/bin/python3' as your path.

You may test which version of Python is installed by running the following command :

python -V

Also remember that with most of the Linux distributions, while installing, a standard installation process also installs Python by default. To run Python, just type python and hit enter and it will take you to the python prompt.

**Install Python 3.2 on Windows 7:**

Download .msi file of Python from http://www.python.org/getit/releases/3.2/. Once downloaded, double-click the file to install Python 3.2 on Windows 7.

**Start Installation:**

![python install windows step 1](https://www.w3resource.com/w3r_images/python-install-windows-step-1.png)



**Select Installation folder:**

![python install windows step 2](https://www.w3resource.com/w3r_images/python-install-windows-step-2.png)



Wait now till the installation process is finished.

![python installation step 4](https://www.w3resource.com/w3r_images/python-install-windows-step-3.png)



Click Finish button at this stage and that's it. You may open Python command line from Start Menu and you may run python commands as shown bellow:

![python installation step 5 windows 7](https://www.w3resource.com/w3r_images/python-command-prompt.png)



For both Windows and Linux, to leave the Python prompt, issue 'quit()'.

**Previous:** [Python 2 vs 3](https://www.w3resource.com/python/python-2-vs-3.php)  
**Next:** [Python IDLE](https://www.w3resource.com/python/python)

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
