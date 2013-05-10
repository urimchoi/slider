// Change the size of the thumbnails from Small, Medium, and Large 

$(document).ready(function() {
	
	var settings = $.extend({transition: 'fade'});

	var $firstSlide = $('.slide:first'),
		$lastSlide = $('.slide:last'),
		numSlides = $('.slide').length,
		i = null;

	console.log(settings);

	// creates an icon for each slide
	$('.slide').each(function() {
		$('#thumbnail').append('<div class="ball"></div>');
	});

	// when an icon is hovered over, the background will change to white
	$('.ball').mouseenter(function() {
		$(this).animate({backgroundColor:'#fff'}, 500);
	});

	if (settings.transition === 'slide') 
	{

		var containerWidth = $('#slider_container').width(),
			resetWidth = (numSlides * containerWidth) - containerWidth;


		// positions all the slides next to each other
		$('.slide').each(function() {
			setSlidePosition($(this));
		});

		// previous and next buttons
		$('#next').click(function() {
			nextSlide($('.slide'));
		});

		$('#previous').click(function() {
			prevSlide($('.slide'));
		});

		// when an icon is clicked on, it will take you to that slide
		$('.ball').click(function() {
			var i = $(this).index()
				slideLeftPosition = $('.slide').eq(i).position().left;

			if (slideLeftPosition > 0) {
				$('.slide').animate({left:'-='+slideLeftPosition+'px'}, 500);
			} 
			else if (slideLeftPosition < 0) {
				$('.slide').animate({left:'+='+Math.abs(slideLeftPosition)+'px'}, 500);
			} 

		});


		// In the event of the user resizing their browser
		window.addEventListener('resize', function() {

			// reset the width variables once a browser is resized
			containerWidth = $('#slider_container').width();
			resetWidth = (numSlides * containerWidth) - containerWidth;

			// change the position of each slide to correspond with new width
			$('.slide').each(function() {
				setSlidePosition($(this));
			});
		});
	}

	else if (settings.transition === 'fade') 
	{
		$('.slide').not(':first').each(function() {
			$(this).hide();
		});

		// previous and next buttons
		$('#next').click(function() {
			nextFade($('.slide'));
		});

		$('#previous').click(function() {
			prevFade($('.slide'));
		});

		// when an icon is clicked on, it will take you to that slide
		$('.ball').click(function() {
			var i = $(this).index()
			if (i === $('.slide:visible').index()) {
				return false;
			} else {
				$('.slide:visible').fadeOut(1000);
				$('.slide').eq(i).fadeIn(1000);
			}

		});

		console.log($('.slide').filter(':visible').index());
	}

	// functions to make the world go round
	function setSlidePosition($) {
		$.css({'left':$.index() * containerWidth});
	}

	function nextSlide($) {
		i = $lastSlide.position().left;

		if (i != 0) {
			$.animate({left:'-='+containerWidth+'px'}, 500);
		} else {
			$.animate({left:'+='+resetWidth+'px'}, 500);		
		}
	}

	function prevSlide($) {
		i = $firstSlide.position().left;

		if (i != 0) {
			$.animate({left:'+='+containerWidth+'px'}, 500);
		} else {
			$.animate({left:'-='+resetWidth+'px'}, 500);		
		}
	}

	function nextFade($) {
		var slideIndex = $.filter(':visible').index();
		
		$.eq(slideIndex).fadeOut(1000);
		
		if (slideIndex != numSlides - 1) {
			$.eq(slideIndex+1).fadeIn(1000);
		} else {
			$.eq(0).fadeIn(1000);
		}
	}

	function prevFade($) {
		var slideIndex = $.filter(':visible').index();
		
		$.eq(slideIndex).fadeOut(1000);
		
		if (slideIndex != 0) {
			$.eq(slideIndex-1).fadeIn(1000);
		} else {
			$.eq(numSlides-1).fadeIn(1000);
		}
	}
	options = {
		transition: 'fade'
	};
});

