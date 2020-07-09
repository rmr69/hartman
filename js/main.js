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


    /*slider one active code
        =================================================*/
    if ($('.services-slider.owl-carousel').length > 0) {
        $('.services-slider.owl-carousel').owlCarousel({
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



    /*---------------------
    Circular Bars - Knob
    --------------------- */
    if (typeof($.fn.knob) != 'undefined') {
        $('.knob').each(function() {
            var $this = $(this),
                knobVal = $this.attr('data-rel');

            $this.knob({
                'draw': function() {
                    $(this.i).val(this.cv + '%')
                }
            });
            $this.appear(function() {
                $({
                    value: 0
                }).animate({
                    value: knobVal
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.val(Math.ceil(this.value)).trigger('change');
                    }
                });
            }, { accX: 0, accY: -150 });
        });
    }


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