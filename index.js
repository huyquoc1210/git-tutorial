// const fish = ["Lion", , "Angel"];
// console.log(fish);

// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);

// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;
//   console.log(x);
// }

// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log("Outer loops:", x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Inner loops:", z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }

// const num1 = 20;
// const num2 = 3;
// const name = "Chamakh";

// // This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // 60

// // A nested function example
// function getScore() {
//   const num1 = 2;
//   const num2 = 3;

//   function add() {
//     return `${name} scored ${num1 + num2}`;
//   }

//   return add();
// }

// console.log(getScore()); // "Chamakh scored 5"

// const factorial = function fac(n) {
//   return n < 2 ? 1 : n * fac(n - 1);
// };

// console.log(factorial(3)); // 6

// function map(f, a) {
//   const result = new Array(a.length);
//   console.log(result);
//   for (let i = 0; i < a.length; i++) {
//     result[i] = f(a[i]);
//   }
//   return result;
// }

// const cube = function (x) {
//   return x * x * x;
// };

// const numbers = [0, 1, 2, 5, 10];
// console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]

// function loop(x) {
//   // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
//   if (x >= 10) {
//     return;
//   }
//   // do stuff
//   loop(x + 1); // the recursive call
// }
// console.log(loop(0));

// function outside(x) {
//   function inside(y) {
//     return x - y;
//   }
//   return inside;
// }

// const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
// console.log(fnInside(5)); // 8
// console.log(outside(3)(5)); // 8

// function splitString(stringToSplit, separator) {
//   const arrayOfStrings = stringToSplit.split(separator);

//   console.log("The original string is:", stringToSplit);
//   console.log("The separator is:", separator);
//   console.log(
//     "The array has",
//     arrayOfStrings.length,
//     "elements:",
//     arrayOfStrings.join(" / ")
//   );
// }

// const tempestString = "Oh brave new world that has such people in it.";
// const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

// const space = " ";
// const comma = ",";

// splitString(tempestString, space);
// splitString(tempestString);
// splitString(monthString, comma);

// const colors = ["red", "green", "blue"];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// // let myArray = [1, 2, [3, 4]];
// // const myArray1 = myArray.flat();
// // console.log(myArray);

// const myArray = ["Wind", "Rain", "Fire"];
// myArray.sort();
// console.log(myArray);
// // sorts the array so that myArray = ["Fire", "Rain", "Wind"]

// const a = ["a", "b", "c"];
// a.forEach((element) => {
//   console.log(element);
// });

// console.log(a);
// // Logs:
// // a
// // b
// // c

// function successCallback(result) {
//   console.log(`Audio file ready at URL: ${result}`);
// }

// function failureCallback(error) {
//   console.error(`Error generating audio file: ${error}`);
// }

// createAudioFileAsync(audioSettings, successCallback, failureCallback);

// let value = 1;
// doSomething(() => {
//   value = 2;
// });
// console.log(value); // 1 or 2?

// const name = console.log("What is your name?");
// console.log(name);

// const bigmouth = "I've got no right to take my place…";
// console.log(bigmouth);

// const greetings = [
//   "Happy Birthday!",
//   "Merry Christmas my love",
//   "A happy Christmas to all the family",
//   "You're all I want for Christmas",
//   "Get well soon",
// ];

// for (const greeting of greetings) {
//   // console.log(greeting.includes(Christmas));
//   if (greeting.includes("Christmas")) {
//     console.log(greeting);
//   }
// }

// const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
// const substring = "green eggs and ham";
// const quoteLength = quote.length;
// console.log(quoteLength);
// const index = quote.indexOf(substring);
// console.log(index);
// const revisedQuote = `${quote.slice(0, index)}${substring}`;
// console.log(revisedQuote);

// const ucFirst = (string) => {
//   return string[0].toUpperCase();
// };

// console.log(ucFirst("john") == "John");

// const string = "This is my string";
// console.log(typeof string);

// const greetings = [
//   "Happy Birthday!",
//   "Merry Christmas my love",
//   "A happy Christmas to all the family",
//   "You're all I want for Christmas",
//   "Get well soon",
// ];
// const christmas = [];

// for (const greeting of greetings) {
//   if (greeting.includes("Christmas")) {
//     christmas.push(greeting);
//   }
// }
// console.log(christmas);

// const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

// for (const city of cities) {
//   // write your code just below here
//   const result = city["0"].toUpperCase() + city.slice(1).toLowerCase();
//   console.log(result);
// }

// const stations = [
//   "MAN675847583748sjt567654;Manchester Piccadilly",
//   "GNF576746573fhdg4737dh4;Greenfield",
//   "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
//   "SYB4f65hf75f736463;Stalybridge",
//   "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
// ];

// for (const station of stations) {
//   // write your code just below here
//   const index = station.indexOf(";");
//   const dsc = station.slice(index + 1);
//   const result = `${station.slice(0, 3)}: ${dsc}`;
//   console.log(result);
// }

// const quote = "I dO nOT lIke gREen eGgS anD HAM";
// const fixedQuote = quote[0].toUpperCase() + quote.slice(1).toLowerCase();
// console.log(fixedQuote);

// const checkSpam = (str) => {
//   if (!str) return str;

//   if (str.toLowerCase().includes("viagra")) return true;
//   if (str.toLowerCase().includes("xxx")) return true;
//   return false;
// };

// console.log(checkSpam("buy ViAgRA now"));

// `const truncate = (str, maxLength) => {
//   return str.length > maxLength ? str.slice(0, maxLength - 1) + "…" : str;
// };

// console.log(truncate("What I'd like to tell on this topic is:", 20));

// console.log(truncate("Hi everyone!", 20));`;

// const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
// const cities = data.split(",");
// console.log(cities);

// const products = [
//   "Underpants:6.99",
//   "Socks:5.99",
//   "T-shirt:14.99",
//   "Trousers:31.99",
//   "Shoes:23.99",
// ];
// const newArray = [];

// for (const product of products) {
//   const index = product.indexOf(":");
//   const price = product.slice(index + 1);
//   const totalArray = newArray.push(price);
//   console.log(totalArray);
// }
// const newArr = [];

// function filterRangeInPlace(arr, a, b) {
//   // for (const item of arr) {
//   //   if (item < a || item > b) continue;
//   //   newArr.push(item);
//   // }
//   // return newArr;
//   // return arr.filter((item) => a <= item && item <= b);
//   for (const [index, item] of arr.entries()) {
//     item[index];
//   }
// }

// let arr = [5, 3, 8, 1];

// console.log(filterRangeInPlace(arr, 1, 4)); // removed the numbers except from 1 to 4

// const list = document.querySelector(".output ul");
// const totalBox = document.querySelector(".output p");
// let total = 0;

// // number 1
// const products = [
//   "Underpants:6.99",
//   "Socks:5.99",
//   "T-shirt:14.99",
//   "Trousers:31.99",
//   "Shoes:23.99",
// ];

// for (const product of products) {
//   const index = product.indexOf(":");
//   const name = product.slice(0, index);
//   const price = Number(product.slice(index + 1));
//   if (!price) return 0;
//   total += price;
//   const itemText = `${name} — $${price}`;
//   console.log(itemText);
// }

// console.log(total);

// // number 3

// // number 4

// // number 5

// // number 6

// totalBox.textContent = "Total: $" + total.toFixed(2);

// let myArray = [
//   "Ryu",
//   "Ken",
//   "Chun-Li",
//   "Cammy",
//   "Guile",
//   "Sakura",
//   "Sagat",
//   "Juri",
// ];

// // Add your code here
// myArray.pop();
// myArray.push("Messi", "lam");
// console.log(myArray);

// const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// const index = birds.indexOf("Eagles");
// birds.splice(index, 1);
// const eBirds = [];
// for (const item of birds) {
//   if (item.startsWith("E")) {
//     eBirds.push(item);
//   }
// }

// console.log(eBirds);

// ("use strict");

// const sayHello = function (a, b) {
//   console.log(this.name, a + b);
// };

// const student = {
//   name: "Javascript",
// };

// const studentSayHello = sayHello.bind(student);

// studentSayHello(5, 10);

// sayHello.call(student, 5, 10);
// sayHello.apply(student, [10, 30]);

// if (![1, 2].indexOf(3) >= 0) {
//   console.log("Not found");
// }

// if (![1, 2].includes(3)) {
//   console.log("Not found");
// }

// // const xmas95 = new Date("1995-12-25T23:15:30");
// // const hours = xmas95.getHours();

// function countdown(seconds) {
//   let currentSecond = seconds;

//   const intervalId = setInterval(() => {
//     console.log(currentSecond);
//     if (currentSecond <= 0) {
//       clearInterval(intervalId);
//     }
//     currentSecond -= 1;
//   }, 1000);
// }
// countdown(hours);

// const promise = new Promise();
// console.log(promise);
