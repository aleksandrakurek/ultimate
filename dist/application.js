/* Smooth scrolling */
$('a').click(function () {
    $('html,body').unbind().animate({scrollTop: $($.attr(this, 'href')).offset().top}, 'slow');
});

/* Burger menu */

$('#burger').click(function () {
    console.log('hello');
    $('#burger-content').toggleClass('hide-md');
    $('#burger-content').toggleClass('open-burger');
});
