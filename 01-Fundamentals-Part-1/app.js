// let js = "fun";
// if (js === "fun") alert("javs script is fun!");
// console.log(5 + 16 - 12);

// ***************************
// Values and Variables
// ****************************
/*
let country = "INDIA";
let continent = "Asia";
let population = "138 crores";

let values =
  "my conuntry is" +
  country +
  " and continaent is" +
  continent +
  " population" +
  population;

console.log(values);
*/

// Values and Variables
/*console.log("Jonas");
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
*/

/// Data type
////////////////////
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof javascriptIsFun);

// javascriptIsFun = "yes this one is fun";
// console.log(typeof javascriptIsFun);
// console.log(javascriptIsFun);
// let year;
// console.log(year);
// year = null;
// console.log(typeof year);

////////////////////////////////////
// let, const and var
// let age = 30;
// age = 31;
// console.log(age);

// const birthYear = 1991;
// birthYear = 1990;
// const job;

// var job = 'programmer';
// job = 'teacher'

// lastName = 'Schmedtmann';
// console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
// const now = 2022;
// const eliyaserAge = now - 1997;
// const emimalAge = now - 2000;

// console.log(eliyaserAge, emimalAge);

// console.log(eliyaserAge * 2, emimalAge / 10, 2 ** 3);

// const firstName = "eliyaser";
// const lastName = "james";
// console.log(firstName + " " + lastName);

// Assingment operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// Comparison operators
/*console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

///coding challenge 1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

//Here m - mark and j -john
/*const mh1 = 1.69;
const mw1 = 78;
const mh2 = 1.88;
const mw2 = 95;

const jw1 = 92;
const jh1 = 1.95;
const jh2 = 1.76;
const jw2 = 85;

// BMI = mass / height ** 2 = mass / (height * height)

mbmi1 = mw1 / mh1 ** 2;
jbmi1 = jw1 / jh1 ** 2;
mbmi2 = mw2 / mh2 ** 2;
jbmi2 = jw2 / jh2 ** 2;
console.log("mark", mbmi1, mbmi2, "john", jbmi1, jbmi2);

const markHigherBMI1 = mbmi1 > jbmi1;
const markHigherBMI2 = mbmi2 > jbmi2;
console.log(markHigherBMI1); //output ture
console.log(markHigherBMI2); //output false
*/

////////////////////////////////////
// Strings and Template Literals
// const firstName = "eliyaser";
// const job = "teacher";
// const birthYear = 1997;
// const year = 2022;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

// console.log(jonas);

// const eliyaser = `I'm ${firstName},a ${year - birthYear} year old ${job}!`;
// console.log(eliyaser);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

////////////////////////////////////
// Taking Decisions: if / else Statements
// const age = 19;

// if (age >= 18) {
//   console.log("you can start driving licence🚙");
// } else {
//   const year = age - 18;
//   console.log(`you are too young. wait another ${year} year :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement
/*
const mh1 = 1.69;
const mw1 = 78;
const mh2 = 1.88;
const mw2 = 95;

const jw1 = 92;
const jh1 = 1.95;
const jh2 = 1.76;
const jw2 = 85;

// BMI = mass / height ** 2 = mass / (height * height)

mbmi1 = mw1 / mh1 ** 2;
jbmi1 = jw1 / jh1 ** 2;
mbmi2 = mw2 / mh2 ** 2;
jbmi2 = jw2 / jh2 ** 2;
// console.log("mark", mbmi1, mbmi2, "john", jbmi1, jbmi2);

const markHigherBMI1 = mbmi1 > jbmi1;
const markHigherBMI2 = mbmi2 > jbmi2;

if (markHigherBMI1) {
  console.log(`Mark's BMI (${mbmi1}) is higher than John's!(${jbmi1})`);
} else {
  console.log(`John's BMI (${jbmi1}) is higher than Mark's!(${mbmi1})`);
}

if (markHigherBMI2) {
  console.log(`Mark's BMI (${mbmi2}) is higher than John's!(${jbmi2})`);
} else {
  console.log(`John's BMI (${jbmi2}) is higher than Mark's!(${mbmi2})`);
}
*/
////////////////////////////////////
// Type Conversion and Coercion

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);//number

// console.log(String(23), 23);

// type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean("hai"));
// console.log(Boolean(undefined));
// const money = "hai";
// if (money) {
//   console.log("money is a needed one");
// } else {
//   console.log("this is faulsy value!!!");
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

////////////////////////////////////
// Equality Operators: == vs. ===
/*const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// const Dolphins = (96 + 108 + 89) / 3;
// const Koalas = (88 + 91 + 110) / 3;

// if (Dolphins > Koalas) {
//   console.log(`Dolphins win  the trophy 🏆 `);
// } else if (Dolphins < Koalas) {
//   console.log(`Koalas win the trophy 🏆`);
// } else if (Dolphins === koalas) {
//   console.log(`both win the game`);
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy 🏆");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both win the trophy!");
// } else {
//   console.log("No one wins the trophy 😭");
// }

// The switch Statement
/*
const day = "monday";

switch (day) {
  case "monday":
    console.log("today is monday we go out for fun");
    break;
  case "tuesday":
    console.log("today is tuesday we go out for fun");
    break;
  case "wednesday":
    console.log("today is wednesday we go out for fun");
    break;
  case "thursday":
    console.log("today is thursday we go out for fun");
    break;
  case "friday":
    console.log("today is friday we go out for fun");
    break;
  case "saturday":
    console.log("today is saturday we go out for fun");
    break;
  default:
    console.log("not a valid day!");
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

*/
////////////////////////////////////
// Statements and Expressions
// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//   const str = '23 is bigger';
// }

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator

// const age = 25;

// age >= 18? console.log("I like to drink wine 🍷 ")
//   : console.log("I like to drink water 💧");

// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
/*
const bill = 350;

const tip =
  bill >= 50 && bill <= 300
    ? console.log(
        `The bill was ${bill}, the tip was ${
          bill * (15 / 100)
        }, and the total value ${bill + bill * (15 / 100)}`
      )
    : console.log(
        `The bill was ${bill}, the tip was ${
          bill * (20 / 100)
        }, and the total value ${bill + bill * (20 / 100)}`
      );
console.log(tip);
*/
// Alternative solution
/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/
