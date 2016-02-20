

describe('BowlingGame', function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  it('Has 10 pins by default every round', function() {
    expect(bowlingGame.pins).toEqual(10)
  });


  it('Allows a user a first bowl', function() {
    spyOn(bowlingGame, "_bowlCalculator").and.returnValue(7);
    bowlingGame.firstBowl();
    expect(bowlingGame.roundScore).toEqual([7])
  });


  it('Reduces the pins for the next round by the number hit previously', function() {
    spyOn(bowlingGame, "_bowlCalculator").and.returnValue(7);
    bowlingGame.firstBowl();
    expect(bowlingGame.pins).toEqual(3)

  });

  it('ALlows a user a second turn to hit remaining pins', function() {
    spyOn(bowlingGame, "_bowlCalculator").and.returnValue(3);
    bowlingGame.firstBowl();
    bowlingGame.secondBowl();
    expect(bowlingGame.roundScore).toEqual([3,3])
  });

});