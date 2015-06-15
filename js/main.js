$(document).ready(function() {
    if (matchMedia) {
        var mq = window.matchMedia("(min-width: 992px)");

        function WidthChange(mq) {
            if (mq.matches) {
                $('.block').addClass('hidden');
                $('li').on('mouseenter', function() {
                    $('.start').hide();
                    var currentChar = $(this).find('a').attr('href');
                    $(currentChar).appendTo($('.char-info')).removeClass('hidden');
                });
                $('li').on('mouseleave', function() {
                    var currentChar = $(this).find('a').attr('href');
                    $(currentChar).addClass('hidden');
                });
                $('.start').appendTo($('.char-info')).show();
            } else {
                $('.block').removeClass('hidden');
            }
        }
        mq.addListener(WidthChange);
        WidthChange(mq);
    }
});
