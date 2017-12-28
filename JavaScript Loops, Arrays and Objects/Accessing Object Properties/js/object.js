var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '.</p>';
message += '<p>I live in the ' + person.country + '.</p>';
person.name = 'Rainbow Holes';
message += '<p>But I wish my name was ' + person.name + '.</p>';
person.age += 1;
message += '<p>I am now ' + person.age + ' years old.</p>';
message += '<p>I have ' + person.skills.length + ' skills not including sucking cock.</p>';
print(message);