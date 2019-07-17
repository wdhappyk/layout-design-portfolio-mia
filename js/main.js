$(function DOMContentLoaded() {
    new WOW().init();

    $('.go-to').click(function goToElement(ev) {
        ev.preventDefault();

        var scroll_el = $(this).attr('href');

        if ($(scroll_el).length) $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);

        return false;
    });


    // Pop-Ups
    $('#portfolio .photos').magnificPopup({
        delegate: 'a.pop-up',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('#preview-video').magnificPopup({
        items: {
            src: '<video class="preview-video" src="assets/video.mp4" autoplay controls></video>',
            type: 'inline'
        }
    });

    // Left menu
    (function leftMenu() {
        var $menu = $('#left-menu'),
            $open = $('#left-menu-open'),
            $close = $('#left-menu-close'),
            $links = $('#left-menu .go-to');

        $open.on('click', function openLeftMenu() {
            $menu.css('transform', 'none');
        });

        $close.on('click', closeLeftMenu);
        $links.on('click', closeLeftMenu);

        function closeLeftMenu() {
            $menu.css('transform', 'translateX(100%)');
        }
    })();

    // About change slide
    (function about() {
        var n = 0,
            $els = $('#about .about__elem'),
            $counter = $('#about-counter');

            $els.each(function(n, el) {
                $counter.append($('<li' + (!n ? ' class="numbers__active"':'') + '>' + (n < 10 ? '0':'') + (n+1) + '</li>'));
            });

            setInterval(nextElem, 3000);

            function nextElem() {
                var $lis = $counter.find('li');
                $($els.get(n)).hide();
                $($lis.get(n)).removeClass('numbers__active');
                n++;
                if (n >= $els.length) n = 0;
                $($els.get(n)).fadeIn();
                $($lis.get(n)).addClass('numbers__active');
            }
    })();
});

