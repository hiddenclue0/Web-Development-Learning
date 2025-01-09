const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

numbers.forEach(function (num){
    console.log(num);
});


const movies = [
    {
        title: 'Jakir',
        score:7
    },
    {
        title: 'Hosen',
        score:6
    },
    {
        title: 'Is',
        score:5
    },
    {
        title: 'Here',
        score:4
    },
    {
        title: 'TOday',
        score:3
    },
    {
        title: 'For ',
        score:2
    },
    {
        title: 'You',
        score:1
    }
]


movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`)
})