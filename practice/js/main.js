$('button').click(function() {
    $('button , .explains-the-app').fadeToggle().promise().done(function(){
        $('.after , .what-to-build').fadeToggle();
    });
});

counter = -1;

var build = new Array("Make a demo using and explaining the CSS3 columns property","Make a demo using the HTML5 <details> and <summary> tags","Make a demo featuring JavaScript's indexOf() method","Make a specificity calculator for SCSS!","Make a demo explaining and using CSS shapes!","Build a generator that cycles through quotes from your favorite tv character","Make some 8 bit art!","Make a plugin that stores a cookie to the users browser and welcomes them every time they visit!","Build a fixed header that is opaque when scrolling","Make a demo using the IOS7 Minimal UI viewport meta tag!","Fork the top pen on codepen and add an animation to it","Make an image blur when you hover over it","Make an HTML5 video player","Make an HTML5 video player","Make a lava lamp out of pure css!","Make a stick figure using css. Name him steven. When the user clicks a button on the page, enable disco mode. Steven should have some sweet moves. Extra points for music. (It has to be The Bee Gees)","Disco Mode sounds pretty cool. Make a business-ey type webpage with a hidden disco mode button","Make a random password generator","Do something with JSON and Regex in the same pen","Pick a popular API and make a demo using it","Build a functional Sudoko game");

$('button, .another').click(function(event) {
    event.preventDefault();
    counter = (counter + 1) % build.length;
    $('span').text(build[counter]);
});

$('.close').click(function() {
    $('.tag').fadeToggle();
});