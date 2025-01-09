

function func(){
    let random = Math.ceil(Math.random() * 6);
    console.log(random);
}

function callTwice(func){
    func();
    func();
    
}

callTwice(func);