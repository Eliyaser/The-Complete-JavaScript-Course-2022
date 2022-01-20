"use strict";

///////////////////////////////////////
// Activating Strict Mode

// let DrivingLicence = false;
// const test = true;

// if (test) DrivingLicence = true;
// if (DrivingLicence) console.log("i am free to drive");

// const interface = 'Audio';  //we can't use this name in a variable in strict mode
// const private = 534;        //we can't use this name in a variable in strict mode

///////////////////////////////////////
// Functions

// function logger() {
//   console.log(`hai this is logger`);
// }

// logger();

// function foodprocessor(apple, orange) {
// console.log(apple, orange);
//   const juce = `i need ${apple}applejuce and ${orange}orangejuce`;
//   return juce;
// }

// console.log(foodprocessor(5, 0));
// console.log(foodprocessor(57, 10));

// const num = Number("24");

///////////////////////////////////////
// Function Declarations vs. Expressions***

// Function declaration*

// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }
// const age1 = calcAge1(1991);

// Function expression*

// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

///////////////////////////////////////
// Arrow functions
// const age1 = (birtyeah) => 2022 - birtyeah;
// console.log(age1(1997));

// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

///////////////////////////////////////
// Functions Calling Other Functions
// function cutfruitpieces(fruite) {
//   return fruite * 3;
// }

// const foodprocessor = (apple, orange) => {
//   const applepices = cutfruitpieces(apple);
//   const orangepices = cutfruitpieces(orange);
//   return `juice with ${applepices} piece of apple and ${orangepices} pieces of orange`;
// };

// console.log(foodprocessor(2, 5));

///////////////////////////////////////
// Reviewing Functions
/*
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(10, 15, 30));

// let first = calcAverage(44, 23, 71);
// let secound = calcAverage(65, 54, 49);

// function checkWinner(avgDolhins, avgKoalas) {
//   if (avgDolhins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolhins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolhins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolhins})`);
//   } else {
//     console.log("No team wins...");
//   }
// }
// checkWinner(first, secound);

// checkWinner(576, 111);

// Test 2
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

///////////////////////////////////////
// Introduction to Arrays
/*
const friend1 = "karthick";
const friend2 = "vijay";
const friend3 = "Barath";

const friends = ["karthick", "vijay", "Barath"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "ajay";
console.log(friends);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

///////////////////////////////////////
// Basic Array Operations (Methods)

// const friends = ["karthick", "vijay", "Barath"];

// Add elements

// friends.push("saravanan");
// console.log(friends);

// console.log(friends.unshift("balaji")); //output is lenght of the array
// console.log(friends);

// //removing element
// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);
// const removedarray = friends.shift();
// console.log(removedarray); //output show the removed array

// console.log(friends.indexOf("vijay"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("vijay")) {
//   console.log("You have a friend called vijay");
// }

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

//TEST DATA: 125, 555 and 44

// function calcTip(a) {
//   if (a >= 50 && a <= 300) {
//     return a * (15 / 100);
//   } else {
//     return a * (20 / 100);
//   }
// }

// const tip = calcTip(100);
// console.log(tip);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

///////////////////////////////////////
// Introduction to Objects

// const eliyaser = [
//   "eliyaser",
//   "james",
//   2022 - 1997,
//   "webdevloper",
//   ["karthick", "christoper", "kavi"],
// ];

// const eliyaser = {
//   FirstName: "eliyaser",
//   LastName: "james",
//   Dob: 2022 - 1997,
//   Job: "webdevloper",
//   Friends: ["karthick", "christoper", "kavi"],
// };

// console.log(eliyaser.FirstName);

///////////////////////////////////////
// Dot vs. Bracket Notation

// const eliyaser = {
//   FirstName: "eliyaser",
//   LastName: "james",
//   Dob: 2022 - 1997,
//   Job: "webdevloper",
//   Friends: ["karthick", "christoper", "kavi"],
// };

// console.log(eliyaser);
// console.log(eliyaser.FirstName);
// console.log(eliyaser.LastName);

// console.log(eliyaser["FirstName"]);
// console.log(eliyaser["LastName"]);
// const nameof = "Name";

// console.log(eliyaser.Last + nameof);/not working
// console.log(eliyaser["Last" + nameof]); //working fine

// const interestedIn = prompt(
//   "What do you want to know about eliyaser? Choose between firstName, lastName, age, job, and friends"
// );
// if (eliyaser[interestedIn]) {
//   console.log(eliyaser[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

// eliyaser.location = "india";
// eliyaser["twitter"] = "@eliyaser";
// console.log(eliyaser);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
// console.log(`eliyaser first best friend name is ${eliyaser.Friends[2]}`);

///////////////////////////////////////
// Object Methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYeah: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYeah) {
//   //   return 2037 - birthYeah;
//   // }

//   // calcAge: function () {
//   // console.log(this);
//   //   return 2037 - this.birthYeah;
//   // }

//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       jonas.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// // Challenge
// // "Jonas is a 46-year old teacher, and he has a driver's license"
// console.log(jonas.getSummary());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
// const mark = {
//   FullName: "mark Miller",
//   Mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.Mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// const john = {
//   FullName: "john smith",
//   Mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.Mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// john.calcBMI();
// mark.calcBMI();
// console.log(mark.BMI, john.BMI);

// // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
// if (mark.BMI > john.BMI) {
//   console.log(
//     `${mark.FullName}'s BMI (${mark.BMI}) is higher than ${john.FullName}'s BMI (${john.BMI})`
//   );
// } else if (john.BMI > mark.BMI) {
//   console.log(
//     `${john.FullName}'s BMI (${john.BMI}) is higher than ${mark.FullName}'s BMI (${mark.BMI})`
//   );
// }
///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE

// for (let count = 1; count <= 10; count++) {
//   console.log(`i am working now i am in count NO:${count}`);
// }
