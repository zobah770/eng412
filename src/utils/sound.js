// Zero-dependency Web Audio API sound synthesizer + Web Speech API for pronunciation

class SoundController {
  constructor() {
    this.ctx = null;
    this.sfxEnabled = true;
    this.speechEnabled = true;
  }

  getAudioContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  setSfxEnabled(val) {
    this.sfxEnabled = val;
  }

  setSpeechEnabled(val) {
    this.speechEnabled = val;
  }

  playTone(freq, type = 'sine', duration = 0.15, startTime = 0, gainLevel = 0.2) {
    if (!this.sfxEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);

      gain.gain.setValueAtTime(gainLevel, ctx.currentTime + startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + startTime);
      osc.stop(ctx.currentTime + startTime + duration);
    } catch {
      // Audio autoplay might be blocked before user interaction
    }
  }

  playCorrect() {
    if (!this.sfxEnabled) return;
    // Bright major chord chime (C5, E5, G5, C6)
    this.playTone(523.25, 'triangle', 0.12, 0.0, 0.25);
    this.playTone(659.25, 'triangle', 0.12, 0.08, 0.25);
    this.playTone(783.99, 'triangle', 0.15, 0.16, 0.28);
    this.playTone(1046.50, 'triangle', 0.35, 0.24, 0.3);
  }

  playWrong() {
    if (!this.sfxEnabled) return;
    // Gentle downward buzz
    this.playTone(220, 'sawtooth', 0.18, 0.0, 0.2);
    this.playTone(174.61, 'sawtooth', 0.25, 0.15, 0.22);
  }

  playLevelUp() {
    if (!this.sfxEnabled) return;
    // Fanfare
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'triangle', 0.2, idx * 0.1, 0.28);
    });
  }

  playClick() {
    if (!this.sfxEnabled) return;
    this.playTone(400, 'sine', 0.05, 0, 0.1);
  }

  speak(text) {
    if (!this.speechEnabled || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel(); // Stop prior speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.95; // Slightly slower for clarity
      utterance.pitch = 1.05; // Friendly and upbeat
      window.speechSynthesis.speak(utterance);
    } catch {
      // Ignore speech failure
    }
  }
}

export const sound = new SoundController();
