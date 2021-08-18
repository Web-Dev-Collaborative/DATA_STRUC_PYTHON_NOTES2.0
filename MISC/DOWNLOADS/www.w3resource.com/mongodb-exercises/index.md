 


- [Home](/index.php)
- [MongoDB Home](/mongodb/introduction-mongodb.php)
- ▼MongoDB Exercises
- [Exercises](/mongodb-exercises/)
- [..More to come..]()

# MongoDB Exercises, Practice, Solution

Last update on February 26 2020 08:08:08 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

## What is MongoDB?

MongoDB is a free and open-source cross-platform document-oriented database. Classified as a NoSQL database, MongoDB avoids the traditional table-based relational database structure in favor of JSON-like documents with dynamic schemas, making the integration of data in certain types of applications easier and faster.

The best way we learn anything is by practice and exercise questions. We have started this section for those (beginner to intermediate) who are familiar with [NoSQL](https://www.w3resource.com/mongodb/nosql.php) and [MongoDB](https://www.w3resource.com/mongodb/nosql.php). Hope, these exercises help you to improve your MongoDB query skills. Currently, following exercises are available based on '**_restaurants'_** collection, we are working hard to add more exercises. Happy Coding!

## MongoDB Query Exercises and Solution \[ 32 Exercises\]

**Structure of 'restaurants' collection:**

    {
      "address": {
         "building": "1007",
         "coord": [ -73.856077, 40.848447 ],
         "street": "Morris Park Ave",
         "zipcode": "10462"
      },
      "borough": "Bronx",
      "cuisine": "Bakery",
      "grades": [
         { "date": { "$date": 1393804800000 }, "grade": "A", "score": 2 },
         { "date": { "$date": 1378857600000 }, "grade": "A", "score": 6 },
         { "date": { "$date": 1358985600000 }, "grade": "A", "score": 10 },
         { "date": { "$date": 1322006400000 }, "grade": "A", "score": 9 },
         { "date": { "$date": 1299715200000 }, "grade": "B", "score": 14 }
      ],
      "name": "Morris Park Bake Shop",
      "restaurant_id": "30075445"
    }

[You may download the compressed file and uncompress it to find the collection used in our exercises. The collection comprises of 3772 documents.](restaurants.zip)

<span class="style6">1.</span> Write a MongoDB query to display all the documents in the collection restaurants. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-1.php)

<span class="style6">2.</span> Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-2.php)

<span class="style6">3.</span> Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, but exclude the field \_id for all the documents in the collection restaurant. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-3.php)

<span class="style6">4.</span> Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, but exclude the field \_id for all the documents in the collection restaurant. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-4.php)

<span class="style6">5.</span> Write a MongoDB query to display all the restaurant which is in the borough Bronx. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-5.php)

<span class="style6">6</span>. Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-6.php)

<span class="style6">7.</span>Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-7.php)

<span class="style6">8.</span> Write a MongoDB query to find the restaurants who achieved a score more than 90. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-8.php)

<span class="style6">9.</span> Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-9.php)

<span class="style6">10.</span> Write a MongoDB query to find the restaurants which locate in latitude value less than -95.754168.[Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-10.php)

<span class="style6">11.</span> Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-11.php)

<span class="style6">12.</span> Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168.  
Note : Do this query without using $and operator. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-12.php)

<span class="style6">13.</span> Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' not belongs to the borough Brooklyn. The document must be displayed according to the cuisine in descending order. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-13.php)

<span class="style6">14.</span> Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-14.php)

<span class="style6">15.</span> Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-15.php)

<span class="style6">16.</span> Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-16.php)

<span class="style6">17.</span> Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-17.php)

<span class="style6">18.</span> Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which belong to the borough Staten Island or Queens or Bronxor Brooklyn. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-18.php)

<span class="style6">19.</span> Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which are not belonging to the borough Staten Island or Queens or Bronxor Brooklyn. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-19.php)

<span class="style6">20.</span> Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score which is not more than 10. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-20.php)

<span class="style6">21.</span> Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which prepared dish except 'American' and 'Chinees' or restaurant's name begins with letter 'Wil'. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-21.php)

<span class="style6">22.</span> Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates.. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-22.php)

<span class="style6">23.</span> Write a MongoDB query to find the restaurant Id, name and grades for those restaurants where the 2nd element of grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z". [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-23.php)

<span class="style6">24.</span> Write a MongoDB query to find the restaurant Id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which is more than 42 and upto 52.. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-24.php)

<span class="style6">25.</span> Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-25.php)

<span class="style6">26.</span> Write a MongoDB query to arrange the name of the restaurants in descending along with all the columns. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-26.php)

<span class="style6">27.</span> Write a MongoDB query to arranged the name of the cuisine in ascending order and for that same cuisine borough should be in descending order. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-27.php)

<span class="style6">28.</span> Write a MongoDB query to know whether all the addresses contains the street or not. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-28.php)

<span class="style6">29.</span> Write a MongoDB query which will select all documents in the restaurants collection where the coord field value is Double. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-29.php)

<span class="style6">30.</span> Write a MongoDB query which will select the restaurant Id, name and grades for those restaurants which returns 0 as a remainder after dividing the score by 7. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-30.php)

<span class="style6">31.</span> Write a MongoDB query to find the restaurant name, borough, longitude and attitude and cuisine for those restaurants which contains 'mon' as three letters somewhere in its name. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-31.php)

<span class="style6">32.</span> Write a MongoDB query to find the restaurant name, borough, longitude and latitude and cuisine for those restaurants which contain 'Mad' as first three letters of its name. [Go to the editor](#PracticeOnline)  
[Click me to see the solution](mongodb-exercise-32.php)

**More to Come !**

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
