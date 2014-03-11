$('button').click(function() {
    $('button , .explains-the-app').fadeToggle().promise().done(function(){
        $('.after , .what-to-build').fadeToggle();
    });
});

counter = -1;

var build = new Array("Make a box shadow animation","Build 3 select menus. The should each have 3 options. If Menu 1 has option #2 selected, Show a hidden div.","Make 2 divs and a button. When the button is clicked, switch the content of the 2 divs","Using window.getComputedStyle(), get the style information of a pseudo element","Make your own custom element (Might need chrome beta, canary, or firefox nightly for this)","Write a jQuery plugin that handles tooltip functionality when a user is viewing from a mobile device","Make a demo using Ember.js","Make a demo using Angular.js","Make a demo using Mustache.js","Make a demo highlighting the map feature in SASS 3.3","Invent your own holiday. then Make an animated CSS / HTML greeting card to celebrate it!","Animate the Google logo","Build an HTML5 form with custom styled select and checkbox elements that works in IE8","Build a fixed header that the browser doesn’t repaint every time you scroll","Design the UI for a new smartwatch","Build a SASS triangle generator","Make a slideshow using HTML, SCSS, and Javascript","Build an image slider without jQuery","Write a SASS mixin that does something cool","Make a new theme for codepen");

$('button, .another').click(function(event) {
    event.preventDefault();
    counter = (counter + 1) % build.length;
    $('span').text(build[counter]);
});

$('.close').click(function() {
    $('.tag').fadeToggle();
});