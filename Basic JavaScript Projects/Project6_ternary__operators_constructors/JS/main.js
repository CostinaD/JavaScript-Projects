function Ride_Function() {
    var Height = document.getElementById("Height").value;
    var Can_ride = Height < 52 ? "You are too short " : "You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride";
}

//A constructor function utilizing "new" and "this" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Marius = new Vehicle("Toyota", "Camry", 2017, "Blue");
var Maria = new Vehicle("Mercedes", "S-Class", 2021, "Red");
var Gabi = new Vehicle("Ford", "Mustang", 2018, "Black");

//A function to display the results of the constructor in an HTML element
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Maria drives a " +
        Maria.Vehicle_Color +
        "-colored " +
        Maria.Vehicle_Model +
        " manufactured in " +
        Maria.Vehicle_Year;
}

//A nested function
function add_Strings() {
    var start_string = "Feeling";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("Overwhelmed");
    document.getElementById("Nested_Function").innerHTML = start_string;
}
