(function($) {
    "use strict";

    /*===========================================
    [Table of contents]
    1.window load functionality
    2.document ready load functionality
    3. scroll load functionality
    4. resize load functionality
    
    =============================================*/

    /* 1.window load functionality
    =============================================*/
    $(window).on('load', function() {

    });


    /* 2.document ready load functionality
    =============================================*/
    $(document).ready(function() {

        // Data images
        //----------------------------------
        if ($('.background-image').length > 0) {
            $('.background-image').each(function() {
                var src = $(this).attr('data-src');
                $(this).css({
                    'background-image': 'url(' + src + ')'
                });
            });
        }

        /* menu active
        =================================================*/



        //menu jquery mobile code
        $(function() {
            $('.menu').cookcodesmenu({
                brand: '<a href="index.html"><img src="assets/images/logo.png" alt=""></a>'
            });
        });




        /* header search active
        =================================================*/
        $(".search i").on("click", function(e) {
            e.stopPropagation();
            $(".search-box").toggle("");
        });

        /*slider one active code
        =================================================*/
        if ($('.slider-one-area.owl-carousel').length > 0) {
            $('.slider-one-area.owl-carousel').owlCarousel({
                loop: true,
                items: 1,
                autoplay: true,
                nav: false,
                dots: false,
                navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
            });
        }
        /*testimonail active code
        =================================================*/
        if ($('.testimonial-slider.owl-carousel').length > 0) {
            $('.testimonial-slider.owl-carousel').owlCarousel({
                loop: true,
                items: 3,
                autoplay: true,
                nav: false,
                dots: false,
                margin: 30,
                navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        center: false
                    },
                    480: {
                        items: 1,
                        center: false,
                        margin: 0
                    },
                    600: {
                        items: 1,
                        center: false,
                        margin: 0
                    },
                    768: {
                        items: 2,
                        center: false
                    },
                    992: {
                        items: 3

                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
        if ($('.testimonial-two-slider.owl-carousel').length > 0) {
            $('.testimonial-two-slider.owl-carousel').owlCarousel({
                loop: true,
                items: 2,
                autoplay: true,
                nav: false,
                dots: false,
                margin: 30,
                navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        center: false
                    },
                    480: {
                        items: 1,
                        center: false,
                        margin: 0
                    },
                    600: {
                        items: 1,
                        center: false,
                        margin: 0
                    },
                    768: {
                        items: 2,
                        center: false
                    },
                    992: {
                        items: 2

                    },
                    1200: {
                        items: 2
                    }
                }
            });
        }
        /*partner active code
        =================================================*/
        if ($('.partner-slider.owl-carousel').length > 0) {
            $('.partner-slider.owl-carousel').owlCarousel({
                loop: true,
                items: 6,
                autoplay: true,
                nav: false,
                dots: false,
                margin: 30,
                navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        center: false
                    },
                    480: {
                        items: 1,
                        center: false,
                        margin: 0
                    },
                    600: {
                        items: 1,
                        center: false,
                        margin: 0
                    },
                    768: {
                        items: 2,
                        center: false
                    },
                    992: {
                        items: 3

                    },
                    1200: {
                        items: 6
                    }
                }
            });
        }

        //blog slider active code
        //----------------------------------
        if ($('.blog-slide.owl-carousel').length > 0) {
            $('.blog-slide.owl-carousel').owlCarousel({
                loop: true,
                items: 1,
                autoplay: true,
                nav: true,
                dots: false,
                navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
            });
        }
        /* wow js active code
        =================================================*/
        new WOW().init();

        /*scrollUp js active
        ============================*/
        $.scrollUp({
            scrollText: '<i class="flaticon-one-finger-click"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });


        // image and video popup activation code
        //----------------------------------

        $('.popup-link').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
        });
        if ($('.video-popup').length > 0) {
            $('.video-popup').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }

        /*Counter up activation active
        -----------------------------------------*/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        //team active code
        //----------------------------------
        if ($('.team-slider.owl-carousel').length > 0) {
            $('.team-slider.owl-carousel').owlCarousel({
                loop: true,
                items: 4,
                autoplay: true,
                nav: false,
                dots: true,
                navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
                margin: 30,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    480: {
                        items: 1,
                        margin: 30
                    },
                    767: {
                        items: 2,
                        margin: 30
                    },
                    991: {
                        items: 3,
                    },
                    1200: {
                        items: 4
                    }
                }
            });
        }

        //google map activation code
        //----------------------------------

        if ($('#gmap').length > 0) {
            new GMaps({
                div: '#gmap',
                lat: -37.8173234, // 37.8173234,144.9537353
                lng: 144.9537353,
                scrollwheel: false,
                styles: [{
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#dddddd"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 29
                            },
                            {
                                "weight": 0.2
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 18
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#dddddd"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "on"
                        }]
                    }
                ]
            }).addMarker({
                lat: -37.8173234, //23.792930, 90.403798
                lng: 144.9537353,
                infoWindow: {
                    content: '<p> Radontheme, Bangladesh</p>'
                }
            });

        }

        //loader js active
        //----------------------------------
        setTimeout(() => {
            $('#preloader').fadeOut(1500);
        }, 1500);


    });

    /* 3. scroll load functionality
    =============================================*/
    $(window).on('scroll', function() {


    });


    /* 4. resize load functionality
    =============================================*/
    $(window).on('resize', function() {

    }); // End Resize

})(jQuery);