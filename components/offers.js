import React from 'react';
import Slider from "react-slick";
import ReactMarkdown from "react-markdown";
import Image from 'next/image';

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



<div className="slider-padding-offers">
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
        <Image src={`http://localhost:1337${offer.attributes.slide_banner.data.attributes.url}`} alt="Special offer" className="img-fluid" width={1400} height={700}/>
        <div className="carousel-layer-text"><Image src={`http://localhost:1337${offer.attributes.overlay_image.data.attributes.url}`} alt="Risen" className="img-fluid" width={580} height={450}/></div>
    </div>
      
   
 
    ))}
      </Slider> 

</div>
</div>

</div>
{/* <!-- /container --> */}
</div>

</>

    )

}