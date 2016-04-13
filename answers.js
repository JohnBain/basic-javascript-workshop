//comment

//Write a function that takes a string and returns the first character of the string. 
//Test your function on a few inputs, including the empty string.

function firstChar (string) {
    return string.charAt(0);
};

firstChar("pants");
firstChar("John");
firstChar("");

// Write a function that takes a string and returns the last character of a string. 
// Test your function on a few inputs, including the empty string.

function lastChar (string) {
    return string.charAt(string.length-1);
};

lastChar("pants");
lastChar("John");
lastChar("");

// Write a function that takes a string and a number, and returns the character at the position represented by the number. 
// The indexing of number should start at 0. Test your function on a few inputs, including the empty string.

// Write a function that takes a string and a number, and returns the character at the position represented by the number. 
// The indexing of number should start at 0. Test your function on a few inputs, including the empty string.

function chooseChar (string, num) {
    return string.charAt(num);
};


chooseChar("pants", 1);
chooseChar("John", 0);
chooseChar("", 2);

/* Returns "" for empty string. Perhaps not a desirable output?*/

// Write a function that takes two numbers and adds them together. Test your function on a few inputs. 
// Write in the comments what happens when you pass something other than a number to your function.

function addTwoNumbers (first, second) {return first + second}
    
addTwoNumbers(1,2)
addTwoNumbers(-1,-3)
addTwoNumbers(-4,10)
addTwoNumbers("chubby", "puppy")

//It concats two strings.

addTwoNumbers(["one"], ["two"])

//It also concats arrays. 

var dog = {};
var cat = {};

addTwoNumbers(dog, cat)

//Adding two empty objects returns "[object Object][object Object]". Adding properties to the objects returned the same