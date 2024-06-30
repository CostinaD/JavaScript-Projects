// Assigning local and global variables
var globalVariable = 10; // global variable

function addNumbers() {
    var localVariable = 5; // local variable
    console.log("Local Variable: " + localVariable); // Using local variable
    console.log("Global Variable: " + globalVariable); // Using global variable
}

addNumbers(); // Calling the function to demonstrate variable usage

// A function that includes an if statement
function displayDate() {
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "AM!";
    } else {
        document.getElementById("greeting").innerHTML = "PM!";
    }
}

// A function with an intentional error to debug using console.log()
function faultyFunction() {
    var test = 10;
    console.log("Before error"); // Debugging message before error
    try {
        console.log(test + undefinedVariable); // Intentional error
    } catch (error) {
        console.log("An error occurred: " + error.message); // Debugging error
    }
    console.log("After error"); // Debugging message after error
}

faultyFunction(); // Calling the function to demonstrate error handling

// Utilizing the Time_function() from previous slides
function displayTime() {
    var currentHour = new Date().getHours();
    var timeMessage;

    if (currentHour < 12) {
        timeMessage = "It is morning!";
    } else if (currentHour < 18) {
        timeMessage = "It is afternoon!";
    } else {
        timeMessage = "It is evening!";
    }

    document.getElementById("timeInfo").innerHTML = timeMessage;
}

// A function to check if a number is even or odd
function checkEvenOdd() {
    var userInput = document.getElementById("userInput").value;
    var feedback;

    if (userInput % 2 === 0) {
        feedback = "You entered an even number!";
    } else {
        feedback = "You entered an odd number!";
    }

    document.getElementById("feedback").innerHTML = feedback;
}
