$('button').click(function() {
    $('button , .explains-the-app').fadeToggle().promise().done(function(){
        $('.after , .what-to-build').fadeToggle();
    });
});

counter = -1;

var build = new Array("Make a demo featuring the continue statement in javascript","use fitText.js to make some responsive article previews","Make a demo using the download, media, and ping media attributes for hyperlinks","Make a demo using the toDataURL() function","Make a demo using Flexbox Grid","Make a demo that utilizes an SVG sprite!","Smart watches will be hitting the market soon. Make one out of CSS, HTML, and Javascript","Using window.matchMedia, make some javascript media queries","Conquer the latest codepen challenge in the pattern rodeo!","Make a jetpack with css","Make a pen with one vertically / horizontally centered div. When scrolling, the div should remain fixed after reaching the top of the browser window","Write some complicated css using a pre-processor you’re not familiar with","If you have a portfolio, redesign the your homepage. If you don’t have a portfolio, start building one!","Make an image slider that acts as a background to an entire page","Hopefully spring is coming soon. Make something spring related","Build a working chess set","Build a windows 95 UI element","Make a demo using Three.js","Make a demo using Snap.svg","Make a breakfast generator. It should suggest things you can make for breakfast");

$('button, .another').click(function(event) {
    event.preventDefault();
    counter = (counter + 1) % build.length;
    $('span').text(build[counter]);
});

$('.close').click(function() {
    $('.tag').fadeToggle();
});