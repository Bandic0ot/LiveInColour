//-------- Variables --------
var home = document.getElementById("homeButton");
var about = document.getElementById("aboutButton");
var portfolio = document.getElementById("portfolioButton");
var contact = document.getElementById("contactButton");
var mainText = document.getElementById("liveText");
var nav = document.getElementById("navBar");
var menuBarButton = document.getElementById("mobileBarButton");
var viewportHeight = window.innerHeight;
var previousScrollPos = 0;
var tick = false;
var menuIsOpen = false;

//-------- Functions --------
$(document).ready(function() {
  if(storageAvailable('localStorage')) {
    // Check to see if the page was previously scrolled,
    // if it was set the opacity of the navbar to its
    // previous state.
    if(localStorage.getItem("storedScroll")) {
      var storedScroll = localStorage.getItem("storedScroll");
    }

    if(storedScroll < 0.8) {
      $(nav).css("background-color", "rgba(45, 45, 45, " + storedScroll + ")");
    } else if(storedScroll >= 0.8){
      $(nav).css("background-color", "rgba(45, 45, 45, 0.8)");
    }

    // Check to see if the page was previously scrolled,
    // if it was set the opacity and display of the
    // main text to its previous state.
    if(localStorage.getItem("storedMainText")) {
      var storedMainText = localStorage.getItem("storedMainText");
    }

    if(storedMainText <= 0) {
      $(mainText).css("display", "none");
    } else {
      $(mainText).css("display", "inline");
    }

    $(mainText).css("opacity", storedMainText);
  }

  menuBarButton.onclick = function() {
    if(menuIsOpen == true) {
      $(".navbutton").not("#mobileBarButton").css("display", "none");
      menuIsOpen = false;
    } else {
      $(".navbutton").not("#mobileBarButton").css("display", "flex");
      menuIsOpen = true;
    }
  }

  home.onclick = function() {
    $("html, body").animate({ scrollTop: $("#landingBG").offset().top}, 1000);

    // If on mobile when the button is pressed hide the drop down menu.
    if(menuIsOpen == true) {
      $(".navbutton").not("#mobileBarButton").css("display", "none");
      menuIsOpen = false;
    }
  }

  about.onclick = function() {
    $("html, body").animate({ scrollTop: $("#aboutBG").offset().top}, 1000);

    // If on mobile when the button is pressed hide the drop down menu.
    if(menuIsOpen == true) {
      $(".navbutton").not("#mobileBarButton").css("display", "none");
      menuIsOpen = false;
    }
  }

  portfolio.onclick = function() {
    $("html, body").animate({ scrollTop: $("#portfolioBG").offset().top}, 1000);

    // If on mobile when the button is pressed hide the drop down menu.
    if(menuIsOpen == true) {
      $(".navbutton").not("#mobileBarButton").css("display", "none");
      menuIsOpen = false;
    }
  }

  contact.onclick = function() {
    $("html, body").animate({ scrollTop: $("#contactBG").offset().top}, 1000);

    // If on mobile when the button is pressed hide the drop down menu.
    if(menuIsOpen == true) {
      $(".navbutton").not("#mobileBarButton").css("display", "none");
      menuIsOpen = false;
    }
  }

  var optimizedResize = (function() {

    var callbacks = [],
    running = false;

    // fired on resize event
    function resize() {
      if (!running) {
        running = true;

        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(runCallbacks);
        } else {
          setTimeout(runCallbacks, 66);
        }
      }
    }

    // run the actual callbacks
    function runCallbacks() {
      callbacks.forEach(function(callback) {
        callback();
      });

      running = false;
    }

    // adds callback to loop
    function addCallback(callback) {
      if (callback) {
        callbacks.push(callback);
      }
    }

    return {
      // public method to add additional callback
      add: function(callback) {
        if (!callbacks.length) {
          window.addEventListener('resize', resize);
        }
        addCallback(callback);
      }
    }
  }());

  // start process
  optimizedResize.add(function() {
    // Reset the inline css of the navbutton class so the media query
    // can be applied properly on window resize.
    if (window.matchMedia("(min-width: 800px)").matches) {
      $(".navbutton").attr("style", "");
    }
  });

  // A check to see if local storage is available for the device.
  function storageAvailable(type) {
    try {
      var storage = window[type],
      x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage.length !== 0;
      }
    }

    function enableScrollUI(pos) {
      var scrollFactor = window.pageYOffset / viewportHeight;
      $(mainText).css("opacity", 1 - Math.sqrt(window.pageYOffset) * 0.1);

      if(storageAvailable('localStorage')) {
        localStorage.setItem("storedScroll", scrollFactor);
        localStorage.setItem("storedMainText", $(mainText).css("opacity"));
      }

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
