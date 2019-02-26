$(document).ready(function() {
    var $owl = $('.owl-carousel');

	$owl.owlCarousel({
        loop: false,
        items: 1,
        margin: 10,
        center: true,
        startPosition: 1,
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

    $owl.on('click', '.owl-item', function() {
        var index = $(this).index();
    
        $owl.trigger('to.owl.carousel', [index, 200, true]);
    });
});