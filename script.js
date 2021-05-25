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
let random0 = Math.floor(Math.random()) * 100;
console.log(random0);

//random numbers from 1 to 10;
let random1 = Math.floor(Math.random()) * 100 + 1;
console.log(random1);

//random numbers between min(included) and max (excluded);
function getRandomBetween(min, max) {
  return Math.floor(Math.random()) * (max - min) + min;
}

console.log(getRandomBetween(10, 35));
// any random number >= 10 and < 35

//random numbers between minand max (both included);
function getRandomIncluded(min, max) {
  return Math.floor(Math.random()) * (max - min + 1) + min;
}

console.log(getRandomIncluded(10, 35));

// any random number >= 10 and <= 35

/* ***************************************************** */
// Implement smooth scroll to the top of the page
// window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

/* ***************************************************** */

// ***Convert any value to boolean***

let number1;
// console.log(!!number1); // false

const number2 = 10;
// console.log(!!number2); // true

const name1 = 'Tim';
// console.log(!!name1); // true

const name2 = '';
// console.log(!!name2); // false

const nullValue = null;
// console.log(!!nullValue); // false

// This is especially useful If you want to avoid sending null or undefined as a value to the backend.

/* ***************************************************** */

//  Quickly convert string to number
const string = '20';
const stringToNum = +string;
const parsedString = parseFloat(string);
// console.log(string, stringToNum);
// console.log(string, parsedString);

//convert number to string
const numToString = stringToNum.toString();
// console.log('string: ', numToString);

//Format number to Two decimal places
const number = 100.43252354;
// console.log(number.toFixed(2)); //100.43

/* ***************************************************** */

// ***Convert string to array***
const full_name = 'Mike Johnson';

const name_array = full_name.split('');
// console.log(name_array);

const letters = 'a,b,c,d,e,f';
const letter_array = letters.split(',');
// console.log(letter_array);

// ***Convert array to string***
// console.log(name_array.join(''));
// console.log(letter_array.join('-'));

/* ***************************************************** */

// Check if the array contains a specific value

const fruits = ['apple', 'mango', 'cherry', 'banana', 'pears', 'peach'];
function arrayContainsValue(arr, value) {
  //old method
  // return arr.indexOf(value) !== -1;

  //OR

  //new method
  return arr.includes(value);
}

// console.log(arrayContainsValue(fruits, 'peach')); //true;
// console.log(arrayContainsValue(fruits, 'berry')); //false;

//comparing multiple values at once
function compareMultipleValues(fruit) {
  if (fruit === 'apple' || fruit === 'mango' || fruit === 'banana') {
    return 'I like ' + fruit + '.';
  }
  return "I don't really like " + fruit + '.';
}

// console.log(compareMultipleValues('apple'));
// console.log(compareMultipleValues('berry'));

//ALTERNATIVE TO THIS function
function includeMultipleValues(arr, fruit) {
  if (arr.includes(fruit)) {
    return 'I like ' + fruit + '.';
  }
  return "I don't really like " + fruit + '.';
}

const liked = ['apple', 'mango', 'banana'];
// console.log(includeMultipleValues(liked, 'mango'));
// console.log(includeMultipleValues(liked, 'cherry'));

/* ***************************************************** */

// ***Using optional chaining operator***

const student = {
  name: 'David',
  location: {
    street: {
      number: 20,
      name: '11 wall street'
    }
  }
};

// traditional way
const streetName =
  student.location && student.location.street && student.location.street.name;
// console.log(streetName); // 11 wall street
// const street_Name =  student.location.city.name;
// Uncaught TypeError: Cannot read property 'street' of undefined

//Modern way
const street = student?.location?.street?.name;
// console.log(street); // 11 wall street
// console.log(student?.location?.city?.name); //undefined
