$('button').click(function() {
	$('button , .explains-the-app').fadeToggle().promise().done(function(){
		$('.after , .what-to-build').fadeToggle();
	});
});

$('button, .another').click(function(event) {
	event.preventDefault();
	var build = new Array("Build a responsive HTML email!","Build an animated card that celebrates the closest holiday!","Make a to do list app without using jQuery","Build a slideshow using HTML imports","Write a for loop in SASS!","Build a widget that adds zoom functionality to images on a page","Build an offscreen nav that slides into view when a menu icon is clicked","write an unordered HTML list in HAML, then Jade, then Slim, then Markdown, then binary (just kidding)","Write an anonymous javascript function that toggles a class on an element when it is clicked. No jQuery allowed","There are a lot of responsive image solutions out there. Build a demo using one of them","Make a CSS triangle","Using the :before psuedo element in css, make a div that has a transparent background image","Make something using CSS regions","Animate an SVG","Get an ellipsis to appear on a div that has a set width and height and more than one line of text","Find something cool on dribble and bring it to life with code", "Build a canvas element that you can draw on with your mouse","Find a slideshow online, copy the code, and add touch functionality to it","Design a logo using html and css","Build a widget that a user can paste a javascript array into. The widget should output the length of the array"),
    for (var i = 0; i < build.length; i++) {
	    $('span').text(build[i]);
	}
});

$('.close').click(function() {
	$('.tag').fadeToggle();
});