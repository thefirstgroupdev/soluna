import React from "react";
import Link from "next/Link";
import Head from 'next/head';
import Slider from "react-slick";
import Image from "next/image";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


export default function ImagesSlider({ homepage }) {
  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed:500,
    slidesToShow: 2,
    slidesToScroll:1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Head>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <div>


        <Slider {...settings}>
          {homepage.attributes.slider_gallery.data.map((slides) => (

            <div className="carousel-layer-bg" key={slides.id}><Image src={`http://localhost:1337${slides.attributes.url}`} alt="Carousel of restaurant images" className="img-fluid" layout="responsive" width={800} height={400} /></div>


          ))}
        </Slider>
      </div>
    </>

  );
};


