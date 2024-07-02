// A function using a while loop
function Call_Loop() {
    var text = "";
    var i = 0;
    while (i < 10) {
        text += "The number is " + i + "<br>";
        i++;
    }
    document.getElementById("Loop").innerHTML = text;
}

// // Function using a for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = content;
}

// Function to display an array
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[1] + ".";
}

// Creating an object with the let keyword
function guitar() {
    let guitar = {
        make: "Fender",
        year: "2024",
        color: "blue",
    };
    document.getElementById("guitar").innerHTML = 
    "I have a " + guitar.year + " " + guitar.color + " " + guitar.make + ".";
}
