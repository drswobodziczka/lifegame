# GitHub Issues + Projects - Setup Commands

## 1. Create Labels

```bash
gh label create "backlog" --color "d4c5f9" --description "Tasks in backlog"
gh label create "next" --color "fbca04" --description "Next tasks to work on"
gh label create "in-progress" --color "0e8a16" --description "Currently working on"
gh label create "done" --color "1d76db" --description "Completed tasks"
gh label create "bug" --color "d73a4a" --description "Bug fixes"
gh label create "feature" --color "a2eeef" --description "New features"
gh label create "documentation" --color "0075ca" --description "Documentation tasks"
gh label create "testing" --color "f9d0c4" --description "Testing tasks"
```

## 2. Create Project Board

```bash
# Create project
gh project create --title "Game of Life Backlog" --format board

# Note: Custom columns (Next, In Progress) must be configured via Web UI:
# https://github.com/drswobodziczka/lifegame/projects
```

## 3. Create Issues

```bash
# Feature: API endpoints
gh issue create --title "Add API endpoint to get game state" --label "feature,next" --body "Create GET /api/game/state endpoint that returns current game state as JSON"

gh issue create --title "Add API endpoint to advance game" --label "feature,next" --body "Create POST /api/game/step endpoint with parameter for number of steps"

gh issue create --title "Add API endpoint to set custom patterns" --label "feature,next" --body "Create POST /api/game/pattern endpoint to place patterns on the grid"

# Testing
gh issue create --title "Setup Jest testing framework" --label "testing,backlog" --body "Install Jest, configure package.json, add first test for gameState.js"

gh issue create --title "Add unit tests for game logic" --label "testing,backlog" --body "Write tests for step(), setPattern(), and neighbor calculation"

# Features
gh issue create --title "Add input validation for patterns" --label "feature,backlog" --body "Validate coordinates in setPattern(), return errors for invalid input"

gh issue create --title "Add WebSocket support for real-time updates" --label "feature,backlog" --body "Implement WebSocket connection for live game state updates"

gh issue create --title "Add game statistics endpoint" --label "feature,backlog" --body "Return stats: living cells, generations, grid size"

gh issue create --title "Add configurable grid size" --label "feature,backlog" --body "Allow custom grid dimensions instead of fixed 50x50"

# Documentation
gh issue create --title "Add API documentation" --label "documentation,backlog" --body "Document all endpoints with request/response examples"

gh issue create --title "Add architecture diagram" --label "documentation,backlog" --body "Create diagram showing dual server architecture"
```

## 4. Add Issues to Project (optional)

```bash
# List your projects to get PROJECT_NUMBER
gh project list

# Add issue to project (replace PROJECT_NUMBER and ISSUE_NUMBER)
gh project item-add PROJECT_NUMBER --owner drswobodziczka --url https://github.com/drswobodziczka/lifegame/issues/ISSUE_NUMBER
```

## Workflow

1. **Create labels** - run all label commands
2. **Create project** - run project create command
3. **Configure columns** - go to Web UI and add: Backlog, Next, In Progress, Done
4. **Create issues** - run issue create commands
5. **Optional:** Add issues to project board

## Quick Start Script

To run all at once, copy these commands to terminal:

```bash
# Labels
gh label create "backlog" --color "d4c5f9" --description "Tasks in backlog"
gh label create "next" --color "fbca04" --description "Next tasks to work on"
gh label create "in-progress" --color "0e8a16" --description "Currently working on"
gh label create "done" --color "1d76db" --description "Completed tasks"
gh label create "bug" --color "d73a4a" --description "Bug fixes"
gh label create "feature" --color "a2eeef" --description "New features"
gh label create "documentation" --color "0075ca" --description "Documentation tasks"
gh label create "testing" --color "f9d0c4" --description "Testing tasks"

# Project
gh project create --title "Game of Life Backlog" --format board

# Issues - Features
gh issue create --title "Add API endpoint to get game state" --label "feature,next" --body "Create GET /api/game/state endpoint that returns current game state as JSON"
gh issue create --title "Add API endpoint to advance game" --label "feature,next" --body "Create POST /api/game/step endpoint with parameter for number of steps"
gh issue create --title "Add API endpoint to set custom patterns" --label "feature,next" --body "Create POST /api/game/pattern endpoint to place patterns on the grid"
gh issue create --title "Add WebSocket support for real-time updates" --label "feature,backlog" --body "Implement WebSocket connection for live game state updates"
gh issue create --title "Add game statistics endpoint" --label "feature,backlog" --body "Return stats: living cells, generations, grid size"
gh issue create --title "Add configurable grid size" --label "feature,backlog" --body "Allow custom grid dimensions instead of fixed 50x50"
gh issue create --title "Add input validation for patterns" --label "feature,backlog" --body "Validate coordinates in setPattern(), return errors for invalid input"

# Issues - Testing
gh issue create --title "Setup Jest testing framework" --label "testing,backlog" --body "Install Jest, configure package.json, add first test for gameState.js"
gh issue create --title "Add unit tests for game logic" --label "testing,backlog" --body "Write tests for step(), setPattern(), and neighbor calculation"

# Issues - Documentation
gh issue create --title "Add API documentation" --label "documentation,backlog" --body "Document all endpoints with request/response examples"
gh issue create --title "Add architecture diagram" --label "documentation,backlog" --body "Create diagram showing dual server architecture"

echo "✅ Done! Now configure project columns at: https://github.com/drswobodziczka/lifegame/projects"
```
