var Scoreboard = require('../js/scoreboard')

describe('scoreboard', function() {

  it('starts with a score of 501', function() {
    var scoreboard = new Scoreboard();
    expect(scoreboard.total).toEqual(501);
  });

  it('subtracts the score of three darts', function() {
    var scoreboard = new Scoreboard();
    scoreboard.subtractTurnScore(3);
    expect(scoreboard.total).toEqual(498);
  });

});