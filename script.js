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
//Variable for first component of the equation 
let firstNum = ''
//Variable for the operator of the equation 
let operator = ''


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






function testing(){
    console.log(firstNum)
    console.log(operator)
} 


equal.addEventListener('click', testing)

//WHAT I CAN TRY IS RETURNING THE FIRST COMPONENT AS THE RETURN EVENT OF A FUNCTION - ALSO, LOOK BACK AT THE RPS PROJECT
//ANOTHER THING YOU COULD DO IS HAVE THE OPERATOR BUTTONS INSERT A SPACE OR A CERTAIN CHARACTER INTO YOUR VARIABLE - THEN YOU CAN SIMPLY SPLIT IT

// variables
let a = 6
let b = 11
let o = "+"

//functions for each operator 
const add = (a,b) => a+b

const subtract = (a,b) => a-b

const multiply = (a,b) => a*b

const divide = (a,b) => a/b

console.log(add(a,b))
console.log(subtract(a,b))
console.log(multiply(a,b))
console.log(divide(a,b))

//function that returns solutions
function operate(a,b,o){
    return o=="*"? multiply(a,b)
    :o=="+"? add(a,b)
    :o=="-"? subtract(a,b)
    :divide(a,b)
}

console.log(operate(a,b,o))

function fullNumber (fistNum) {
console.log(firstNum)
}
