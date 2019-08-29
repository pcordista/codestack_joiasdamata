
var contadorstart = $('.count').offset().top;
var screen_height = $(window).height();
var activation_point = contadorstart - screen_height;
var max_scroll_height = $('body').height - screen_height - 5;

var check = false;

$(window).on('scroll', function () {
    var y_scroll_pos = window.pageYOffset;

    var element_in_view = y_scroll_pos > activation_point;
    var has_finalized = max_scroll_height <= y_scroll_pos && !element_in_view;

    if (element_in_view || has_finalized) {
        if (!check) {
            $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
            });
            check = true;
        } else {
        }
    }
})