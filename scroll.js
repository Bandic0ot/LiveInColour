//-------- Variables --------
var home = document.getElementById("homeButton");
var about = document.getElementById("aboutButton");
var portfolio = document.getElementById("portfolioButton");
var contact = document.getElementById("contactButton");
var mainText= document.getElementById("liveText");
var viewportHeight = window.innerHeight;

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

    // Fade the Live in Colour text
    $(window).scroll(function() {
      $(mainText).css("opacity", 1 - $(window).scrollTop() / 250);
    });
});
