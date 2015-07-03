$('.one').on('click', function() {
  $($(this).parent().siblings()).hide();
  $($(this).parent().siblings()[0]).show();
});
$('.two').on('click', function() {
  $($(this).parent().siblings()).hide();
  $($(this).parent().siblings()[1]).show();
});
$('.three').on('click', function() {
  $($(this).parent().siblings()).hide();
  $($(this).parent().siblings()[3]).show();
});

