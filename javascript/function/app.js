// let randomNumber = Math.ceil(Math.random() * 10);
// console.log(randomNumber);

function singSong() {
  return( Math.ceil(Math.random() * 6));
}
let count = [0,0,0,0,0,0,0];
for(let i = 0 ; i<100; i++){
    count[singSong()]++;
}
let sum = 0, mx= -1, pos = 0;
for(let i=1; i<=6; i++){
    let x = count[i];
    sum += x ;
    console.log(i, x);
    if(mx <= x){
        pos = i;
        mx = x;
    }
}

console.log(sum);
console.log("max = " + mx + " Pos: " + pos);