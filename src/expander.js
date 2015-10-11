$(".full").children().hide();
$(".full h2").show();
$(".full").click(function() {
    $(this).children("div").toggle();
});
