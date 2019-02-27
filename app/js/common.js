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
        autoplay: true
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
    
    
});