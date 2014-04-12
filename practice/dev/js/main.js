//Main Javascripts

//if you have to use jQuery, use the wrapper below. It wraps jQuery in its own object so that it's syntax won't be confused with any other scripts

(function($ , window , undefined) {
    $(function() {
        function setWindowHeight(){
            var windowHeight = window.innerHeight;
            document.body.style.height = windowHeight + "px";
        }
        window.addEventListener("resize",setWindowHeight,false);
        window.addEventListener("load",setWindowHeight,false);
    });
})(jQuery , window );
