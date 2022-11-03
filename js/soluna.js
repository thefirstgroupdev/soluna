// Navbar changes when the user scrolls down 80px from the top of the document

if (typeof window === "object") {

  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").classList.add("navbar-scroll");
    } else {
      document.getElementById("navbar").classList.remove("navbar-scroll");
    }
  }
  let navbar = document.querySelector(".navbar");
navbar.addEventListener("click", () => {
  navbar.classList.toggle("active");
  navbar.classList.remove("no-animation");
});


  
}



