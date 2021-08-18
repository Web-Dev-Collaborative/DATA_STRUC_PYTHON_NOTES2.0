 

 

- [Home](/index.php)
- ▼XML Fundamentals
- [What is XML](/xml/xml.php)
- [Uses of XML](/xml/uses-of-xml.php)
- [XML elements](/xml/elements.php)
- [XML namespaces](/xml/namespaces.php)
- [XML attribute](/xml/attribute.php)
- [XML processing instructions, comments, whitespaces](/xml/processing-instructions-comments-whitespace.php)
- [XML prohibited character literals](/xml/prohibited-character-literals.php)
- [XML CDATA sections](/xml/CDATA-sections.php)
- [XML declarations](/xml/declarations.php)
- [XML entities](/xml/entities.php)
- [XML internal entities](/xml/internal-entities.php)
- [XML external entities](/xml/external-entities.php)
- [XML parameter entities](/xml/parameter-entities.php)
- [Proper nesting of elements](/xml/proper-nesting-of-elements.php)
- [XML reserved markup characters](/xml/reserved-markup-characters.php)
- [Well Formed XML Document](/xml/well-formed.php)

# XML Tutorial

Last update on February 26 2020 08:09:10 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## What is xml?

The following points will help you to get a basic understanding of what xml is:

- XML stands for Extensible Markup Language. A markup language uses a set of additional items called markups to create a document of hierarchical structure.
- It is called extensible because it allows the author of the document to define the markup elements by their own.
- It is a markup language to develop documents containing structured information. By saying that, it is meant that xml contains content (i.e. text, images etc.) and along with that it also contains some information or hints about what role that content plays.
- XML is recommended by W3C.

## Example of an xml document:

    <?xml version="1.0" ?>
    <w3resource>
    <design>
    html
    xhtml
    css
    svg
    xml
    </design>
    <programming>
    php
    mysql
    </programming>
    </w3resource>

Now if you copy and save this code above as a .xml file and then double-click it to execute and check the output, it will show you something very readable, all in text format. To convert it to a more presentable one, you have to add styles into it. Let's create a css for that:

Now let's add this style-sheet to the xml document:

design {color: olive;} programming {color: olive;}

    <?xml version="1.0" ?>
    <?xml-stylesheet href="test.css" alternate="yes"
    title="Test" media="screen, print" type="text/css"?>
    <w3resource>
    Topics cover in the online free tutorial site:
    <design>html
    xhtml
    css
    svg
    xml
    </design>
    <programming>
    php
    mysql
    </programming>
    </w3resource>

## Advantages of xml

- Since xml supports UNICODE, all most all the human readable written languages can be communicated using xml.
- It can be used to render data structure, i.e. records and lists and trees.
- XML is self-documenting, i.e. it contains data and description about the data.
- XML needs another software application called Parser. An XML document is very strict while maintaining a standard. So the parser software for XML is very simple and easy.
- XML is used both on and offline for storing and processing data.
- XML follows international standards.
- XML supports incremental update.
- XML allows validation of the document using XSD or Schematron. These are types of the schema for validating xml documents.
- The tree-like structure of xml is suitable for almost all the types of documents.
- Being platform independent, it has lot of benefits. Like it is not very prone to technological changes.
- Even though changes are made in DTD or schema, it is easier to keep forward or backward compatibility available.
- SGML is its predecessor, which is working from 1986.So a vast experience works behind the implementation of xml.

## XML Document

Several times, through this tutorial, you are going to encounter the phrase 'XML Document'. Now this does not necessarily mean a traditional document as if a Microsoft Word Document. The term document here refers to different types of data formats or structured information. Any information set, if it is divided into components and then those components are again divided into components and so on can be called as structured information, vector graphics, e-commerce transactions, mathematical equations, object meta-data, server APIs, and a thousand other kinds of structured information.

## Difference between xml and html

Here are some differences between xml and html:

- Html tags are predefined, whereas xml tags are not.
- Html is used to display data, taking care of how data is being presented. xml is used to carry data. It takes care of how data works.
- Opening and closing tags of an xml document must be of same case. html does not have any such restriction.
- In xml, end tags are required for well-formed (i.e. valid) document. But not in html.
- Quotes are required around attributes values in xml, in html it is not required.
- Slash (/) required in empty tags as far as xml is concerned, html does not need that.

Example : HTML file

    <html>
    <body>
    <head>
    <title>w3resource-xml</title>
    </head>
    <body>
    <p><b>This is w3resource.com.</b>The largest tutorial on web
    based development.</p>
    <p>We are learning <i>xml</i></p>
    </body>
    </html>

Example : XML file

    <xml>
    <tutorial>w3resource
    <one>html</one>
    <two>xml
    <subtopic1>Learning xml</subtopic1>
    <subtopic2>Learning DTD</subtopic2>
    <subtopic3>Learning XSLT</subtopic3>
    <subtopic4>Learning xpath</subtopic4>
    </two>
    <three>css</three>
    <four>javascript</four>
    <five>ajax</five>
    <six>php</six>
    <seven>mysql</seven>
    <eight>svg</eight>
    </tutorial>
    </xml>

## Some more facts about xml and html

- XML is not a replacement of html.
- The purpose of xml is different from html. XML is for storing as well as exchanging data. HTML is for displaying data through a user agent (e.g. Web Browser).

**Next:** [Uses of xml](https://www.w3resource.com/xml/uses-of-xml.php)

---

<span class="underline"></span>

 

---

 

 
