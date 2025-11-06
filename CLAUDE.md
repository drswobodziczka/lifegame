# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development Commands
- `node server.js` - Start the main Express API server (port 3000)
- `node demo.js` - Run the Game of Life simulation demo
- `cd my-express-app && npm start` - Start the Express view app
- `cd my-express-app && npm run dev` - Start the Express view app with nodemon

### No Test Suite
Currently no test framework is configured. The package.json test script outputs an error message.

## Architecture

This is a Conway's Game of Life implementation with dual server architecture:

### Core Game Engine (`/game/`)
- `gameState.js` - Core Game of Life logic with 50x50 grid
  - Manages game state, step progression, and pattern placement
  - Uses double buffering for efficient computation
  - Exports: `getState()`, `step()`, `reset()`, `setPattern()`, `ROWS`, `COLS`
- `patterns.js` - Predefined patterns (glider, blinker, block, beacon, toad, pulsar, gosperGliderGun)

### Main API Server (`server.js`)
- Express server with health check and error testing endpoints
- Uses `errorHandler.js` middleware for centralized error handling
- Port: 3000 (configurable via PORT env var)

### Secondary Express App (`/my-express-app/`)
- Traditional Express app with EJS views
- Separate package.json with different Express version (4.x vs 5.x in main)
- Standard Express structure with routes, views, and static assets

### Demo Application (`demo.js`)
- Demonstrates Game of Life patterns with console output
- Shows glider movement and blinker oscillation
- Uses visual symbols (● for alive, ○ for dead)

## Key Implementation Details

- Game grid is 50x50 fixed size
- Uses efficient neighbor counting algorithm
- Double buffering prevents state corruption during updates
- Pattern placement includes bounds checking and validation
- Two separate Express servers can run independently