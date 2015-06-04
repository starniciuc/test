$(document).foundation();

$('.home-slider').superslides({
  pagination: true,
  //play: 10000,
  scrollable: true
});

function goScroll(a) {
    if (a != 0) {
        $('html, body').animate({scrollTop: $("#" + a).offset().top}, 700);
    } else {
        $('html, body').animate({scrollTop: 0}, 700);
    }

}