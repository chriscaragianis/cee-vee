$('.one').on('click', function() {
  $($(this).parent().siblings()).hide();
  $($(this).parent().siblings()[0]).fadeIn(200);
});
$('.two').on('click', function() {
  $($(this).parent().siblings()).hide();
  $($(this).parent().siblings()[1]).fadeIn(200);
});
$('.three').on('click', function() {
  $($(this).parent().siblings()).hide();
  $($(this).parent().siblings()[2]).fadeIn(200);
});
$('.four').on('click', function() {
  $($(this).parent().siblings()).hide();
  $($(this).parent().siblings()[3]).fadeIn(200);
});
$('.five').on('click', function() {
  $($(this).parent().siblings()).hide();
  $($(this).parent().siblings()[4]).fadeIn(200);
});

