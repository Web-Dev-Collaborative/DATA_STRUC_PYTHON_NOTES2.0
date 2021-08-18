 

 

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

# Python Project: COVID-19 - Exercises, Practice, Solution

Last update on March 21 2020 06:05:15 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## Python COVID-19 \[ 14 exercises with solution\]

\[_An editor is available at the bottom of the page to write and execute the scripts._\]

From Wikipedia,

Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The disease was first identified in 2019 in Wuhan, China, and has since spread globally, resulting in the 2019–20 coronavirus pandemic. Common symptoms include fever, cough and shortness of breath. Muscle pain, sputum production and sore throat are less common. The rate of deaths per number of diagnosed cases is on average 3.4%, ranging from 0.2% in those less than 20 to approximately 15% in those over 80 years old.

Data Source (Date wise) : 2019 Novel Coronavirus COVID-19 (2019-nCoV) Data Repository by Johns Hopkins CSSE

**Data Source:** https://github.com/CSSEGISandData/COVID-19/tree/master/csse\_covid\_19\_data/csse\_covid\_19\_daily\_reports

**File naming convention**

MM-DD-YYYY.csv in UTC.

**Field description**

- Province/State: China - province name; US/Canada/Australia/ - city name, state/province name; Others - name of the event (e.g., "Diamond Princess" cruise ship); other countries - blank.
- Country/Region: country/region name conforming to WHO (will be updated).
- Last Update: MM/DD/YYYY HH:mm (24 hour format, in UTC).
- Confirmed: the number of confirmed cases. For Hubei Province: from Feb 13 (GMT +8), we report both clinically diagnosed and lab-confirmed cases. For lab-confirmed cases only (Before Feb 17), please refer to [who_covid_19_situation_reports](https://github.com/CSSEGISandData/COVID-19/tree/master/who_covid_19_situation_reports). For Italy, diagnosis standard might be changed since Feb 27 to "slow the growth of new case numbers." ([Source](https://apnews.com/6c7e40fbec09858a3b4dbd65fe0f14f5))
- Deaths: the number of deaths.
- Recovered: the number of recovered cases.

Update frequency

- Files after Feb 1 (UTC): once a day around 23:59 (UTC).
- Files on and before Feb 1 (UTC): the last updated files before 23:59 (UTC).

Using above dataset we have created some exercises on COVID-19 (Spread of the novel coronavirus, Analysis, Visualization, Prediction & Comparisons

**1.** Write a Python program to display first 5 rows from COVID-19 dataset. Also print the dataset information and check the missing values. [Go to the editor](#EDITOR)

[Click me to see the sample solution](python-covid-19-exercise-1.php)

**2.** Write a Python program to get the latest number of confirmed, deaths, recovered and active cases of Novel Coronavirus (COVID-19) Country wise. [Go to the editor](#EDITOR)

[Click me to see the sample solution](python-covid-19-exercise-2.php)

**3.** Write a Python program to get the latest number of confirmed deaths and recovered people of Novel Coronavirus (COVID-19) cases Country/Region - Province/State wise.[Go to the editor](#EDITOR)

[Click me to see the sample solution](python-covid-19-exercise-3.php)

**4.** Write a Python program to get the Chinese province wise cases of confirmed, deaths and recovered cases of Novel Coronavirus (COVID-19). [Go to the editor](#EDITOR)

[Click me to see the sample solution](python-covid-19-exercise-4.php)

**5.** Write a Python program to get the latest country wise deaths cases of Novel Coronavirus (COVID-19). [Go to the editor](#EDITOR)

[Click me to see the sample solution](python-covid-19-exercise-5.php)

**6.** Write a Python program to list countries with no cases of Novel Coronavirus (COVID-19) recovered. [Go to the editor](#EDITOR)

[Click me to see the sample solution](python-covid-19-exercise-6.php)

**7.** Write a Python program to list countries with all cases of Novel Coronavirus (COVID-19) died. [Go to the editor](#EDITOR)

[Click me to see the sample solution](python-covid-19-exercise-7.php)

**8.** Write a Python program to list countries with all cases of Novel Coronavirus (COVID-19) recovered. [Go to the editor](#EDITOR)

[Click me to see the sample solution](python-covid-19-exercise-8.php)

**9.** Write a Python program to get the top 10 countries data (Last Update, Country/Region, Confirmed, Deaths, Recovered) of Novel Coronavirus (COVID-19). [Go to the editor](#EDITOR)

[Click me to see the sample solution](python-covid-19-exercise-9.php)

**10.** Write a Python program to create a plot (lines) of total deaths, confirmed, recovered and active cases Country wise where deaths greater than 150. [Go to the editor](#EDITOR)

[Click me to see the sample solution](python-covid-19-exercise-10.php)

**11.** Write a Python program to visualize the state/province wise death cases of Novel Coronavirus (COVID-19) in USA. [Go to the editor](#EDITOR)

[Click me to see the sample solution](python-covid-19-exercise-11.php)

**12.** Write a Python program to visualize the state/province wise Active cases of Novel Coronavirus (COVID-19) in USA. [Go to the editor](#EDITOR)

[Click me to see the sample solution](python-covid-19-exercise-12.php)

**13.** Write a Python program to visualize the state/province wise combine number of confirmed, deaths, recovered, active Novel Coronavirus (COVID-19) cases in USA. [Go to the editor](#EDITOR)

[Click me to see the sample solution](python-covid-19-exercise-13.php)

**14.** Write a Python program to visualize Worldwide Confirmed Novel Coronavirus (COVID-19) cases over time. [Go to the editor](#EDITOR)

[Click me to see the sample solution](python-covid-19-exercise-14.php)

---More----

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
