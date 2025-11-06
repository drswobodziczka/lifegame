const { getState, step, reset, setPattern, ROWS, COLS } = require('./game/gameState');
const { glider, blinker, block, beacon, toad, pulsar } = require('./game/patterns');

console.log('=== Conway\'s Game of Life - Demo ===\n');
console.log(`Grid size: ${ROWS} × ${COLS}\n`);

// Reset grid
reset();

// Set a glider pattern in the middle of the grid
const startRow = Math.floor(ROWS / 2);
const startCol = Math.floor(COLS / 2);
setPattern(glider, startRow, startCol);

console.log('Initial state with glider pattern:');
printGrid(getState());

// Run simulation for 5 steps
for (let i = 1; i <= 5; i++) {
    step();
    console.log(`\nStep ${i}:`);
    printGrid(getState());
}

// Function to print a subset of the grid (around the glider)
function printGrid(grid) {
    const size = 10; // Show 10x10 area around center
    const centerRow = Math.floor(ROWS / 2);
    const centerCol = Math.floor(COLS / 2);
    
    const startRow = Math.max(0, centerRow - size/2);
    const endRow = Math.min(ROWS, centerRow + size/2);
    const startCol = Math.max(0, centerCol - size/2);
    const endCol = Math.min(COLS, centerCol + size/2);
    
    console.log('Grid view (● = alive, ○ = dead):');
    for (let row = startRow; row < endRow; row++) {
        let line = '';
        for (let col = startCol; col < endCol; col++) {
            line += grid[row][col] === 1 ? '● ' : '○ ';
        }
        console.log(line);
    }
}

console.log('\n=== Demo with different patterns ===\n');

// Demo with blinker
reset();
setPattern(blinker, 25, 25);
console.log('Blinker pattern (oscillates):');
for (let i = 0; i < 3; i++) {
    console.log(`\nBlinker step ${i}:`);
    printSmallGrid(getState(), 25, 25, 5);
    step();
}

// Function to print a small grid around specific coordinates
function printSmallGrid(grid, centerRow, centerCol, size) {
    const startRow = Math.max(0, Math.floor(centerRow - size/2));
    const endRow = Math.min(ROWS, Math.floor(centerRow + size/2) + 1);
    const startCol = Math.max(0, Math.floor(centerCol - size/2));
    const endCol = Math.min(COLS, Math.floor(centerCol + size/2) + 1);
    
    for (let row = startRow; row < endRow; row++) {
        let line = '';
        for (let col = startCol; col < endCol; col++) {
            // Add bounds checking as an extra safety measure
            if (row >= 0 && row < ROWS && col >= 0 && col < COLS && grid[row] && grid[row][col] !== undefined) {
                line += grid[row][col] === 1 ? '● ' : '○ ';
            } else {
                line += '○ '; // Default to dead cell if out of bounds
            }
        }
        console.log(line);
    }
}