// functions //
/*

function say(something) {
  console.log(something);
}

function exec(func, arg) {
  func(arg);
}

exec(say, 'Hi, there');

*/


// this is a function expression (passing the function as an argument)//
/*

function exec(func, arg) {
  func(arg);
}

exec(function say(something) {
  console.log(something);
}, 'Hi, there');

*/


// this is an anonymous function that does the same thing //
/*

function exec(func, arg) {
  func(arg);
  
exec((something) => {
  console.log(something);
}, 'Salutations!');

*/

// Callback function //

window.setTimeout((something) => {
  console.log(something);
}, 3000, 'Greetings, everyone!');





