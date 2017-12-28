var upper = 10000;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

var myNum = getRandomNumber(upper);

var counter = 0;
var guess;

while(myNum !== guess) {
  guess = getRandomNumber(upper);
  counter += 1;
}


document.write('<p>The random number was: ' + myNum + '</p>');
document.write('<p>It took the computer ' + counter + ' attempts to get it right.</p>');