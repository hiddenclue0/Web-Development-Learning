

// function func(){
//     let random = Math.ceil(Math.random() * 6);
//     console.log(random);
// }

// function callTwice(func){
//     func();
//     func();
    
// }

// callTwice(func);






// function makeMistryFunc(){
//     let random = Math.random();

//     if(random > 0.5){
//         return function(){
//             console.log("Congrats, I am a good fucntion!");
//             console.log("You Win a million dollars!");
//         }
//     }
//     else{
//         return function(){
//             alert ("You have infacted by a computer virus");
//             alert("Stop trying to close this window");
//             alert("Stop trying to close this window");
//             alert("Stop trying to close this window");
//             alert("Stop trying to close this window");
//             alert("Stop trying to close this window");
//         }
//     }
// }

// function makeBetweenFunc(min, max){
//     return function(num){
//         return num>=min && num <= max;
//     }
// }

// const isChild = makeBetweenFunc(0,18);
// const isAdult = makeBetweenFunc(19,64);
// const isSenior = makeBetweenFunc(65, 120);


const myMath = {
    PI: 3.12159,
    square: function(num){
        return num*num;
    },
    cube: function(num){
        return num ** 3;
    }
};