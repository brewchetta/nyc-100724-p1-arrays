// console.log("OLLEH")

const someConst = "hello" // value cannot be reassigned
let someLet = "HELLO" // value can be reassigned
var someVar = "HI" // old school don't use this

const myString = 'I am string don\'t mess me up'
// the \ is known as an escape character

const myBoolean = true

const myInteger = 1

const myFloat = 1.11111111 // has a decimal point

const myArray = []

const myObj = {}

// 1. But what even is a function?

// FUNCTION DEFINITION
function myFunctionName() {
    return "I AM A FUNCTION AND I'M FIRING!"
}

// FUNCTION CALL
myFunctionName()

// 2. What is a function parameter? What is the difference between a parameter and an argument?

function addNumbers(number1 , number2) {
    const sum = number1 + number2
    return sum
}

const twentyPlusFourty = addNumbers(20, 40) // function with ARGUMENTS
const threePlusFive = addNumbers(3,5)
const minusAlotEquals = addNumbers(-100000000, 0)
const fivePlusHello = addNumbers(5, "Hello")

// 3. How are functions scoped? Can functions access other variables?
// SCOPE: determines where or how much of the code is affected / accessible

function someFunctionWithScope() {
    const scopedVariable = "HELLO I HAVE A SCOPE"
    console.log(scopedVariable)
    return scopedVariable
}

const globalVar = "I AM GLOBAL"

function saySomeGlobalStuff() {
    console.log(globalVar)
}

function twoReturns() {
    return "hello"
    // return "goodbye"
}

// GLOBAL SCOPE

function outerFunction() { // FIRST FUNCTION SCOPE
    const outerVar = "I AM AN OUTER VARIABLE"

    function innerFunction() { // SECOND FUNCTION SCOPE
        console.log(outerVar)
    } // SECOND FN SCOPE ENDS

    innerFunction()
} // FIRST FN SCOPE ENDS

function makeAdditionFN(number) {

    return function additionFunction(number2) {

        return number + number2
        
    }
    
}

const addFive = makeAdditionFN(5)
const addTen = makeAdditionFN(10)

// 4. What is logic in JS? How can we build logical operators (conditionals) into a function?

function yesOrNo(trueOrFalse) {

    if (trueOrFalse) {
        return "IT'S TRUE!!!!"
    }
    //  else if (trueOrFalse === false) {
    //     return "IT'S FALSE!!!!"
    // } else if (trueOrFalse === "false") {
    //     return "IT'S A STRING"
    // }

    return "I AM NOTHING"

    // undefined --> falsey
    // null --> falsey
    // "undefined" --> truthy bc it's a string
    // "" --> empty string is falsey
    // 100 --> truthy
    // 0 --> falsey
    // NaN --> falsey

}


// 5. What is the difference between a function and an arrow function?

function normalFunction(param1, param2) {
    return param1 + param2
}

const arrowFunction = (param1, param2) => param1 + param2
// arrow function implicitly returns