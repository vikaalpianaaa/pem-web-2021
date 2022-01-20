// Accordion 
function myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf("-show") == -1) {
    x.className += " -show";
  } else {
    x.className = x.className.replace(" -show", "");
  }
}

// Click on the "Vikstore man" link on page load to open the accordion for demo purposes
document.getElementById("myBtn").click();


// Open and close sidebar
function _open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function _close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}