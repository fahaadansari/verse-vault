# VerseVault 📖

> A sleek, responsive client-side web application built with Vanilla JavaScript that dynamically fetches and displays Quranic verses and English translations based on user-selected emotions or topics.

---

## 🌟 Key Features

- **Topic-Based Verses:** Select emotions or topics such as Patience, Mercy, Gratitude, Hope, and Strength to fetch relevant verses.
- **Asynchronous Fetching:** Uses `Promise.all` to fetch both original Arabic text and English Sahih International translations concurrently via the Al Quran Cloud API.
- **Dynamic DOM Manipulation:** Instantly updates text content and surah references without requiring page reloads.
- **Responsive Islamic-Themed UI:** Custom CSS layout featuring Islamic architectural styling, glassmorphism card design, and responsive typography.
- **RTL Support:** Native right-to-left alignment applied specifically to Arabic script for authentic rendering.

---

## 🛠️ Built With

- **HTML5:** Semantic markup structure with custom dropdown controls and text containers.
- **CSS3:** Custom linear/radial gradients, Flexbox layout, media queries, and Google Web Fonts (*Amiri*, *Cinzel*, *Poppins*).
- **JavaScript (ES6+):** Asynchronous `fetch` calls, dynamic event handling, array reference mapping, and mathematical random selection logic.
- **External API:** [Al Quran Cloud REST API](https://alquran.cloud/api)

---

## 📂 Project Structure

```text
verse-vault/
├── index.html        # Main HTML layout and structural components
├── QuranQuote.css    # Custom layout, animations, typography, and responsive styles
├── QuranQuote.js     # API integration logic, reference arrays, and DOM handlers
└── README.md         # Documentation
🚀 Getting Started
To run this application locally:

Prerequisites
Any modern web browser with JavaScript enabled (Google Chrome, Firefox, Edge, Safari).

An active internet connection (required to fetch data from the Al Quran API).

Installation
Clone the repository:

Bash
git clone [https://github.com/YOUR_GITHUB_USERNAME/verse-vault.git](https://github.com/YOUR_GITHUB_USERNAME/verse-vault.git)
Navigate into the project directory:

Bash
cd verse-vault
Run the app:

Double-click QuranQuote.html to open it directly in your web browser.

Or launch it using the VS Code Live Server extension.