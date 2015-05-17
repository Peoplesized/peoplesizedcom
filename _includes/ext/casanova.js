/*global document:true, imagesLoaded:true, setInterval:true, clearInterval:true, Maplace:true, google:true, countUp:true*/
/*jslint nomen: true */
(function () {
    'use strict';

    var root, $, casanova;

    /* Create the window instance */
    root = this;
    $ = root.jQuery || root.$;

    /* Define casanova as an object */
    casanova = {};

    /* Fixed header */
    casanova.fixedHeader = function () {
        var doc    = $(document),
            header = $('#site-header');

        if (doc.outerWidth() > 800) {
            header.sticky();
        }
    };

    /* Main menu */
    casanova.menu = function () {
        var header  = $('#site-header'),
            menu    = $('#site-nav'),
            mobile  = $('<nav id="mobile-menu" />'),
            clone   = menu.children('.dropdown').clone(),
            trigger = $('<a id="mobile-menu-trigger" href="#"><i class="fa fa-bars"></i></a>');

        clone.removeClass('dropdown');
        clone.find('ul, li').removeAttr('class');
        clone.find('.fa').remove();

        menu.casanovaMenu();
        
        trigger.insertAfter(menu);
        mobile.append(clone).appendTo(header);
        mobile.children().slicknav({
            prependTo: '#mobile-menu',
            duplicate: false
        });

        trigger.click(function (event) {
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                mobile.find('.slicknav_nav').slicknav('close');
            } else {
                $(this).addClass('open');
                mobile.find('.slicknav_nav').slicknav('open');
            }
            event.preventDefault();
        });
        
    };

    /* Section */
    casanova.section = function () {
        var self = this;

        $('.section').each(function () {
            var section = $(this),
                data    = section.data(),
                isMap   = section.hasClass('section-map'),
                map     = section.children('.map'),
                div     = $('<div />');

            if (data.overlay) {
                div.clone().addClass('section-overlay').css('background-color', data.overlay).css('opacity', data.overlayOpacity).prependTo(section);
            }

            if (data.pattern) {
                div.clone().addClass('section-pattern ' + data.pattern).css('opacity', data.patternOpacity).prependTo(section);
            }

            if (isMap) {
                section.on('click', '.map-switcher', function (event) {
                    var content = section.children('.section-overlay, .section-pattern, .container'),
                        height  = section.children('.container').outerHeight();

                    if ($(this).hasClass('show-map')) {
                        content.hide();
                        section.height(height);
                        $(this).hide();
                        $('.hide-map').show();
                    } else {
                        content.show();
                        section.height('auto');
                        $(this).hide();
                        $('.show-map').show();
                    }

                    event.preventDefault();
                });
            }
        });
    };

    /* Initialize tabs */
    casanova.stats = function () {
        var el = $('.stats');

        el.each(function () {
            var id = casanova.uniqueId();

            $(this).find('.number').attr('id', id);
        });

        el.appear().one('appear', function () {
            var num  = $(this).find('.number'),
                anim = new countUp(num.attr('id'), 0, num.text().replace(',', ''), 0, 2.5);

            anim.start();
        });
    };

    casanova.backToTop = function () {
        var el = $('<div id="back-to-top"><a class="icon square primary" href="#"><i class="fa fa-chevron-up"></i></a></div>');

        $(window).scroll(function () {
            if ( $(this).scrollTop() > ( $(this).height() / 3 ) ) {
                el.fadeIn('slow');
            } else {
                el.fadeOut('slow');
            }
        });

        el.appendTo('body').on('click', function (e) {
            $('body,html').animate({
                scrollTop: 0
            }, 800);

            e.preventDefault();
        });
    };


    /* Attach casanova object to the window */
    root.casanova = casanova;

}).call(this);