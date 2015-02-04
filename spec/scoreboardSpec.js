var Scoreboard = require('../js/scoreboard')

describe('scoreboard', function() {

  var scoreboard;

  beforeEach(function() {
    scoreboard = new Scoreboard();
  });

  it('starts with a score of 501', function() {
    expect(scoreboard.total).toEqual(501);
  });

  it('subtracts the score of three darts', function() {
    scoreboard.subtractTurnScore(3);
    expect(scoreboard.total).toEqual(498);
  });

  it('creates the turn score from throwing three darts', function() {
    scoreboard.calculateTurnScore(1, 1, 1);
    expect(scoreboard.turnScore).toEqual(3);
  });

  it('ignores a turn score that is greater than the total score', function() {
    expect(scoreboard.total).toEqual(50);
  });

});