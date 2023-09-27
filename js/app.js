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

playerOne = getPlayerUserName()
playerTwo = getPlayerUserName()
playerThree = getPlayerUserName()
playerFour = getPlayerUserName()