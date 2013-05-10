// Change the size of the thumbnails from Small, Medium, and Large 

$(document).ready(function() {
	var $firstSlide = $('.slide:first'),
		$lastSlide = $('.slide:last'),
		i = null;

	var containerWidth = $('#slider_container').width(),
		numSlides = $('.slide').length,
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

	function setSlidePosition($element) {
		$element.css({'left':$element.index() * containerWidth});
	}

	function nextSlide($element) {
		i = $lastSlide.position().left;

		if (i != 0) {
			$element.animate({left:'-='+containerWidth+'px'}, 500);
		} else {
			$element.animate({left:'+='+resetWidth+'px'}, 500);		
		}
	}

	function prevSlide($element) {
		i = $firstSlide.position().left;

		if (i != 0) {
			$element.animate({left:'+='+containerWidth+'px'}, 500);
		} else {
			$element.animate({left:'-='+resetWidth+'px'}, 500);		
		}
	}


	window.addEventListener('resize', function() {

		// reset the width variables once a browser is resized
		containerWidth = $('#slider_container').width();
		resetWidth = (numSlides * containerWidth) - containerWidth;

		// change the position of each slide to correspond with new width
		$('.slide').each(function() {
			setSlidePosition($(this));
		});
	});
});
