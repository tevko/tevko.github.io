$('button').click(function() {
	$('button , .explains-the-app').fadeToggle().promise().done(function(){
		$('.after , .what-to-build').fadeToggle();
	});
});

$('button, .another').click(function(event) {
	event.preventDefault();
	var build = new Array("Build a responsive HTML email!","Build an animated card that celebrates the closest holiday!","Make a to do list app without using jQuery","Build a slideshow using HTML imports","Write a for loop in SASS!","Build a widget that adds zoom functionality to images on a page","Build an offscreen nav that slides into view when a menu icon is clicked","write an unordered HTML list in HAML, then Jade, then Slim, then Markdown, then binary (just kidding)","Write an anonymous javascript function that toggles a class on an element when it is clicked. No jQuery allowed"),
	    randno = build[Math.floor( Math.random() * build.length )];
    $('span').text( randno);
});

$('.close').click(function() {
	$('.tag').fadeToggle();
});