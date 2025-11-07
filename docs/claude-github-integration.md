# Jak dodać asystenta Claude do GitHuba

Krótki przewodnik krok po kroku, jak zintegrować Claude AI z Twoim repozytorium GitHub.

## Wymagania

- Konto GitHub z prawami administratora do repozytorium
- Konto Anthropic (https://console.anthropic.com/)
- Klucz API od Anthropic

---

## Krok 1: Uzyskaj klucz API Anthropic

1. Przejdź na: https://console.anthropic.com/
2. Zaloguj się lub utwórz konto
3. Przejdź do **API Keys**
4. Kliknij **"Create Key"**
5. Skopiuj wygenerowany klucz (będzie potrzebny w kroku 3)

---

## Krok 2: Zainstaluj Claude GitHub App

1. Idź na: https://github.com/apps/claude
2. Kliknij **"Install"**
3. Wybierz repozytoria:
   - **All repositories** - dla wszystkich
   - **Only select repositories** - wybierz konkretne
4. Kliknij **"Install"** i potwierdź uprawnienia

---

## Krok 3: Dodaj klucz API jako Secret

1. Otwórz swoje repozytorium na GitHub
2. Idź do: **Settings** → **Secrets and variables** → **Actions**
3. Kliknij **"New repository secret"**
4. Wypełnij:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Secret:** wklej klucz API z kroku 1
5. Kliknij **"Add secret"**

---

## Krok 4: Utwórz GitHub Workflow

1. W repozytorium utwórz strukturę folderów: `.github/workflows/`
2. Utwórz plik: `.github/workflows/claude.yml`
3. Wklej poniższą konfigurację:

```yaml
name: Claude PR Assistant

on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]
  pull_request_review:
    types: [submitted]
  issues:
    types: [opened, assigned]

permissions:
  contents: write
  pull-requests: write
  issues: write
  id-token: write

jobs:
  claude:
    if: |
      (github.event_name == 'issue_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review' && contains(github.event.review.body, '@claude')) ||
      (github.event_name == 'issues' && contains(github.event.issue.body, '@claude'))

    runs-on: ubuntu-latest
    timeout-minutes: 30

    steps:
      - name: Run Claude Code Action
        uses: anthropics/claude-code-action@v1
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
```

4. Zapisz plik i zrób commit + push

---

## Jak używać

### Code Review
W komentarzu do Pull Requesta:
```
@claude review this PR
```

### Tworzenie opisu PR
```
@claude create a detailed description for this PR
```

### Poprawianie bugów
```
@claude fix the authentication bug
```

### Analiza Issue
```
@claude analyze this issue and suggest implementation
```

### Generowanie testów
```
@claude write unit tests for the new feature
```

---

## Opcjonalne: Konfiguracja CLAUDE.md

Możesz utworzyć plik `CLAUDE.md` w głównym katalogu repozytorium z instrukcjami dla Claude:

```markdown
# CLAUDE.md

## Code Style
- Use TypeScript
- Follow ESLint rules
- Write tests for all features

## Testing
- Run `npm test` before committing
- Maintain 80% code coverage
```

Claude będzie automatycznie respektował te zasady.

---

## Koszty

- **GitHub Actions:** Darmowe dla publicznych repo (2000 minut/miesiąc dla prywatnych)
- **Anthropic API:** Płatne według użycia (~$0.003 za 1000 tokenów)

---

## Linki

- Claude GitHub App: https://github.com/apps/claude
- Claude Code Action: https://github.com/anthropics/claude-code-action
- Anthropic Console: https://console.anthropic.com/
- Dokumentacja: https://docs.claude.com/

---

**Gotowe!** Teraz możesz używać `@claude` bezpośrednio w swoich Pull Requestach i Issues! 🚀
