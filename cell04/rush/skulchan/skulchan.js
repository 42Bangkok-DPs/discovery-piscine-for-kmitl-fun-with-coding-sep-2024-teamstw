$(document).ready(function () {
    $('nav ul li a').hover(
        function () {
            $(this).stop().animate({
                backgroundColor: '#ff4081',
                color: '#ffffff'
            }, 300);
        },
        function () {
            $(this).stop().animate({
                backgroundColor: '#1e1e1e',
                color: '#ffffff'
            }, 300);
        }
    );

    $('nav ul li a').click(function (e) {
        if ($(this).attr('href').startsWith('#')) {
            e.preventDefault();
            var target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 800);
        }
    });
});
