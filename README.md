# 🎮 Word Quest - 3-Level English Course for 12 Year Olds

An interactive Hebrew-to-English vocabulary learning web game designed for a 12-year-old boy, featuring:
- Hebrew word prompt
- 4 English multiple-choice options (A, B, C, D)
- High-quality Web Speech API audio pronunciation
- Zero-dependency arcade sound synthesis (Web Audio API)
- Progression streaks, XP, player tiers, hearts/lives, and mistake review mode
- Built with React, Vite, and Tailwind CSS, ready for Google Firebase Hosting

---

## 📚 The 3-Level Curriculum

### 🥉 Level 1: Starter / Beginner (יסודות)
- **Target**: Everyday foundational words that build confidence immediately.
- **Vocabulary**: `Apple`, `Bicycle`, `Dog`, `Cat`, `House`, `Water`, `Bread`, `School`, `Ball`, `Sun`, `Moon`, `Car`, `Tree`, `Door`, `Window`, `Table`, `Chair`, `Friend`, `Milk`, `Shoes`, `Shirt`, `Boy`, `Girl`, `Family`, `Happy`, `Clock`, `Game`, `Fish`, `Bed`, `Sky`, `Hand`, `Eye`, `Red`, `Blue`...

### 🥈 Level 2: Explorer / Intermediate (חוקר)
- **Target**: Daily adventure, tech gadgets, sports, food, and animals.
- **Vocabulary**: `Computer`, `Screen`, `Keyboard`, `Backpack`, `Champion`, `Player`, `Goal`, `Team`, `Coach`, `Speed`, `Pizza`, `Burger`, `Delicious`, `Crunchy`, `Dessert`, `Breakfast`, `Adventure`, `Treasure`, `Castle`, `Island`, `Maze`, `Map`, `Lion`, `Eagle`, `Shark`, `Wolf`, `Dolphin`, `Forest`, `Planet`, `Rocket`, `Alien`, `Telescope`, `Secret`, `Challenge`, `Stadium`...

### 🥇 Level 3: Master / Advanced (מאסטר)
- **Target**: Rich language, gaming terms, sci-fi concepts, and superpowers.
- **Vocabulary**: `Victory`, `Quest`, `Weapon`, `Shield`, `Glitch`, `Target`, `Competition`, `Dragon`, `Sword`, `Hero`, `Mystery`, `Monster`, `Trophy`, `Gravity`, `Astronaut`, `Galaxy`, `Comet`, `Predator`, `Thunder`, `Strength`, `Invisible`, `Bravery`, `Teleport`, `Giant`, `Shadow`, `Flame`, `Electric`, `Strategy`, `Achievement`, `Goalkeeper`...

### ⚡ Bonus: All-Levels Mix (אתגר מעורב)
- Mixes words randomly from all 3 levels for an ultimate test.

---

## 🚀 Running Locally

```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## 🌐 Deploying to Google Firebase Hosting

1. **Build the production bundle**:
   ```bash
   npm run build
   ```

2. **Select or create your Firebase project**:
   ```bash
   # Use an existing project
   firebase use <PROJECT_ID>

   # OR create a new project
   firebase projects:create
   ```

3. **Deploy**:
   ```bash
   firebase deploy --only hosting
   ```
