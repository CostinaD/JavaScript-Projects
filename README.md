# JavaScript Projects
 (Pitman) - This repository contains JavaScript assignments and projects

These are some small projects I made using JavaScript.

## Projects

- [Pizza Menu](#pizza-menu)
- [Tic-Tac-Toe Game](#tic-tac-toe-game)
- [Calculator](#calculator)

### Pizza Menu

This project is a menu used to order pizza with a various selection of toppings. It takes the input information and calculates a price for the order.

#### Features:
- Topping selection with real-time price updates
- Form validation to ensure all required fields are filled
- Order summary display

#### Functions Used:
- `calculatePrice(toppings)`: Calculates the total price based on selected toppings.
- `validateOrder(form)`: Validates the user's order form inputs.
- `submitOrder(orderDetails)`: Processes and submits the order.
- `addTopping(topping)`: Adds a selected topping to the pizza.
- `removeTopping(topping)`: Removes a selected topping from the pizza.
- `updateOrderSummary(order)`: Updates the displayed summary of the order.

### Tic-Tac-Toe Game

The classic game of tic-tac-toe. It randomly rolls dice to select which of the two players goes first and then users are off playing the classic game. Users can decide which token each player wants to use and the winner is celebrated with music and flashing lights.

#### Features:
- Two-player game functionality
- Dice roll to determine the starting player
- Win detection and celebration

#### Functions Used:
- `rollDice()`: Rolls a dice to determine which player starts the game.
- `makeMove(player, position)`: Records a player's move on the board.
- `checkWinner(board)`: Checks the board for a winning combination.
- `resetGame()`: Resets the game board for a new game.
- `switchPlayer()`: Switches the turn to the other player.
- `highlightWinningCombination(combination)`: Highlights the winning combination on the board.

### Calculator

A basic 4-function calculator. Users can add, subtract, multiply, and divide on a sleek web version of a calculator.

#### Features:
- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Clear display functionality
- Responsive design for different screen sizes

#### Functions Used:
- `add(a, b)`: Adds two numbers.
- `subtract(a, b)`: Subtracts the second number from the first.
- `multiply(a, b)`: Multiplies two numbers.
- `divide(a, b)`: Divides the first number by the second.
- `clearDisplay()`: Clears the calculator display.
- `updateDisplay(value)`: Updates the calculator display with the given value.
- `handleInput(input)`: Processes user input for the calculator.
