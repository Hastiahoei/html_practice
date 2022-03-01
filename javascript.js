//forEach
let students = ["sahar","roya","neda","mahdi","ali"]
students.forEach((students , index ) => console.log(`${index + 1}-${students}`))

const Handy = ["iphone4","iphone5","iphone6","iphone8"]
Handy.forEach(Handy => console.log("USA",Handy));

const color = ["blue","yellow","gold","pink"]
color.forEach(color => console.log("1",color));


const ul = document.querySelector(".people");
const people = ["Hasti","yasin","mani","roya"];
let html =``;
people.forEach(function(person){
    html += `<li  style="color: purple">${person}</li>`

}
)
console.log(html);
ul.innerHTML = html;


let user ={
    name:"Hasti",
    email:"Hasti@gmail.de",
    age:30,
    login: function(){
        console.log("the user logged in");
    },
    logout: function(){
    console.log("the user logged out");
},
}

user.login();
user.logout();
console.log(user.name);
console.log(user.email);
console.log(user["email"]);
user["name"] = "Yasin",
console.log(user["name"]);
console.log(this);
const title = document.querySelector("h1")
// title.setAttribute("style","margin: 50px;");
title.style.fontSize = "60px"
title.style.color = "orange"
title.style.margin = "50px"