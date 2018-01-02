//-------- Variables --------
var nav = document.getElementById("navBar");
var modal = document.getElementById("mainModal");
var image = document.getElementById("modalImage");
var cell = document.getElementsByClassName("md-thumbnail");
var close = document.getElementById("closeButton");

//-------- Functions --------
function selectModal(x) {
  switch (x) {
    case 0:
      image.style.background = "url('images/angkor-hall.jpg') center/cover no-repeat";
      break;
    case 1:
      image.style.background = "url('images/pepper-farm.jpg') center/cover no-repeat";
      break;
    case 2:
      image.style.background = "url('images/look-down.jpg') center/cover no-repeat";
      break;
    case 3:
      image.style.background = "url('images/moonlit-deck.jpg') center/cover no-repeat";
      break;
    case 4:
      image.style.background = "url('images/ships.jpg') center/cover no-repeat";
      break;
    case 5:
      image.style.background = "url('images/candlelight.jpg') center/cover no-repeat";
      break;
    case 6:
      image.style.background = "url('images/japan-street.jpg') center/cover no-repeat";
      break;
    case 7:
      image.style.background = "url('images/rainy-street.jpg') center/cover no-repeat";
      break;
    case 8:
      image.style.background = "url('images/elephant-embrace.jpg') center/cover no-repeat";
      break;
    default:
      break;
  }

    navBar.style.display = "none";
    modal.style.display = "flex";
}

window.onclick = function(event) {
    if (event.target == modal || event.target == close) {
        modal.style.display = "none";
        navBar.style.display = "flex";
    }
}

window.onload = function() {
  for(let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", function() {
      selectModal(i);
    });
  }
}
