

function BowlingGame () {
  this.score = [];
  this.roundScore = [];
  this.round = 1;
  this.pins = 10;


BowlingGame.prototype.firstBowl = function() {
  var score = this._bowlCalculator()
  this.pins -= score;
  this.roundScore.push(score);
};

BowlingGame.prototype.secondBowl = function() {
  var score = this._bowlCalculator()
  this.roundScore.push(score);
  this.pins = 10;
  this.round ++;
};

BowlingGame.prototype._bowlCalculator = function() {
   Math.floor(Math.random() * this.pins) + 0;
};

};
