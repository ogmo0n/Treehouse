const fruitList = 
  "<ul>" +
    "<li>Kiwi</li>" +
    "<li>Lime</li>" +
    "<li>Pineapple</li>" +
  "</ul>";

const vegetableList = 
  `<ul>
    <li>Potato</li>
    <li>Asparagus</li>
    <li>Peppers</li>
  </ul>`;

document.querySelector('.fruits').innerHTML = fruitList;

document.querySelector('.vegetables').innerHTML = vegetableList;
