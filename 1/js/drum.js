class Drum {
  constructor(key, sound, drums = {}) {
    this.el = document.querySelector(`.drum.key-${key}`);
    this.sound = new Audio(`./sounds/${sound}.wav`);
    drums[key] = this;
    this.bindTransitionEnd();
  }

  bindTransitionEnd() {
    this.el.addEventListener('transitionend', e => this.removeTransition(e));
  }

  removeTransition(e) {
    if( e.propertyName == 'transform' ) {
      this.el.classList.remove('playing');
    }
  }

  play() {
    this.highlightButton();
    this.playSound();
  }

  highlightButton() {
    this.el.classList.add('playing');
  }

  playSound() {
    this.sound.currentTime = 0;
    this.sound.play();
  }
}
