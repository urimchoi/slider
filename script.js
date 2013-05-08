// Change the size of the thumbnails from Small, Medium, and Large 

$(document).ready(function() {
	var $firstSlide = $('.slide').first(),
		$lastSlide = $('.slide').last();

	// creates an icon for each slide
	$('.slide').each(function() {
		$('#thumbnail').append('<div class="ball"></div>');
	});

	// when an icon is hovered over, the background will change to white
	$('.ball').mouseenter(function() {
		$(this).animate({backgroundColor:'#fff'}, 500);
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


	// fade transition between slides
	$('#next').click(function() {
		if ($('.slide:visible').is($lastSlide)) {
			$('.slide:visible').fadeOut(1000);
			$firstSlide.fadeIn(1000);
		} else {
			$('.slide:visible').fadeOut(1000);
			$('.slide:visible').next().fadeIn(1000);
		}
		
	});

	$('#previous').click(function() {
		if ($('.slide:visible').is($firstSlide)) {
			$('.slide:visible').fadeOut(1000);
			$lastSlide.fadeIn(1000);
		} else {
			$('.slide:visible').fadeOut(1000);
			$('.slide:visible').prev().fadeIn(1000);
		}
		
	});

});