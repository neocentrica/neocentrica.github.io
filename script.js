

function openNav() {
  document.getElementById("mySidepanel").style.width = "320px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
} 

function med() {
  var x = document.getElementById("lem");
  var a = document.getElementById("med");
  var b = document.getElementById("abo");
  
  if (x.style.display === "none", a.style.display === "block", a.style.display === "none", b.style.display === "none") {
    x.style.display = "none";  a.style.display = "none"; a.style.display = "block"; b.style.display = "none";
  } else {
    x.style.display = "none"; a.style.display = "block"; b.style.display = "none";
  }
  
}

function abo() {
  var x = document.getElementById("lem");
  var a = document.getElementById("med");
  var b = document.getElementById("abo");
  
  if (x.style.display === "none", b.style.display === "block", b.style.display === "none", a.style.display === "none" ) {
    x.style.display = "none";  b.style.display = "none"; b.style.display = "block"; a.style.display = "none";
  } else {
    x.style.display = "none"; b.style.display = "block"; a.style.display = "none";
  }
  
}


function who() {
  var x = document.getElementById("who");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

function que() {
  var x = document.getElementById("que");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function vis() {
  var x = document.getElementById("vis");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function val() {
  var x = document.getElementById("val");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


var slideIndex = 1;
showSlides(slideIndex);

function arr(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("bra");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
} 
