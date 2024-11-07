//Select all number divs
const numDivs = document.querySelectorAll('.num');
//Select data-value for num divs
const numData = numDivs.dataset;
//Select all operator divs
const opDivs = document.querySelectorAll('.op');
//Select clear div
const clearDiv = document.querySelector('.clear');
//Select screen div 
const screen = document.querySelector('.screen')
//Select equals div
const equal = document.querySelector('.equal')
//Select point div
const point = document.querySelector('.point')
//Variable for first component of the equation 
let firstNum = ''
//Variable for the operator of the equation 
let operator = ''

//functions for each operator 
const add = (a,b) => a+b
const subtract = (a,b) => a-b
const multiply = (a,b) => a*b
const divide = (a,b) => a/b

//Function to return the data-value of number divs when clicked
function getNumValue(event){
    const dataValue = event.currentTarget.dataset.value;
    return dataValue
}

//Event listener that console logs the data-values of number divs 
numDivs.forEach(num => {
    num.addEventListener('click', (event) => {
        const numVal = getNumValue(event);
        firstNum += numVal
        
    });
});

//Event listener that splits the 
opDivs.forEach(op => {
    op.addEventListener('click', (event) => {
        const opVal = getNumValue(event);
        firstNum += "%"
        operator+= opVal
    });
});

//Function to split firstNum into two components 
document.querySelector('.equal').addEventListener('click', function() {
    let array = String(firstNum).split("")
    let firstIndex = array.indexOf('%')
    let firstComp = Number(array.slice(0, firstIndex).join(''))
    let secondComp = Number(array.slice(firstIndex+1).join(''))
    return operator=="/" ? console.log(divide(firstComp,secondComp))
    : operator=="*"  ? console.log(multiply(firstComp,secondComp))
    : operator=="-"  ? console.log(subtract(firstComp,secondComp))
    : console.log(add(firstComp,secondComp));
});


