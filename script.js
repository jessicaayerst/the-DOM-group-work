// var movieObject = {
//     title: "Star Wars: A New Hope",
//     genre: "Science Fiction",
//     releaseDate: "May 25, 1977"
//   }


// var htmlString = `
//     <h1 id="title">${movieObject.title}</h1>
//     <h2 id="genre">${movieObject.genre}</h2>
//     <h3 id="release-date">${movieObject.releaseDate}</h3>
// `
// document.querySelector("#movie-poster").innerHTML = htmlString;


// 2. Downtown Restaurants
// Copy and paste the following array into your JavaScript file:
// var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];
// Copy and paste the following code into your index.html file:
// <ul id="restaurants-list"></ul>
// Loop over the downtownRestaurants array.
// Use the loop to create an <li> element for each item in the array.
// Use document.querySelector and .innerHTML to add each new <li> element to the #restaurants-list container.
// You should see a bulleted list of restaurants in the DOM.


// var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

// for(var i = 0; i < downtownRestaurants.length; i++){
//     document.querySelector("#restaurants-list").innerHTML += `<li>${downtownRestaurants[i]}</li>`
// }


// 3. Sandwich Toppings
// Copy and paste the following array into your JavaScript file:

// Copy and paste the following code into your index.html file:

// Write a function that does the following things:
// Loop through sandwichToppings
// Build an <li> element for each item in the array.
// Use document.querySelector and .innerHTML to print your HTML string to the "#sandwich-container".
// Call the function. You should see a bulleted list of all the sandwich toppings in the DOM.


// var sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]

// function makeSandwich(){
//     for(var i = 0; i < sandwichToppings.length; i++){
//         document.querySelector("#sandwich-container").innerHTML += `<li>${sandwichToppings[i]}</li>`
//     }
// }

// makeSandwich()








// var movieSchedule = [
//     {
//       title: "Ralph Breaks the Internet",
//       rating: "PG",
//       currentlyPlaying: true,
//       poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
//     }, 
//     {
//       title: "The Grinch",
//       rating: "G",
//       currentlyPlaying: true,
//       poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
//     },
//     {
//       title: "A Star is Born",
//       rating: "R",
//       currentlyPlaying: false,
//       poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
//     },
//      {
//       title: "Bohemian Rhapsody",
//       rating: "PG-13",
//       currentlyPlaying: true
//     },
//     {
//       title: "Fantastic Beasts: The Crimes of Grindlewald",
//       rating: "PG-13",
//       currentlyPlaying: true,
//       poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
//     },
//     {
//       title: "Robin Hood",
//       rating: "PG-13",
//       currentlyPlaying: false,
//       poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
//     },
//     {
//       title: "Spider-Man: Into the Spider-Verse",
//       rating: "PG-13",
//       currentlyPlaying: true,
//     }
//   ]

//   var htmlString = `
//       <h1 id="title">${movieSchedule.title}</h1>
//       <h2 id="rating">${movieSchedule.rating}</h2>
//       <h3 id="currentlyPlaying">${movieSchedule.currentlyPlaying}</h3>
//       <p id="poster">${movieSchedule.poster}<p>
//   `
// //   document.querySelector("#movie-schedule").innerHTML += htmlString;




//   for(var i = 0; i < movieSchedule.length; i++){
//         document.querySelector("#movie-schedule").innerHTML += `<li>${movieSchedule[i]}</li>`
//     }
  

elijahObject = {
    firstName: "Elijah",
    lastName: "Price",
    favoriteMovies: ["A Fish Called Wanda", "Jungle Book", "The Breakfast Club", "The Hobbit: An Unexpected Journey", "Pulp Fiction"],
    favoriteFood: "wings",
    hobbies: ["skiing",  "playing video games",  "working out"],
    funFact: "he broke his hand three times"
     }

    var htmlString = `
    <h3>${elijahObject.firstName} ${elijahObject.lastName}</h3>
    <p> Elijah's favorite food is ${elijahObject.favoriteFood}.</p>
    <p> A fun fact about Elijah is ${elijahObject.funFact}.</p>
    <p> Elijah's favorite hobbies include ${elijahObject.hobbies}.</p>
    <p> Elijah's favorite movies are: </p>
    `
    document.querySelector("#elijah-answers").innerHTML = htmlString;

     for(var i = 0; i < elijahObject.favoriteMovies.length; i++){
    
        document.querySelector("#favorite-movies").innerHTML += `<li>${elijahObject.favoriteMovies[i]}</li>`
     }

    