class Clock {

  constructor() {
    let date = new Date();
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.second = date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hour}:${this.minute}:${this.second}`);
  }

  _tick() {

    this.second ++;
    this.printTime();
  }

}

const c = new Clock();
