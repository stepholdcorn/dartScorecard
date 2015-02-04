function Scoreboard() {
  this.remainingTotal = 501;
  this.turnScore = undefined;
}

Scoreboard.prototype.subtractTurnScore = function(turnScore) {
  if (turnScore <= this.remainingTotal) {
    this.remainingTotal -= turnScore;  
  }
};

Scoreboard.prototype.calculateTurnScore = function(dart1, dart2, dart3) {
  this.turnScore = dart1 + dart2 + dart3;
};

module.exports = Scoreboard;