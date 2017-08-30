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
      $("html, body").animate({ scrollTop: $("#landingBG").offset().top}, 1000);
    }

    about.onclick = function() {
      $("html, body").animate({ scrollTop: $("#aboutBG").offset().top}, 1000);
    }

    portfolio.onclick = function() {
      $("html, body").animate({ scrollTop: $("#portfolioBG").offset().top}, 1000);
    }

    contact.onclick = function() {
      $("html, body").animate({ scrollTop: $("#contactBG").offset().top}, 1000);
    }

    function enableScrollUI(pos) {
      var scrollFactor = window.pageYOffset / viewportHeight;
      $(mainText).css("opacity", 1 - Math.sqrt(window.pageYOffset) * 0.1);
      if($(mainText).css("opacity") <= 0) {
        $(mainText).css("display", "none");
      } else {
        $(mainText).css("display", "inline");
      }

      if(scrollFactor < 0.8) {
        $(nav).css("background-color", "rgba(45, 45, 45, " + scrollFactor + ")");
      }
    }

    // Fade the Live in Colour text
    window.onscroll = function() {
      if(!tick) {
        previousScrollPos = window.pageYOffset;

        window.requestAnimationFrame(function() {
          enableScrollUI(previousScrollPos);
          tick = false;
        });
      }
      tick = true;
    }
});
