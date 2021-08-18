 

 

- [Home](/index.php)
- ▼Schema.org tutorial
- [Introduction](/schema.org/introduction.php)
- [Types and properties](/schema.org/types-and-properties.php)
- [CreativeWork](/schema.org/CreativeWork.php)
- [Article](/schema.org/Article.php)
- [Blog](/schema.org/Blog.php)
- [Movie](/schema.org/Movie.php)
- [MusicPlaylist](/schema.org/MusicPlaylist.php)
- [MusicRecording](/schema.org/MusicRecording.php)
- [WebPage](/schema.org/WebPage.php)
- [Book](/schema.org/Book.php)
- [Recipe](/schema.org/Recipe.php)

# Schema.org Tutorial

Last update on February 26 2020 08:08:40 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>



## What is Schema.org ?

Schema.org is an Open Source project announced on June 2, 2011 by Bing, Google, Yahoo, and sitemap.org.

The purpose of Schema.org is to introduce a set of schema (HTML tags). Upon using these tags in a website, search engines can understand the intention of using content(text, image, video) in that website better; which in turn would return better search results when a user is looking for a specific content through a search engine.

![Schema.org Logo](https://www.w3resource.com/w3r_images/schema.jpg)

Presently, Schema.org is focused on using Microdata for serving the purpose.

**Understanding Microdata**

Microdata, introduced in HTML5, allows the author of a web page to insert supporting vocabularies along with name-value pair in an existing markup nested content. It says the search engine that, what this content is about, whether it is a book, a movie, a person, an event, an organization etc. It helps the search engines to understand the underlying meaning of the content better and thus search engines can return better search results.

We will now discuss five global attributes of microdata : itemscope, itemtype, itemid, itemprop and itemref.

**itemscope**

If used with an element, it refers that descendants of the associated element contain information about it.

**itemtype**

Refers to which type the content belongs to, a book, a movie etc. Schema.org provides with a list of vocabularies to be used with this attribute.

**itemprop**

Refers that its associated tag contains the value of the specified item property.

Though itemid and itemref are also part of Microdata, we will focus on the said attributes for now, as Schema.org does.

**example code without using Microdata**

    <!DOCTYPE HTML>
    <html lang="en">
    <head>
    <meta charset=utf-8>
    <title>example without itemscope</title>
    </head>
    <body>
     <section>
     <h1>The Jungle Book</h1>
     <span>Author: Rudyard Kipling</span>
     <span>Category : children's literature</span>
     <a href="http://en.wikipedia.org/wiki/The_Jungle_Book">Detail info</a>
    </section>
    </body>
    </html>

**example code using Microdata**

    <!DOCTYPE HTML>
    <html lang="en">
    <head>
    <meta charset=utf-8>
    <title>example code using Microdata</title>
    </head>
    <body>
    <section itemscope itemtype="http://schema.org/Book">
    <h1 itemprop="name">The Jungle Book</h1>
    <span>Author: <span itemprop="author">Rudyard Kipling</span></span>
    <span>Category : <span itemprop="genre">children's literature</span></span>
    <a href="http://en.wikipedia.org/wiki/The_Jungle_Book"><span itemprop="detail">Detail info<span></a>
    </section>
    </body>
    </html>

This way, you can suggest search engines about the meaning of your content better.

Schema.org offers a collection of the schema for serving the purpose. In the following pages, we will discuss all that in detail with lots of examples.

Moreover, we will discuss which tools you can use to check whether you have used the schema properly.

And last but not least, we will discuss how you go beyond the predefined vocabularies of Schema.org and customize it to meet a particular purpose.

**Next:** [Schema.org Types and properties tutorial](https://www.w3resource.com/schema.org/types-and-properties.php)

---

<span class="underline"></span>

 

---

<span class="underline"></span>

<span class="underline"></span>

<span class="underline"></span>

 
