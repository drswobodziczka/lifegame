# Claude Code Web - Ograniczenia i restrykcje

> Źródła:
> - https://code.claude.com/docs/en/sandboxing
> - https://www.anthropic.com/engineering/claude-code-sandboxing

## 🗂️ Ograniczenia systemu plików

### Zapis
- Możliwość zapisu **tylko w bieżącym katalogu roboczym** i jego podkatalogach
- Blokada modyfikacji plików poza katalogiem projektu
- Zapobiega nieautoryzowanemu dostępowi do plików systemowych

### Odczyt
- Dostęp do odczytu w większości lokalizacji systemu
- Pewne wrażliwe katalogi systemowe są zablokowane
- Ochrona przed dostępem do sensytywnych obszarów systemu

## 🌐 Ograniczenia sieciowe

### Izolacja sieciowa
- Dostęp do internetu **tylko przez proxy** (unix domain socket)
- Proxy weryfikuje wszystkie połączenia wychodzące
- System ogranicza domeny, z którymi procesy mogą się łączyć

### Filtrowanie domen
- Restrykcje działają na poziomie **domen** (nie inspekcja treści pakietów)
- ⚠️ **Ryzyko obejścia** przez "domain fronting"
- ⚠️ **Potencjalne zagrożenie exfiltracją danych** przy szerokich domenach (np. GitHub)
- System nie analizuje rzeczywistej treści ruchu sieciowego

### Dodatkowe zabezpieczenia
- Sandbox obejmuje nie tylko bezpośrednie interakcje Claude Code
- Również wszystkie skrypty, programy i subprocesy uruchamiane przez komendy

## 🔐 Zarządzanie poświadczeniami

### Git credentials
- **Credentials nigdy nie są wewnątrz sandboxa** z Claude Code
- Niestandardowa usługa proxy transparentnie zarządza uwierzytelnianiem
- System weryfikuje zawartość interakcji git (np. push tylko do skonfigurowanej gałęzi)
- Signing keys również pozostają poza sandboxem

### Bezpieczeństwo
- Zapobiega przypadkowemu ujawnieniu wrażliwych danych
- Eliminuje ryzyko wycieku credentials przez Claude

## 🛠️ Niekompatybilne narzędzia

### Nie działają w sandboxie
- **`watchman`** - nie może działać w sandboxie
- **`docker`** - niekompatybilny (należy dodać do `excludedCommands`)
- Niektóre narzędzia CLI wymagają dodatkowej konfiguracji dostępu sieciowego

### Obejście
- Użyj `excludedCommands` w konfiguracji, aby wykluczyć niekompatybilne narzędzia
- Niektóre narzędzia mogą wymagać specjalnej konfiguracji sieciowej

## ⚙️ Konfiguracja - potencjalne zagrożenia

### Unix Sockets (`allowUnixSockets`)
- ⚠️ Może dać dostęp do potężnych usług systemowych
- ⚠️ **Ryzyko obejścia sandboxa** (np. przez Docker socket)
- Należy używać z ostrożnością

### Uprawnienia do zapisu w systemie plików
- ⚠️ Zbyt szerokie uprawnienia zapisu do katalogów z **plikami wykonywalnymi**
- ⚠️ Dostęp do plików konfiguracyjnych shell (`.bashrc`, `.zshrc`) = **ryzyko eskalacji uprawnień**
- Należy ograniczać uprawnienia zapisu do minimum niezbędnego

## 💻 Platformy i wydajność

### Wsparcie platform
- ✅ **Linux** - pełne wsparcie
- ✅ **macOS** - pełne wsparcie
- ❌ **Windows** - w planach (obecnie brak wsparcia)

### Wydajność
- Niektóre operacje na systemie plików mogą być **nieco wolniejsze** przez narzut izolacji
- Linux ma opcjonalny słabszy tryb **nested sandbox** (znacznie mniejsze bezpieczeństwo)

## 📊 Korzyści sandboxingu

### Bezpieczeństwo vs. Użyteczność
- Redukcja promptów o uprawnienia o **84%** w wewnętrznych testach
- Większa autonomia operacji Claude w bezpiecznych granicach
- Ochrona przed nieautoryzowanym dostępem do plików systemowych
- Kontrolowana izolacja sieciowa

### Zakres ochrony
- Obejmuje wszystkie bezpośrednie interakcje Claude Code
- Obejmuje wszystkie subprocesy i skrypty uruchamiane przez Claude
- Transparentna ochrona credentials bez ingerencji w workflow

## 🎯 Najważniejsze zasady

1. **Operacje na plikach** - tylko w katalogu projektu
2. **Dostęp sieciowy** - tylko przez kontrolowany proxy
3. **Credentials** - nigdy wewnątrz sandboxa
4. **Niekompatybilne narzędzia** - docker, watchman
5. **Konfiguracja** - ostrożnie z `allowUnixSockets` i szerokimi uprawnieniami zapisu
