// Functions

// Maintainence, duplication and introuced a feature as reusability
// function login(username,password){ // Parameter
    // fill the username
    // fill the password
    // Click on login button
    // return 
// }

// login(username, password) // Arguments


// 1. Named function - Function Declaration
// 2. Anonymous function (Unnamed function) - Function Expression
// 3. Arrow function (=>)
// 4. Constructor Function() - class Object
// 5. IIFE - Immediately Invoked Function Expression
// 6. Factory Functions - A function which returns as Object. Object - {key: value} 


// 1. Named Function  - Function Declaration
// Syntax:

/*

function functionName(parameter) : return datatype
{
    // body
    return(optional)  - if a function is returning some value
}


const result = functionName(arguments)

*/

// Addition of 2 numbers

function add(a:number,b:number) // a,b  - Parameter
{
    console.log(a+b)
}

add(12,34) // 12, 34 - Arguments


function add1(a:number,b:number): number // a,b  - Parameter
{
    return a+b
}

const result = add1(20,34) // Arguments
console.log(result)

// Expression
let i = Function()


// 2. Anonymous Function - Unnamed Function  - Function Expression - Call Back function - A function which calls another function
// Syntax:

/*

const variable = function(Parameter): return datatype{
 // code
}

variable()


*/

const info = function(name: string): string{
    return ("Your name is "+ name);
}

const resultInfo = info("John")
console.log(resultInfo)


// 3. Arrow Function => - It has introuced to shorten the code. It is also used for callback and have been given for a single line of code
// Syntax:

/*
const arrow = (parameter)  => {
 // code
}

arrow(arguments)

*/

// 1. When you are trying to write a single line of code inside the function{...}, we do not even require to use return keyword
// 2. If you have a single line of code inside the function you do not even have to define the {}



const arrow = (name1: string) =>{
    console.log("Your name is ", name1);
}

arrow("Joe")

const arrow1 = (name1:string) => ("Your name is " +name1)


const arrow1Fun = arrow1("Rahul")
console.log(arrow1Fun);


// 4. IIFE - Immediately Invoked Function Expression
// IIFE is a function which is invoked immediately after it is defined. It is used to declare a function which is invoked immediately.

// Syntax:

/*

(function(parameter){
 // codes
})
(arguments)



*/

(function(name){
    console.log("This is IIFE function", name);
})
("In TS")

//console.log("**********");


// Default Parameter - TS/JS
// Optional Parameter - TS

// Default Parameter
// Default parameter is a parameter which has a default value assigned to it. If the value is not provided while calling the function, it will take the default value.


function addition1(a,b,c){
    console.log(a+b+c);
}

addition1(10,20, 30)

function addition(a,b,c=90){
    console.log(a+b+c);
}

addition(10, 20)
addition(10, 20, 20)


// Method Overloading - It is a process in which we can define multiple functions with the same name but different parameters
// Method overloading in JS/TS is not possible. It can be achieved through default parameter in JS and Default and Optional Parameter in Typescript.


// Optional Parameter - ?
// Optional parameter is a parameter which is not mandatory to be passed while calling the function. If the value is not provided while calling the function, it will take the default value or undefined.

function addition2(a,b,c?){
    if(c !== undefined){
        console.log(a+b+c);
    }
    else{
        console.log(a+b);
    }
}

addition2(10,20) // C = undefined
addition2(10,20,30)