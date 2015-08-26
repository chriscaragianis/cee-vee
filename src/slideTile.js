$('.CV-control').on('click', function() {
  $('.AC').hide();
  $('.PJ').hide();
  $('.CV').fadeIn(200);
});
$('.AC-control').on('click', function() {
  $('.CV').hide();
  $('.PJ').hide();
  $('.AC').fadeIn(200);
});
$('.PJ-control').on('click', function() {
  $('.CV').hide();
  $('.AC').hide();
  $('.PJ').fadeIn(200);
});

$('.TEACH-control').on('click', function() {
  $('.SUM').hide();
  $('.MATH').hide();
  $('.TEACH').fadeIn(200);
});
$('.SUM-control').on('click', function() {
  $('.TEACH').hide();
  $('.MATH').hide();
  $('.SUM').fadeIn(200);
});
$('.MATH-control').on('click', function() {
  $('.TEACH').hide();
  $('.SUM').hide();
  $('.MATH').fadeIn(200);
});
