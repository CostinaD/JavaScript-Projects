// Variable with a Boolean data type
var x = false;

// Printing the data type of the variable x
document.write(typeof x);
document.write("<br>");

// An expression combining a string and a number
document.write("20" + 5);
document.write("<br>");

// Utilizing the == operator
document.write(8 == 8);
document.write("<br>");

// Utilizing the === operator
x = 2;
y = 2;
document.write(x === y);
document.write("<br>");

// Utilizing the > and && operators
document.write(15 > 10 && 20 > 15);
document.write("<br>");

// Utilizing the < and || operators
document.write(5 < 3 || 8 < 7);
document.write("<br>");

// Utilizing the ! operator
function not_Function() {
    document.getElementById("Not").innerHTML = !(3 > 5);
}
