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

let arr1 = [10,20,30,40,50,60, "TS"]

// arr1.splice(2,3, "Java", "JS") // [10,20,"Java", "JS",60, "TS"]
// console.log("splice", arr1);
arr1.splice(2,0, "Java", "JS") // [10,20,"Java", "JS",60, "TS"]
console.log("splice", arr1);

// 6. slice(startIndex, endIndex) - Return the portion of an array
// Syntax:
// arrayName.slice(startIndex, endIndex)
// startIndex - The position where you want to start the slice
// endIndex(Exclusive) [endIndex-1] - The position where you want to end the slice
console.log(arr1.slice(2,6)) // [2,3,4,5]

// foreach(), map(), filter(), reduce()









