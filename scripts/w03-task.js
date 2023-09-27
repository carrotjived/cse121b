/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;

}

function addNumbers (){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1,addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);


/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;

}

function subtractNumbers (){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1,subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1,number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let dividendNumber = Number(document.querySelector('#dividend').value);
    let divisorNumber = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividendNumber,divisorNumber);
}

document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);

/* Decision Structure */
var date = new Date();
var currentYear = '';
date.getFullYear(currentYear);

document.getElementById('year').innerHTML = currentYear;
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerHTML = numbersArray;

/* Output Odds Only Array */
document.getElementById('odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.getElementById('evens').innerHTML = numbersArray.filter(number => number % 2 === 0);


/* Output Sum of Org. Array */
document.getElementById('sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);


/* Output Multiplied by 2 Array */
document.getElementById('multiplied').innerHTML = numbersArray.map(number => number * 2);


/* Output Sum of Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
const sumOfMultiplied = multipliedArray.reduce((sum,number)=> sum + number);
document.getElementById('sumOfMultiplied').innerHTML = sumOfMultiplied;
