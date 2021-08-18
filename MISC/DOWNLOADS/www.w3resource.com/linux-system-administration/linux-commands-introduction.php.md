 


- [Home](/index.php)
- [Linux Server Administration](/linux-system-administration/installation.php)
- ▼Linux Commands
- [Introduction](/linux-system-administration/linux-commands-introduction.php)
- [Control-operators](/linux-system-administration/control-operators.php)
- [Working-with-directories](/linux-system-administration/working-with-directories.php)
- [Working-with-files](/linux-system-administration/working-with-files.php)
- [Working-with-file-contents](/linux-system-administration/working-with-file-contents.php)
- [Linux-file-tree](/linux-system-administration/linux-file-tree.php)
- [Commands-and-arguments](/linux-system-administration/commands-and-arguments.php)
- [Shell-variables](/linux-system-administration/shell-variables.php)
- [Shell-history](/linux-system-administration/shell-history.php)
- [File-globbing](/linux-system-administration/file-globbing.php)
- [I-O-redirection](/linux-system-administration/i-o-redirection.php)
- [Filters](/linux-system-administration/filters.php)
- [Basic-unix-tools](/linux-system-administration/basic-unix-tools.php)
- [Regular-expressions](/linux-system-administration/regular-expressions.php)
- [Users](/linux-system-administration/users.php)
- [Groups](/linux-system-administration/groups.php)
- [..More to come..]()

# Linux Commands

Last update on February 26 2020 08:08:38 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

A shell is a program that provides the traditional, text-only user interface for Linux and other Unix-like operating systems. The shell is an intermediary program which interprets the commands that are typed into a console (an all-text display mode) or terminal window (an all-text window) in a GUI (graphical user interface) and translates them into commands that the kernel (the core of the operating system) understands. A shell is the most fundamental way that a user can interact with the system, and the shell hides the details of the underlying operating system from the user. Almost all Linux distributions supply a shell program from the GNU Project called bash. The name "bash" is a Unix shell written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell (sh). Released in 1989, it has been distributed widely as the shell for the GNU operating system and as a default shell on Linux and Mac OS X.

A shell prompt, also referred to as a command prompt is a character or set of characters at the start of the command line that indicates that the shell is ready to receive commands. It usually ends with a dollar sign ($) for ordinary users and a pound sign (\#) for the root (i.e., administrative) user. The term command line is sometimes used interchangeably with the shell prompt, because that is where the user enters commands. For example, instructions for performing some activity might say "Enter the following at the command line," which is the same as saying "Enter the following at the shell prompt." However, a command line is not a program but rather just the space to the right of a shell prompt.

### Administrative Login

![linux login as a root](https://www.w3resource.com/w3r_images/linux-root-login.png)

### User Login

![linux user login](https://www.w3resource.com/w3r_images/linux-user-login.png)

### Command Navigation

Here is a list of commonly used keyboard shortcuts using the default shell, bash :

<table><thead><tr class="header"><th>Keyboard shortcuts</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>Up Arrow &amp; Down Arrow</td><td>Previously used commands in the current session.<br />
</td></tr><tr class="even"><td>Ctrl-A</td><td>Move the cursor to beginning of the current line.</td></tr><tr class="odd"><td>Ctrl-E</td><td>Move the cursor to the end of the current line.</td></tr><tr class="even"><td>Ctrl-U</td><td>Delete all the line from the start of the line to the current cursor position.</td></tr><tr class="odd"><td>Ctrl-H</td><td>Same as backspace.</td></tr><tr class="even"><td>Ctrl-K</td><td>Delete all the line from the current cursor position.</td></tr><tr class="odd"><td>Ctrl-W</td><td>Delete the word before the current cursor position.</td></tr><tr class="even"><td>Ctrl-D</td><td>On a blank line is the same as the exit command. Otherwise, it deletes the character in front of the cursor.</td></tr><tr class="odd"><td>Ctrl-C</td><td>Stop the current running command.</td></tr><tr class="even"><td>Ctrl-Shift-C</td><td>Copy</td></tr><tr class="odd"><td>Ctrl-Shift-V or Shift-Insert</td><td>Paste</td></tr><tr class="even"><td>Tab</td><td>Command completion.</td></tr></tbody></table>

Let's work with some simple commands. The first one is an exit.

### exit

The exit command is used to exit the shell.

    datasoft @ datasoft-linux ~$ exit

**clear**

The clear command is used to clear the terminal screen.

**help**

The help command is used to display information about commands

**Syntax:**

    help [-d | -m  | -s]

**Example:**

    datasoft @ datasoft-linux ~$ help exit
    exit: exit [n]
        Exit the shell.

        Exits the shell with a status of N.  If N is omitted, the exit status
        is that of the last command executed.
     datasoft @ datasoft-linux ~$


**Option**:

**-d**

**Description**: Display a short description for each topic.

Example :

    datasoft @ datasoft-linux ~$ help -d exit
    exit - Exit the shell.
     datasoft @ datasoft-linux ~$

**Option**:

### -m

**Description**: Display usage in pseudo-manpage format.

Example:

    datasoft @ datasoft-linux ~$ help -m exit
    NAME
        exit - Exit the shell.

    SYNOPSIS
        exit [n]

    DESCRIPTION
        Exit the shell.

        Exits the shell with a status of N.  If N is omitted, the exit status
        is that of the last command executed.

    SEE ALSO
        bash(1)

    IMPLEMENTATION
        GNU bash, version 4.3.8(1)-release (i686-pc-linux-gnu)
        Copyright (C) 2013 Free Software Foundation, Inc.
        License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>

     datasoft @ datasoft-linux ~$

**Option**:

**-s**

**Description**: Display a short usage synopsis for each topic matching.

Example:

    datasoft @ datasoft-linux ~$ help -s exit
    exit: exit [n]
     datasoft @ datasoft-linux ~$

Arguments: PATTERN  
If PATTERN is specified, gives detailed help on all commands matching PATTERN, otherwise the list of help topics is printed.

**Calendar**

Cal or ncal is used to display a calendar and the date of Easter. The cal utility displays a simple calendar in traditional format and ncal offers an alternative layout.

**Syntax:**

    cal [-3hjy] [-A number] [-B number] [[month] year]
    cal [-3hj] [-A number] [-B number] -m month [year]
    ncal [-3bhjJpwySM] [-A number] [-B number] [-S country_code] [[month] year]
    ncal [-3bhjJeoSM] [-A number] [-B number] [year]
    ncal [-CN] [-H yyyy-mm-dd] [-d yyyy-mm]

**Example:**

    datasoft @ datasoft-linux ~$ cal
        August 2014
    Su Mo Tu We Th Fr Sa
                    1  2
     3  4  5  6  7  8  9
    10 11 12 13 14 15 16
    17 18 19 20 21 22 23
    24 25 26 27 28 29 30
    31
     datasoft @ datasoft-linux ~$ ncal
        August 2014
    Su     3 10 17 24 31
    Mo     4 11 18 25
    Tu     5 12 19 26
    We     6 13 20 27
    Th     7 14 21 28
    Fr  1  8 15 22 29
    Sa  2  9 16 23 30
     datasoft @ datasoft-linux ~$

Note: Not all options can be used together. For example "-3 -A 2 -B -y -m 7" means, show the three months around the seventh month, three before that, two after that and the whole year. ncal will warn about these combinations.

**Date**

The date command is used to display the current time in the given FORMAT, or set the system date. The command can display the date, time, time zone and more.

**Syntax:**

    date [OPTION]..[+FORMAT]
    date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][.ss]]

**Example:**

    datasoft @ datasoft-linux ~$ date
    Sat Aug 23 17:40:43 IST 2014
     datasoft @ datasoft-linux ~$


Note: Running date with no options will output the system date and time.

**Option**:

**-d, --date=STRING**

**Description**: Display time described by STRING, as opposed to the default, which is 'now'.

Examples:

    datasoft @ datasoft-linux ~$ date --date="4/15/2015"
    Wed Apr 15 00:00:00 IST 2015
     datasoft @ datasoft-linux ~$ date --date="15 apr 2015"
    Wed Apr 15 00:00:00 IST 2015
     datasoft @ datasoft-linux ~$ date --date="Apr 15 2015"
    Wed Apr 15 00:00:00 IST 2015
     datasoft @ datasoft-linux ~$

Display date of next Sunday :

    datasoft @ datasoft-linux ~$ date
    Sat Aug 23 17:46:37 IST 2014
     datasoft @ datasoft-linux ~$ date --date="next sun"
    Sun Aug 24 00:00:00 IST 2014
     datasoft @ datasoft-linux ~$

Display past dates :

    datasoft @ datasoft-linux ~$ date
    Sat Aug 23 17:48:03 IST 2014
     datasoft @ datasoft-linux ~$ date --date='15 seconds ago'
    Sat Aug 23 17:48:36 IST 2014
     datasoft @ datasoft-linux ~$ date --date='1 day ago'
    Fri Aug 22 17:49:13 IST 2014
     datasoft @ datasoft-linux ~$ date --date='yesterday'
    Fri Aug 22 17:49:29 IST 2014
     datasoft @ datasoft-linux ~$ date --date='1 month ago'
    Wed Jul 23 17:49:52 IST 2014
     datasoft @ datasoft-linux ~$ date --date='2 years ago'
    Thu Aug 23 17:50:14 IST 2012
     datasoft @ datasoft-linux ~

**Option**:

**-f, --file=DATEFILE**

**Description**: like --date once for each line of DATEFILE.

Example:

    datasoft @ datasoft-linux ~$ cat datefile
    datasoft @ datasoft-linux ~$ cat datefile
    Feb 21 1993
    Jan 02 2012
    datasoft @ datasoft-linux ~$ date --file=datefile
    Sun Feb 21 00:00:00 IST 1993
    Mon Jan  2 00:00:00 IST 2012
     datasoft @ datasoft-linux ~$

**Option**:

**-r, --reference=FILE**

**Description**: display the last modification time of FILE.

**Option**:

**-R, --rfc-2822**

**Description**: output date and time in RFC 2822 format.

Example:

    Mon, 07 Aug 2006 12:34:56 -0600

**Option**:

**--rfc-3339=TIMESPEC**

**Description**: output date and time in RFC 3339 format. TIMESPEC=‘date’, ‘seconds’, or ‘ns’ for date and time to the indicated precision.

Example: Date and time components are separated by a single space.

    2006-08-07 12:34:56-06:00

**Option**:

**-s, --set=STRING**

**Description**: Set time described by STRINGS.

Example:

    datasoft @ datasoft-linux ~$ date
    Sat Aug 23 18:00:18 IST 2014
    datasoft @ datasoft-linux ~$ date -s "08/23/2014 06:01:00"
    Sat Aug 23 06:01:00 IST 2014
    datasoft @ datasoft-linux ~$ date
    Sat Aug 23 18:02:50 IST 2014

**Option** :

**-u, --utc, --universal**

**Description** :

Example:

    datasoft @ datasoft-linux ~$ date
    Sat Aug 23 18:05:23 IST 2014
     datasoft @ datasoft-linux ~$ date -u
    Sat Aug 23 12:35:30 UTC 2014
     datasoft @ datasoft-linux ~$

**Various Date Command Formats**

**Syntax:**

    date +%<format-option>

FORMAT controls the output. Interpreted sequences are :

<table><thead><tr class="header"><th>Options</th><th>Description</th><th>Related with</th><th>Values or example</th></tr></thead><tbody><tr class="odd"><td>%%</td><td>a literal %</td><td> </td><td> </td></tr><tr class="even"><td>%a</td><td>Locale’s abbreviated weekday name</td><td>Date</td><td>Sun</td></tr><tr class="odd"><td>%A</td><td>locale’s full weekday name</td><td>Date</td><td>Sunday</td></tr><tr class="even"><td>%b</td><td>locale’s abbreviated month name</td><td>Month</td><td>Jan</td></tr><tr class="odd"><td>%B</td><td>locale’s full month name</td><td>Month</td><td>January</td></tr><tr class="even"><td>%c</td><td>locale’s date and time</td><td>Date and time</td><td>Thu Mar 3 23:05:25 2005</td></tr><tr class="odd"><td>%C</td><td>century; like %Y, except omit last two digits</td><td>Century</td><td>20</td></tr><tr class="even"><td>%d</td><td>day of month (two digits, zero filled)</td><td>Day</td><td>01</td></tr><tr class="odd"><td>%D</td><td>date; same as %m/%d/%y [<em>mm</em>/<em>dd</em>/<em>yy</em>]</td><td>Date</td><td>01/27/14</td></tr><tr class="even"><td>%e</td><td>day of month, space padded; same as %_d</td><td>Day</td><td>27</td></tr><tr class="odd"><td>%F</td><td>full date; same as %Y-%m-%d</td><td>Date</td><td>2014-01-27</td></tr><tr class="even"><td>%g</td><td>last two digits of year of ISO week number (see %G)</td><td>Year</td><td>14</td></tr><tr class="odd"><td>%G</td><td>year of ISO week number (see %V); normally useful only with %V</td><td>Year</td><td>2014</td></tr><tr class="even"><td>%h</td><td>same as %b</td><td>Month</td><td>Jan</td></tr><tr class="odd"><td>%H</td><td>hour</td><td>Hours</td><td>00..23</td></tr><tr class="even"><td>%I</td><td>hour</td><td>Hours</td><td>01..12</td></tr><tr class="odd"><td>%j</td><td>day of year</td><td>Day</td><td>001..366</td></tr><tr class="even"><td>%k</td><td>hour</td><td>Hours</td><td>0..23</td></tr><tr class="odd"><td>%l</td><td>hour</td><td>Hours</td><td>1..12</td></tr><tr class="even"><td>%m</td><td>month</td><td>Month</td><td>01..12</td></tr><tr class="odd"><td>%M</td><td>minute</td><td>Minutes</td><td>00..59</td></tr><tr class="even"><td>%n</td><td>a newline</td><td> </td><td> </td></tr><tr class="odd"><td>%N</td><td>nanoseconds ()</td><td>Seconds</td><td>000000000..999999999</td></tr><tr class="even"><td>%p</td><td>locale’s equivalent of either AM or PM; blank if not known</td><td>Hours</td><td>AM or PM</td></tr><tr class="odd"><td>%P</td><td>like %p, but lower case</td><td>Hours</td><td>am or pm</td></tr><tr class="even"><td>%r</td><td>locale’s 12-hour clock time</td><td>Time</td><td>11:11:04 PM</td></tr><tr class="odd"><td>%R</td><td>24-hour hour and minute; same as %H:%M</td><td>Time</td><td>10:23</td></tr><tr class="even"><td>%s</td><td>seconds since 1970-01-01 00:00:00 UTC</td><td>Seconds</td><td>1390831606</td></tr><tr class="odd"><td>%S</td><td>second (00..60)</td><td>Seconds</td><td>30</td></tr><tr class="even"><td>%t</td><td>a tab</td><td> </td><td> </td></tr><tr class="odd"><td>%T</td><td>time; same as %H:%M:%S</td><td>Time</td><td>10:24:48</td></tr><tr class="even"><td>%u</td><td>day of week (1..7)</td><td>Day</td><td>1 is Monday</td></tr><tr class="odd"><td>%U</td><td>week number of year, with Sunday as first day of week (00..53)</td><td>Week</td><td>04</td></tr><tr class="even"><td>%V</td><td>ISO week number, with Monday as first day of week (01..53)</td><td>Week</td><td>05</td></tr><tr class="odd"><td>%w</td><td>day of week (0..6)</td><td>Day</td><td>0 is Sunday</td></tr><tr class="even"><td>%W</td><td>week number of year, with Monday as first day of week (00..53)</td><td>Week</td><td>04</td></tr><tr class="odd"><td>%x</td><td>locale’s date representation</td><td>Date</td><td>01/27/2014</td></tr><tr class="even"><td>%X</td><td>locale’s time representation</td><td>Time</td><td>10:30:41 AM</td></tr><tr class="odd"><td>%y</td><td>last two digits of year</td><td>Year</td><td>14</td></tr><tr class="even"><td>%Y</td><td>year</td><td>Year</td><td>2014</td></tr><tr class="odd"><td>%z</td><td>+hhmm numeric timezone (e.g., -0400)</td><td>Time zone</td><td>+0530</td></tr><tr class="even"><td>%:z</td><td>+hh:mm numeric timezone (e.g., -04:00)</td><td>Time zone</td><td>+05:30</td></tr><tr class="odd"><td>%::z</td><td>+hh:mm:ss numeric time zone (e.g., -04:00:00)</td><td>Time zone</td><td>+05:30:00</td></tr><tr class="even"><td>%:::z</td><td>numeric time zone with : to necessary precision (e.g., -04, +05:30)</td><td>Time zone</td><td>+05:30</td></tr><tr class="odd"><td>%Z</td><td>alphabetic time zone abbreviation (e.g., EDT)</td><td>Time zone</td><td>IST</td></tr></tbody></table>

**Example:**

\# Display a date in mm-dd-yyyy format.

    datasoft @ datasoft-linux ~$ date +%d-%m-%Y
    23-08-2014
     datasoft @ datasoft-linux ~$


**Previous:** [Web-based system administration using Webmin](https://www.w3resource.com/linux-system-administration/webmin.php)  
**Next:** [Linux - Control-operators](https://www.w3resource.com/linux-system-administration/control-operators.php)

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
