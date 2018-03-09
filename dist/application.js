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

/*List*/

/*pagination*/
$('#data').after('<div id="pagNav" class="pagination center"></div>');
const rowsShown = 8;
let rowsTotal = $('#data tbody tr').length;
let numPages = rowsTotal/rowsShown;
for(i = 0;i < numPages;i++) {
    let pageNum = i + 1;
    $('#pagNav').append('<a href="#" class="button square" rel="'+i+'">'+pageNum+'</a> ');
}

$('#data tbody tr').hide();
$('#data tbody tr').slice(0, rowsShown).show();
$('#pagNav a:first').addClass('active current');
$('#pagNav a').bind('click', function(){

    $('#pagNav a').removeClass('active current');
    $(this).addClass('active current');
    let currPage = $(this).attr('rel');
    let startItem = currPage * rowsShown;
    let endItem = startItem + rowsShown;
    $('#data tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
    css('display','table-row').animate({opacity:1}, 300);
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