//-------- Variables --------
var image = document.getElementById("modal-image");
var cell = document.getElementsByClassName("md-thumbnail");

//-------- Functions --------
function selectModal(x) {
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
      image.style.background = "url('images/Rainy Street.jpg') center/cover no-repeat";
      break;
    case 8:
      image.style.background = "url('images/Elephant Embrace.jpg') center/cover no-repeat";
      break;
    default:
      break;
  }
}

window.onload = function() {
  for(let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", function() {
      selectModal(i);
    });
  }
}
