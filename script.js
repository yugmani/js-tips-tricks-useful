//Quick way to mask numbers using slce and ES8 padStart Method

const creditCard = '4111111111114321'; //16 digit credit card numbers
const lastFourDigits = creditCard.slice(-4); //get last 4 digits;

//prepend * to lastFourDigits to make length equal to creditCard number length

const maskedNumber = lastFourDigits.padStart(creditCard.length, '*');

console.log(lastFourDigits); //Expected 4321
console.log(maskedNumber); // Expected ************4321

/* ***************************************************** */

// Execute an Event handler only once
