function tampilkanTeksLain() {
  var teksLain = document.getElementById("teks-blog");
  if (teksLain.style.display === "none") {
    teksLain.style.display = "block";
  } else {
    teksLain.style.display = "none";
  }
}
