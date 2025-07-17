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
// let age = 18;
let aStudent = true; 
let enrolled = true;

document.getElementById("P1").textContent = fullName;
// document.getElementById("P2").textContent = age;
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
// sand += 2;
// sand *=3;
// same for every operators. 

    //increment and decrement operator 
sand++; // adds 1 from the amount
sand--; // sutracts 1 ferom the amount

   //operator precedence 
/* 
parenthesis 
exponents
multiplication, division & modulo 
addition & subtraction
*/

let result = 1 + 4 * 9 + 8 ** 4;

    // user input - window prompt

let username;

// username = window.prompt("What's your username?");

    // user input - profesional way 

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("welcome").textContent = `Welcome, ${username}`;
    // console.log(username);
}

    //type conversion = change datat type of another value (strings, nums, booleans)
// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;

let x = "0";
let y = " ";
let z = "crayons";

x = Number(x);
y = String(y);
z = Boolean(z);

    //coutner 
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}



// console should always be on the bottom of everything 
// console.log(`You are ${age} years old.`);
console.log(`Your first name is ${firstName}, and your last name is ${lastName}.`);
console.log(`Your favorite food is ${favoriteFood}.`);
console.log(`Is yor real name ${firstName}: ${realName}`);
// console.log(`Is your real age ${age}: ${realAge} `);
console.log(`You have ${sand} inside your jar.`);
console.log(result);
console.log(username);
// console.log(age, typeof age); // typeof <varaible name> shows what type of variable it is. 
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
