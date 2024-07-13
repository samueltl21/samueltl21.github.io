function myFunction() {
    var x = document.getElementById("venture");
    var y = document.getElementById("thunder")
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display="none";
    } else {
      x.style.display = "none";
      y.style.display="block";
    }
  }