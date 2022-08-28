
jQuery(function ($) {
    "use strict";
    $(window).on("load", function () {


        /* ===================================
         Loading Timeout
         ====================================== */

        "use strict";
        setTimeout(function () {
            $("#loader").fadeOut("slow");
        }, 1000);
    });
    var $window = $(window);
    var windowsize = $(window).width();
      /*=========================
            wow js
    ==========================*/

    if ($(window).width() > 767) {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
            live: true,
            offset: 0,
            mobile: false,
        });
        new WOW().init();
    }

    //scroll sections
    $(".pagescroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top
        }, 800);
    });

/*header-appear */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 180) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });
    /* ===================================
          Rotating Text
          ====================================== */

    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "flipInX",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 3000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });


    /*-- counters --*/
    $('.count').each(function () {
        $(this).appear(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });


    /*  end of counter js * /

    /* ===================================
        Owl Carousel
    ====================================== */

    var owl1 = $('#owl-client');
    owl1.owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        autoplay: true,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        dotsContainer: "#owl-thumbs",
        nav: true,
        navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"]

    });
    /*----- Menu On click -----*/
    if ($("#sidemenu_toggle").length) {
                $("body").addClass("pushwrap");
                $("#sidemenu_toggle").on("click", function () {
                    $(".pushwrap").toggleClass("active");
                    $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        });
    }

    /*------------ Initializing Particles -------------*/
    if ($("#particles-js").length) {
        window.onload = function () {
            Particles.init({
                selector: '#particles-js',
                color: '#ffffff',
                connectParticles: false,
                sizeVariations: 14,
                maxParticles: 140,
            });
        };
    }
    /*bottom menu fix*/
    if ($("nav.navbar").hasClass("fixed-bottom")) {
        var navHeight = $(".fixed-bottom").offset().top;
        $window.scroll(function () {
            if ($window.scrollTop() > navHeight) {
                $('.fixed-bottom').addClass('bottom-fixedmenu');
            } else {
                $('.fixed-bottom').removeClass('bottom-fixedmenu');
            }
        });
    }
    /* ===================================
        Portfolio
    ====================================== */

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        slidesPerView: 7,
        shortSwipes: false,
        longSwipes: false,
        touchRatio: 0,
        slideToClickedSlide: true,
        preventClicksPropagation: false,
        preventClicks: false,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    var galleryTop = new Swiper('.gallery-top', {
        shortSwipes: false,
        effect: 'fade',
        longSwipes: false,
        slideToClickedSlide: true,
        preventClicksPropagation: false,
        preventClicks: false,
        touchRatio: 0,
        loop: false,
        thumbs: {
            swiper: galleryThumbs,
        }
    });

    /* ===================================
        Portfolio Filter
    ====================================== */

    $(function () {
        var selectedClass = "";
        $(".fil-cat").click(function () {

            $(".fil-cat").removeClass("active");
            $(this).addClass("active");

            selectedClass = $(this).attr("data-rel");
            $("#portfolio div").not("." + selectedClass).removeClass('scale-anm');

            setTimeout(function () {
                $("." + selectedClass).addClass('scale-anm');
                if ($('#portfolio').find('.scale-anm').length < 7) {
                    $('#portfolio').addClass('active');
                } else {
                    $('#portfolio').removeClass('active');
                }
            }, 300);
        });
    });


    /* ===================================
        Instafeed
    ====================================== */

    if ($("#instafeed-gallery-feed").length) {

        var galleryFeed = new Instafeed({
            get: 'user',
            userId: '7439059566',
            limit: 8,
            resolution: 'standard_resolution',
            accessToken: '7439059566.1677ed0.a668bf15a2fb4f72ac40b0ea975e97d4',
            sortBy: 'most-recent',
            template:
            // '<a href="{{image}}">'+
            '<div class="img-featured-container">' +
            '<div class="img-backdrop"></div>' +
            '<div class="description-container">' +
            '</div>' +
            '<img src="{{image}}" class="img-responsive">' +
            '</div>',
            // '</a>'+
            target: "instafeed-gallery-feed",
            after: function () {

                var owl5 = $(".owl-insta"),
                    owlSlideSpeed = 700;

                // init owl
                $(document).ready(function () {
                    owl5.owlCarousel({
                        loop: true,
                        dots: false,
                        responsive: {
                            0: {
                                items: 1
                            },
                            200: {
                                items: 2
                            },
                            400: {
                                items: 3
                            },
                            768: {
                                items: 5
                            },
                            1199: {
                                items: 7
                            }
                        }
                    });
                });
            }
        });
        galleryFeed.run();
    }
/*================================
           fancy closed btn
 =================================*/

    $('.fancybox-close-small').on('click', function(){
        $.fancybox.close();
        parent.jQuery.fancybox.close()
    });
    $('.hiking').click(function(){
        $.fancybox.close();
        parent.jQuery.fancybox.close()
    });
    $('.outdoor').click(function(){
        $.fancybox.close();
        parent.jQuery.fancybox.close()
    });
});


if ($('#contact').length){
/*---- Maps ----*/
function initialize() {
    var latlng = new google.maps.LatLng(51.509312,-0.185437);
    var latlng2 = new google.maps.LatLng(40.753937,-74.125313);
    var myOptions = {
        zoom: 11,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.city
    };

    var myOptions2 =  {
        zoom: 11,
        center: latlng2,
        mapTypeId: google.maps.MapTypeId.city
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var map2 = new google.maps.Map(document.getElementById("map_canvas_2"), myOptions2);

    var myMarker = new google.maps.Marker(
        {
            position: latlng,
            map: map,
            title:"Pune"
        });

    var myMarker2 = new google.maps.Marker(
        {
            position: latlng2,
            map: map2,
            title:"Noida"
        });

}
google.maps.event.addDomListener(window, 'load', initialize);

}




/* ------ Revolution Slider ------ */

/*main slider*/
$("#banner-main").show().revolution({
    sliderType: "standard",
    sliderLayout: "fullscreen",
    scrollbarDrag: "true",
    dottedOverlay: "none",
    navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        bullets: {
            style: "",
            enable: false,
            rtl: false,
            hide_onmobile: false,
            hide_onleave: false,
            hide_under: 767,
            hide_over: 9999,
            tmp: '',
            direction: "vertical",
            space: 10,
            h_align: "right",
            v_align: "center",
            h_offset: 40,
            v_offset: 0
        },
        arrows: {
            enable: true,
            hide_onmobile: true,
            hide_onleave: true,
            hide_under: 767,
            left: {
                h_align: "left",
                v_align: "center",
                h_offset: 20,
                v_offset: 30,
            },
            right: {
                h_align: "right",
                v_align: "center",
                h_offset: 20,
                v_offset: 30
            },
        },
        touch: {
            touchenabled: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false,
        }
    },
    viewPort: {
        enable: true,
        outof: "pause",
        visible_area: "90%"
    },
    responsiveLevels: [4096, 1024, 778, 480],
    gridwidth: [1140, 1024, 750, 480],
    gridheight: [600, 500, 500, 350],
    lazyType: "none",
    parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 9000,
        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
    },
    shadow: 0,
    spinner: "off",
    stopLoop: "off",
    stopAfterLoops: -1,
    stopAtSlide: -1,
    shuffle: "off",
    autoHeight: "off",
    hideThumbsOnMobile: "off",
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    debugMode: false,
    fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false,
    }
});
/* Index5 */
$("#rev_slider_5_1").show().revolution({
    sliderType: "standard",
    jsFileLocation:"//localhost:82/revslider/revslider/public/assets/js/",
    sliderLayout: "fullscreen",
    dottedOverlay: "none",
    delay: 9000,
    navigation: {},
    responsiveLevels: [1240, 1024, 778, 480],
    visibilityLevels: [1240, 1024, 778, 480],
    gridwidth: [1240, 1024, 778, 480],
    gridheight: [868, 768, 960, 720],
    lazyType: "none",
    parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 2000,
        speedbg: 0,
        speedls: 0,
        levels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 55],
        disable_onmobile: "on"
    },
    shadow: 0,
    spinner: "off",
    autoHeight: "off",
    fullScreenAutoWidth: "off",
    fullScreenAlignForce: "off",
    fullScreenOffsetContainer: "",
    fullScreenOffset: "",
    disableProgressBar: "on",
    hideThumbsOnMobile: "off",
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    debugMode: false,
    fallbacks: {
        simplifyAll: "off",
        disableFocusListener: false



    }
});
/*Video Background*/
$("#video").show().revolution({
    sliderType: "standard",
    sliderLayout: "fullscreen",
    scrollbarDrag: "true",
    dottedOverlay: "none",
    navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        bullets: {
            enable: false,
        },
        touch: {
            touchenabled: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
        }
    },
    viewPort: {
        enable: true,
        outof: "pause",
        visible_area: "90%"
    },
    responsiveLevels: [4096, 1024, 778, 480],
    visibilityLevels: [1240, 1024, 778, 480],
    gridwidth: [1140, 1024, 750, 480],
    gridheight: [600, 500, 500, 350],
    lazyType: "none",
    parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 9000,
        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50]
    },
    shadow: 0,
    spinner: "off",
    stopLoop: "off",
    stopAfterLoops: -1,
    stopAtSlide: -1,
    shuffle: "off",
    autoHeight: "off",
    hideThumbsOnMobile: "off",
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    debugMode: false,
    fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false
    }
});




