# 🎮 Word Quest — Hebrew to English Learning Game

<p align="center">
  <a href="https://eng412.web.app" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-eng412.web.app-brightgreen?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Google_Firebase-Hosting-FFA611?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" />
</p>

An interactive, gamified English learning web application designed for young learners (tailored for a 12-year-old boy). The game presents a word in Hebrew with 4 multiple-choice options in English, paired with **contextual sentence integration**, **native text-to-speech**, and **zero-dependency arcade sound synthesis**.

---

## 🌟 Live Demo
Play the game live on Firebase Hosting: **[https://eng412.web.app](https://eng412.web.app)**

---

## ✨ Key Features

### 🎓 1. Structured 3-Level Curriculum
* **🥉 Level 1: Starter / Beginner (`יסודות`)**: High-confidence everyday fundamentals (`Apple`, `Bicycle`, `Dog`, `Cat`, `House`, `Water`, `School`...).
* **🥈 Level 2: Explorer / Intermediate (`חוקר`)**: Everyday adventures, tech gadgets, sports, food, and animals (`Computer`, `Screen`, `Backpack`, `Champion`, `Pizza`, `Treasure`, `Rocket`...).
* **🥇 Level 3: Master / Advanced (`מאסטר`)**: Gaming vocabulary, sci-fi concepts, and superpowers (`Victory`, `Quest`, `Shield`, `Glitch`, `Gravity`, `Astronaut`, `Invisible`, `Teleport`...).
* **⚡ All-Levels Mega Mix**: Challenges learners across all three levels in one round.

### 📝 2. Contextual Sentence Integration ("In a Sentence")
* **Bonus In-Game Challenge**: For any question, players can launch an extra challenge (**`+50 XP`**) to identify how the word fits into a short English sentence.
* **Dedicated Sentence Mode**: A full game mode where *every* question is an English sentence fill-in-the-blank with an interactive visual placeholder:
  $$\text{"I rest in my comfortable }\boxed{\text{ ? }}\text{ ."}$$
* **BiDi-Safe LTR/RTL Layout**: Seamlessly embeds Left-to-Right English sentences with correct punctuation inside a Right-to-Left Hebrew interface.

### 🗣️ 3. Native Pronunciation & Zero-Asset Arcade Sound
* **Web Speech API (`SpeechSynthesis`)**: Automatically pronounces every English word and sentence out loud in natural English — no third-party audio files or cloud APIs required.
* **Web Audio API Synth**: Procedurally generated arcade sound effects (triumphant major chord chimes, error buzzes, and victory fanfare) running 100% locally in the browser with zero network latency.

### 🏆 4. Gamification Mechanics
* **XP & Combo Streaks**: Consecutive correct answers trigger multipliers with animated fire streaks (🔥 `x2`, `x3`, `x5`).
* **Player Rank Tiers**: Progression from *Rookie* 🌱 to *Legendary Master* 👑 based on total XP.
* **Classic vs. Practice Modes**: Choose between high-stakes 3 Hearts (❤️❤️❤️) or stress-free unlimited practice.
* **Focused Mistakes Review**: At the end of every round, missed words are saved with dedicated audio playback and an expandable *"See in Sentence"* drawer for quick revision.
* **Local Persistence**: High scores, XP, and rank tiers are saved in `localStorage`.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) (Hooks, pure functional components) |
| **Build Tool & Bundler** | [Vite 8](https://vite.dev/) with `@vitejs/plugin-react` |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/vite` |
| **Audio** | HTML5 Web Audio API (Synth) & Web Speech API (`SpeechSynthesisUtterance`) |
| **Celebrations** | [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Deployment & Hosting** | [Google Firebase Hosting](https://firebase.google.com/docs/hosting) |

---

## 📁 Project Structure

```text
eng412/
├── index.html                   # HTML entry point with Rubik font & RTL support
├── package.json                 # Dependencies & build scripts
├── vite.config.js               # Vite + React + Tailwind v4 config
├── firebase.json                # Firebase Hosting rewrite rules
├── .firebaserc                  # Firebase project alias
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main game state manager & router
    ├── index.css                # Tailwind imports & custom arcade animations
    ├── data/
    │   └── words.js             # 3-level dictionary with Hebrew, English, phonetic & sentences
    ├── utils/
    │   ├── sound.js             # Web Audio API synthesizer + Web Speech controller
    │   └── storage.js           # LocalStorage manager for XP, level & high scores
    └── components/
        ├── GameHeader.jsx       # Header bar (Score, XP, Hearts, Streak 🔥, Sound toggles)
        ├── WordCard.jsx         # Hebrew word prompt, phonetic hint & sentence trigger
        ├── OptionGrid.jsx       # 4 multiple-choice English answer buttons
        ├── SentenceChallenge.jsx# Interactive sentence fill-in-the-blank modal
        ├── CategorySelect.jsx   # Course level & game mode selector lobby
        └── RoundSummary.jsx     # Post-round analytics, confetti & mistake review
```

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher, tested on v26)
* [npm](https://www.npmjs.com/) (v9 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/zobah770/eng412.git
   cd eng412
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to play!

4. **Build for production**:
   ```bash
   npm run build
   ```
   The optimized production bundle is generated in the `dist/` folder.

---

## ➕ Adding New Words & Sentences

All vocabulary is maintained in [`src/data/words.js`](src/data/words.js). You can easily expand any level by adding an entry:

```javascript
{
  id: 'l1_36',
  level: 1,                          // 1: Starter, 2: Explorer, 3: Master
  hebrew: 'כוכב',
  english: 'Star',
  phonetic: 'Kochav',
  hint: 'Twinkles in the night sky',
  sentenceEn: 'A shiny star twinkles in the sky.',
  sentenceBlank: 'A shiny _____ twinkles in the sky.',
  sentenceHe: 'כוכב נוצץ מנצנץ בשמיים.'
}
```

The game automatically handles distractor generation, audio pronunciation, and sentence challenges!

---

## 🌐 Deploying to Firebase Hosting

This project is pre-configured with `firebase.json` for single-page application routing.

1. Install the Firebase CLI (if not already installed):
   ```bash
   npm install -g firebase-tools
   ```

2. Login to your Google account:
   ```bash
   firebase login
   ```

3. Build and deploy:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

---

## 📄 License

This project is open-source under the [MIT License](LICENSE). Feel free to fork, customize, or adapt for other languages!
