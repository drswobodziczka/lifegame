# Conway's Game of Life - UI Design Specification

## Table of Contents
1. [Overview](#overview)
2. [Layout & Structure](#layout--structure)
3. [Core Components Design](#core-components-design)
4. [Visual Design Specifications](#visual-design-specifications)
5. [User Experience Flow](#user-experience-flow)
6. [Technical Implementation Requirements](#technical-implementation-requirements)
7. [Component Hierarchy](#component-hierarchy)
8. [Data Requirements](#data-requirements)

## Overview

This specification defines the user interface for a Conway's Game of Life web application with real-time simulation capabilities. The design prioritizes clarity, performance, and ease of use while maintaining an elegant, modern aesthetic.

**Key Requirements:**
- Desktop-first responsive design using Tailwind CSS
- Real-time 50x50 grid visualization
- Intuitive controls for simulation management
- Pattern library integration
- Performance optimized for smooth animation

## Layout & Structure

### Overall Page Layout
```
┌─────────────────────────────────────────────────────────────────┐
│                     HEADER (Game Title)                        │
├─────────────────────────────────────────────────────────────────┤
│  SIDEBAR                │           MAIN GRID AREA             │
│  ┌─────────────────┐   │  ┌─────────────────────────────────┐ │
│  │ Control Panel   │   │  │                                 │ │
│  │ - Play/Pause    │   │  │        50x50 Game Grid          │ │
│  │ - Reset/Step    │   │  │      (Primary Focus Area)      │ │
│  │ - Speed Control │   │  │                                 │ │
│  │ - Pattern Sel.  │   │  │                                 │ │
│  │ - Statistics    │   │  │                                 │ │
│  └─────────────────┘   │  └─────────────────────────────────┘ │
│                         │                                     │
└─────────────────────────────────────────────────────────────────┘
```

### Layout Specifications
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Grid Layout**: CSS Grid with sidebar (320px fixed) and main area (flexible)
- **Sidebar**: Fixed width, scrollable if content overflows
- **Main Grid**: Square aspect ratio maintained, centered in available space
- **Responsive**: Sidebar collapses to overlay on screens < 1024px

## Core Components Design

### 1. Game Grid Visualization (50x50)

**Purpose**: Primary visual representation of the cellular automaton

**Visual Structure**:
```
Grid Container (Square)
├── 50 Rows
    ├── 50 Cells per Row
    │   ├── Cell (Alive): Dark filled square
    │   └── Cell (Dead): Light outlined square
```

**Specifications**:
- **Container**: `aspect-square bg-white border-2 border-gray-300 rounded-lg shadow-lg`
- **Grid**: CSS Grid with `grid-template-columns: repeat(50, 1fr)`
- **Cell Size**: Calculated dynamically based on container size
- **Cell Styling**:
  - Alive: `bg-blue-600 border border-blue-700`
  - Dead: `bg-gray-50 border border-gray-200`
  - Hover: `hover:bg-blue-200 cursor-pointer`
- **Interactive**: Click to toggle cell state (when paused)

### 2. Control Panel

**Location**: Left sidebar, organized in logical sections

#### 2.1 Simulation Controls
```
┌─────────────────────┐
│ Simulation Controls │
├─────────────────────┤
│ [Play] [Pause]      │
│ [Step] [Reset]      │
└─────────────────────┘
```

**Button Specifications**:
- **Play**: `bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md`
- **Pause**: `bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md`
- **Step**: `bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md`
- **Reset**: `bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md`
- **Layout**: `flex flex-wrap gap-2 justify-center`

#### 2.2 Speed Control
```
┌─────────────────────┐
│ Speed Control       │
├─────────────────────┤
│ Speed: [====|---] 5 │
│ 1x    5x    10x     │
└─────────────────────┘
```

**Specifications**:
- **Container**: `bg-gray-50 p-4 rounded-lg border`
- **Slider**: HTML5 range input with custom styling
- **Range**: 1-10 (representing steps per second)
- **Display**: Current speed value prominently shown
- **Presets**: Quick buttons for 1x, 5x, 10x speeds

#### 2.3 Pattern Selector
```
┌─────────────────────┐
│ Pattern Library     │
├─────────────────────┤
│ [Dropdown ▼]        │
│ ┌─ Glider           │
│ ├─ Blinker          │
│ ├─ Block            │
│ ├─ Beacon           │
│ ├─ Toad             │
│ ├─ Pulsar           │
│ └─ Gosper Gun       │
│                     │
│ [Place Pattern]     │
└─────────────────────┘
```

**Specifications**:
- **Dropdown**: Custom styled select with pattern previews
- **Pattern Preview**: Small 10x10 grid showing pattern shape
- **Place Button**: `bg-purple-600 hover:bg-purple-700 text-white w-full py-2 rounded-md`
- **Placement**: Click mode activated after selection

#### 2.4 Statistics Display
```
┌─────────────────────┐
│ Statistics          │
├─────────────────────┤
│ Generation: 1,247   │
│ Live Cells: 89      │
│ Population: 3.6%    │
│ Runtime: 02:34      │
└─────────────────────┘
```

**Specifications**:
- **Container**: `bg-gray-50 p-4 rounded-lg border space-y-2`
- **Text**: `text-sm font-mono text-gray-700`
- **Numbers**: `font-bold text-gray-900`
- **Updates**: Real-time during simulation

### 3. Header Section

```
┌─────────────────────────────────────────────────────────────────┐
│                    Conway's Game of Life                        │
│              Interactive Cellular Automaton                     │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications**:
- **Container**: `bg-gradient-to-r from-blue-600 to-purple-700 text-white py-6`
- **Title**: `text-3xl font-bold text-center`
- **Subtitle**: `text-lg text-center text-blue-100 mt-2`

## Visual Design Specifications

### Color Scheme

**Primary Colors**:
- **Background**: `bg-gray-100` (page background)
- **Cards/Panels**: `bg-white` with `shadow-lg`
- **Primary Accent**: Blue (`blue-600`, `blue-700`)
- **Secondary Accent**: Purple (`purple-600`, `purple-700`)

**Cell Colors**:
- **Alive**: `bg-blue-600` (primary) with `border-blue-700`
- **Dead**: `bg-gray-50` with `border-gray-200`
- **Hover**: `bg-blue-200` (when interactive)

**Button Colors**:
- **Play**: Green (`green-600`, `green-700`)
- **Pause**: Yellow (`yellow-600`, `yellow-700`)
- **Step**: Blue (`blue-600`, `blue-700`)
- **Reset**: Red (`red-600`, `red-700`)
- **Action**: Purple (`purple-600`, `purple-700`)

### Typography

**Font Stack**: System fonts via Tailwind's default
- **Headings**: `font-bold text-gray-900`
- **Body Text**: `text-gray-700`
- **Monospace**: `font-mono` for statistics and numbers
- **Sizes**:
  - Title: `text-3xl`
  - Section Headers: `text-lg font-semibold`
  - Body: `text-sm`
  - Small: `text-xs`

### Spacing & Proportions

**Grid Spacing**:
- **Cell Gap**: `gap-px` (1px between cells)
- **Panel Padding**: `p-4` (16px)
- **Section Spacing**: `space-y-4` (16px vertical)
- **Button Spacing**: `gap-2` (8px)

**Component Sizing**:
- **Sidebar Width**: `w-80` (320px)
- **Cell Min Size**: 8px × 8px (calculated dynamically)
- **Button Height**: `py-2` (standard button height)

### Responsive Breakpoints

**Desktop First Approach**:
- **Large Desktop**: `lg:` (1024px+) - Full sidebar layout
- **Medium Desktop**: `md:` (768px-1023px) - Compressed sidebar
- **Tablet/Mobile**: `sm:` (<768px) - Overlay sidebar, simplified controls

## User Experience Flow

### Initial Loading State
1. **Grid**: Empty (all cells dead)
2. **Controls**: Play disabled, other controls enabled
3. **Statistics**: All zeros
4. **Pattern**: None selected
5. **Speed**: Default to 5 steps/second

### Pattern Placement Flow
1. User selects pattern from dropdown
2. Pattern preview appears in dropdown
3. "Place Pattern" button becomes active
4. Click button to enter placement mode
5. Cursor changes to crosshair
6. Click on grid to place pattern
7. Placement mode exits automatically
8. Grid updates with new pattern

### Simulation Flow
1. **Start**: User clicks Play button
2. **Running**: 
   - Grid updates at selected speed
   - Statistics update in real-time
   - Play button changes to Pause
3. **Control**: User can adjust speed during simulation
4. **Pause**: Simulation stops, allows grid editing
5. **Reset**: Returns to empty grid, stops simulation

### Interactive States
- **Grid Editing**: Available when paused - click cells to toggle
- **Speed Control**: Always available during simulation
- **Pattern Placement**: Modal interaction requiring confirmation
- **Statistics**: Read-only, automatically updated

## Technical Implementation Requirements

### Component Data Props

#### GameGrid Component
```typescript
interface GameGridProps {
  grid: number[][]; // 50x50 array of 0s and 1s
  isRunning: boolean;
  onCellClick: (row: number, col: number) => void;
  className?: string;
}
```

#### ControlPanel Component
```typescript
interface ControlPanelProps {
  isRunning: boolean;
  speed: number;
  generation: number;
  liveCells: number;
  runtime: number;
  selectedPattern: string | null;
  onPlay: () => void;
  onPause: () => void;
  onStep: () => void;
  onReset: () => void;
  onSpeedChange: (speed: number) => void;
  onPatternSelect: (pattern: string) => void;
  onPatternPlace: () => void;
}
```

### WebSocket Data Format

**Grid Update Message**:
```json
{
  "type": "grid_update",
  "data": {
    "grid": [[0,1,0,...], [1,0,1,...], ...], // 50x50 array
    "generation": 1247,
    "liveCells": 89,
    "runtime": 154000 // milliseconds
  }
}
```

**State Change Message**:
```json
{
  "type": "state_change",
  "data": {
    "isRunning": true,
    "speed": 5
  }
}
```

### Performance Optimizations

1. **Grid Rendering**: Use React.memo for individual cells
2. **Virtual Scrolling**: Not needed for 50x50 grid
3. **RAF Throttling**: Limit updates to 60fps max
4. **Diff-based Updates**: Only re-render changed cells
5. **Canvas Fallback**: Consider canvas for very high-speed simulations

### CSS Classes Summary

**Layout Classes**:
- Container: `max-w-7xl mx-auto px-4 grid grid-cols-[320px_1fr] gap-6`
- Sidebar: `bg-white rounded-lg shadow-lg p-6 space-y-6 h-fit`
- Main: `bg-white rounded-lg shadow-lg p-6`
- Grid: `aspect-square grid grid-cols-50 gap-px bg-gray-300 p-2 rounded-lg`

**Component Classes**:
- Cell (Dead): `bg-gray-50 border border-gray-200 hover:bg-blue-200 cursor-pointer`
- Cell (Alive): `bg-blue-600 border border-blue-700 hover:bg-blue-200 cursor-pointer`
- Button: `px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`
- Section: `bg-gray-50 rounded-lg border p-4 space-y-3`

## Component Hierarchy

```
App
├── Header
├── MainLayout
    ├── Sidebar
    │   ├── SimulationControls
    │   │   ├── PlayPauseButton
    │   │   ├── StepButton
    │   │   └── ResetButton
    │   ├── SpeedControl
    │   │   ├── SpeedSlider
    │   │   └── SpeedPresets
    │   ├── PatternSelector
    │   │   ├── PatternDropdown
    │   │   ├── PatternPreview
    │   │   └── PlacePatternButton
    │   └── Statistics
    │       ├── GenerationCounter
    │       ├── LiveCellsCounter
    │       ├── PopulationPercentage
    │       └── RuntimeDisplay
    └── MainContent
        └── GameGrid
            └── Cell (×2500)
```

## Data Requirements

### Application State
```typescript
interface AppState {
  // Game State
  grid: number[][]; // 50x50 grid
  isRunning: boolean;
  generation: number;
  speed: number; // steps per second (1-10)
  
  // UI State
  selectedPattern: string | null;
  isPlacingPattern: boolean;
  placementPosition: { row: number; col: number } | null;
  
  // Statistics
  liveCells: number;
  runtime: number; // milliseconds since start
  startTime: number | null;
}
```

### Pattern Data Structure
```typescript
interface Pattern {
  name: string;
  displayName: string;
  grid: number[][];
  description: string;
  category: 'still' | 'oscillator' | 'spaceship' | 'gun';
  period?: number; // for oscillators
}
```

### WebSocket Events
- `grid_update`: New grid state from server
- `state_change`: Simulation state changes
- `pattern_placed`: Confirmation of pattern placement
- `error`: Error messages from server

This specification provides a comprehensive foundation for implementing a polished, performant Conway's Game of Life web interface that balances functionality with aesthetic appeal.