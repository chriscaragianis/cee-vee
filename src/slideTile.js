$('.one').on('click', function() {
  $($(this).parent().siblings()).hide(200);
  $($(this).parent().siblings()[0]).show(200);
});
$('.two').on('click', function() {
  $($(this).parent().siblings()).hide(200);
  $($(this).parent().siblings()[1]).show(200);
});
$('.three').on('click', function() {
  $($(this).parent().siblings()).hide(200);
  $($(this).parent().siblings()[3]).show(200);
});

