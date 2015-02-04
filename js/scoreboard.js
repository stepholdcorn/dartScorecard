function Scoreboard() {
  this.total = 501;
}

Scoreboard.prototype.subtractTurnScore = function(turnScore) {
  this.total -= turnScore;
};

module.exports = Scoreboard;