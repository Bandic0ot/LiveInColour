//-------- Variables --------
var home = document.getElementById("homeButton");
var about = document.getElementById("aboutButton");
var portfolio = document.getElementById("portfolioButton");
var contact = document.getElementById("contactButton");
var viewportHeight = window.innerHeight;

//-------- Functions --------
home.onclick = function(event) {
    home.scrollTop = 0;
    window.scrollTo(0, 0);
}

about.onclick = function(event) {
    about.scrollTop = viewportHeight;
    window.scrollTo(0, viewportHeight);
}

portfolio.onclick = function(event) {
    portfolio.scrollTop = viewportHeight * 2;
    window.scrollTo(0, viewportHeight * 2);
}

contact.onclick = function(event) {
    portfolio.scrollTop = viewportHeight * 3;
    window.scrollTo(0, viewportHeight * 3);
}
