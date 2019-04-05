windows.onscroll = function() {
  myFunction();
};

var topbar = document.getElementById("top-bar"),
  sticky = topbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
