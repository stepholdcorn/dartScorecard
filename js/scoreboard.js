function Scoreboard() {
  this.remainingTotal = 501;
  this.turnScore = undefined;
  this.normalizedTurn = [];
}

Scoreboard.prototype.subtractTurnScore = function(turnScore) {
  if (turnScore <= this.remainingTotal) {
    this.remainingTotal -= turnScore;
  }
};

Scoreboard.prototype.calculateTurnScore = function(dart1, dart2, dart3) {
  this.turnScore = dart1 + dart2 + dart3;
};

Scoreboard.prototype.transformTurn = function(turn) {
  var workingArray = [];
  for(var i = 0; i < turn.length; i++) {
    workingArray.push(turn[i].multiplier * turn[i].score);
  }
  this.normalizedTurn = workingArray;

};

module.exports = Scoreboard;