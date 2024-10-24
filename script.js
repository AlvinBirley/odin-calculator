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