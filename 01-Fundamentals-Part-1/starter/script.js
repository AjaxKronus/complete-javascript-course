/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

//const varibale can't be changed
const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer'
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

//Lesson 13 - Basic operators 
// Math operators
const now = 2037;
const ageJonas = now-1991;
const ageSarah = now-2018;
console.log(ageJonas, ageSarah);

cosole.log(ageJonas*2,ageJonas/10, 2**3); 
// 2**3 means 2 to the power of 3 = 2*2*2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10+5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x*4 = 100
x++; //101
x--; //100
x--; //99

console.log(x);

// Complarison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now-2018;

console.log(now - 1991 > now - 2018);

// console.log(25-10-5);

let x, y;
x = y = 25-10-5; //x = y = 10
console.log(x, y);

const avgAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, avgAge);


// Coding Challenge #1


// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// GOOD LUCK 😀

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJogn = 1.95;

const massMark = 95;
const heightMark = 1.88;

const massJohn = 852;
const heightJogn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJogn * heightJogn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


// 17. Strings and Template Literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`)

console.log('String with \n\
    multiple \n\
    lines');
    
    console.log(`String
    multiple
    lines`);
    

// 18. Taking Decisions: if / else Statements

const age = 19;
// const isOldEnough = age >= 18

if(age >= 18){
    console.log('Sarah can start driving license 🚗.')
}
else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearLeft} years :)`)

    const birthYear = 2012;

    let century;
    if(birthYear <= 2000){
        century = 20;
    } else{
        century = 21
    }
    console.log(century);

}
    
////////////////////////////////////
// Coding Challenge #2


// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// HINT: Use an if/else statement 😉

// GOOD LUCK 😀
// _________________________

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJogn = 1.95;

const massMark = 95;
const heightMark = 1.88;

const massJohn = 852;
const heightJogn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJogn * heightJogn);
// const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's(${BMIJohn})!`);
} else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's(${BMIMark})!`);
}


// 20. Type Conversion and Coercion

// type convertion
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am '+ 23 + ' years old.');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n-1;
console.log(n);


// 21. Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if(money){
    console.log("Dona't spend it all ;)");
} else{
    console.log("You should get a job");
} 

let height = 123;
if(height){
    console.log("YAY! Height is defined");
} else{
    console.log("Height is UNDEFINED");
}
*/

// 22. Equality Operators: == vs. ===
const age = 18;
if(age === 18) console.log("You just became an adult :D");

console.log("");


