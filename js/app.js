$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.ryu-still').hide();
		$('.hadouken').finish().show()
		.animate(
			{'left': '300px'}, 500, function() {
				$(this).hide();
				$(this).css('left', '-212px');
			}
		);
	})	
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
	})
	$('body').keydown(function(event){
		if(event.keyCode == 88){
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ruy-throwing').hide();
			$('.ryu-cool').show();
		}
})
	$('body').keyup(function(event){
		if(event.keyCode == 88){
			$('.ryu-cool').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-still').show();
		}
})
});
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();	
}
