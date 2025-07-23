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


// 2. charAt(index) - It return the character at specified index
// Syntax:
// stringName.charAt(index)
console.log(str2.charAt(0));

// String  Hello - H1e1l2o1

// 3. concat(str1, str2) - Combine 2 or more strings and return us a new string


// 4. includes(searchString, position?)
// It returns true if the string contains the specified value, otherwise false.
// Syntax:
// stringName.includes(searchString, position)

let str3 = "This is a string value"
console.log(str3.includes("Value"));

// 5. startsWith(searchString, position?) - Check if a string startsWith the specified string or not.
// Syntax:
// stringName.startsWith(searchString, position)
console.log(str3.startsWith("T"));
console.log(str3.startsWith("value"));

// 6. endsWith(searchString, position?) - Check if a string endsWith the specified string or not.
// Syntax:
// stringName.endsWith(searchString, position)
console.log(str3.endsWith("value"));

// 7. indexOf(char or string)
// It returns the index of the first occurrence of the specified value in the string.

// 8. lastIndexOf(char or string)
// It returns the index of the last occurrence of the specified value in the string.


// 9. slice(startIndex?, endIndex?) - Return the portion of an string
// Syntax:
// stringName.slice(startIndex, endIndex)
// startIndex - The position where you want to start the slice
// endIndex(Exclusive) [endIndex-1] - The position where you want to end the

console.log(str3.slice());
console.log(str3.slice(2,11));
console.log(str3.slice(11, 2));

// Difference betwen slice and substring method

// 10. substring(startIndex, EndIndex?)
// It returns a subset of characters from the string, between two specified indices.
// Syntax:
// stringName.substring(startIndex, endIndex)
// startIndex - The position where you want to start the substring
// endIndex(Exclusive) - The position where you want to end the substring
console.log(str3.substring(2, 11));
console.log(str3.substring(11, 2));

//11. toLowerCase() - Converts all the chracters to a lower case characters
// Syntax
// stringName.toLowerCase()
let str4 = "This Is A String"
console.log(str4.toLowerCase());

// 12. toUpperCase() - Converts all the chracters to a upper case characters
// Syntax
// stringName.toUpperCase()
console.log(str4.toUpperCase());

// 13. join(str1, str2) - Joins all the string of an array and return us a  string value
// Syntax
// stringName.join(str1, str2)
let str5 = ["Hello", "World", "This", "Is", "A"]
console.log(str5.join("_"));

// 14. trim() - Removes the whitespace from beginning and the end of a string
// Syntax
// stringName.trim()

let str6 = "   This is a string   "
console.log(str6.length);
console.log(str6.trim().length);

// 15. trimStart() - Removes the white space from the beginning of a string
// Syntax
// stringName.trimStart()
console.log(str6.trimStart().length);

// 16. trimEnd() - Removes the white spce from the end of a string
// Syntax
// stringName.trimEnd()
console.log(str6.trimEnd().length);

// 17. split() - It will also return the portion of a string
// Syntax
// stringName.split(separator)
let str7 = "Hello,World,This,Is,A,String"
console.log(str7.split(",")[1]);
// 18. replaceAll()
console.log(str7.replaceAll(",", " "));


// JSON - Object
// Framework  - Class

// Playwright  - To setup the playwright - 

// 