class Hand {
  constructor(type, clock) {
    this.el = clock.el.querySelector(`.${type}-hand`);
    this.clock = clock;
  }

  update() {
    this.rotate(this.calcDegrees());
  }

  calcDegrees() {
    let time = this.clock.time();
    const percentage = this.calcPercentage(time);
    return percentage * 360;
  }

  calcPercentage() {
    throw 'needs implemented';
  }

  rotate(deg) {
    deg = deg - 90;
    this.el.style.transform = `rotate(${deg}deg)`;
  }
}

export default Hand;
