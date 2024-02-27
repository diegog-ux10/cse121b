/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let number1 = Number(document.querySelector('#add1').value);
  let number2 = Number(document.querySelector('#add2').value);

  document.querySelector('#sum').value = add(number1, number2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1, number2) {
  return number1 - number2;
}

function subtractNumbers() {
  let number1 = Number(document.querySelector('#subtract1').value);
  let number2 = Number(document.querySelector('#subtract2').value);

  document.querySelector('#difference').value = subtract(number1, number2);
}

document
  .querySelector('#subtractNumbers')
  .addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => {
  return number1 * number2;
};

const multiplyNumbers = () => {
  let number1 = Number(document.querySelector('#factor1').value);
  let number2 = Number(document.querySelector('#factor2').value);

  document.querySelector('#product').value = multiply(number1, number2);
};

document
  .querySelector('#multiplyNumbers')
  .addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => {
  return number1 / number2;
};

const divideNumbers = () => {
  let number1 = Number(document.querySelector('#dividend').value);
  let number2 = Number(document.querySelector('#divisor').value);

  document.querySelector('#quotient').value = divide(number1, number2);
};

document
  .querySelector('#divideNumbers')
  .addEventListener('click', divideNumbers);

/* Decision Structure */

// Get the elements needed
const subtotalInput = document.getElementById('subtotal');
const memberCheckbox = document.getElementById('member');
const totalSpan = document.getElementById('total');
const getTotalButton = document.getElementById('getTotal');

// Add event listener to the "Get Total Due" button
getTotalButton.addEventListener('click', function () {
  // Declare and instantiate a variable to store the numeric value entered by the user
  let subtotal = parseFloat(subtotalInput.value);

  // Check if the membership checkbox is checked
  if (memberCheckbox.checked) {
    // Apply a 20% discount if the checkbox is checked
    subtotal *= 0.8; // 20% discount is equivalent to multiplying by 0.8
  }

  // Output the total to the total span with two decimals using template string
  totalSpan.textContent = `$${subtotal.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').innerHTML = numbersArr

/* Output Odds Only Array */

const oddsElement = document.getElementById("odds");
const oddNumbers = numbersArr.filter(number => number % 2 !== 0);
const oddNumbersString = oddNumbers.join(", ");
oddsElement.textContent = oddNumbersString;

/* Output Evens Only Array */

const evenNumbers = numbersArr.filter(number => number % 2 === 0);
const evensElement = document.getElementById('evens');
evensElement.textContent = evenNumbers.join(', ');

/* Output Sum of Org. Array */

const sumOfArray = numbersArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sumOfArrayElement = document.getElementById('sumOfArray');
sumOfArrayElement.textContent = sumOfArray;

/* Output Multiplied by 2 Array */

const multipliedArray = numbersArr.map(number => number * 2);
const multipliedElement = document.getElementById('multiplied');
multipliedElement.textContent = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */

const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sumOfMultipliedElement = document.getElementById('sumOfMultiplied');
sumOfMultipliedElement.textContent = sumOfMultiplied;