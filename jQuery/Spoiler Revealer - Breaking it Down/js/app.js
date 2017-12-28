// Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
// Append new button to DOM
$('.spoiler').append($button);

$('.spoiler span').hide();

$('.spoiler').on('click', 'button', (e) => {
  $(this).prev().show();  
  $(this).hide();
});


