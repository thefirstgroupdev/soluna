import React from "react";
import Link from "next/Link";

import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


export default function ImagesSlider({homepage}){
 const settings = {
    arrows:true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            arrows:true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
            arrows:true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
            arrows:true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
     
      <Slider {...settings}>
      {homepage.attributes.slider_gallery.data.map((slides) => (
      <>
      <div key={slides}><img src={`http://localhost:1337${slides.attributes.url}`}  alt="Carousel of restaurant images" className="img-fluid" /></div>
        {/* <div>
        <img src="/restaurant-santeria.jpg" alt="Sante Ria" className="img-fluid" />
        </div>
        <div>
        <img src="/restaurant-the-village-bistro.jpg" alt="Villate Bistro" className="img-fluid" />
        </div>
        <div>
        <img src="/restaurant-risen.jpg" alt="Risen" className="img-fluid" />
        </div>
        <div>
        <img src="/restaurant-theblacksmith.jpg" alt="Blacksmith" className="img-fluid" />
        </div>
        <div>
        <img src="/restaurant-vyne.jpg" alt="Vyne" className="img-fluid" />
        </div> */}
        </>
      ))}
      </Slider>
      
    </div>
    </>
    
  );
};


