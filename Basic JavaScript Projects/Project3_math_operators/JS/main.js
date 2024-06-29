function addition() { // Defining and naming the addition function
    var add = 5 + 10;
    document.getElementById("Add").innerHTML = "5 + 10 = " + add; // Print the result in HTML
}

function subtraction() { // Defining and naming the subtraction function
    var sub = 10 - 5;
    document.getElementById("Sub").innerHTML = "10 - 5 = " + sub; // Print the result in HTML
}

function multiplication() { // Defining and naming the multiplication function
    var mult = 6 * 8;
    document.getElementById("Mult").innerHTML = "6 * 8 = " + mult; // Print the result in HTML
}

function division() { // Defining and naming the division function
    var divide = 48 / 6;
    document.getElementById("Div").innerHTML = "48 / 6 = " + divide; // Print the result in HTML
}

function random() { // Defining and naming the random function
    document.getElementById("Ran").innerHTML = Math.random() * 7; // Print the result in HTML
}

function modulus_operator() { // Defining and naming the modulus operator function
    var modulus = 25 % 6;
    document.getElementById("Mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus; // Print the result in HTML
}

function Increment() { // Defining and naming the increment function
    var value = document.getElementById("IncrementText").innerHTML; // Saves the text of the HTML element to a variable
    value++; // Add one to the value
    document.getElementById("IncrementText").innerHTML = value; // Print the result in HTML
}

function Decrement() { // Defining and naming the decrement function
    var value = document.getElementById("DecrementText").innerHTML; // Saves the text of the HTML element to a variable
    value--; // Subtract one from the value
    document.getElementById("DecrementText").innerHTML = value; // Print the result in HTML
}

// Function to demonstrate a Math object method
function mathObjectMethod() {
    var number = -7.5;
    var absoluteValue = Math.abs(number);
    document.getElementById("MathMethod").innerHTML = "The absolute value of " + number + " is " + absoluteValue;
}
