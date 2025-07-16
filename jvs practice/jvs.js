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

// Exercises (variable eexamples)
let fullName = "Mayki Patootie"; 
let age = 18;
let aStudent = true; 
let enrolled = true;

document.getElementById("P1").textContent = fullName;
document.getElementById("P2").textContent = age;
document.getElementById("P3").textContent = aStudent;
document.getElementById("P4").textContent = enrolled;

//arithmetic operations 
// operators are -> + plus - minus * multiplication / division 
// operands are variables, values, etc.

let sand = 60; 

// sand = sand * 2; (mulitplies the amount by the given number)
// sand = sand + 2; (adds the given number to the amount) 
// sand = sand / 3; (divides the students by the given number)
// sand = sand - 5; (subtracts the given number to the amount)
// sand = sand **2; (power of 2)

// modulus - the remaining of the amount if the amount was divided into groups. 
// sand = sand % 9;

//shortcut 
sand += 2;
sand *=3;
// console should always be on the bottom of everything 
console.log(`You are ${age} years old.`);
console.log(`Your first name is ${firstName}, and your last name is ${lastName}.`);
console.log(`Your favorite food is ${favoriteFood}.`);
console.log(`Is yor real name ${firstName}: ${realName}`);
console.log(`Is your real age ${age}: ${realAge} `);
console.log(`You have ${sand} inside your jar.`)

