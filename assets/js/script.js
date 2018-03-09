/* Smooth scrolling */
$('a').click(function () {
    $('html,body').unbind().animate({scrollTop: $($.attr(this, 'href')).offset().top}, 'slow');
});

/* Burger menu */

$('#burger').click(function () {
    $('#burger-content').toggleClass('hide-md');
    $('#burger-content').toggleClass('open-burger');
});

/* Smooth scrolling */
$('a').click(function () {
    $('html,body').unbind().animate({scrollTop: $($.attr(this, 'href')).offset().top}, 'slow');
});

/* Burger menu */

$('#burger').click(function () {
    $('#burger-content').toggleClass('hide-md');
    $('#burger-content').toggleClass('open-burger');
});


/* Draws */

const groundFloorLeft = $('#grFlrL');
const groundFloorRight = $('#grFlrR');
const floorLeft = $('#flrL');
const floorRight = $('#flrR');
const imgDraw = $('#sketch');

groundFloorLeft.click(function () {
    imgDraw.attr("src", "assets/images/draw.png");
});
groundFloorRight.click(function () {
    imgDraw.attr("src", "assets/images/draw1.png");
});
floorLeft.click(function () {
    imgDraw.attr("src", "assets/images/draw2.png");
});
floorRight.click(function () {
    imgDraw.attr("src", "assets/images/draw3.png");
});