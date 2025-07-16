// varialbe = a container that stores a value 

// number = number 
let price = 60.60;

//string = string of words or sentences 
let firstName = "Mayki";
let lastName = "Patootie";
let favoriteFood = "human limbs";

//booleans = either true or false, none in between. 
let realName = true 
let realAge = false

// Exercises 
let fullName = "Mayki Patootie"; 
let age = 18;
let aStudent = true; 

document.getElementById("P1").textContent = fullName;
document.getElementById("P2").textContent = age;
document.getElementById("P3").textContent = aStudent;

// console should always be on the bottom of everything 
console.log(`You are ${age} years old.`);
console.log(`Your first name is ${firstName}, and your last name is ${lastName}.`);
console.log(`Your favorite food is ${favoriteFood}.`);
console.log(`Is yor real name ${firstName}: ${realName}`);
console.log(`Is your real age ${age}: ${realAge} `);