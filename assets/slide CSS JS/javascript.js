$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
  });
});

var notificationVisible = false;
var showButton = document.getElementById("showButton");
var notification = document.getElementById("notification");

showButton.addEventListener("click", function () {
  if (notificationVisible) {
    notification.style.display = "none";
    notificationVisible = false;
  } else {
    notification.style.display = "block";
    notificationVisible = true;
  }
});
