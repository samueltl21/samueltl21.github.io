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

const lines = [
  'IT Student.',
  'Tech Enthusiast. Cook.',
  'Adventures. Sports.',
  'Minimalist.'
];

const typewriter = document.getElementById("typewriter");

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
          typewriter.innerHTML = typewriter.innerHTML.slice(0, -1) + lines[lineIndex].charAt(charIndex) + '_';
          charIndex++;
          setTimeout(typeLine, 50);
      } else {
          let lineColor = (lineIndex < 2) ? '#00ADB5' : 'white';
          typewriter.innerHTML = typewriter.innerHTML.slice(0, -(lines[lineIndex].length + 1)); // remove the last line and underscore cursor
          typewriter.innerHTML += `<span style="color:${lineColor}">${lines[lineIndex]}</span><br>`; // add the line with color
          lineIndex++;
          charIndex = 0;
          typewriter.innerHTML += '_'; // add the underscore cursor again
          setTimeout(typeLine, 150);
      }
  } else {
      typewriter.innerHTML = typewriter.innerHTML.slice(0, -1); // remove the last underscore cursor
  }
}

document.addEventListener("DOMContentLoaded", typeLine);

function showContent(topicId) {
  var contents = document.getElementsByClassName('blog-content');
  var placeholderText = document.getElementById('placeholder-text');
  
  placeholderText.style.display = 'none'; // Hide the placeholder text

  for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';  // Hide all content
  }
  document.getElementById(topicId).style.display = 'block';  // Show the selected content
}

function hideContent() {
  var contents = document.getElementsByClassName('blog-content');
  var placeholderText = document.getElementById('placeholder-text');
  
  for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';  // Hide all content when Hide Content button is clicked
  }

  placeholderText.style.display = 'block'; // Show the placeholder text again
}
