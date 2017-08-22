//-------- Variables --------
var home = document.getElementById("homeButton");
var about = document.getElementById("aboutButton");
var portfolio = document.getElementById("portfolioButton");
var contact = document.getElementById("contactButton");
var mainText= document.getElementById("liveText");
var viewportHeight = window.innerHeight;

//-------- Functions --------
home.onclick = function(event) {
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

window.onscroll = function() {
    var windowBot = document.scrollTop;
    console.log(windowBot);
}
