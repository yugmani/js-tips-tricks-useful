// ***Quick way to mask numbers using slce and ES8 padStart Method***
function maskNumbers(creditCard) {
  const lastFourDigits = creditCard.slice(-4); //get last 4 digits;

  //prepend * to lastFourDigits to make length equal to creditCard number length
  const maskedNumber = lastFourDigits.padStart(creditCard.length, '*');

  return [lastFourDigits, maskedNumber];
}

const cardNumber = '4111111111114321'; //16 digit credit card numbers
console.log(maskNumbers(cardNumber));
// OR
const [lastFourDigits, maskedNumber] = maskNumbers(cardNumber);
console.log('Last 4 digits of card: ', lastFourDigits);
console.log('Masked Number: ', maskedNumber);

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

// Update properties of an object using spread operator

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

console.log(user); // Expected { name: 'David', age: 30, city: 'NY'}
console.log(updatedUser); // Expected { name: 'David', age: 40, city: 'NY'}

/* ***************************************************** */

// Find the number of properties in an object

const client = {
  name: 'David',
  age: 30,
  city: 'NY'
};

console.log(Object.keys(client).length); // Expected 3

/* ***************************************************** */

// Get the last elements from the array
const numbers = [10, 20, 30, 40, 50];
const last = numbers.slice(-1);

console.log('last item:', last); //Expected [50]

const secondLast = numbers.slice(-2);
console.log('Second Last: ', secondLast); //Expected [40, 50]

/* ***************************************************** */

// Three ways to check If the provided array is actually an array

const arr = [1, 2, 3, 4];

//1st Method
console.log(
  'Is given object an array? ',
  arr.constructor.toString().indexOf('Array') > -1
);

//2nd Method
console.log('Is given object an instance of array? ', arr instanceof Array);

//3rd Method
console.log('Is given object actually an array? ', Array.isArray(arr));

/* ***************************************************** */


