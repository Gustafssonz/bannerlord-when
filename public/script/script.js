$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    items: 2,
    loop: true,
    margin: 10,
    responsive: {
        600: {
            items: 4
        }
    }
	});
});