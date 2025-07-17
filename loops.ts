// Loops - Which will execute the same block of code {...} multiple time

console.log(1) // 1
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("********************************");

// ++ = Increses the value by 1 1++= 1+1=2
// -- = Decreses the value by 1


// 1. for loop
    // a. for loop - Traditional for loop - When we know that how many time we have to run the iteration
    // b. for...in loop - Loop through object properties - {key : value} - Object
    // c. for...of loop - Loop through arrays, string. - Array - [1,2,3,4]
// 2. while loop - If we do not know how many times we have to run the iteration
// 3. do-while loop - If we want to execute the loop atleast 1 time before checking the condition



// 1. for loop - Traiditional loop
// Syntax:

/*
for(initialization; condition; increment/decrement)
{
 // code 
 break;
}

initialization - Initiliase the value of a variable to start the execution. 
let i = 1
condition - Condition to check whether the loop should continue or not. 
Ex: - i < 6
increment/decrement - Increment or decrement the value of the variable after each iteration.

*/

// 1 to 5

for(let i = 1 ; i<6 ; i++){  // 6 6 < 6
    console.log(i) // 1 2 3 4 5
    if(i==3){
        break
    }
}

console.log("*****************************");

// 2. while loop
// Syntax:
/*

initialization;
while(condition)
{
   // code
   increment/decrement;
}

*/

let j =1
while(j <6){
    console.log(j)
    if(j==4){
        break
    }
    j++
}

console.log("*******************************");

// 3. do... while loop
// Syntax:
/*

initialization
do{
 // code
 increment/decrement
}
while(condition);

*/

// 10 ... 1

let k = 10

do{
    console.log(k) // 10
    k-- // 9
}while(k >= 1); //  9>=1 ...... 1>=1 , 0>=1
