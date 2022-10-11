// Navbar changes when the user scrolls down 80px from the top of the document
global.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").classList.add("navbar-scroll");
  } else {
    document.getElementById("navbar").classList.remove("navbar-scroll");
  }

  
}


//slick carousel
{/* <script src="jquery-3.5.1.js" type="text/javascript">

$(document).ready(function(){
  $('.carouselToShow').slick({
    centerMode: true,
    centerPadding: '20%',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.carouselPlain').slick({
    autoplay: false,
    autoplaySpeed: 2000,
  }); 
  
  }); */}



// </script> 
