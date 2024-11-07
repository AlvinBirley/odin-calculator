//Select all number divs
const numDivs = document.querySelectorAll('.num');
//Select data-value for num divs
const numData = numDivs.dataset;
//Select all operator divs
const opDivs = document.querySelectorAll('.op');
//Select clear div
const clear = document.querySelector('.clear');
//Select screen div 
const screen = document.querySelector('.screen')
//Select equals div
const equal = document.querySelector('.equal')
//Select point div
const point = document.querySelector('.point')
//Variable to hold "." string
const pointStr = "."
//Variable for first component of the equation 
let firstNum = ''
//Variable for the operator of the equation 
let operator = ''
//Variable for innerHTML of screen div
let display = screen.innerHTML

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
        screen.innerHTML += numVal
    });
});

function addPoint (){
    firstNum += pointStr
    screen.innerHTML += pointStr
}

point.addEventListener("click", addPoint)

function clearAll (){
    screen.innerHTML = ''
    firstNum = ''
    operator = ''
}

clear.addEventListener("click", clearAll)

//Event listener that splits the 
opDivs.forEach(op => {
    op.addEventListener('click', (event) => {
        const opVal = getNumValue(event);
        firstNum += "%"
        operator+= opVal
        screen.innerHTML += opVal
    });
});

//Function to solve equation
document.querySelector('.equal').addEventListener('click', function() {
    let array = String(firstNum).split("")
    let firstIndex = array.indexOf('%')
    let firstComp = Number(array.slice(0, firstIndex).join(''))
    let secondComp = Number(array.slice(firstIndex+1).join(''))
    return operator=="/" ? screen.innerHTML=divide(firstComp,secondComp)
    : operator=="*"  ? screen.innerHTML=multiply(firstComp,secondComp)
    : operator=="-"  ? screen.innerHTML=subtract(firstComp,secondComp)
    : screen.innerHTML=add(firstComp,secondComp)
});


