// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// numbers.forEach(function (num){
//     console.log(num);
// });

// const movies = [
//     {
//         title: 'Jakir',
//         score:7
//     },
//     {
//         title: 'Hosen',
//         score:6
//     },
//     {
//         title: 'Is',
//         score:5
//     },
//     {
//         title: 'Here',
//         score:4
//     },
//     {
//         title: 'TOday',
//         score:3
//     },
//     {
//         title: 'For ',
//         score:2
//     },
//     {
//         title: 'You',
//         score:1
//     }
// ]

// movies.forEach(function(movie){
//     console.log(`${movie.title} - ${movie.score}/100`)
// })

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// const double = numbers.map(function(num){
//     console.log(num*2);
// })

// const movies = [
//     {
//         title: 'Jakir',
//         score:7
//     },
//     {
//         title: 'Hosen',
//         score:6
//     },
//     {
//         title: 'Is',
//         score:5
//     },
//     {
//         title: 'Here',
//         score:4
//     },
//     {
//         title: 'TOday',
//         score:3
//     },
//     {
//         title: 'For ',
//         score:2
//     },
//     {
//         title: 'You',
//         score:1
//     }
// ]

// const title = movies.map(function(movie){
//     console.log(movie.title, movie.score + "/100");
// })

// const fullNames = [
//   { first: "Albus", last: "Dumbledore" },
//   { first: "Harry", last: "Potter" },
//   { first: "Hermione", last: "Granger" },
//   { first: "Ron", last: "Weasley" },
//   { first: "Rubeus", last: "Hagrid" },
//   { first: "Minerva", last: "McGonagall" },
//   { first: "Severus", last: "Snape" },
// ];

//  const firstNames = fullNames.map(function(name){
//     return name.first;
// })

// const sum = (x,y) => {
//     return x+y;
// }

// console.log(sum(4,5));

// const rollDie = () =>{
//     return Math.ceil(Math.random() * 6);
// }

// const greet = (name) =>{
//     return "Hey " + name + "!";
//  }

// const rollDie = () => Math.ceil(Math.random() * 6);

// const add = (x, y) => x + y;

// const rollDies = () => Math.ceil(Math.random() * 6);

// const even = (x) => x % 2 === 0;

// const movies = [
//   {
//     title: "Jakir",
//     score: 7,
//   },
//   {
//     title: "Hosen",
//     score: 6,
//   },
//   {
//     title: "Is",
//     score: 5,
//   },
//   {
//     title: "Here",
//     score: 4,
//   },
//   {
//     title: "TOday",
//     score: 3,
//   },
//   {
//     title: "For ",
//     score: 2,
//   },
//   {
//     title: "You",
//     score: 1,
//   },
// ];

// const newMovie = movies.map(function (movie) {
//   return `${movie.title} - ${movie.score * 10}/100`;
// });

// const impliciteNewMovie = movies.map(
//   (movie) => `${movie.title} - ${movie.score * 10}/100`
// );

// console.log("Hello!! ")
// setTimeout(() =>{
//     console.log('are you here?')
// }, 1000)
// console.log("GoodBye")

// const id = setInterval(() => {
//     console.log(Math.ceil(Math.random() * 6))
// }, 2000);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// const oddFilter = numbers.filter((n) => n % 2 === 1);
// console.log(oddFilter);

// const evenFilter = numbers.filter((n) => n % 2 === 0);
// console.log(evenFilter);

// const oddMap = numbers.map((n) => n % 2 === 1);
// console.log(oddMap);

// const evenMap = numbers.map((n) => n % 2 === 0);
// console.log(evenMap);

// const odd= numbers.forEach(function(n){
//     if(n%2===1)
//         return n;
// });
// console.log(odd);

// const even = numbers.forEach((n) => n % 2 === 0);
// console.log(even);
//  const allEvens = arr => arr.every(n => n%2 === 0)

// const prices = [9.99, 1.5, 19.99, 49.99, 30.5];
// const totalPrice = prices.reduce((min, price) => {
//   if (min > price) return price;
//   else return min;
// });

// const movies = [
//   {
//     title: "Jakir",
//     score: 7,
//   },
//   {
//     title: "Hosen",
//     score: 6,
//   },
//   {
//     title: "Is",
//     score: 5,
//   },
//   {
//     title: "Here",
//     score: 4,
//   },
//   {
//     title: "TOday",
//     score: 3,
//   },
//   {
//     title: "For ",
//     score: 2,
//   },
//   {
//     title: "You",
//     score: 1,
//   },
// ];

// const best = movies.reduce((bestMovie, currentMovie) => {
//   if (bestMovie.score < currentMovie.score) {
//     return currentMovie;
//   } else {
//     return bestMovie;
//   }
// });

// const evens = arr => arr.reduce((sum, x) => sum+x, 1000);




// const prerson = {
//     firstName: 'Vigo',
//     lastName: 'Mortensen',
//     fullName: function() {
//         return  `${this.firstName} ${this.lastName}`
//     }
// }

// function rolldie(num = 6){
//     return Math.ceil(Math.random() * num);
// }

// function greet(msg = 'Hey there', person='friend') {
//     console.log(`${msg}, ${person}`)

// // }




// const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let mx = Math.max(...prices);
// let mn = Math.min(...prices);
// console.log(...prices);

// const cats = ['Blue', 'Scout', 'Rocket'];
// const dogs = ['Rusty', 'Wyatt'];

// const pets = [...cats, ...dogs];


function sum(...number){
    return number.reduce(((total, num) => total+num), 100 );
}
const totalnum = sum(1,2,3,4);
console.log(totalnum);


function raceResult (gold, silver, ...everyOneElse){
    console.log(`Gold Medal Goes to: ${gold}`);
    console.log(`Silver Medal Goes to: ${silver}`);
    console.log(`And Thanks to: ${everyOneElse}`);
}





























