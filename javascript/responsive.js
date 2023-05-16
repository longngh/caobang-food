function myfunction() {
  var x = document.getElementById("mydropdown");
  if (x.className === "dropdown") {
    x.className += "responsive";
  } 
  else {
    x.className = "dropdown";
  }
}