import React from 'react';
import Slider from "react-slick";
import ReactMarkdown from "react-markdown";
import Image from 'next/image';
import Head from 'next/head';


export default function Offers({ offers }) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,

    speed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      </Head>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      {/* <!-- special offers --> */}
      <div id="offers" >
        <div className="container" >
          <div className="row justify-content-center">
            <div className="col-11 col-lg-9 text-center">
              <h2 className=" h2 wow fadeInDown">Special offers</h2>
            </div>
            <div>
              <Slider {...settings}>
                {offers.data.map((offer) => (
                  <div className="carousel-layer-bg carouselPlain slick-initialized slick-slider" key={offer.id}>
                    <Image src={`http://localhost:1337${offer.attributes.slide_banner.data.attributes.url}`} alt="Special offer" className="img-fluid" width={1400} height={700} />
                    <div className="carousel-layer-text"><Image src={`http://localhost:1337${offer.attributes.overlay_image.data.attributes.url}`} alt="Risen" className="img-fluid" width={580} height={450} /></div>
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