console.log("hello world");

// variables

let favoriteNumber = 3;

console.log(favoriteNumber);

let a = 1;
let b = 2;
let c = 3;

console.log(a, b, c);

// concatination

console.log((a + b) / c);

let d = "Hello";
let e = "World";

console.log(d + " " + e);

let f = "Zachary";
let g = "Sterman";

console.log("hello my name is " + f + " " + g);

let name = "Zachary Sterman";

console.log("My name is " + name);

// boolean type

let h = false;
let i = true;

console.log(h && i);

let j = true;
let k = true;

console.log(j || k);

// normal functions

function helloSir() {
  console.log("hello mr sir!");
}

helloSir();

// passing functions into another function 

// initial function 

function printVariable(variable){
  console.log(variable)
};

printVariable("test");

// secondary function 

function func(x){
  x("Hello World Again")
};

func(printVariable)

// callback function. calling back printVariable

function appendName(y, callback){
  callback("hello, my name is " + y);
}

appendName("Zachary",printVariable )



// arrays + nested arrays

var array1 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ["Cheese", "Bacon"],
];

console.log(array1[0][1]);

// array methods

const z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map over every object in array and perform said arrow function

const mapZ = z.map((number) => {
  return number * 2;
});

console.log(mapZ);

// return only numbers that match below arrow function

const filterZ = z.filter((number) => {
  return number <= 2;
});

console.log(filterZ);

// returns FIRST object that meets requirements set in arrow function
// find the first object in the array that is greater than 2
const findZ = z.find((number) => {
  return number > 2;
});

console.log(findZ);

// are ANY elements in array meeting the set requirements in arrow function. returns the first element that meets expectation
// is one element greater than 2?
const isTrue = z.some((number) => {
  return number > 2;
});

console.log(isTrue);

// lists if ALL elements in the meet expectation set in arrow function

const isEveryTrue = z.every((number) => {
  return number > 0;
});

console.log(isEveryTrue);
