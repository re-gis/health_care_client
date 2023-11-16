(function($) {
    "use strict";

     $(document).on('ready', function() {
			
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.header').addClass("sticky");
			} else {
				$('.header').removeClass("sticky");
			}
		});

		$('.search a').on( "click", function(){
			$('.search-top').toggleClass('active');
		});

		$('.menu').slicknav({
			prependTo:".mobile-nav",
			duration: 300,
			closeOnClick:true,
		});

		$('select').niceSelect();
		
		$( function() {
			$( "#datepicker" ).datepicker();
		} );
				
		$('input[type="checkbox"]').change(function(){
			if($(this).is(':checked')){
				$(this).parent("label").addClass("checked");
			} else {
				$(this).parent("label").removeClass("checked");
			}
		});
		
		$('.right-bar .bar').on( "click", function(){
			$('.sidebar-menu').addClass('active');
		});
		$('.sidebar-menu .cross').on( "click", function(){
			$('.sidebar-menu').removeClass('active');
		});

		var window_width = $(window).width();   
		if (window_width > 767) {
            // new WOW().init();
		}
	
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 100
				}, 1000);
			e.preventDefault();
		});	
	});
	
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});
		
})(jQuery);
