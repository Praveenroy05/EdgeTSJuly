// Statements - It allows us to exectue the different block of code {...} based on different condition

// if statement - This will handle only the positive scenario
// if else statement - Which will handle both positive and negative scenario
// if else if else statement - WIll validate more than 1 condition
// Switch statement - WIll validate more than 1 condition
// Ternary Operators - if else statement


// 1. if statement

// Syntax:

/*
if(condition)
{
// code - click on the element
}

*/

if(10 > 50){
    console.log("First number is greater than second");
}

// 2. if else statement
// Syntax:
/*

if (condition) 
{
   // code 
}
else
{
// code
}

*/

if(10>60)
{
    console.log("FIrst number is greater than second number");
}
else
{
    console.log("Second number is greater than first number");
}


// 3. if else if statement
// It validates multiple scenarios

// Syntax:

/*

if(condition1)
{
 // code
}
else if(condition1)
{
 // code
}
else if(condition2)
{
 // code
}
else
{
// code
}


*/


let browser = "edge"

if(browser == "chrome") // "safari" == "chrome"
{
    console.log("You are using chrome browser");
}
else if(browser == "firefox")
{
    console.log("You are using firefox browser");
}
else if(browser == "safari")
{
    console.log("You are using safari browser");
}
else{
    console.log("Browser is Invalid");
}

// When can we use if else if statement
// 1. Condition have Range (>90) >80 && <90
// 2. Data types are different  - name = "John", salary >= 100000
// 3. Logical (&&) - 


// 4. switch statement - Validate multiple conditions
// Syntax:

/*



switch(expression) // browser
{
    case value:
        // code
      break; // Terminate the loop
    case value1:
        // code
      break;
    case value2:
        // code
      break;
    default:
        // code
        break; // Optional
}

*/


let browserName = "safari"

switch(browserName) // switch("chrome")
{
    case "chrome":
        console.log("You are using chrome browser")
        break
    case "firefox":
        console.log("You are using firefox browser")
        break
    case "safari":
        console.log("You are using safari browser")
        break
    default:
        console.log("Invalid Browser");
        break
}

// Simple comparision which involves a single data type 





