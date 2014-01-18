$(function(){

	$('textarea').click(function(){
		$(this).addClass('expand');
		$('#tweet-controls').css('display', 'block');
	});//textarea click function 

	$('textarea').keydown(function() {
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

	$('.button').click(function(){
		var text = $('textarea').val();
		

		$('#stream').prepend(
			"<div class='tweet'>" +
				"<div class='content'>" + 
					"<img class='avatar' src='img/alagoon.jpg' />" +
					"<strong class='fullname'>Greg</strong>" + 
					"<span class='username'> @greg</span>" +		
					"<p class='tweet-text'>" + text + "</p>" + 
					"<div class='tweet-actions'>"+
						"<ul>" +
							"<li>" + "<span class='icon action-reply'>" +
							"</span>" + " Reply " + "</li>" +
							"<li>" + "<span class='icon action-retweet'>" +
							"</span>" + " Retweet " + "</li>" +
							"<li>" + "<span class='icon action-favorite'>" +
							"</span>" + " Favorite "  + "</li>" +
							"<li>" + "<span class='icon action-more'>" +
							"</span>" + " More " + "</li>" +
						"</ul>" +
					"</div>" +
				"</div>" +
			"</div>");

	}); //button.click function

	$('.tweet').click(function(){
		$('.stats').css('display','block');
		//make only that certain tweet display stats
	});



}); //DOM ready function
