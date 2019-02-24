$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
        loop: false,
        items: 4,
        margin: 10,
        center: true,
        startPosition: 3,
        responsiveClass:true,
        responsive:{
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }

    });



});