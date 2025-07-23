// Data Type - Which defines what kind of data a variable is storing

// 2 types of data types

// 1. Primitive Data Types - Only one value
     // 1. number
     // 2. string
     // 3. boolean
     // 4. null
     // 5. undefined

     // 6. any
     // 7. union
     // 8. void - function



// 1. number  - Combination of both integer(90, -34) and floating point number (45.34, 435435.23553345)
// Syntax:
// keyword(var/let/const) variableName : datatype(Optional) = value

let num :number = 30
// typeof - Which helps us in identifying the datatype of a variable
console.log(typeof num);

let num1 :number = 100.4545
//num1 = "Ts"
console.log(typeof num1);


let num2  = 3223
console.log(typeof num2);

// What is the difference between Type annotation and Type inference.

// Whenever you define the data type of a variable explicitly is know as Type Annotation
//let num :number = 30 - Type Annotaiton

// When JS/TS is able to identify the datatype of a variable implictly (Depending on the value that you store inside a variable) - Type Inference
// let num2  = 32255 - Type Inference


// 2. string - Combination of characters - Hello
// Syntax:
// keyword(var/let/const) variableName : datatype(Optional) = value - TS
// keyword(var/let/const) variableName  = value - JS



/*

1. SingleQuote ('') - String Literal
2. DoubleQuote ("") - String Literal
3. Bactick (``) - Template Literal 

*/


let singleQuote = 'This is a string'
let doubleQuote = "This is a double quote string"

let str = 'c'

// Backtick(``) way of declaration of string:
// 1. When you declare a string in multiple line
// 2. When you want to insert a variable inside a string


let multiline = `This 
is a 
 multiple line
 string`

let age = 20

// ${variableName}

let message = `You are of age ${age}`
console.log(message)


// 3. boolean  - true or false
let isAdmin = true
let isUser = false


// 4. null
// null is a primitive data type in JS/TS
// It is used to represent the absence of any object value
let variable = null

// 5. undefined
// undefined is a primitive data type in JS/TS
// Whenever you do not define the value of a variable , By default that variable will have a value as undefined
let variable2 = undefined
console.log(variable2) 


// 6. any - Any type of data can be assigned. Whenevr you are migrating from Javascript to Typescript

let var1 :any = 10
var1 = "TS"
var1 = true
var1 = null
var1 = undefined



// 7. union - Allows a variable to hold multiple data type (Combination of data type)

 let var2 : (number | string | boolean)= 10
 var2 = "TS"
 var2 = true








// 2. Non-Primitive Data Types - Multiple values
    // 1. array
    // 2. object - {key : value}
    // 3. string


