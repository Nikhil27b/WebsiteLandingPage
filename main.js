// Intro background carousel
$("#intro-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    animateOut: 'fadeOut',
    items: 1
});

// Initiate the wowjs animation library
new WOW().init();

// Clients carousel (uses the Owl Carousel library)
$('.carousel-client').bxSlider({
    auto: true,
    slideWidth: 234,
    minSlides: 2,
    maxSlides: 5,
    controls: true
});

//Owl Slider Our Team

