$(function(){

	$('textarea').click(function(){
		$(this).addClass('expand');
		$('#tweet-controls').css('display', 'block');
	});

	$('textarea').keydown(function() {
		var count = $(this).val().length;

		$('#char-count').text(140-count);

		//else subtract number
		

	});


});
