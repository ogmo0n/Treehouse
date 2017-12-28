
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}


var questions = [
  ['What is the best type of EDM?', 'House'],
  ['Who is the best dog in the world?', 'Sheera'],
  ['Manual or automatic transmission?', 'Manual']
                ];

var question;
var answer;
var correctAnswer = 0;
var response;
var html;
var correct = [];
var wrong = [];

function buildList(array) {
  var listHTML = '<ol>';
  for (var i = 0; i < array.length; i += 1) {
    listHTML += '<li>' + array[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  if (response === answer.toLowerCase()) { 
    correctAnswer += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

html = "You got " + correctAnswer + " question(s) right.";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);



