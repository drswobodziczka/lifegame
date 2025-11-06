# Next - Zadania w kolejce

## Do zrobienia w najbliższym czasie

### 1. API endpoint - get game state
**Priority:** High
**Estimate:** 30 min
- Dodać GET /api/game/state endpoint
- Zwrócić aktualny stan gry jako JSON
- Dodać do server.js

### 2. API endpoint - advance game
**Priority:** High
**Estimate:** 45 min
- Dodać POST /api/game/step endpoint
- Parametr: liczba kroków (domyślnie 1)
- Zwrócić nowy stan po wykonaniu kroków

### 3. Setup Jest testing
**Priority:** Medium
**Estimate:** 1h
- Zainstalować Jest
- Skonfigurować package.json
- Dodać pierwszy test dla gameState.js

### 4. Input validation for patterns
**Priority:** Medium
**Estimate:** 30 min
- Walidacja coordinates w setPattern()
- Zwracać błędy dla invalid input
- Dodać error messages
