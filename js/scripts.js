//Business logic
function Player(name, total) {
  this.name = name
  this.total = total
}
// the dice
var dice = function() {
  return parseInt(Math.random() * (6) + 1)
}


//roll prototype
Player.prototype.roll = function() {
  var num = dice()
  this.total += num
}


//user interface
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault
    var player1 = $('#fplayer').val();
    var player2 = $('#splayer').val();

    p1 = new Player(player1, 0)
    p2 = new Player(player2, 0)
  });
  $('#roll').click(function(event) {


  });
});
