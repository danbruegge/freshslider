var slideshow = $('#Slideshow');
if (slideshow.length > 0) {
    slideshow.freshslider({
        animation: 'swing',
        fadingSpeed: 800,
        autoSlide: true,
        cycle: true,
        navType: 'arrows',
        navContainer: slideshow.children('.slider-nav-wrapper'),
        history: window.History,
    });
}
