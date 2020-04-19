;$(document).foundation();

function qs(str, all) {

    return all

        ? document.querySelectorAll(str)

        : document.querySelector(str);

}



$(document).ready(function () {
	// reveal on scroll
	// look in the head of html
	loadReveal = function () {
	
	    var sr = ScrollReveal({
	        mobile: false,
	        distance: '120px',
	        duration: 600,
	        scale: 1,
	        viewFactor: 0.4
	    });
	
	    sr.reveal('[data-sr-top]', { origin: 'top' });
	    sr.reveal('[data-sr-left]', { origin: 'left' });
	    sr.reveal('[data-sr-right]', { origin: 'right' });
	    sr.reveal('[data-sr-delay="300"]', { delay: 300 });
	    sr.reveal('[data-sr-delay="600"]', { delay: 600 });
	    sr.reveal('[data-sr-delay="900"]', { delay: 900 });
	
	    // services
	    sr.reveal('.service', 200);
	};
	

	$(".owl-carousel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        lazyLoad: true,
        stagePadding: 10,
        responsive: {
            640: {
                items: 2,
                margin: 100
            }
        }
    });
});
