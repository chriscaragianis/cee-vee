$('.CV-control').on('click', function() {
  $('.AC').hide();
  $('.PJ').hide();
  $('.CV').show();
});
$('.AC-control').on('click', function() {
  $('.CV').hide();
  $('.PJ').hide();
  $('.AC').show();
});
$('.PJ-control').on('click', function() {
  $('.CV').hide();
  $('.AC').hide();
  $('.PJ').show();
});
