$('button').click(function() {
    $('button , .explains-the-app').fadeToggle().promise().done(function(){
        $('.after , .what-to-build').fadeToggle();
    });
});

counter = -1;

var build = new Array("write a for loop with underscore.js","Make a demo with html and js using the stopPropogation() method","Get 20 divs to print out on the page using slim. Then use SASS to make them all have an equal height, width, and 100% border radius","Make a page with a full screen HTML5 background video","Find a new CSS grid and make a demo highlighting all of its features","Build a 3D model of earth with WebGL","Make a responsive table","Make a responsive sign in form","Make a javascript app that allows a user to paste in an ordered list, which then gets formatted into a javascript array","Make a keyframe animation in css","Build a countdown timer","Make a map using the google static maps API","Design a page that uses a windows 8 themed layout","Make a Chuck Norris fact generator. Don't use jQuery","Code your favorite superhero using css","Make a dropdown menu without javascript","Make a demo using the HTML5 geolocation API","Build a set of css loading icons","Make a graph that explains your current web development skillset","Make a sticky footer");

$('button, .another').click(function(event) {
    event.preventDefault();
    counter = (counter + 1) % build.length;
    $('span').text(build[counter]);
});

$('.close').click(function() {
    $('.tag').fadeToggle();
});