$(document).ready(function () {
    //Parallax
    $('header[data-type="background"]').each(function () {
        var $bgobj = $(this);
        $(window).scroll(function () {
            var yPos = -($(window)).scrollTop()  / $bgobj.data('speed');
            var coords = '50% ' + yPos + 'px';
            $bgobj.css({
                backgroundPosition: coords
            });
        });
    });

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
});
