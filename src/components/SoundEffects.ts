// Web Audio API lightweight synthesizer for cute pastel chimes and clicks
class SoundManager {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Play a gentle cheerful chime when interacting with Sneha or clicking a button
  playChime(type: "pop" | "sparkle" | "step" | "success" = "sparkle") {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      if (type === "pop") {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.16);
      } else if (type === "sparkle") {
        // Pentatonic magical chord
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        notes.forEach((freq, i) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now + i * 0.05);
          gain.gain.setValueAtTime(0.08, now + i * 0.05);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.3);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + i * 0.05);
          osc.stop(now + i * 0.05 + 0.35);
        });
      } else if (type === "success") {
        const notes = [587.33, 739.99, 880, 1174.66]; // D5, F#5, A5, D6
        notes.forEach((freq, i) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + i * 0.07);
          gain.gain.setValueAtTime(0.1, now + i * 0.07);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.4);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + i * 0.07);
          osc.stop(now + i * 0.07 + 0.45);
        });
      }
    } catch {
      // AudioContext could be blocked by browser policy prior to interaction
    }
  }
}

export const soundManager = new SoundManager();

