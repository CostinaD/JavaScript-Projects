// Define a function that concatenates a string using the += operator
function concatenateString() {
    // Initialize a sentence
    var sentence = "I am learning";
    // Concatenate additional text to the sentence
    sentence += " a lot from this course!";
    // Display the concatenated sentence in the HTML element with the id 'displayText'
    document.getElementById("displayText").innerHTML = sentence;
}

// Another example function to demonstrate multiple functions
function anotherFunction() {
    var message = "This is another function.";
    document.getElementById("anotherText").innerHTML = message;
}
