Day 37 - Mapping and Templates
================

Quiz:
=====

Take the Rotten Tomatoes, and find the MOST popular movie, according to the
`audience_score`

This time, in JavaScript. So:

1. Go to the rails app "Movies"
2. Underscore and jQuery are already included
3. There is a welcome.js with the structure to call and load the data (in
   public/movies.json
4. Your job is to use underscore, in much the same way you used Ruby


Today:
-----

1. Quiz
2. JavaScript objects
3. Handlebars templating
4. Maps

Homework
-------

*  Make an array of your favorite movies or books or bands. Have at least 4 values.
*  Make a object of information about yourself. Have at least 4 keys+values

Use Underscore for below

*  Use `_.each` to loop through the array of objects and log only one property of the hash. For example { title: "Gone with the Wind" } loop through and print only the .title
* Create an array of movies with budgets equal to 55 (where)
* Create an array of movies that have Leonardo DiCaprio as a star (filter)

```js
 var movies = [
 {
   "title": "Forest Gump",
   "budget": 55,
   "stars": ["Tom Hanks"]
 },
 {
   "title": "Star Wars",
   "budget": 11,
   "stars": ["Mark Hamill", "Harrison Ford"]
 },
 {
   "title": "Batman Begins",
   "budget": 150,
   "stars": ["Christian Bale", "Liam Neeson", "Michael Caine"]
 },
 {
   "title": "Titanic",
   "budget": 200,
   "stars": ["Kate Winslet", "Leonardo DiCaprio"]
 },
 {
   "title": "Inception",
   "budget": 160,
   "stars": ["Leonardo DiCaprio", "JGL"]
 },
 {
   "title": "Shrek the Third",
   "budget": 160,
   "stars": ["Mike Myers", "Cameron Diaz"]
 }
]
```
