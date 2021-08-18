 


- [Home](/index.php)
- ▼Matplotlib
- [Home](/graphics/matplotlib/index.php)
- [Basic](/graphics/matplotlib/basic/index.php)
- [Bar Chart](/graphics/matplotlib/barchart/index.php)
- [Pie Chart](/graphics/matplotlib/piechart/index.php)
- [Scatter Plot](/graphics/matplotlib/scatter/index.php)
- [..More to come..]()

# Matplotlib: - Exercises, Practice, Solution

Last update on February 26 2020 08:08:48 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

\[_An editor is available at the bottom of the page to write and execute the scripts._\]

Matplotlib is a Python plotting library which produces publication quality figures in a variety of hardcopy formats and interactive environments across platforms. Matplotlib can be used in Python scripts, the Python and IPython shells, the Jupyter notebook, web application servers, and four graphical user interface toolkits.

The best way we learn anything is by practice and exercise questions. Here you have the opportunity to practice the NumPy concepts by solving the exercises starting from basic to more complex exercises. A sample solution is provided for each exercise. It is recommended to do these exercises by yourself first before checking the solution.

Hope, these exercises help you to improve your Matplotlib coding skills. Currently, following sections are available, we are working hard to add more exercises .... Happy Coding!

**List of Matplotlib Exercises:**

[Matplotlib Basic \[15 exercises with solution\]](/graphics/matplotlib/basic/index.php)

[Matplotlib Bar Chart \[17 exercises with solution\]](/graphics/matplotlib/barchart/index.php)

[Matplotlib Pie Chart \[4 exercises with solution\]](/graphics/matplotlib/piechart/index.php)

[Matplotlib Scatter Plot \[6 exercises with solution\]](/graphics/matplotlib/scatter/index.php)

**More to Come !**

**Matplotlib Basics**

![Matplotlib: matplotlib-logo](https://www.w3resource.com/w3r_images/sample-graphics.png)

**Creating Plots**

_Figure_

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>fig = plt.figures()</td><td>a container that contains all plot elements</td></tr></tbody></table>

_Axes_

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>fig.add_axes()<br />
a = fig.add_subplot(222)</td><td>Initializes subplot<br />
A subplot is an axes on a grid system row-col-num.</td></tr><tr class="even"><td>fig, b = plt.subplots(nrows=3, nclos=2)</td><td>Adds subplot</td></tr><tr class="odd"><td>ax = plt.subplots(2, 2)</td><td>Creates subplot</td></tr></tbody></table>

**Plotting**

_1D Data_

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>lines = plt.plot(x,y)</td><td>Plot data connected by lines</td></tr><tr class="even"><td>plt.scatter(x,y)</td><td>Creates a scatterplot, unconnected data points</td></tr><tr class="odd"><td>plt.bar(xvalue, data , width, color...)</td><td>simple vertical bar chart</td></tr><tr class="even"><td>plt.barh(yvalue, data, width, color...)</td><td>simple horizontal bar</td></tr><tr class="odd"><td>plt.hist(x, y)</td><td>Plots a histogram</td></tr><tr class="even"><td>plt.boxplot(x,y)</td><td>Box and Whisker plot</td></tr><tr class="odd"><td>plt.violinplot(x, y)</td><td>Creates violin plot</td></tr><tr class="even"><td>ax.fill(x, y, color='lightblue')<br />
ax.fill_between(x,y,color='yellow')</td><td>Fill area under/between plots</td></tr></tbody></table>

_2D Data_

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>fig, ax = plt.subplots()<br />
im = ax.imshow(img, cmap, vmin...)</td><td>Colormapped or RGB arrays</td></tr></tbody></table>

_Saving plots_

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>plt.savefig('pic.png')</td><td>Saves plot/figure to image</td></tr><tr class="even"><td>plt.savefig('transparentback.png')</td><td>Saves transparent plot/figure to image</td></tr></tbody></table>

**Customization**

_Color_

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>plt.plot(x, y, color='lightblue')<br />
plt.plot(x, y, alpha = 0.4)</td><td>colors plot to color blue</td></tr><tr class="even"><td>plt.colorbar(mappable,<br />
orientation='horizontal')</td><td>mappable: the Image, Contourset etc to which colorbar applies</td></tr></tbody></table>

_Markers_

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>plt.plot(x, y, marker='*')</td><td>adds * for every data point</td></tr><tr class="even"><td>plt.scatter(x, y, marker='.')</td><td>adds . for every data point</td></tr></tbody></table>

_Lines_

Operator

Description

plt.plot(x, y, linewidth=2)

Sets line width

plt.plot(x, y, ls='solid')

Sets linestyle, ls can be ommitted, see 2 below

plt.plot(x, y, ls='--')

Sets linestyle, ls can be ommitted, see below

plt.plot(x,y,'--', x\*\*2, y\*\*2, '-.')

Lines are '--' and '\_.'

plt.setp(lines,color='red',linewidth=2)

Sets properties of plot lines

_Text_

Operator

Description

plt.text(1, 1,'Example  
Text',style='italic')

Places text at coordinates 1/1

ax.annotate('some annotation', xy=(10, 10))

Annotate the point with coordinatesxy with text s

plt.title(r'$delta\_i=20$', fontsize=10)

Mathtext

_Limits_

<table><thead><tr class="header"><th>Operators</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>plt.xlim(0, 7)</td><td>Sets x-axis to display 0 - 7</td></tr><tr class="even"><td>other = array.copy()</td><td>Creates deep copy of array</td></tr><tr class="odd"><td>plt.ylim(-0.5, 9)</td><td>Sets y-axis to display -0.5 - 9</td></tr><tr class="even"><td>ax.set(xlim=[0, 7], ylim=[-0.5, 9])<br />
ax.set_xlim(0, 7)</td><td>Sets limits</td></tr><tr class="odd"><td>plt.margins(x=1.0, y=1.0)</td><td>Set margins: add padding to a plot, values 0 - 1</td></tr><tr class="even"><td>plt.axis('equal')</td><td>Set the aspect ratio of the plot to 1</td></tr></tbody></table>

_Legends/Labels_

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>plt.title('just a title')</td><td>Sets title of plot</td></tr><tr class="even"><td>plt.xlabel('x-axis')</td><td>Sets label next to x-axis</td></tr><tr class="odd"><td>plt.ylabel('y-axis')</td><td>Sets label next to y-axis</td></tr><tr class="even"><td>ax.set(title='axis', ylabel='Y-Axis', xlabel='X-Axis')</td><td>Set title and axis labels</td></tr><tr class="odd"><td>ax.legend(loc='best')</td><td>No overlapping plot elements</td></tr></tbody></table>

_Ticks_

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>plt.xticks(x, labels, rotation='vertical')</td><td>Set ticks</td></tr><tr class="even"><td>ax.xaxis.set(ticks=range(1,5), ticklabels=[3,100,-12,"foo"])</td><td>Set x-ticks</td></tr><tr class="odd"><td>ax.tick_params(axis='y', direction='inout', length=10)</td><td>Make y-ticks longer and go in and out</td></tr></tbody></table>

## Popularity of Programming Language Worldwide, Aug 2021 compared to a year ago:

Rank

Change

Language

Share

Trend

1

Python

29.93 %

-2.2 %

2

Java

17.78 %

+1.2 %

3

Javascript

8.79 %

+0.6 %

4

C\#

6.73 %

+0.2%

5

![up arrow](https://www.w3resource.com/w3r_images/up.png)

C/C++

6.45 %

+0.7 %

6

![down arrow](https://www.w3resource.com/w3r_images/down.png)

PHP

5.76 %

-0.0 %

7

R

3.92 %

-0.1 %

8



Objective-C

2.26 %

-0.3 %

9

![up arrow](https://www.w3resource.com/w3r_images/up.png)

TypeScript

2.11 %

+0.2 %

10

![down arrow](https://www.w3resource.com/w3r_images/down.png)

Swift

1.96 %

-0.3 %

11

![up arrow](https://www.w3resource.com/w3r_images/up.png)

Kotlin

\`

1.81%

+0.3 %

12

![down arrow](https://www.w3resource.com/w3r_images/down.png)

Matlab

1.48 %

-0.4 %

13



Go

1.29 %

-0.2 %

14

![up arrow](https://www.w3resource.com/w3r_images/up.png)

Rust

1.21 %

+0.2 %

15

![down arrow](https://www.w3resource.com/w3r_images/down.png)

VBA

1.16 %

-0.1 %

16

![down arrow](https://www.w3resource.com/w3r_images/down.png)

Ruby

1.02 %

-0.1 %

17



Scala

0.79 %

-0.1 %

18

![up arrow](https://www.w3resource.com/w3r_images/up.png)

Ada

0.77 %

+0.2 %

19

![down arrow](https://www.w3resource.com/w3r_images/down.png)

Visual Basic

0.75 %

+0.0 %

20



Dart

0.68 %

+0.2 %

21



Lua

0.58 %

+0.1 %

22

![up arrow](https://www.w3resource.com/w3r_images/up.png)

Cobol

0.51 %

+0.1 %

23



Groovy

0.51 %

+0.1 %

24

![down arrow](https://www.w3resource.com/w3r_images/down.png)

Abap

0.46 %

-0.0 %

25

![up arrow](https://www.w3resource.com/w3r_images/up.png)

Perl

0.45 %

+0.1 %

26

![down arrow](https://www.w3resource.com/w3r_images/down.png)

Julia

0.39 %

-0.0 %

27

![up arrow](https://www.w3resource.com/w3r_images/up.png)

Haskell

0.24 %

-0.0 %

28

![down arrow](https://www.w3resource.com/w3r_images/down.png)

Delphi/Pascal

0.2 %

-0.1 %

Source : https://pypl.github.io/PYPL.html

**TIOBE Index for August 2021**

<table><thead><tr class="header"><th>Aug 2021</th><th>Aug 2020</th><th>Change</th><th>Programming Language</th><th>Ratings</th><th>Change</th></tr></thead><tbody><tr class="odd"><td>1</td><td>1</td><td></td><td>C</td><td>12.57%</td><td>-4.41%</td></tr><tr class="even"><td>2</td><td>3</td><td><img src="https://www.w3resource.com/w3r_images/up.png" alt="up arrow" /></td><td>Python</td><td>11.86%</td><td>+2.17%</td></tr><tr class="odd"><td>3</td><td>2</td><td><img src="https://www.w3resource.com/w3r_images/down.png" alt="down arrow" /></td><td>Java</td><td>10.43%</td><td>-4.00%</td></tr><tr class="even"><td>4</td><td>4</td><td></td><td>C++</td><td>7.36%</td><td>+0.52%</td></tr><tr class="odd"><td>5</td><td>5</td><td></td><td>C#</td><td>5.14%</td><td>+0.46%</td></tr><tr class="even"><td>6</td><td>6</td><td></td><td>Visual Basic</td><td>4.67%</td><td>+0.01%</td></tr><tr class="odd"><td>7</td><td>7</td><td></td><td>JavaScript</td><td>2.95%</td><td>+0.07%</td></tr><tr class="even"><td>8</td><td>9</td><td><img src="https://www.w3resource.com/w3r_images/up.png" alt="up arrow" /></td><td>PHP</td><td>2.19%</td><td>-0.05%</td></tr><tr class="odd"><td>9</td><td>14</td><td><img src="https://www.w3resource.com/w3r_images/up.png" alt="up arrow" /></td><td>Assembly language</td><td>2.03%</td><td>+0.99%</td></tr><tr class="even"><td>10</td><td>10</td><td></td><td>SQL</td><td>1.47%</td><td>+0.02%</td></tr><tr class="odd"><td>11</td><td>18</td><td><img src="https://www.w3resource.com/w3r_images/up.png" alt="up arrow" /></td><td>Groovy</td><td>1.36%</td><td>+0.59%</td></tr><tr class="even"><td>12</td><td>17</td><td><img src="https://www.w3resource.com/w3r_images/up.png" alt="up arrow" /></td><td>Classic Visual Basic</td><td>1.23%</td><td>+0.41%</td></tr><tr class="odd"><td>13</td><td>42</td><td><img src="https://www.w3resource.com/w3r_images/up.png" alt="up arrow" /></td><td>Fortan</td><td>1.14%</td><td>+0.83%</td></tr><tr class="even"><td>14</td><td>8</td><td><img src="https://www.w3resource.com/w3r_images/down.png" alt="down arrow" /></td><td>R</td><td>1.05%</td><td>-1.75%</td></tr><tr class="odd"><td>15</td><td>15</td><td></td><td>Ruby</td><td>1.01%</td><td>-0.03%</td></tr><tr class="even"><td>16</td><td>12</td><td><img src="https://www.w3resource.com/w3r_images/down.png" alt="down arrow" /></td><td>Swift</td><td>0.98%</td><td>-0.44%</td></tr><tr class="odd"><td>17</td><td>16</td><td><img src="https://www.w3resource.com/w3r_images/down.png" alt="down arrow" /></td><td>MATLAB</td><td>0.98%</td><td>+0.11%</td></tr><tr class="even"><td>18</td><td>11</td><td><img src="https://www.w3resource.com/w3r_images/down.png" alt="down arrow" /></td><td>Go</td><td>0.90%</td><td>-0.52%</td></tr><tr class="odd"><td>19</td><td>36</td><td><img src="https://www.w3resource.com/w3r_images/up.png" alt="up arrow" /></td><td>Prolog</td><td>0.80%</td><td>+0.41%</td></tr><tr class="even"><td>20</td><td>13</td><td><img src="https://www.w3resource.com/w3r_images/up.png" alt="up arrow" /></td><td>Perl</td><td>0.78%</td><td>-0.33%</td></tr></tbody></table>

Source : https://www.tiobe.com/tiobe-index/

**List of Exercises with Solutions :**

- [HTML CSS Exercises, Practice, Solution](https://www.w3resource.com/html-css-exercise/index.php)
- [JavaScript Exercises, Practice, Solution](https://www.w3resource.com/javascript-exercises/)
- [jQuery Exercises, Practice, Solution](https://www.w3resource.com/jquery-exercises/)
- [jQuery-UI Exercises, Practice, Solution](https://www.w3resource.com/jquery-ui-exercises/)
- [CoffeeScript Exercises, Practice, Solution](https://www.w3resource.com/coffeescript-exercises/index.php)
- [Twitter Bootstrap Exercises, Practice, Solution](https://www.w3resource.com/twitter-bootstrap/examples.php)
- [C Programming Exercises, Practice, Solution](https://www.w3resource.com/c-programming-exercises)
- [C\# Sharp Programming Exercises, Practice, Solution](https://www.w3resource.com/csharp-exercises)
- [PHP Exercises, Practice, Solution](https://www.w3resource.com/php-exercises)
- [Python Exercises, Practice, Solution](https://www.w3resource.com/python-exercises/)
- [R Programming Exercises, Practice, Solution](https://www.w3resource.com/r-programming-exercises/)
- [Java Exercises, Practice, Solution](https://www.w3resource.com/java-exercises/)
- [SQL Exercises, Practice, Solution](https://www.w3resource.com/sql-exercises/)
- [MySQL Exercises, Practice, Solution](https://www.w3resource.com/mysql-exercises/)
- [PostgreSQL Exercises, Practice, Solution](https://www.w3resource.com/postgresql-exercises/)
- [SQLite Exercises, Practice, Solution](https://www.w3resource.com/sqlite-exercises/)
- [MongoDB Exercises, Practice, Solution](https://www.w3resource.com/mongodb-exercises/)
- [Euler Project](https://www.w3resource.com/euler-project/)

---

<span class="underline"></span>

 

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
