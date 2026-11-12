// LocalStorage manager for stats, XP, level, and player records

const STORAGE_KEY = 'word_quest_data_v1';

const defaultData = {
  highScore: 0,
  totalXp: 0,
  level: 1,
  gamesPlayed: 0,
  wordsMastered: [],
  mistakesHistory: []
};

export function loadPlayerData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultData;
    return { ...defaultData, ...JSON.parse(raw) };
  } catch {
    return defaultData;
  }
}

export function savePlayerData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Ignore storage errors (private browsing etc.)
  }
}

export function calculateLevel(xp) {
  // Level curve: Level 1: 0, Level 2: 300, Level 3: 800, Level 4: 1500, Level 5: 2500, etc.
  if (xp < 300) return { level: 1, title: 'מתחיל (Rookie)', nextAt: 300, icon: '🌱' };
  if (xp < 800) return { level: 2, title: 'סייר מילים (Explorer)', nextAt: 800, icon: '🧭' };
  if (xp < 1600) return { level: 3, title: 'לוחם אנגלית (Warrior)', nextAt: 1600, icon: '⚔️' };
  if (xp < 2600) return { level: 4, title: 'אלוף השפה (Champion)', nextAt: 2600, icon: '🏆' };
  return { level: 5, title: 'מאסטר אגדי (Legend)', nextAt: 5000, icon: '👑' };
}
