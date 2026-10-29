<div align="center">

# 🕹️ FLIPPCLUB

### ARCADE. FLIPPERS. GOOD TIMES.

**Strona internetowa klubu arcade i flipperów w Siemianowicach Śląskich.**

![FLIPPCLUB — podgląd strony](docs/screenshot.jpg)

</div>

---

## O projekcie

FLIPPCLUB to strona internetowa miejsca, w którym spotykają się klasyczne flippery, automaty arcade i wspólna rozrywka. Projekt łączy wyrazisty, inspirowany salonami gier styl wizualny z czytelną prezentacją oferty klubu.

Ciemne granatowe tło, żółte akcenty, fioletowe neony i mocna typografia budują rozpoznawalny klimat, a osobne podstrony ułatwiają znalezienie najważniejszych informacji.

## 🎮 Co znajdziesz na stronie?

- **Atrakcje** — automaty arcade, flippery, Killer Queen i koparki RC.
- **Informacje dla odwiedzających** — cennik, godziny otwarcia i kontakt.
- **Urodziny i imprezy** — prezentacja dostępnych przestrzeni i oferty.
- **Pozostałe usługi** — bar, wypożyczalnia oraz kupno i wymiana.
- **Galeria i aktualności** — zdjęcia klubu oraz sekcja treści społecznościowych.
- **Responsywny interfejs** — układ dostosowany do różnych rozmiarów ekranu.

## 🛠️ Technologie

| Technologia | Rola |
|---|---|
| Next.js 16 | Framework aplikacji i routing |
| React 19 | Interfejs użytkownika |
| TypeScript | Typowanie kodu |
| Tailwind CSS 4 | Stylowanie |
| ESLint 9 | Analiza statyczna kodu |
| Git & GitHub | Kontrola wersji |
| Cloudflare Pages | Wdrożenie |

### Typografia

`Archivo` · `Archivo Black` · `IBM Plex Mono` · `Inter` · `Space Grotesk`

## 💻 Uruchomienie lokalne

Wymagane: Node.js oraz npm.

```bash
git clone https://github.com/mstobrawa/flippclub.git
cd flippclub
npm install
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:3000`.

## Przydatne komendy

```bash
npm run dev      # uruchomienie środowiska developerskiego
npm run build    # build produkcyjny
npm run start    # uruchomienie serwera Next.js
npm run lint     # analiza ESLint
```

## 📁 Struktura projektu

```text
flippclub/
├── public/           # Grafiki i zasoby statyczne
├── src/
│   ├── app/          # Strony i routing
│   ├── components/   # Komponenty interfejsu
│   └── config/       # Konfiguracja nawigacji i slidera
├── next.config.ts
├── package.json
└── README.md
```

## 🚀 Wdrożenie

Projekt jest przechowywany na GitHubie, a wersja produkcyjna wdrażana przez **Cloudflare Pages** z gałęzi `main` zgodnie z konfiguracją projektu.

Przed publikacją zmian sprawdź build:

```bash
npm run build
```

---

<div align="center">

**Designed & developed by Mike Webworks**

</div>
