$('button').click(function() {
    $('button , .explains-the-app').fadeToggle().promise().done(function(){
        $('.after , .what-to-build').fadeToggle();
    });
});

counter = -1;

var build = new Array("Build a slideshow using swipe.js !","Create a an SVG line animation demo","Make a div with an alpha transparent background color","Make a demo using the Network Information API","Make a button that, when tapped on a mobile device, causes the device to vibrate","Make a pen that lets you know when it is visible (able to be seen in the browser window)","Make an animation using the css perspective property. (No javascript)","Give your own styles to an html checkbox element","Make a responsive form","Make a demo using font-awesome icon fonts","Build a responsive e-commerce layout","Make a pen that has 10 divs on a page. Each one should have it's own animation","Make a demo explaining (and using) the HTML5 full screen API","Write a javascript test that determines if a users browser supports the CSS hyphenation property","Make a tic tac toe game","Make a cube with css. Each side of the cube should have text on it","Make a standard HTML and CSS sidebar using BEM syntax","Make an animated HTML5 ad featuring a product of your choice. It should be responsive","Write a javascript function that adds a scrollbar to a div if it exceeds a specific height");

$('button, .another').click(function(event) {
    event.preventDefault();
    counter = (counter + 1) % build.length;
    $('span').text(build[counter]);
});

$('.close').click(function() {
    $('.tag').fadeToggle();
});