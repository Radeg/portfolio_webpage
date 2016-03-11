//Project overlay initialization
$(function () {
    Boxgrid.init();
});

$(window).resize(function () {
    ProjectBottomResize();
})

$(document).ready(function () {
    //Parallax
    parallaxInit();

    function parallaxInit() {
        $('header').parallax("30%", 0.1);
        $('#stripe-banner').parallax("30%", 0.1);
    }

    //Sticky navigation
    $(".navbar").sticky({
        topSpacing: 0
    });

    //#skills appear
    appear({
        init: function init() {},
        elements: function elements() {
            return document.getElementsByClassName('chart');
        },
        appear: function appear(el) {
            $(function () {
                $('.chart').easyPieChart({
                    barColor: '#e74c3c',
                    trackColor: '#e6e8ed',
                    scaleColor: '#fff',
                    size: 170,
                    lineWidth: 15,
                    lineCap: 'square'
                });
            });
        },
        bounds: 200,
        reappear: true
    });

    //Carousel
    $('.carousel').carousel();
});

//Resize .project-bottom height
function ProjectBottomResize () {
    var windowHeight = $(window).height();
    var itemHeight = $('.project-bottom').height();
    var ratio = itemHeight / windowHeight * 100
    var bottomShift = (ratio - 40) * 2;

    if (ratio > 40) {
        $('.project-bottom').css('bottom', -bottomShift + '%')
    }
}

