

function BowlingGame () {
  this.score = [];
  this.roundScore = [];
  this.round = 0;
  this.pins = 10;
  this.finalScore = 0

};

BowlingGame.prototype.firstBowl = function(bowl) {
  if (bowl === 10) {
    this.roundScore.push(bowl);
    this._runRound();
  } else {
  this.pins -= bowl;
  this.roundScore.push(bowl);
  }
};

BowlingGame.prototype.secondBowl = function(bowl) {
  this.roundScore.push(bowl);
  this._runRound();
};

BowlingGame.prototype._bowlCalculator = function() {
   return Math.floor(Math.random() * this.pins) + 0;
};

BowlingGame.prototype._runRound = function() {
  this.score.push(this.roundScore);
  this.pins = 10;
  this.round++;
  this.finalScore = this._getScore();


};







BowlingGame.prototype._getScore = function() {
  var score = [].concat.apply([], this.score);
  var scoreindex = 0;
  var self = this;
  var finalScore = 0;

  function isStrike() {
  return score[scoreindex] === 10;
  };

  function strikeBonus() {
  return score[scoreindex + 1] + score[scoreindex + 2];
  };

  function isSpare(){
    return score[scoreindex] + score[scoreindex + 1] === 10;
  };

  function spareBonus(){
    return score[scoreindex + 2];
  };

   function SumOfRound() {
    return score[scoreindex] + score[scoreindex + 1];
  };


  for (var turn = 0; turn < (self.round); turn++){

    if (isStrike()) {
      finalScore += 10 + strikeBonus();
      scoreindex++;
    } else if (isSpare()) {
      finalScore += 10 + spareBonus();
      scoreindex += 2;
    } else {
      finalScore += SumOfRound();
      scoreindex += 2;
    }

  }
console.log(finalScore);
return finalScore;


};


