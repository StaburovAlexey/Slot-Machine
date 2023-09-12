class SlotMachine {
  constructor() {
    this.reels = [];
    this.paytable = {};
  }

  setReels(reels) {
    this.reels = reels;
  }

  setPaytable(paytable) {
    this.paytable = paytable;
  }

  spin() {
    for (var i = 0; i < this.reels.length; i++) {
      this.reels[i] = this.reels[i][Math.floor(Math.random() * this.reels[i].length)];
    }
  }

  getResult() {
    var result = "";
    for (var i = 0; i < this.reels.length; i++) {
      result += this.reels[i];
    }
    return result;
  }

  getPayout() {
    var payout = 0;
    if (this.paytable.hasOwnProperty(this.getResult())) {
      payout = this.paytable[this.getResult()];
    }
    return payout;
  }
}

// Create a new slot machine object
const slotMachine = new SlotMachine();

// Set the reels
slotMachine.reels = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"]
];

// Set the paytable
slotMachine.paytable = {
  "AAA": 100,
  "BBB": 50,
  "CCC": 25
};

// Spin the reels
setInterval(slotMachine.spin(), 2000);
// Get the result
let result = slotMachine.getResult();
// Display the result
console.log(result);
