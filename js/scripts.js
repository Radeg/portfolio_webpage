//Project overlay initialization
$(function () {
    Boxgrid.init();
});

$(window).resize(function () {
    ProjectBottomResize();
})

//Loader
$(window).load(function() {
	$('#loading').fadeOut(200);
})

$(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
    
    //Parallax
    var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (!ismobile) {
        parallaxInit();
    }

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

    //Scroll to top
    var scrollTimeout;

    $('a.scroll-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $(window).scroll(function () {
        clearTimeout(scrollTimeout);
        if ($(window).scrollTop() > 400) {
            scrollTimeout = setTimeout(function () {
                $('a.scroll-top:hidden').fadeIn()
            }, 100);
        } else {
            scrollTimeout = setTimeout(function () {
                $('a.scroll-top:visible').fadeOut()
            }, 100);
        }
    });
});

//Resize .project-bottom height
function ProjectBottomResize() {
    var windowHeight = $(window).height();
    var itemHeight = $('.project-bottom').height();
    var ratio = itemHeight / windowHeight * 100
    var bottomShift = (ratio - 40) * 2;

    if (ratio > 40) {
        $('.project-bottom').css('bottom', -bottomShift + '%')
    }
}
