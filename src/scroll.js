$('#who').on('click', function() {
  $('html, body').animate({
    scrollTop: $('#whoami').offset().top - 50 
    }, 400);
});

$('#exp').on('click', function() {
  $('html, body').animate({
    scrollTop: $('#experience').offset().top - 50 
    }, 400);
});

$('#edu').on('click', function() {
  $('html, body').animate({
    scrollTop: $('#education').offset().top - 50
    }, 400);
});

$('#port').on('click', function() {
  $('html, body').animate({
    scrollTop: $('#portfolio').offset().top - 50
    }, 400);
});

$('#cc').on('click', function() {
  $('html, body').animate({
    scrollTop: $('#clean-code').offset().top - 50
    }, 400);
});

$('#git').on('click', function() {
  $('html, body').animate({
    scrollTop: $('#contact').offset().top - 50
    }, 400);
});

