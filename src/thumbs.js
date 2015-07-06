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
  $(this).parent().siblings().show();
  $(this).parent().css('position', 'relative');
  $(this).parent().animate({
    width: '100px',
    left: 0
    }, 400, function() {
  });
  setTimeout(setThumbs, 500);
});

setThumbs();
