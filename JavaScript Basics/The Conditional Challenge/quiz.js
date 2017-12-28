/* ask at least five questions
keep track of correct answers
prompt final question for how many correct
rank player 5 = gold, 3-4 = silver, 1-2 = bronze crown 
*/
var numCorrect = 0;
var question1 = parseInt(prompt('How many fingers do you have on your right hand?'));
var question2 = parseInt(prompt('How many fingers do you have on your left hand?'));
var question3 = parseInt(prompt('How many toes do you have on your right hand?'));
var question4 = parseInt(prompt('How many toes do you have on your left hand?'));
var question5 = prompt('Do you deserve a kiss?');
if (question1 === 5) {
  numCorrect += 1;
} 
if (question2 === 5) {
  numCorrect += 1;
} 
if (question3 === 0) {
  numCorrect += 1;
} 
if (question4 === 0) {
  numCorrect += 1;
} 
if (question5.toUpperCase() === "YES") {
  numCorrect += 1;
} 

alert("You got " + numCorrect + " questions correct. Click 'OK' to view your prize.");

if (numCorrect === 5) {
  alert('You get that kiss!');
} else if (numCorrect >= 3) {
  alert('You only get a handshake.');
} else if (numCorrect >= 1) {
  alert("You're going to have to kiss yourself tonight, bud.");
} else {
  alert('You get nothing... Good day, sir!');         
}





