$(function(){


	//Expand text area and display button-count
	$('textarea').on('click', function(){
		$(this).addClass('expand');
		$('#tweet-controls').css('display', 'block');
	});
	//textarea click function 


	//Count the number of characters and make red-disable button
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
	});
	//textarea countdown function


	//Add tweet to tweet stream as button is clicked
	$('.button').on('click', function(){
		var text     = $('textarea').val(),
			newTweet = $('.tweet').eq(0).clone();

			newTweet.find('.tweet-text').text(text);
			newTweet.find('.avatar').attr('src', 'img/alagoon.jpg');
			newTweet.find('.fullname').text('Greg');
			newTweet.find('.username').text('@greg');
			newTweet.find('.tweet-compose').attr('placeholder', 'Reply to @greg');

		$('#stream').prepend(newTweet);

        $('textarea').val('');
        $('#char-count').text(140);

        //Display stats on click
        $('.tweet').on('click', function(){
		$('.stats').hide();
		$(this).find('.stats').show();
		});	
		//display stats

        // //Display tweet actions more prominently on hover
		$('.tweet').on('mouseenter', function(){
		$(this).find('.tweet-actions').css('opacity', '1');
		});
		//hover

		// //Return tweet actions to low opacity once mouseleaves
		$('.tweet').on('mouseleave', function(){
			$(this).find('.tweet-actions').css('opacity', '.4');
		});
		//low opacity
	}); 
	//button.click function

	//When tweet is clicked display the stats
	$('.tweet').on('click', function(){
		$('.stats').hide();
		$(this).find('.stats').show();
	});	
	// //Display stats


	// //Display tweet actions more prominently on hover
	$('.tweet').on('mouseenter', function(){
		$(this).find('.tweet-actions').css('opacity', '1');
	});
	// //hover

	// //Return tweet actions to low opacity once mouseleaves
	$('.tweet').on('mouseleave', function(){
		$(this).find('.tweet-actions').css('opacity', '.4');
	});
	//low opacity





}); //DOM ready function
