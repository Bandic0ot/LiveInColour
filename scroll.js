//-------- Variables --------
var home = document.getElementById("homeButton");
var about = document.getElementById("aboutButton");
var portfolio = document.getElementById("portfolioButton");
var contact = document.getElementById("contactButton");
var mainText = document.getElementById("liveText");
var nav = document.getElementById("navBar");
var viewportHeight = window.innerHeight;
var previousScrollPos = 0;
var tick = false;

//-------- Functions --------
$(document).ready(function() {
    home.onclick = function() {
      home.scrollTop = 0;
      window.scrollTo(0, 0);
    }

    about.onclick = function() {
      about.scrollTop = viewportHeight;
      window.scrollTo(0, viewportHeight);
    }

    portfolio.onclick = function() {
      portfolio.scrollTop = viewportHeight * 2;
      window.scrollTo(0, viewportHeight * 2);
    }

    contact.onclick = function() {
      portfolio.scrollTop = viewportHeight * 3;
      window.scrollTo(0, viewportHeight * 3);
    }

    function enableScrollUI(pos) {
      $(mainText).css("opacity", 1 - $(window).scrollTop() / (viewportHeight / 2.5));

      
        $(nav).css("background-color", "rgba(45, 45, 45, " + $(window).scrollTop() / viewportHeight + ")");
        console.log($(nav).css("opacity"));

    }

    // Fade the Live in Colour text
    window.onscroll = function() {
      if(!tick) {
        previousScrollPos = window.scrollY;

        window.requestAnimationFrame(function() {
          enableScrollUI(previousScrollPos);
          tick = false;
        });
      }
      tick = true;
    }
});
