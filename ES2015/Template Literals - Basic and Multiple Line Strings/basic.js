const singleQuotes = '<p>Single Quotes</p>';
const doubleQuotes = "<p>Double Quotes</p>";
const templateLiteral = `<p>Template Literal</p>`;

const result = singleQuotes + doubleQuotes + templateLiteral;
document.querySelector('.basic').innerHTML = result;
