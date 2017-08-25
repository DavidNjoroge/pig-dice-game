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
  num = dice()
  this.total += num
  console.log(num);
  $('#diceNum').text(num);
  if (num === 1) {
    $('.dis1').hide();
    $('.dis2').show();
    return this.total = 0
  }
  return this.total
}
//function
var runn = function() {


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
    totl = p2.total

    $('.dis1').show();
    //roll button
  });
  $('#roll').click(function(event) {

    p2.roll()
    console.log(p2.total);
    $('#total1').text(p2.total);
  });
});
