// Target den id der hedder myModal i HTML
var modal = document.getElementById("myModal");

// Target den knap med id der hedder myBtn i HTML
var btn = document.getElementById("myBtn");

// Target den class der hedder close i HTML
var span = document.getElementsByClassName("close")[0];

// Når brugeren klikker på knappen, åben modulet
btn.onclick = function () {
  modal.style.display = "block";
};

// Når brugeren klikker på krydset, (<span>), luk da modulet
span.onclick = function () {
  modal.style.display = "none";
};

// Når brugeren klikker uden for modulet, luk det
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
