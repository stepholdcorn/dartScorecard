function Scoreboard() {
  this.total = 501;
  this.turnScore = undefined;
}

Scoreboard.prototype.subtractTurnScore = function(turnScore) {
  if (turnScore <= this.total) {
    this.total -= turnScore;  
  }
};

Scoreboard.prototype.calculateTurnScore = function(dart1, dart2, dart3) {
  this.turnScore = dart1 + dart2 + dart3;
};

module.exports = Scoreboard;