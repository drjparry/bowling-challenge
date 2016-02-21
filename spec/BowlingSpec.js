

describe('BowlingGame', function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  it('Has 10 pins by default every round', function() {
    expect(bowlingGame.pins).toEqual(10)
  });


  it('Allows a user a first bowl', function() {
    bowlingGame.firstBowl(7);
    expect(bowlingGame.roundScore).toEqual([7])
  });


  it('Reduces the pins for the next round by the number hit previously', function() {
    bowlingGame.firstBowl(7);
    expect(bowlingGame.pins).toEqual(3)

  });

  it('ALlows a user a second turn to hit remaining pins', function() {
    bowlingGame.firstBowl(3);
    bowlingGame.secondBowl(3);
    expect(bowlingGame.roundScore).toEqual([3,3])
  });

  it('Adds a round after every turn', function() {
    bowlingGame.firstBowl(3);
    bowlingGame.secondBowl(3);
    expect(bowlingGame.round).toEqual(1)
  });

  it('Calculates a total score', function() {
    bowlingGame.firstBowl(3);
    bowlingGame.secondBowl(3);
    expect(bowlingGame.finalScore).toEqual(6)

  });

  it('Calculates a strike', function() {
    bowlingGame.firstBowl(10);
    bowlingGame.firstBowl(4);
    bowlingGame.secondBowl(5);
    expect(bowlingGame.finalScore).toEqual(28)
  });

  it('Calculates a spare', function() {
    bowlingGame.firstBowl(7);
    bowlingGame.secondBowl(3);
    bowlingGame.firstBowl(4);
    bowlingGame.secondBowl(5);
    expect(bowlingGame.finalScore).toEqual(23)
  });

});