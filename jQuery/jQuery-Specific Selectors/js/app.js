const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
const $pdfCheckbox = $("<label><input type='checkbox'> Allow PDF downloads</label>"); 

$secureLinks.attr('target', '_blank');
$secureLinks.addClass('secure');
$pdfs.addClass('pdf');                 

$pdfs.on('click', (e) => {
  if ($(':checked').length > 0) {
    $pdfs.attr('download', true);
  } else {
    e.preventDefault();
    alert("Please click the checkbox to allow PDF downloads");
  }
});

$('#links').append($pdfCheckbox);

$('a').each(function(){
  const url = $(this).attr('href');
  $(this).parent().append(`(${url})`);
});
