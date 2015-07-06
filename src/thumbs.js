function setThumbs() {
  $('.thumbs li').on('click', function() {
    $(this).css('position', 'fixed');
    $(this).animate({
      top: '15%',
      left: '10%',
      width: '80vw'
      }, 400, function() {
    });
    $(this).siblings().off('click');
    $(this).children().show();
    $(this).off('click');
  });
}

$('.dismiss').on('click', function() {
  $(this).hide();
  $(this).parent().css('width', '100px');
  $(this).parent().css('left', '0');
  $(this).parent().css('position', 'relative');
  setTimeout(function() {
    setThumbs();
    }, 5);
});

setThumbs();
