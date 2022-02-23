// variable hoisting
// var is hoisting
// let,const is not hoisting


website = "next1code.ir";
console.log(website);
var website;

var website;
website = "next1code.ir";
console.log(website);


// website = "next1code.ir";
// console.log(website);
// let website;



// declare is hoisting
// initialize is not hoisting

console.log(website);;
var website = "next1code.ir"

var website = "next1code.ir";
console.log(website);

var website ;
console.log(website);
website = "next1code.ir"


var a = 5; 
function myFunc(){
    b = 5;
    console.log(b);
    var b;
}

var a = 5;
function myFunc(){
    var b;
    b = 5;
    console.log(b);
}

