$(function(){

	$('textarea').click(function(){
		$(this).addClass('expand');
		$('#tweet-controls').css('display', 'block');
	});

	$('textarea').keydown(function() {
		var count = $(this).val().length;

		$('#char-count').text(140-count);

		if (count >= 130 ) {
			$('#char-count').css('color', 'red');
			$('.button').attr('disabled', 'disabled');
		} else {
			$('#char-count').css('color', 'black');
			$('.button').removeAttr('disabled', 'disabled');
		}
	});

	$('.button').click(function(){
		//<!-- STEP 5: When the user successfully inputs characters and clicks the “Tweet” button, a new 
		//tweet should be created and added to the tweet stream in the main column, using the user’s fake 
		//profile image in the top left and username/fullname. -->
		//<!-- HINT: jQuery ".prepend" method -->
		$('#stream').prepend('<p>Greg</p>');

	});


});
