# GitHub Issues + Projects - Setup Commands

**Repository:** `drswobodziczka/lifegame`

**Note:** If you run these commands from inside the repository directory, you can omit the `-R` parameter. The commands below include explicit `-R drswobodziczka/lifegame` for clarity and to work from any directory.

## 1. Create Labels

```bash
gh label create "backlog" --color "d4c5f9" --description "Tasks in backlog" -R drswobodziczka/lifegame
gh label create "next" --color "fbca04" --description "Next tasks to work on" -R drswobodziczka/lifegame
gh label create "in-progress" --color "0e8a16" --description "Currently working on" -R drswobodziczka/lifegame
gh label create "done" --color "1d76db" --description "Completed tasks" -R drswobodziczka/lifegame
gh label create "bug" --color "d73a4a" --description "Bug fixes" -R drswobodziczka/lifegame
gh label create "feature" --color "a2eeef" --description "New features" -R drswobodziczka/lifegame
gh label create "documentation" --color "0075ca" --description "Documentation tasks" -R drswobodziczka/lifegame
gh label create "testing" --color "f9d0c4" --description "Testing tasks" -R drswobodziczka/lifegame
```

## 2. Create Project Board

```bash
# Create project owned by user drswobodziczka
gh project create --title "Game of Life Backlog" --owner drswobodziczka

# Note: Custom columns (Next, In Progress) must be configured via Web UI:
# https://github.com/drswobodziczka/lifegame/projects
```

## 3. Create Issues

```bash
# Feature: API endpoints
gh issue create --title "Add API endpoint to get game state" --label "feature,next" --body "Create GET /api/game/state endpoint that returns current game state as JSON" -R drswobodziczka/lifegame

gh issue create --title "Add API endpoint to advance game" --label "feature,next" --body "Create POST /api/game/step endpoint with parameter for number of steps" -R drswobodziczka/lifegame

gh issue create --title "Add API endpoint to set custom patterns" --label "feature,next" --body "Create POST /api/game/pattern endpoint to place patterns on the grid" -R drswobodziczka/lifegame

# Testing
gh issue create --title "Setup Jest testing framework" --label "testing,backlog" --body "Install Jest, configure package.json, add first test for gameState.js" -R drswobodziczka/lifegame

gh issue create --title "Add unit tests for game logic" --label "testing,backlog" --body "Write tests for step(), setPattern(), and neighbor calculation" -R drswobodziczka/lifegame

# Features
gh issue create --title "Add input validation for patterns" --label "feature,backlog" --body "Validate coordinates in setPattern(), return errors for invalid input" -R drswobodziczka/lifegame

gh issue create --title "Add WebSocket support for real-time updates" --label "feature,backlog" --body "Implement WebSocket connection for live game state updates" -R drswobodziczka/lifegame

gh issue create --title "Add game statistics endpoint" --label "feature,backlog" --body "Return stats: living cells, generations, grid size" -R drswobodziczka/lifegame

gh issue create --title "Add configurable grid size" --label "feature,backlog" --body "Allow custom grid dimensions instead of fixed 50x50" -R drswobodziczka/lifegame

# Documentation
gh issue create --title "Add API documentation" --label "documentation,backlog" --body "Document all endpoints with request/response examples" -R drswobodziczka/lifegame

gh issue create --title "Add architecture diagram" --label "documentation,backlog" --body "Create diagram showing dual server architecture" -R drswobodziczka/lifegame
```

## 4. Add Issues to Project (optional)

```bash
# List your projects to get PROJECT_NUMBER
gh project list --owner drswobodziczka

# Add issue to project (replace PROJECT_NUMBER and ISSUE_NUMBER)
gh project item-add PROJECT_NUMBER --owner drswobodziczka --url https://github.com/drswobodziczka/lifegame/issues/ISSUE_NUMBER
```

## 5. GitHub CLI Cheat Sheet

### List Projects

```bash
# List all projects for user drswobodziczka
gh project list --owner drswobodziczka

# List projects with more details (JSON format)
gh project list --owner drswobodziczka --format json
```

### List Issues

```bash
# List all issues in the repository
gh issue list -R drswobodziczka/lifegame

# List issues with specific label
gh issue list --label "feature" -R drswobodziczka/lifegame

# List issues with specific state
gh issue list --state open -R drswobodziczka/lifegame
gh issue list --state closed -R drswobodziczka/lifegame

# List issues assigned to you
gh issue list --assignee @me -R drswobodziczka/lifegame

# List issues in JSON format
gh issue list -R drswobodziczka/lifegame --format json
```

### List Labels

```bash
# List all labels in the repository
gh label list -R drswobodziczka/lifegame

# List labels in JSON format
gh label list -R drswobodziczka/lifegame --format json
```

### Link Issue to Project

```bash
# First, get your project number
gh project list --owner drswobodziczka

# Then, add issue to project (replace PROJECT_NUMBER and ISSUE_NUMBER)
gh project item-add PROJECT_NUMBER --owner drswobodziczka --url https://github.com/drswobodziczka/lifegame/issues/ISSUE_NUMBER

# Example: Add issue #5 to project 1
gh project item-add 1 --owner drswobodziczka --url https://github.com/drswobodziczka/lifegame/issues/5
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
gh label create "backlog" --color "d4c5f9" --description "Tasks in backlog" -R drswobodziczka/lifegame
gh label create "next" --color "fbca04" --description "Next tasks to work on" -R drswobodziczka/lifegame
gh label create "in-progress" --color "0e8a16" --description "Currently working on" -R drswobodziczka/lifegame
gh label create "done" --color "1d76db" --description "Completed tasks" -R drswobodziczka/lifegame
gh label create "bug" --color "d73a4a" --description "Bug fixes" -R drswobodziczka/lifegame
gh label create "feature" --color "a2eeef" --description "New features" -R drswobodziczka/lifegame
gh label create "documentation" --color "0075ca" --description "Documentation tasks" -R drswobodziczka/lifegame
gh label create "testing" --color "f9d0c4" --description "Testing tasks" -R drswobodziczka/lifegame

# Project
gh project create --title "Game of Life Backlog" --owner drswobodziczka

# Issues - Features
gh issue create --title "Add API endpoint to get game state" --label "feature,next" --body "Create GET /api/game/state endpoint that returns current game state as JSON" -R drswobodziczka/lifegame
gh issue create --title "Add API endpoint to advance game" --label "feature,next" --body "Create POST /api/game/step endpoint with parameter for number of steps" -R drswobodziczka/lifegame
gh issue create --title "Add API endpoint to set custom patterns" --label "feature,next" --body "Create POST /api/game/pattern endpoint to place patterns on the grid" -R drswobodziczka/lifegame
gh issue create --title "Add WebSocket support for real-time updates" --label "feature,backlog" --body "Implement WebSocket connection for live game state updates" -R drswobodziczka/lifegame
gh issue create --title "Add game statistics endpoint" --label "feature,backlog" --body "Return stats: living cells, generations, grid size" -R drswobodziczka/lifegame
gh issue create --title "Add configurable grid size" --label "feature,backlog" --body "Allow custom grid dimensions instead of fixed 50x50" -R drswobodziczka/lifegame
gh issue create --title "Add input validation for patterns" --label "feature,backlog" --body "Validate coordinates in setPattern(), return errors for invalid input" -R drswobodziczka/lifegame

# Issues - Testing
gh issue create --title "Setup Jest testing framework" --label "testing,backlog" --body "Install Jest, configure package.json, add first test for gameState.js" -R drswobodziczka/lifegame
gh issue create --title "Add unit tests for game logic" --label "testing,backlog" --body "Write tests for step(), setPattern(), and neighbor calculation" -R drswobodziczka/lifegame

# Issues - Documentation
gh issue create --title "Add API documentation" --label "documentation,backlog" --body "Document all endpoints with request/response examples" -R drswobodziczka/lifegame
gh issue create --title "Add architecture diagram" --label "documentation,backlog" --body "Create diagram showing dual server architecture" -R drswobodziczka/lifegame

echo "✅ Done! Now configure project columns at: https://github.com/drswobodziczka/lifegame/projects"
```
