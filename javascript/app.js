// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = prompt("Enter your first guess! (Type 'q' to quit)");
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     guess = parseInt(guess);
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:");
//         attempts++;
//     } else if (guess < targetNum) {
//         guess = prompt("Too low! Enter a new guess:");
//         attempts++;
//     } else {
//         guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
//     }
// }

// if (guess === 'q') {
//     console.log("OK, YOU QUIT!")
// } else {
//     console.log("CONGRATS YOU WIN!")
//     console.log(`You got it! It took you ${attempts} guesses`)
// }
// const subreddits=[1,2,3,4,5,6,7,8,9];

// for(let num of subreddits){
//     console.log(`The numer is ${num} and ${num+1}= ${num}`);
// }

// const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for(let num of numbers){
//     console.log(num*num);
// }

const testscores = {
    a:2,
    b:3,
    c:6,
    d:5,
    e:4,
    f:"f",
    g:6
}

// for(let obj in testscores){
//     console.log(`${obj} scored ${testscores[obj]}`);
// }

let arr = Object.entries(testscores);

for(num of arr){
    console.log(`the value is ${num}`);
}