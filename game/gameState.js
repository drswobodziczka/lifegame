// Conway's Game of Life - 50x50 Game Engine

const ROWS = 50;
const COLS = 50;

// Initialize grid and buffer
let grid = Array.from({length: ROWS}, () => Array(COLS).fill(0));
let buffer = Array.from({length: ROWS}, () => Array(COLS).fill(0));

/**
 * Count living neighbors for a cell at position (row, col)
 * @param {number} row - Row index
 * @param {number} col - Column index
 * @returns {number} Number of living neighbors
 */
function countNeighbors(row, col) {
    let count = 0;
    
    // Check all 8 adjacent cells
    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            // Skip the center cell (the cell itself)
            if (dr === 0 && dc === 0) continue;
            
            const newRow = row + dr;
            const newCol = col + dc;
            
            // Check bounds and count living neighbors
            if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS) {
                count += grid[newRow][newCol];
            }
        }
    }
    
    return count;
}

/**
 * Get the current state of the grid
 * @returns {number[][]} Copy of the current grid state
 */
function getState() {
    return grid.map(row => [...row]);
}

/**
 * Advance the game by one step using Conway's Game of Life rules
 */
function step() {
    // Calculate next state and write to buffer
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const neighbors = countNeighbors(row, col);
            const currentCell = grid[row][col];
            
            // Conway's Game of Life rules:
            // 1. Any live cell with 2-3 neighbors survives
            // 2. Any dead cell with exactly 3 neighbors becomes alive
            // 3. All other cells die or stay dead
            if (currentCell === 1) {
                // Live cell
                buffer[row][col] = (neighbors === 2 || neighbors === 3) ? 1 : 0;
            } else {
                // Dead cell
                buffer[row][col] = (neighbors === 3) ? 1 : 0;
            }
        }
    }
    
    // Swap grid and buffer references
    const temp = grid;
    grid = buffer;
    buffer = temp;
}

/**
 * Reset the grid to all dead cells
 */
function reset() {
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            grid[row][col] = 0;
        }
    }
}

/**
 * Set a pattern on the grid
 * @param {number[][]} patternArray - 2D array of 1s and 0s representing the pattern
 * @param {number} startRow - Starting row position (default: 0)
 * @param {number} startCol - Starting column position (default: 0)
 */
function setPattern(patternArray, startRow = 0, startCol = 0) {
    if (!Array.isArray(patternArray) || patternArray.length === 0) {
        throw new Error('Pattern must be a non-empty 2D array');
    }
    
    const patternRows = patternArray.length;
    const patternCols = patternArray[0].length;
    
    // Validate pattern size
    if (patternRows > ROWS || patternCols > COLS) {
        throw new Error(`Pattern size (${patternRows}x${patternCols}) exceeds grid size (${ROWS}x${COLS})`);
    }
    
    // Validate placement bounds
    if (startRow + patternRows > ROWS || startCol + patternCols > COLS) {
        throw new Error('Pattern placement exceeds grid boundaries');
    }
    
    // Place the pattern on the grid
    for (let row = 0; row < patternRows; row++) {
        for (let col = 0; col < patternCols; col++) {
            const value = patternArray[row][col];
            if (value === 1 || value === 0) {
                grid[startRow + row][startCol + col] = value;
            }
        }
    }
}

// Export singleton object
module.exports = {
    ROWS,
    COLS,
    getState,
    step,
    reset,
    setPattern
};