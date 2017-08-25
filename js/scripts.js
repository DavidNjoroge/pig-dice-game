//Business logic
function Players(name, total) {
  this.name = name
  this.total = total
}
// the dice
var dice = function() {
  return parseInt(Math.random() * (6) + 1)
}


//roll prototype
Players.prototype.roll = function() {
  var num = dice()
  this.total += num
  console.log(num);
}
//function
var runn = function() {
  p1.roll()
  alert('tet')
}

//user interface
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var player1 = $('#fPlayer').val();
    var player2 = $('#sPlayer').val();

    p1 = new Players(player1, 0)
    p2 = new Players(player2, 0)
    console.log(p1.name);
    $('#name1').text(p1.name);
    $('#name2').text(p2.name);
    $('#total1').text(p1.total);
    $('#total2').text(p2.total);
    //roll button
  });
  $('#roll').click(function(event) {

    p2.roll()

  });
});
