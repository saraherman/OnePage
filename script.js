$( document ).ready(function() {


	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	    }, 500);
	    return false;
	});

	// initialize slick
	$('.slick').slick({
		
	});
	$('.single-item').slick();
	$('.slider2').slick({
		
	});
});
