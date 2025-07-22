// Arrays - [12,34,5,6,78]

// Index inside an array starts with 0
 let array =[12,34,5,6, "TS", "JS", true] 
 
 // [0:12,1:34,2:5, 3:6,.....] // [index:value]

 console.log(array[1])


// There are 2 ways in which we can declare an array
// 1. Using square brackets[] - Array Literal 
// 2. Using new keyword - Array Constructor - new Array()


// 1. Array Literal - []
// Syntax:
// let arrayName :datatype[](optional) = [value1, value2,...]

let array1 : number[] = [12,3,56,7]
let array2 = ["TS", "Java", 45,36,34.456, true, null]

let array3 :any = []

array3[0] = 10
array3[1] = 30


// 2. Array Constructor - new
// Syntax:
// let arrayName = new Array(value, value1, value3)
let array4 = new Array<any>(23,true, "JS", "TS", 243255)

console.log(Array.isArray(array1));

let i = 10
console.log(Array.isArray(i));

let array5 = [10,20,30,"TS", "Java"] // [0,1,2,3,4]
console.log(array5[0])
console.log(array5[1])

console.log("***********************");

// Object.property

// length - Total number of elements that are available inside an array
// Syntax:
// arrayName.length
console.log(array5.length);

// 1. Traditional for loop - Iterates through the index of an array

for(let i=0; i<array5.length; i++){
    console.log(array5[i])  // 0, 1
}
console.log("***********************************");
// 2. for of loop - It iterates through the element of an array

// let array5 = [10,20,30,"TS","Java"] // [0,1,2,3,4]
// Syntax:
// for(variable declaration of arrayName)
// {....}
// Variable - Will get the value one by one from the array

for(let element of array5){
    console.log(element)
}

console.log("*************Method of array in JS TS******************")
let arr = ["Orange", "Apple", "Test", 10, 20, 30]
console.log(arr);

// 1. push(elements, element1,.....) - Add the elements to the end of an array
// Syntax:
// arrayName.push(ele, ele1, ele2....)
arr.push(50, 100, 200)
console.log("push", arr);

// 2. pop() - Removes the last element from an array
// Syntax
// arrayName.pop()
arr.pop()
console.log("pop", arr);

// Difference between push() and unshift() method
// Difference between pop() and shift() method

// 3. unshift(elements......) - Add the elements to the beginning of an array
// Syntax:
// arrayName.unshift(ele1, ele2,...)
arr.unshift("TS", "JS")
console.log("unshift", arr);

// 4. shift() - Removes the first element from an array
// Syntax:
// arrayName.shift()
arr.shift()
console.log("shift", arr);

// Difference between splice() and slice()

// 5. splice(startIndex, numberOfElementsToDelete, ele1,ele2,el3,.......)
// Syntax:
// arrayName.splice(startIndex, numberOfElementsToDelete, ele1, ele2, el3,)
// startIndex - The position where you want to add/delete the element
// numberOfElementsToDelete - The number of element that you want to delete from an array at the startIndex
// ele1, ele2, el3,..... - The elements that you want to add at startIndex

let arr1 = [10,20,30,40,50,60, "TS", 30, 40]

// arr1.splice(2,3, "Java", "JS") // [10,20,"Java", "JS",60, "TS"]
// console.log("splice", arr1);
arr1.splice(2,0, "Java", "JS") // [10,20,"Java", "JS",60, "TS"]
console.log("splice", arr1);

// 6. slice(startIndex, endIndex) - Return the portion of an array
// Syntax:
// arrayName.slice(startIndex, endIndex)
// startIndex - The position where you want to start the slice
// endIndex(Exclusive) [endIndex-1] - The position where you want to end the slice
console.log(arr1.slice(6,2)) // [2,3,4,5]

// 7. indexOf(element) - Return the index of first occurance of an element from an array
// Syntax:-
// arrayName.indexOf(element)
console.log(arr1.indexOf(30, 5));

// 8. lastIndexOf(element) - Return the index of last occurance of an element from an array
// Syntax:-
// arrayName.lastIndexOf(element)
console.log(arr1.lastIndexOf(30));


const index = arr1.indexOf(30) // 4
console.log(index);
const index2 = arr1.indexOf(30, index+1)
console.log(index2);


// 9. concat(arra1, array2,......) - Concatenates two or more arrays
// Syntax:-
// arrayName.concat(arrayName1, arrayName2, arrayName3,.....)

let arr2 = [1,2, "TS"]
let arr3 = ["Python","Java"]
const arr4 = arr2.concat(arr3)
console.log(arr4);
console.log(arr2);
console.log(arr3)

// 10. includes(element) - Return the result in the form of boolean
// Syntax:-
// arrayName.includes(element)
console.log(arr3.includes("Python")); // true




// foreach(fun), map(fun), filter(fun), reduce(fun)


// function greet(fun){
//     fun()
// }

// greet(()=>{
//     console.log("Hello");
// })

let arr5 = [10,20,30,40,50] // [0:10,1:20,2:30,3:40,4:50]

// 11. forEach(function) - Will not return anything
// Syntax:-
// arrayName.forEach(function(element,index,arrayName){})

// element - The current element being processed in an array
// index(optional) - The index of the current element being processed in an array
// arrayName (optional)- The array the current element belongs to

for(let i=0; i<arr5.length; i++){
    console.log(i, arr5[i]);
}

console.log("***********************");
arr5.forEach(function(value, index){
     console.log(index+ value);
})


// 12. map(function) - Creates a new Array with the result of calling the function on every element of an array
// It will return the value as a result similar to the number of element inside an original array
// Syntax:-
// arrayName.map(function(element,index,arrayName){})

let price = [100,200,300,400,500,600]
// discount = 30% // 100- 100*30/100 = 70 // 100-30%=   70/100=  0.7

const mapResult = price.map(function(price){
        return price*0.7
})
console.log(mapResult);


// 13. filter(fun) - Creates a new Array with the result of calling the function on every element of an array
// Return the array with the same number or less then as similar to the original array

// Syntax:
// arrayName.filter(function(element,index,arrayName){})

// element - The current element being processed in an array
// index(optional) - The index of the current element being processed in an array
// arrayName (optional)- The array the current element belongs to


let sales = [
    {category: 'fashion', sale : 500000},
    {category: 'electronics', sale : 3000000},
    {category: 'Mobile', sale : 1200000},
    {category: 'Toys', sale : 200000},
]

let priceSales = sales.filter((price)=> price.sale < 600000)
console.log(priceSales);

// let price = {category: 'fashion', sale : 500000} 
// console.log(price.sale);



// 14.reduce(fun, initialValue(Optional)) - Reduce the result to a single value 
// Syntax:
// arrayName.reduce(function(accumlator, element, index, arrayName){...}, initialValue)

// accumulator - The accumulated value so far in the array. The accumlated value from the previous iteration.
// element - The current element being processed in an array
// index(optional) - The index of the current element being processed in an array
// arrayName (optional)- The array the current element belongs to

// let arraySum = [10,20,30,40] // 10+20+30+40

// let sum=0
// for(let num of arraySum){
//     sum = sum + num // sum = 0+10 = 10 +20 = 30 , sum = 30+30 = 60, sum = 60+40 = 100
// }
// console.log(sum);

const totalSale = sales.reduce(function(total, price){
    total = total + price.sale
    return total
}, 0)
console.log(totalSale);

 let arraySum = [10,20,30,40]

const total = arraySum.reduce(function(total, price){
    total = total * price
    return total
},1)
console.log(total);




// Monday - String
// Tuesday - Playwright  - Framework - Class 