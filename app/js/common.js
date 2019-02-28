$(function() {
    var $slider =  $('.partners__slider'),
        $progressBar = $('.partners .progress-bar'),
        $progressLine = $progressBar.find('.progress-line');
    
    $slider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
        $progressBar.attr('aria-valuenow', $calc);
        $progressLine.css('width', $calc + '%');
    });
    
    $slider.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 400,
        autoplay: true,
        responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		  ]
    }); 
    
    var $hdr = $('header');
    
    $(window).scroll(function() {
        if($(this).scrollTop() >= 100) $hdr.addClass('sticky')
        else $hdr.removeClass('sticky'); 
    });
    
    
    var $btnTop = $('footer .btn-top');
    $btnTop.click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: 0
        }, 700);
    });
    
    
    var $btnsModal = $('[data-modal="model"]');
    $btnsModal.each(function(index) {
        $(this).click(function(e) {
            e.preventDefault();
            $('.overlay-modal').fadeIn(400, function() {
                    $('.modal-form')
                        .css('display', 'block')
                        .animate({
                            top: 25 + '%',
                            opacity: 1
                        });
            });  
        });
    });
    
    $('.modal-form .modal-close, .overlay-modal').click(function() {
        $('.modal-form').animate({
            opacity: 0,
            top: 45 + "%"
        }, 200, function() {
            $(this).css('display', 'none');
            $('.overlay-modal').fadeOut(400);
        }); 
    });
    
    $('.home header nav ul li a').click(function(e) {
        e.preventDefault();
        var $href = $(this).attr('href'), $top = $($href).offset().top;
        
        $('body, html').animate({
            scrollTop: $top
        }, 800);
    });
    
    $('.hamburger').click(function() {
        $(this).toggleClass('open');
        $('.popup-menu').css('display', 'flex').animate({
            left: 0,
            opacity: 1
        }, 500);
    });
    
    $('.popup-menu .close, .popup-menu ul li a').click(function() {
         $(this).closest('.popup-menu').css('display', 'none').animate({
            left: -135 + "px",
            opacity: 0
         }, 300);
         $('.hamburger').removeClass('open');   
    });
    
});