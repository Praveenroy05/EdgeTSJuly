// 2. string - Combination of characters - Hello
// Syntax:
// keyword(var/let/const) variableName : datatype(Optional) = value - TS
// keyword(var/let/const) variableName  = value - JS



/*

1. SingleQuote ('') - String Literal
2. DoubleQuote ("") - String Literal
3. Bactick (``) - Template Literal 

*/


let singleQuote1 = 'This is a string'
let doubleQuote1 = "This is a double quote string"

let str1 = 'c'

// Backtick(``) way of declaration of string:
// 1. When you declare a string in multiple line
// 2. When you want to call a variable inside a string


let multiline1 = `This 
is a 
 multiple line
 string`

let age1 = 20

// ${variableName}

let message1 = `You are of age ${age1}`
console.log(message1)

console.log("*****************************************");


// 1. length - Return the number of characters that are available in a string
// Syntax:
// stringName.length  

let str2 = "Hello World"
console.log(str2.length)