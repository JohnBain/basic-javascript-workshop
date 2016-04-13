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

//"chubbypuppy"
//It concats two strings.

addTwoNumbers(["one"], ["two"])

//"onetwo"
//It also concats text within separate arrays. 

var dog = {};
var cat = {};

addTwoNumbers(dog, cat)

//Adding two empty objects returns "[object Object][object Object]". Adding properties to the objects returned the same.

// Write a function that takes two numbers and multiplies them together. Test your function on a few inputs. 
// Write in your comments what happens when you pass something other than a number to your function.

function multiplier (x,y){return x * y}

multiplier(1,2)
multiplier(-100, 200)
multiplier("string", "another string")

//Multiplying strings returns NaN

multiplier([1],[2])

//This returns 2. Arrays with more than one number element return NaN.

//================ Readability divider ===================================================================

//Write a function that takes two numbers and a string. If the string is ‘add’, then return the sum of the numbers. If the string is ‘subtract’, return the difference. If the string is ‘mult’, return the product. If the string is ‘div’, return the ratio. Otherwise return 0.

function calculator(num1, num2, operation) {
    if (operation == "add") {return num1+num2}
    else if (operation == "subtract") {return num1 - num2}
    else if (operation == "mult") {return num1*num2}
    else if (operation == "div") {return num1/num2}
    else {return 0}
}

//console.log(calculator(1, 2, "add"));
//calculator(5, 7, "mult");
//calculator(10, 5, "div");
//calculator(10, 5, "pants");

//Write a function that takes a string and a number, and returns the string repeated that many number of times. Test your function with various inputs.

// I wrote two variants because the question was slightly ambiguous

var stringRepeat = function (string, number) {
    var finalstring = ""
    for (var i=0; i<number; i++)
        finalstring += string;
    return finalstring;
}

//console.log(stringRepeat("pants", 3))

var stringRepeater = function(string, number) {
    while (number >= 0) {
        number -= 1
        console.log(string)
    };
};

//stringRepeater("pants", 3)

//Write a function that takes a string, and returns the reverse of that string. For example, if you pass the function the string “hello”, it should return “olleh”. Test your function on a few inputs, including the empty string.

function reverse (string) {
   var finalstring = ""
   for (var i=string.length;i>0;i--){
       finalstring += string.slice(i-1, i)
   }    
    return finalstring
};

//console.log(reverse("pants"))
    
//Write a function that takes a number and returns the factorial of a number. The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1. Test your input on a few numbers, including negative numbers.

function factorial (num) {
    if (num <= 0) {
        return 1
    }
    
    else {
        return num * factorial(num-1)
    }
}

//factorial(10)

//Write a function that takes a phrase as a string, and returns the longest word in that phrase. 
//If the phrase contains more than one such word, return the first occurrence. Test your function on a few inputs.

function longestWord (phrase) {
    var splitphrase = phrase.split(" ")
    var lengthcounter = 0
    var finalphrase = ""
    
    for (var i=0;i<splitphrase.length;i++) {
        if (splitphrase[i].length > lengthcounter) {
            lengthcounter = splitphrase[i].length
            finalphrase = splitphrase[i]
        }
    }
    
    return finalphrase
};

//console.log(longestWord("hungry hippos happy herbivores"))
//console.log(longestWord("six one two"))

//Write a function that takes a phrase, and returns the same phrase with every word capitalized. 
//For example, if you pass your function "hello world", it should return “Hello World” and if you pass it “HELLO WORLD” or even 
//"HeLLo WoRLD", it will also return "Hello World". Test your function of a few inputs.

function wordCapitalizer (phrase) {
    var splitphrase = phrase.split(" ")
    var finalphrase = ""
    
    for (var i=0;i<splitphrase.length;i++) {
        splitphrase[i] = splitphrase[i].charAt(0).toUpperCase() + splitphrase[i].slice(1).toLowerCase();
    }
    
    splitphrase = splitphrase.join(" ")
    return splitphrase
};

wordCapitalizer("paNtS on fire")

//Write a function that takes an array and returns the largest number of the array. Test your function on a few inputs.

function highestNumber (array) {
    var theHighest = 0
    
    array.forEach(function(each) {
        if (each >= theHighest)
            theHighest = each
            });
    return theHighest
}

//console.log(highestNumber([1,2,4]))

// Write a function that takes an array, and returns a filtered array. 
// The filtered array should only contain the truthy values from the initial array. 
// Hint: there is an array method called filter that can help you with this :)

function isTruthy(value) {
  if(value || value === 0){         //Codrin told me to include 0.
      return true;
  }
}

function filterArray (ary) {
    return ary.filter(isTruthy) 
}

//console.log(filterArray([false, 1, "2", 0, NaN, "", null]))

//Write a function that takes an array of numbers, and returns the sum of all the numbers in 
//the array.

function returnSum(array) {
    var sum = 0;
    array.forEach(function(each){
        sum += each;
    });
    return sum;
}

//console.log(returnSum([1,2,3]));

//Write a function that takes two arrays, and returns an 
//array of all elements that are only in one array. 
//For example, with [1,2,3] and [1,2,4,5] the function should 
//return [3,4,5]. Test your function on different inputs. 
//Hint: you should look up array methods indexOf and slice.

function takeTwoArrays (ary1, ary2) {
    var finalarray = [];
    
    ary1.forEach(function(each){
        if (ary2.indexOf(each) === -1)
            finalarray.push(each);
    });
    
    ary2.forEach(function(each){
        if (ary1.indexOf(each) === -1)
            finalarray.push(each);
    });
    
    return finalarray;
}

//console.log(takeTwoArrays(["cats", "dogs", "porpoises"], ["dogs", "cats", "eagles"]))
//console.log(takeTwoArrays([1,2,4,7], [1,2,3,7]))
//console.log(takeTwoArrays([1,NaN], [1]))
//console.log(takeTwoArrays([],[777, 888]))


//Mini Challenge: write a function that takes an array and a function as arguments. 
//The function should return a new array that maps every element of the input array by passing 
//it through the function you received. You are not allowed to use Array.map for this 
//challenge, otherwise it would be too easy :)

function twoArgs(ary, func) {
    ary.forEach(func)  
}

twoArgs([1,2,3], function(num) {
    console.log(num)})










