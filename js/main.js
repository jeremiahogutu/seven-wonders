
window.sr = ScrollReveal();
	sr.reveal('.navbar', {
		duration: 2000,
		origin: 'bottom'
	});
	sr.reveal('.showcase-left', {
		duration: 2000,
		origin: 'top',
		// distance: '300px'
	});
	sr.reveal('.showcase-right', {
		duration: 2000,
		origin: 'right',
		distance: '300px'
	});
	sr.reveal('.showcase-btn', {
		duration: 2000,
		delay: 1000,
		origin: 'bottom',
		// distance: '300px'
	});
	sr.reveal('.contact-form', {
		duration: 2000,
		origin: 'bottom'
	});

/*
* ----------------------------------------------------------------------------------------
*  SMOOTH SCROOL JS
* ----------------------------------------------------------------------------------------
*/

    $('a.smooth-scroll').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1500);
        e.preventDefault();
    });