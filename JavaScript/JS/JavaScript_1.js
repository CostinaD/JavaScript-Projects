// JavaScript_1.js

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

// Get the canvas element by its ID
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// Draw a blue rectangle
context.fillStyle = 'blue';
context.fillRect(50, 50, 300, 300);

// Draw a red circle
context.beginPath();
context.arc(200, 200, 100, 0, 2 * Math.PI, false);
context.fillStyle = 'red';
context.fill();

// Draw a green line
context.beginPath();
context.moveTo(50, 50);
context.lineTo(350, 350);
context.strokeStyle = 'green';
context.lineWidth = 5;
context.stroke();
