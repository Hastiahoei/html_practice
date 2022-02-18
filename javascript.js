
// function showBio(){
//     console.log("first name : hasti");
//     console.log("last name : barahoei");
//     console.log("age :29 ");
// }
// showBio();

let showBio = function(){
    console.log("first name : hasti");
    console.log("last name : barahoei");
    console.log("age :29 ");

}
showBio();

addNumbers(500 , 25 , 45);
function addNumbers(num1 , num2, num3){
    console.log(num1 + num2 + num3);

}

function average(num1,num2,num3,num4,num5) {
    let total = num1+num2+num3+num4+num5;
    let average = total / 5;
if (average >=15) {
    console.log("bestanden");
    
}
else{
    console.log("nicht bestanden");
}


}

average(20,15,17,14.5,20)


function produkt(p1,p2,p3,p4,p5,p6) {
    let total =p1+p2+p3+p4+p5+p6;
    let produkt = total / 6
    
    if (produkt <= 20) {
        console.log("gibt es keine");
        
    } else {
        console.log("gibt es");
    }
}
produkt(11,15,17,12,9,8)

