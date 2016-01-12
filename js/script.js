
//when .html is loaded, do this 
$(document).ready(function() {

		// for all elements with .fade-slow do:
        $('.fade-slow').mouseenter(function() {
        	// when mouse enters element, fade to 100%
            $(this).stop().fadeTo('fast',1);
        });
        	//when mouse leaves element, fade to 50%
        $('.fade-slow').mouseleave(function() {
            $(this).stop().fadeTo('slow',0.5);
        });

        // when user clicks button with .chevron-down do:
        $('.chevron-down').click(function (){
        		//sites scrolls up so that #scrollfeatures is on top
                $('html, body').animate({
                    scrollTop: $('#scrollfeatures').offset().top
                }, 400, 'easeInCubic');
            });

    });