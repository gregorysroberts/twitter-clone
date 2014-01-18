$(function(){

	$('textarea').on('click', function(){
		$(this).addClass('expand');
		$('#tweet-controls').css('display', 'block');
	});//textarea click function 

	$('textarea').on('keydown', function() {
		var count = $(this).val().length;

		$('#char-count').text(140-count);

		if (count >= 130 ) {
			$('#char-count').css('color', 'red');
		} else {
			$('#char-count').css('color', 'black');

		}

		if (count > 140) {
			$('.button').attr('disabled', 'disabled');
		} else {
			$('.button').removeAttr('disabled', 'disabled');			
		}
	});//textarea countdown function

	$('.button').on('click', function(){
		var text     = $('textarea').val(),
			newTweet = $('.tweet').eq(0).clone();

		newTweet.find('.tweet-text').text(text);
		newTweet.find('.avatar').attr('src', 'img/alagoon.jpg');
		newTweet.find('.fullname').text('Greg');
		newTweet.find('.username').text('@greg');

		$('#stream').prepend(newTweet);

        $('textarea').val('');
        $('#char-count').text(140);

	}); //button.click function

	$('.tweet').on('click', function(){
		$('.stats').hide();
		$(this).find('.stats').css('display', 'block');
	});	

	$('.tweet').on('mouseenter', function(){
		$(this).find('.tweet-actions').css('opacity', '1');
	});

	$('.tweet').on('mouseleave', function(){
		$(this).find('.tweet-actions').css('opacity', '.4');
	});





}); //DOM ready function
