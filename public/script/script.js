$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
    loop: false,
    items: 3,
    margin: 100,
    responsive: {
        600: {
            items: 4
        }
    }
	});
});