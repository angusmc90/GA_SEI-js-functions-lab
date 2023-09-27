console.log("My name is Angus")


// defining a function
// declaring a function
// creating the reusable block of code 
// to be used at a later time in the program
function sayHello(personsName){
	// write the code to say hello here
    console.log(`Hello ${personsName}`)
}

sayHello("Angus");

function sayGoodbye(phrase, personsName){
    console.log(`${phrase}, ${personsName}`)

}

// Define and call the function
// sayGoodBye should accept two paramters, one phrase, and on personsName
// add it logs a message
// Adios, Laura
// Chao, Becky
// Goodbye, Chad
// Peace, Frankie

sayGoodbye("Adios", "Laura");
sayGoodbye("Chao", "Becky");
sayGoodbye("Goodbye", "Chad");
sayGoodbye("Peace", "Frankie");


function add (x,y){
    return x + y
}

console.log(add(2,4));



function getPlayerUserName(username){
    username.toUpperCase()
};

playerOne = getPlayerUserName();
playerTwo = getPlayerUserName();
playerThree = getPlayerUserName();
playerFour = getPlayerUserName();




/* 

LAB-HW-09-27-23
Here are the functions:

*/


//1. (completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));

//2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3){
        return num1
    } else if (num2 > num1 && num2 > num3) {
        return num2
    } else {
        return num3
    }
}

console.log(maxOfThree(4, 5, 6));

//3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

//4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

//5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

//6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

//7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

//8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

//9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].



