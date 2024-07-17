function myFunction(idx) {
    var t = document.getElementById("thunder");
    var el1 = document.getElementById("element1");
    var el2 = document.getElementById("element2");
    var el3 = document.getElementById("element3");
    var el4 = document.getElementById("element4");
    var el5 = document.getElementById("element5");
    
    if (idx==1) {
      t.style.display = "none";
      el1.style.display = "block";
      el2.style.display = "none";
      el3.style.display = "none";
      el4.style.display = "none";
      el5.style.display = "none";
    } else if (idx==2) {
      t.style.display = "none";
      el1.style.display = "none";
      el2.style.display = "block";
      el3.style.display = "none";
      el4.style.display = "none";
      el5.style.display = "none";
    } else if (idx==3) {
      t.style.display = "none";
      el1.style.display = "none";
      el2.style.display = "none";
      el3.style.display = "block";
      el4.style.display = "none";
      el5.style.display = "none";
    } else if (idx==4) {
      t.style.display = "none";
      el1.style.display = "none";
      el2.style.display = "none";
      el3.style.display = "none";
      el4.style.display = "block";
      el5.style.display = "none";
    } else if (idx==5) {
      t.style.display = "none";
      el1.style.display = "none";
      el2.style.display = "none";
      el3.style.display = "none";
      el4.style.display = "none";
      el5.style.display = "block";
    } else {
      t.style.display = "block";
      el1.style.display = "none";
      el2.style.display = "none";
      el3.style.display = "none";
      el4.style.display = "none";
      el5.style.display = "none";
    }

}