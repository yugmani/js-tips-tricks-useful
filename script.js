// ***Quick way to mask numbers using slce and ES8 padStart Method***
function maskNumbers(creditCard) {
  const lastFourDigits = creditCard.slice(-4); //get last 4 digits;

  //prepend * to lastFourDigits to make length equal to creditCard number length
  const maskedNumber = lastFourDigits.padStart(creditCard.length, '*');

  return [lastFourDigits, maskedNumber];
}

const cardNumber = '4111111111114321'; //16 digit credit card numbers
// console.log(maskNumbers(cardNumber));
// OR
const [lastFourDigits, maskedNumber] = maskNumbers(cardNumber);
// console.log('Last 4 digits of card: ', lastFourDigits);
// console.log('Masked Number: ', maskedNumber);

//Expected lastFourDigits: 4321
// Expected maskedNumber: ************4321

/* ***************************************************** */

// ***Execute an Event handler only once***

// By passing { once: true } as the third argument to the addEventListener method, the event handler function will be executed only once.

document.getElementById('btn').addEventListener(
  'click',
  function() {
    alert('Button Clicked!');
    console.log('Button clicked!');
  },
  { once: true } // to execute only once.
);

/* ***************************************************** */

// ***Update properties of an object using spread operator***

const user = {
  name: 'David',
  age: 30,
  city: 'NY'
};

const newAge = 100;
const updatedUser = {
  ...user,
  age: newAge
};

// console.log(user); // Expected { name: 'David', age: 30, city: 'NY'}
// console.log(updatedUser); // Expected { name: 'David', age: 40, city: 'NY'}

/* ***************************************************** */

// ***Find the number of properties in an object***

const client = {
  name: 'David',
  age: 30,
  city: 'NY'
};

// console.log(Object.keys(client).length); // Expected 3

/* ***************************************************** */

// ***Get the last elements from the array***
const numbers = [10, 20, 30, 40, 50];
const last = numbers.slice(-1);

// console.log('last item:', last); //Expected [50]

const secondLast = numbers.slice(-2);
// console.log('Second Last: ', secondLast); //Expected [40, 50]

/* ***************************************************** */

// ***Three ways to check If the provided array is actually an array***

const arr = [1, 2, 3, 4];

//1st Method
// console.log(
//   'Is given object an array? ',
//   arr.constructor.toString().indexOf('Array') > -1
// );

//2nd Method
// console.log('Is given object an instance of array? ', arr instanceof Array);

//3rd Method
// console.log('Is given object actually an array? ', Array.isArray(arr));

/* ***************************************************** */

// ***Get Current TimeStamp***
const today = new Date();
// console.log(today.getTime());
//OR
// console.log(+today);

//Expected 1621708197298

/* ***************************************************** */

// *** Provide a dynamic key for an object using ES6 computed object property syntax */

function getPairs(key, value) {
  //Before ES6
  // const newObj = {};
  // newObj[key] = value;

  //New ES6 way
  const newObj = {
    [key]: value
  };

  return newObj;
}

// console.log(getPairs('name', 'Mike'));
// console.log(getPairs('age', 40));

/* ***************************************************** */

/* ***Object Destructuring*** */

const customer = {
  name: 'David',
  age: 30
};

// destructure user properties and use a `status` property with value `Married` if it does not exist

const { name, age, status = 'Married' } = customer;
// console.log(name, age, status); //

const person = {
  year: 30,
  name: 'AA'
};

//destructure `person` object and rename `name` to `username` and assign a default value of `Anonymous`, if the property does not exist in the `person` object

const { name: username = 'Anonymous', year } = person;
// console.table(username, year);

/* ***************************************************** */

/* ***Array Destructuring*** */

const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
];
[firstDay, secondDay] = days;

// console.log('I went to school on ' + firstDay + ' and ' + secondDay + '.');

[offDay, ...rest] = days;
// console.log('I got day off only on ' + offDay + '.');
// console.log('My work days are ' + rest + '.');

/* ***************************************************** */

// ***Spread operator***

//Add additional element in the array
const kindsOfDays = [...days, 'holiday'];
// console.log(kindsOfDays);

// Concatenate arrays
const first = ['two', 'three', 'four'];
const second = ['six', 'seven', 'eight'];

const merged = [...first, ...second];
// console.log(merged);

//Concatenae and add more elements to create new array
const newArray = ['one', ...first, 'five', ...second];
// console.log(newArray);

/* ***************************************************** */

// ***Fill the array with a specific value***

const arrayA = Array(5); //length of array is 5 but without any elements
// console.log(arrayA.length, arrayA);

const arrayB = Array(6).fill(false);
// console.log(arrayB); // [false, false, false, false, false]

const arrayC = [...Array(5).keys()];
// console.log(arrayC); //[1, 2, 3, 5]

/* ***************************************************** */

// ***Generate random number ***

//random numbers from 0 to 10;
const random0 = Math.floor(Math.random()) * 10;
console.log(random0);

//random numbers from 1 to 10;
const random1 = Math.floor(Math.random()) * 10 + 1;
console.log(random1);

//random numbers between min(included) and max (excluded);
function getRandomBetween(min, max) {
  return Math.floor(Math.random()) * (max - min) + min;
}

console.log(getRandomBetween(10, 15));
// any random number >= 10 and < 15

//random numbers between minand max (both included);
function getRandomIncluded(min, max) {
  return Math.floor(Math.random()) * (max - min) + min;
}

console.log(getRandomIncluded(10, 15));

// any random number >= 10 and <= 15
