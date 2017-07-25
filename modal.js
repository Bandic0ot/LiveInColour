//-------- Variables --------
var modal = document.getElementById("mainModal");
var image = document.getElementById("modalImage");
var clickCell = document.getElementsByClassName("cell")[0];

//-------- Functions --------
clickCell.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
