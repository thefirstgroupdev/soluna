import React from 'react';
import Slider from "react-slick";
import ReactMarkdown from "react-markdown";

export default function Offers ({offers}){
    const settings = {
        arrows:true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
       
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
<>
       {/* <!-- special offers --> */}
<div id="offers" >
<div className="container" >

<div className="row justify-content-center">
<div className="col-11 col-lg-9 text-center">
<h2 className=" h2 wow fadeInDown">Special offers</h2>
</div>



<div className="slider-padding-home">
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
 {offers.data.map((offer) => (
  
      
 <div className="carousel-layer-bg" key={offer.id}>
        <img src={`http://localhost:1337${offer.attributes.slide_banner.data.attributes.url}`} alt="Special offer" className="img-fluid" />
        <div className="carousel-layer-text"><img src={`http://localhost:1337${offer.attributes.overlay_image.data.attributes.url}`} alt="Risen: Rise'n'shine | Breakfast special: Get Coffee and free croissant from us" className="img-fluid" /></div>
    </div>
        
   
 
    ))}
      </Slider> 
       {/* <div className="carousel-layer-bg">
        <img src="/special-offer-02.jpg" alt="Special offer" className="img-fluid" />
        <div className="carousel-layer-text"><img src="/special-offers-risen-02.jpg" alt="Risen: Rise'n'shine | Breakfast special: Get Coffee and free croissant from us" className="img-fluid" /></div>
    </div>

        <div className="carousel-layer-bg">
        <img src="/special-offer-03.jpg" alt="Special offer" className="img-fluid" />
        <div className="carousel-layer-text"><img src="/special-offers-risen-03.jpg" alt="Risen: Rise'n'shine | Breakfast special: Get Coffee and free croissant from us" className="img-fluid" /></div>
    </div> */}
</div>
</div>

</div>
{/* <!-- /container --> */}
</div>

</>

    )

}