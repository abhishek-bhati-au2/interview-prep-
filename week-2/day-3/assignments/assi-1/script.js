var maxLength = 10;
$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#rchars').text(textlen);
});