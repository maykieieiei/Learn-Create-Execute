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

    // RAndom Number generator 
// const max = 100;
// const min = 5; 

// let randomNum = Math.floor(Math.random() * max - min) + min;

const myBtn = document.getElementById("myBtn"); 
const myLbl = document.getElementById("myLbl"); 
const min = 1;
const max = 6; 
let randomNum;

myBtn.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLbl.textContent = randomNum;
}

     //If statements 

let time = 9;

if(time < 12){ // if the time is less than 9,
    console.log("Good Morning"); // "Good morning" will be dislayed. 
}
else{ // if the time is more than 9, 
    console.log("Good Afternoon"); // "Good Afternoon" will be displayed.
}

    // ternary operator - if & else statement shortcuts

let amount = 12
let message = amount >= 10 ? "More than 10" : "Less than 10";

let purchaseAmount = 99; 
let discount = purchaseAmount >= 100 ? 10 : 0;

   

// console should always be on the bottom of everything 
// console.log(`You are ${age} years old.`);
console.log(`Your first name is ${firstName}, and your last name is ${lastName}.`); //string
console.log(`Your favorite food is ${favoriteFood}.`); //string
console.log(`Is yor real name ${firstName}: ${realName}`); //boolean
// console.log(`Is your real age ${age}: ${realAge} `); //boolean
console.log(`You have ${sand} inside your jar.`); //arithmetic operantions 
console.log(result); //increment and decrement operator
console.log(username); //user input 
// console.log(age, typeof age); // typeof <varaible name> shows what type of variable it is. 
console.log(x, typeof x); //type conversion
console.log(y, typeof y); //type conversion
console.log(z, typeof z); //type conversion
console.log(randomNum); //Random Number Generator 
console.log(message); //ternary operators 
console.log(`Your total amount is $${purchaseAmount - purchaseAmount * (discount/100) }`); //ternary operator 

    //switch - can be efficient replacement to many else statements

let day = 3; 
switch(day){
    case 1:
        console.log("It is Monday"); 
        break; //breaks are there to break out the switch once there is a match.
    case 2:
        console.log("It is Tuesday");
        break;  
    case 3:
        console.log("It is Wednesday");
        break;
}

let testScore = 0;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
}

console.log(letterGrade);

  
    // logical operator 
    //&& as "and"
const temp = 20;
if(temp > 0 && temp <= 30){ //use && as "and" both statements should be true.
    console.log("Weather is Good."); 
}

else{
    console.log("Weather is NOT Good.") //if both the statements are false, this will appaer.
}
    //! as "not" - can change boolean from true to false by adding !
const isSunny = true; 
if(!isSunny){
    console.log ("It is Cloudy");
}

else{ 
    console.log("It is Sunny");
}

    //funtion - section of reusable code

function happyBirthday(userName, age){
    console.log("Happy Birthday to You!");
    console.log("Happy Birthday to You!");
    console.log(`Happy Birthday dear ${userName}`);
    console.log("Happy Birthday to You!");
    console.log(`You are now ${age} years old!`)
}

happyBirthday("Spongebob", 30);
happyBirthday("Patrick", 30);

    //funcion - even or odd 

function isEven(number){
    if (number % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(9));

    //funciton ternary shortcut 

function isValidEmail(email){
    return(email.includes("@")) ? true : false;
}

console.log(isValidEmail("mikeegmail.com"));
    
    // rest parameters 
 
function openFridge(...foods){
    console.log(foods);
}

const food1 = "arm";
const food2 = "leg";
const food3 = "ear";
const food4 = "forehead";

openFridge(food1, food3);

    //callbacks 
hello(goodbye);

function hello(callback){
    console.log("Hello!");
    callback();
}

function goodbye(){
    console.log("Goodbye!");
}
