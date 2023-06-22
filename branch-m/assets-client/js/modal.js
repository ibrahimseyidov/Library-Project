// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

let mobileBtn = document.querySelector("#myBtnMobile");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

$("#myBtn").click(function() {
  $("#myModal").fadeIn(500);
})

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}


mobileBtn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    $("#myModal").fadeOut(500)
 
  }
}

