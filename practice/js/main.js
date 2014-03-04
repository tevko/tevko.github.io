$('button').click(function() {
    $('button , .explains-the-app').fadeToggle().promise().done(function(){
        $('.after , .what-to-build').fadeToggle();
    });
});

counter = -1;

var build = new Array("Build a sidebar that has a fixed height with a scrollbar that handles overflow. Inside of the sidebar should be a list, and some of the list items should have sub-lists. When hovering over the items with sub-lists, the sublists should appear outside of the sidebar","Make a demo highlighting a use case for the normalize(); and splitText(); methods","Make a demo using Fluidbox","Make a demo explaining the High Resolution Time API","Make an off canvas nav powered by javascript. Then ensure that a fallback is implemented when a user who has javascript disabled can view the page (To get this to work on Codepen, pass in a variable. If the variable is true, the user has javascript support. If the variable is false, serve up the non-js version)","Duplicate an animation found on http://www.sharpandnimble.com/design-lab/","Make a demo using the Singularity Grid framework","Make a border animation using SVG and CSS","Make a demo explaining the @if, @for, @each and @while SASS control directives","Create horizontal scrolling using display:table-cell","Make a div that has a repeating background linear gradient using css","Make an ordered list consisting of 5 items. The first item should start at #6 instead of #1","Make an HTML & CSS banner highlighting your favorite charity","Make a demo using the progress element. It should be animated.","Animate the logo of whatever browser you’re currently using","Design and code a new mobile OS using HTML, JS, and CSS","Build something entirely in REM’s","Fork the top pen on codepen and customize it!","Make a srcset demo in chrome!","Make a javascript plugin that alerts the user if they’ve typed a run on sentence.");

$('button, .another').click(function(event) {
    event.preventDefault();
    counter = (counter + 1) % build.length;
    $('span').text(build[counter]);
});

$('.close').click(function() {
    $('.tag').fadeToggle();
});