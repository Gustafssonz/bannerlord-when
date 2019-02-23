$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
        loop: false,
        items: 4,
        margin: 10,
        center: true,
        startPosition: 1,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
            margin: 10,
        },
        600:{
            items:2,
            margin: 0,
        },
        1000:{
            items:4,
        }
    }

    });



});