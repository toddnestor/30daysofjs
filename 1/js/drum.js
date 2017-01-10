class Drum {
  constructor(key, sound, drums = {}) {
    this.el = document.querySelector(`.drum.key-${key}`);
    this.sound = new Audio(`./sounds/${sound}.wav`);
    drums[key] = this;
  }

  play() {
    this.highlightButton();
    this.playSound();
  }

  highlightButton() {
    this.el.classList.add('playing');
    setTimeout(() => this.el.classList.remove('playing'), 100);
  }

  playSound() {
    this.sound.currentTime = 0;
    this.sound.play();
  }
}
