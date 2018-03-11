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

/*Slider*/
// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }

/*List*/
/* Filter list*/

let toFilter = $('.dropdown').find('span'),
    filterBtn = $('#filterBtn'),
    tableElements = $('#data tbody tr td');

toFilter.click(function () {
    $(this).toggleClass("checked");
});

filterBtn.click(function () {

    let isChecked = $(".checked");
    if (isChecked.length !== 0) {
        isChecked.each(function () {
            let filterAttr = $(this).attr("data-name"),
                toShow = tableElements.filter('[data-name="' + filterAttr + '"]'),
                rowToShow = toShow.parent();

            rowToShow.css("background-color", "tomato");
        });
    }
    else{
        tableElements.css("background-color", "white");
    }

});


/* table sort */
let table = $('#data');


$('#sortNr, #sortFloor, #sortSurface, #sortGarden, #sortPrice, #sortStatus ')
    .each(function () {

        let th = $(this),
            thIndex = th.index(),
            inverse = false;

        th.click(function () {

            let imgUp = $(this).find('.up');
            let imgDwn = $(this).find('.down');

            if (imgUp.attr("src") === "assets/images/arr-green.png") {
                imgUp.attr("src", "assets/images/arr-grey.png");
                imgUp.css("transform", "rotate(0)");
                imgDwn.attr("src", "assets/images/arr-green.png");
                imgDwn.css("transform", "rotate(360deg)");

            } else {
                imgUp.attr("src", "assets/images/arr-green.png");
                imgUp.css("transform", "rotate(180deg)");
                imgDwn.attr("src", "assets/images/arr-grey.png");
                imgDwn.css("transform", "rotate(180deg)");
            }
            table.find('td').filter(function () {
                return $(this).index() === thIndex;

            }).sortElements(function (a, b) {

                return $.text([a]) > $.text([b]) ?
                    inverse ? -1 : 1
                    : inverse ? 1 : -1;

            }, function () {
                return this.parentNode;
            });
            inverse = !inverse;
        });
    });


/*pagination*/
$('#data').after('<div id="pagNav" class="pagination center"></div>');
const rowsShown = 8;
let rowsTotal = $('#data tbody tr').length;
let numPages = rowsTotal / rowsShown;
for (i = 0; i < numPages; i++) {
    let pageNum = i + 1;
    $('#pagNav').append('<a href="#" class="button square" rel="' + i + '">' + pageNum + '</a> ');
}

$('#data tbody tr').hide();
$('#data tbody tr').slice(0, rowsShown).show();
$('#pagNav a:first').addClass('active current');
$('#pagNav a').bind('click', function () {

    $('#pagNav a').removeClass('active current');
    $(this).addClass('active current');
    let currPage = $(this).attr('rel');
    let startItem = currPage * rowsShown;
    let endItem = startItem + rowsShown;
    $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).css('display', 'table-row').animate({opacity: 1}, 300);
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