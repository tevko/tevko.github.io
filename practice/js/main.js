$('button').click(function() {
    $('button , .explains-the-app').fadeToggle().promise().done(function(){
        $('.after , .what-to-build').fadeToggle();
    });
});

counter = -1;

var build = new Array("Make a progress bar using Progress.js","Make a demo featuring the device orientation API","Make a sidebar that is as semantically valid as can be","Design a blog layout","Build a flat css icon with subtle animations or transitions","Build an off canvas header","Build an off canvas footer","Using a pseudo element, ensure that a div that is not the full height of the browser window, appears to stretch to the full height of the browser window","Build a css and html music video","Participate in the codepen rodeo season 4!","Build an anti-social sharing button","Build a pen that calculates the viewers approximate location","Build a css alarm clock","Make an april fools pen!","Make a demo using and explaining the insertAdjacentHTML function in javascript","Make a demo that shows how to fix jagged edges on a rotated item in webkit","Build a PHP syntax highlighter","Build a worthy addition to the codepen UI","Build your own jQuery plugin!","Build an html5 form generator");

$('button, .another').click(function(event) {
    event.preventDefault();
    counter = (counter + 1) % build.length;
    $('span').text(build[counter]);
});

$('.close').click(function() {
    $('.tag').fadeToggle();
});