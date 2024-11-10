# Tic-Tac-Toe Game

A browser-based Tic-Tac-Toe game implementation using vanilla JavaScript with a focus on modular design patterns.

## Features

- Two-player gameplay
- Custom player names
- Interactive game board
- Game state tracking
- Win/Draw detection
- Restart game functionality

## Setup Instructions

### 1. File Structure
Create a new directory for your project and create the following files:
```
tic-tac-toe/
  ├── index.html
  ├── styles.css
  ├── gameBoard.js
  ├── player.js
  ├── gameController.js
  └── displayController.js
```

### 2. Code Files
1. Copy the HTML code into `index.html`
2. Copy the CSS code into `styles.css`
3. Copy the JavaScript modules into their respective files:
   - Game board logic → `gameBoard.js`
   - Player factory → `player.js`
   - Game controller → `gameController.js`
   - Display controller → `displayController.js`
4. Or clone the repository

### 3. Running the Game
- Open `index.html` in a web browser
- For local development, you can use a local server like Live Server in VS Code
- The game should work in any modern web browser

## How to Play

1. **Starting the Game**
   - Enter names for Player 1 and Player 2 in the input fields
   - Click the "Start Game" button to begin
   - If no names are entered, defaults "Player 1" and "Player 2" will be used

2. **Gameplay**
   - Player 1 uses "X" marker
   - Player 2 uses "O" marker
   - Players take turns clicking empty cells to place their markers
   - The current player's turn is displayed above the board

3. **Game Rules**
   - Players must place their marker in an empty cell
   - Markers cannot be placed on already occupied cells
   - First player to get three markers in a row (horizontal, vertical, or diagonal) wins
   - If all cells are filled and no winner is determined, the game is a tie

4. **Winning the Game**
   - The game automatically detects when a player wins
   - A message will display announcing the winner
   - To start a new game, click the "Start Game" button again

## Game Structure

The game is built using modular JavaScript with four main components:

1. **Gameboard Module** (`gameBoard.js`)
   - Manages the game board state
   - Handles move validation
   - Checks for win conditions

2. **Player Factory** (`player.js`)
   - Creates player objects
   - Manages player names and markers

3. **Game Controller** (`gameController.js`)
   - Controls game flow
   - Manages player turns
   - Handles game state

4. **Display Controller** (`displayController.js`)
   - Handles DOM manipulation
   - Manages user interface
   - Updates game display

## Troubleshooting

If the game doesn't start:
1. Check if all files are in the same directory
2. Verify all file names match the script tags in `index.html`
3. Open browser console (F12) to check for any JavaScript errors
4. Ensure all files are properly saved with the correct extensions

## Browser Compatibility

The game is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and make improvements. Some potential enhancements could be:
- Adding an AI opponent
- Implementing a score counter
- Adding animations
- Supporting larger grid sizes
- Adding a theme selector

## License

This project is open source and available under the MIT License.