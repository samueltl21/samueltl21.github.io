function myFunction(element1, element2) {
    var x = document.getElementById("element2");
    var y = document.getElementById("element1");
    
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
  }