//-------- Variables --------
var modal = document.getElementById("mainModal");
var image = document.getElementById("modalImage");
var close = document.getElementById("closeButton");
var clickCell = document.getElementsByClassName("cell");

//-------- Functions --------
function showModal(x) {
  switch (x) {
    case 0:
      image.style.background = "url('images/Angkor Hall.jpg') center/cover no-repeat";
      break;
    case 1:
      image.style.background = "url('images/Pepper Farm.jpg') center/cover no-repeat";
      break;
    case 2:
      image.style.background = "url('images/Look Down.jpg') center/cover no-repeat";
      break;
    case 3:
      image.style.background = "url('images/Moonlit Deck.jpg') center/cover no-repeat";
      break;
    case 4:
      image.style.background = "url('images/Ships.jpg') center/cover no-repeat";
      break;
    case 5:
      image.style.background = "url('images/Candlelight.jpg') center/cover no-repeat";
      break;
    case 6:
      image.style.background = "url('images/Japan Street.jpg') center/cover no-repeat";
      break;
    case 7:
      image.style.background = "url('images/RainyStreet.png') center/cover no-repeat";
      break;
    case 8:
      image.style.background = "url('images/Elephant Embrace.jpg') center/cover no-repeat";
      break;
    default:
      break;
  }
  modal.style.display = "flex";
}

window.onclick = function(event) {
    if (event.target == modal || event.target == close) {
        modal.style.display = "none";
    }
}

window.onload = function(event) {
  for(let i = 0; i < clickCell.length; i++) {
    clickCell[i].addEventListener("click", function() {
      showModal(i);
    });
  }
}
