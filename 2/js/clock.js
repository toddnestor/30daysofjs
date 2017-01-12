import HourHand from './hour-hand';
import MinuteHand from './minute-hand';
import SecondHand from './second-hand';

class Clock {
  constructor(el) {
    this.el = el;
    this.hands = [
      new HourHand(this),
      new MinuteHand(this),
      new SecondHand(this)
    ];

    this.startInterval();
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.currentTime = new Date;
      this.updateHands();
    }, 1000);
  }

  time() {
    return this.currentTime;
  }

  updateHands() {
    this.hands.forEach( hand => hand.update() );
  }
}

export default Clock;
