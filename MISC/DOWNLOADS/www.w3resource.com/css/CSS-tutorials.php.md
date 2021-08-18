 


- [Home](/index.php)
- [CSS Home](/css/CSS-tutorials.php)
- [What you will learn](/css/what-you-will-learn.php)
- [CSS basics](/css/basics/CSS-syntax.php)
- [CSS values](/css/CSS-values.php)
- [CSS assigning property values cascading inheritance](/css/assigning-property-values-cascading-inheritance/css-assigning-property-values-cascading-inheritance.php)
- [CSS Concepts](/css/concepts/box-model.php)
- [CSS Selectors](/css/selectors/CSS-selectors.php)
- [CSS background](/css/background/CSS-background.php)
- [CSS padding](/css/padding/CSS-padding-top-property.php)
- [CSS margin](/css/margin/CSS-margin-top-property.php)
- [CSS border](/css/border/CSS-border-top-style-property.php)
- [CSS Font](/css/fonts/font-families.php)
- [CSS Media](/css/media/introduction-and-types.php)
- [CSS Color](/css/color/introduction.php)
- [CSS User interface](/css/user-interface/introduction.php)
- [CSS text align](/css/text/text-align.php)

# CSS Tutorials

Last update on February 26 2020 08:08:56 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## What is CSS?

**CSS**, stands for Cascading Style Sheet is a computer language to describe presentation (for example width, height, color, background color, alignment etc.) of HTML and XML (and XML based languages like XHTML, SVG) web documents. In all the examples of our tutorials, we have used HTML for implementing CSS.

**CSS** is a standard specified and maintained by **World Wide Web Consortium**.

From its invention, **CSS** has evolved through different versions. The present version of CSS is **CSS 2.1**.

Next version of CSS is **CSS3**, which is under development but developers have already started using some of its features.

In the consequent pages, we will discuss **CSS 2.1** in detail. Learning which, **you will be able to implement CSS in your own web pages**.

## How CSS can be associated with an HTML web page

There are three ways to attach **CSS** to an HTML web page.

1. Writing CSS code in a separate file (**CSS files are saved with .css extension**) and including that CSS file in head section of an HTML page using **&lt;link&gt;** element.

## Example of including CSS by using &lt;link&gt; element

## CSS code:

    p {color: maroon}

## HTML code:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <title>A simple CSS example</title>
    <link rel='stylesheet' href='/css-intro1.css' type='text/css' />
    </head>
    <body>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at nisi velit, aliquet iaculis est.
    </p>
    </body>
    </html>

## Result

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at nisi velit, aliquet iaculis est.

[View an example of CSS using link element in a separate browser window.](example-of-including-CSS-by-using-link-element.html)

2. Writing CSS code as a value of style attribute of an HTML element whose presentation you like to set. This is called as an **inline style.**

## Example of writing CSS as a value of style attribute

HTML and CSS code:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <title>A simple CSS example</title>
    <link rel='stylesheet' href='/css-intro1.css' type='text/css' />
    </head>
    <body>
    <p style="color: maroon">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at nisi velit, aliquet iaculis est.  </p>
    </body>
    </html>

## Result

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at nisi velit, aliquet iaculis est.

[View example of writing CSS using the inline style in a separate browser window.](example-of-inline-style.html)

3.Writing CSS code within style tags, within the head section of the HTML page

## Example of writing CSS code within style tags, within the head section of the HTML page

**HTML and CSS code** :

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <title>A simple CSS example</title>
    <style type="text/css" >
    p {color: maroon}
    </style>
    </head>
    <body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at nisi velit, aliquet iaculis est.  </p>
    </body>
    </html>

[View example of writing CSS within style tags in a separate browser window.](example-of-writing-CSS-code-within-style-tags-within-the-head-section-of-the-HTML-page.html)

## Advantages of CSS

1. **Separation of content form presentation** : Writing CSS code in another CSS file and attaching it to an HTML page, you can separate content from presentation. So, as an author, you need not be concerned about presentation and concentrate on content only.

2. **Consistency** : CSS can provide a consistent presentation for all of the pages of a web site.

3. The **Increment in accessibility** : If a particular page (or a number of pages ) needs a different look and formatting, with a change of a single line, that can be achieved by calling more than one CSS for the same page.

4. **Save of bandwidth** : Since CSS separates content form style, it makes a web document lightweight, causing saving of bandwidth and in turn faster loading of the page.

5. **Ease of contribution** : Content Management Systems (for example WordPress) uses CSS, so that people without bothering how their content will look, can submit their content. This has caused an exponential increase in **User Generated Content.**

**Next:** [Features of w3resource CSS tutorials](https://www.w3resource.com/css/what-you-will-learn.php)

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

 
