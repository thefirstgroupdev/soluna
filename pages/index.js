import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from "next/Link"
import '../js/soluna'
import { fetchAPI } from "../lib/api"
import ImagesSlider from './slider'
import Slider from "react-slick";
import ReactMarkdown from "react-markdown";

export default function Home({homepage}) {
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
  return (
  <>
  
      <Head>
      <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="description" content="Soluna Beach Club - Dubai beach club"/>
    <meta name="keywords" content="Dubai beach club, best beach clubs in Dubai, beach club palm jumeirah, pool clubs in Dubai, beach lounge Dubai, top beach clubs Dubai, beach clubs Dubai offers, beach club membership Dubai, jumeriah beach restaurants, beach club restaurants, beach club Dubai brunch, Risen café Dubai"/>
    <meta name="author" content=""/>

    <title>Soluna Beach Club</title>

      </Head>

     

 <nav className="navbar fixed-top" id="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="" href="/">
            <img src="/logo-soluna-beach-club.svg" className="img-fluid sbc-logo" alt="Soluna Beach Club" title="Soluna Beach Club" />
          </a>
      </div> 
       <div className="navbar-brand-home">
          <img src="/logo-soluna-beach-club.svg" className="img-fluid sbc-logo-home" alt="Soluna Beach Club" title="Soluna Beach Club" />
    </div> 

        <button className="navbar-toggler collapsed ml-auto mr-0" type="button" data-toggle="collapse" data-target="#navbarSBC" aria-controls="navbarSBC" aria-expanded="false" aria-label="Toggle navigation" title="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>

      <div className="navbar-collapse navbar-collapse-ul collapse" id="navbarSBC">
        <ul className="navbar-nav ml-auto text-right pr-3 pr-lg-0">
          <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="/restaurants">Restaurants</a></li>
           {/* <li className="nav-item"><a className="nav-link" href="/">Offers</a></li>
          <li className="nav-item"><a className="nav-link" href="/">Contact</a></li>  */}
        </ul>
      </div>

    </div>
    

</nav> 


{/* <!-- video section --> */}
 <div id="video" className="section">
  <div className="container" >
    <div className="row justify-content-center">
      <div className="col-12">
        <div className="video-background hidden-xs">
        <iframe width="100%" height="650px" src={`https://www.youtube.com/embed/${homepage.attributes.yt_video_id}?autoplay=0&amp;mute=1&amp;controls=0&amp;loop=1&amp;showinfo=0`} title="YouTube video player" frameBorder="0" ></iframe>
      </div>
      </div>
    </div>
</div>
</div> 

{/* <!-- /video --> */}


<div id="about" className='section'>
  <div className="container">
    <div className="row justify-content-space-evenly">

      <div className="col-11 col-lg-6 col-xl-5 text-left wow fadeInLeft">
        <h1 className="h1">{homepage.attributes.name}</h1>
        <div className='description'>
        <ReactMarkdown children={homepage.attributes.description} escapeHtml={false} />
        </div>
        <div className="white-rounded-box">
            <div className="h3">Opening hours</div>
            <div>
              <ReactMarkdown children={homepage.attributes.opening_hours} escapeHtml={false} />
              </div>
        </div>
      </div>
      <div className="col-11 col-lg-6 col-xl-6 text-center wow fadeInRight">
        <div className="img-special"><img src={`http://localhost:1337${homepage.attributes.featured_image.data.attributes.url}`} className="img-fluid border-radius" /></div>
      </div>

    </div>
  </div>
  {/* <!-- /container --> */}
</div>


{/* <!-- restaurants --> */}
<div id="restaurants" className='section'>
<div className="container-fluid">

<div className="row justify-content-center bg-elementA">
<div className="col-11 col-lg-9 col-xl-6 text-center">
<h2 className="h2 wow fadeInDown">{homepage.attributes.sub_section.title}</h2>
<p>{homepage.attributes.sub_section.description}</p>
<Link href={homepage.attributes.sub_section.link} ><a className="Link btn btn-link">Find out more</a></Link>
</div>
</div>


<ImagesSlider />

</div>
{/* <!-- /container --> */}
</div>



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
        
 <div className="carousel-layer-bg" >
        <img src="/special-offer-01.jpg" alt="Special offer" className="img-fluid" />
        <div className="carousel-layer-text"><img src="/special-offers-risen-01.jpg" alt="Risen: Rise'n'shine | Breakfast special: Get Coffee and free croissant from us" className="img-fluid" /></div>
    </div>
        
    <div className="carousel-layer-bg">
        <img src="/special-offer-02.jpg" alt="Special offer" className="img-fluid" />
        <div className="carousel-layer-text"><img src="/special-offers-risen-02.jpg" alt="Risen: Rise'n'shine | Breakfast special: Get Coffee and free croissant from us" className="img-fluid" /></div>
    </div>

        <div className="carousel-layer-bg">
        <img src="/special-offer-03.jpg" alt="Special offer" className="img-fluid" />
        <div className="carousel-layer-text"><img src="/special-offers-risen-03.jpg" alt="Risen: Rise'n'shine | Breakfast special: Get Coffee and free croissant from us" className="img-fluid" /></div>
    </div>
      </Slider> 
</div>
</div>

</div>
{/* <!-- /container --> */}
</div>


{/* <!-- instagram gallery feed --> */}
<div id="instagram" className='section'>
  <div className="container-fluid" >
<div className="instagram text-center">
<h2 className="h2 wow fadeInDown ">INSTAGALLERY</h2>
{/* <!-- follow us --> */}
<a href="#" target="_blank" className="followinsta" rel="nofollow">
                      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="path" d="M16.0417 3.31793C20.3194 3.31793 20.8542 3.31793 22.592 3.45161C27.0035 3.58529 29.0087 5.72417 29.1424 10.002C29.276 11.7398 29.276 12.1408 29.276 16.4186C29.276 20.6964 29.276 21.2311 29.1424 22.8353C29.0087 27.1131 26.8698 29.252 22.592 29.3856C20.8542 29.5193 20.4531 29.5193 16.0417 29.5193C11.7639 29.5193 11.2292 29.5193 9.625 29.3856C5.21354 29.252 3.20833 27.1131 3.07465 22.8353C2.94097 21.0974 2.94097 20.6964 2.94097 16.4186C2.94097 12.1408 2.94097 11.6061 3.07465 10.002C3.20833 5.72417 5.34722 3.58529 9.625 3.45161C11.2292 3.31793 11.7639 3.31793 16.0417 3.31793ZM16.0417 0.376953C11.6302 0.376953 11.0955 0.376953 9.49132 0.510634C3.60937 0.777995 0.401042 3.98633 0.133681 9.86827C0 11.4724 0 12.0072 0 16.4186C0 20.8301 0 21.3648 0.133681 22.969C0.401042 28.8509 3.60937 32.0592 9.49132 32.3266C11.0955 32.4603 11.6302 32.4603 16.0417 32.4603C20.4531 32.4603 20.9878 32.4603 22.592 32.3266C28.474 32.0592 31.6823 28.8509 31.9496 22.969C32.0833 21.3648 32.0833 20.8301 32.0833 16.4186C32.0833 12.0072 32.0833 11.4724 31.9496 9.86827C31.6823 3.98633 28.474 0.777995 22.592 0.510634C20.9878 0.376953 20.4531 0.376953 16.0417 0.376953ZM16.0417 8.13043C11.4965 8.13043 7.75347 11.8735 7.75347 16.4186C7.75347 20.9638 11.4965 24.7068 16.0417 24.7068C20.5868 24.7068 24.3299 20.9638 24.3299 16.4186C24.3299 11.8735 20.5868 8.13043 16.0417 8.13043ZM16.0417 21.7658C13.1007 21.7658 10.6944 19.3596 10.6944 16.4186C10.6944 13.4776 13.1007 11.0714 16.0417 11.0714C18.9826 11.0714 21.3889 13.4776 21.3889 16.4186C21.3889 19.3596 18.9826 21.7658 16.0417 21.7658ZM24.5972 5.99154C23.5278 5.99154 22.7257 6.79362 22.7257 7.86306C22.7257 8.93251 23.5278 9.73459 24.5972 9.73459C25.6667 9.73459 26.4687 8.93251 26.4687 7.86306C26.4687 6.79362 25.6667 5.99154 24.5972 5.99154Z" fill="#1B3557"/>
                      </svg>
                      Follow us on Instagram
                    </a>
</div>

<div className="masonry"><div className="masonry-sizer">1</div>
<div className="masonry-item"><img src="/gallery/01.jpg" alt=""/></div>
<div className="masonry-item masonry-item-height2"><img src="/gallery/02.jpg" alt=""/></div>
<div className="masonry-item"><img src="/gallery/03.jpg" alt=""/></div>
<div className="masonry-item"><img src="/gallery/04.jpg" alt=""/></div>
<div className="masonry-item"><img src="/gallery/05.jpg" alt=""/></div>
<div className="masonry-item"><img src="/gallery/06.jpg" alt=""/></div>
<div className="masonry-item"><img src="/gallery/07.jpg" alt=""/></div>
<div className="masonry-item"><img src="/gallery/08.jpg" alt=""/></div>
<div className="masonry-item"><img src="/gallery/09.jpg" alt=""/></div>
<div className="masonry-item masonry-item-height2"><img src="/gallery/10.jpg" alt=""/></div>
<div className="masonry-item masonry-item-height2"><img src="/gallery/11.jpg" alt=""/></div>
<div className="masonry-item masonry-item-height2"><img src="/gallery/12.jpg" alt=""/></div>
<div className="masonry-item"><img src="gallery/13.jpg" alt=""/></div>
<div className="masonry-item"><img src="gallery/14.jpg" alt=""/></div>
<div className="masonry-item masonry-item-width2"><img src="/gallery/15.jpg" alt=""/></div>
</div></div>

</div>

{/* <!-- footer --> */}
<footer className="footer" id="contact">
<div className="container">
<div className="footerhead-padding row justify-content-start justify-content-lg-center align-items-center border-b">
  <div className="col-12 col-lg-6">
    <h3 className="footer h3">Soluna BEACH</h3>
  </div>
  <div className="col-12 col-lg-6 footer-links">
    <ul className="footer ul">
      <li className="footer li"><Link href="/"><a className="footer a footer-links li a">Home</a></Link></li>
      <li className="footer li"> <Link href="/restaurants"><a className="footer a footer-links li a"> Restaurants</a></Link></li>
      {/* <li className="footer li"> <Link href="#"><a className="footer a footer-links li a">Privacy Policy</a></Link></li> */}
    </ul>
  </div>
</div>
<div className="row justify-content-start justify-content-lg-center">
  <div className="col-12 col-md-6 col-xl-3 text-center text-md-left">
    <p>Al Amal Street<br/>
      Business Bay, Dubai, UAE<br/>
      PO BOX 215373</p>
    <p><Link href="#" target="_blank" rel="nofollow" ><a  className="footer a">Get Directions</a></Link></p>
    </div>
    <div className="col-12 col-md-6 col-xl-4 text-center text-md-left">
      <p>Direct: +971 873 4444<br/>
        Reservations: +971 4 873 4445<br/></p>
        <p><Link href="mailto:soluna@solunabeach.ae"><a className="footer a">soluna@solunabeach.ae</a></Link></p>
        
       <ul className="footerlist nav-social ">
          <li className="footerlistli social-instagram "><Link href="#" target="_blank"><a className="footer a footer-links li a">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0417 3.31793C20.3194 3.31793 20.8542 3.31793 22.592 3.45161C27.0035 3.58529 29.0087 5.72417 29.1424 10.002C29.276 11.7398 29.276 12.1408 29.276 16.4186C29.276 20.6964 29.276 21.2311 29.1424 22.8353C29.0087 27.1131 26.8698 29.252 22.592 29.3856C20.8542 29.5193 20.4531 29.5193 16.0417 29.5193C11.7639 29.5193 11.2292 29.5193 9.625 29.3856C5.21354 29.252 3.20833 27.1131 3.07465 22.8353C2.94097 21.0974 2.94097 20.6964 2.94097 16.4186C2.94097 12.1408 2.94097 11.6061 3.07465 10.002C3.20833 5.72417 5.34722 3.58529 9.625 3.45161C11.2292 3.31793 11.7639 3.31793 16.0417 3.31793ZM16.0417 0.376953C11.6302 0.376953 11.0955 0.376953 9.49132 0.510634C3.60937 0.777995 0.401042 3.98633 0.133681 9.86827C0 11.4724 0 12.0072 0 16.4186C0 20.8301 0 21.3648 0.133681 22.969C0.401042 28.8509 3.60937 32.0592 9.49132 32.3266C11.0955 32.4603 11.6302 32.4603 16.0417 32.4603C20.4531 32.4603 20.9878 32.4603 22.592 32.3266C28.474 32.0592 31.6823 28.8509 31.9496 22.969C32.0833 21.3648 32.0833 20.8301 32.0833 16.4186C32.0833 12.0072 32.0833 11.4724 31.9496 9.86827C31.6823 3.98633 28.474 0.777995 22.592 0.510634C20.9878 0.376953 20.4531 0.376953 16.0417 0.376953ZM16.0417 8.13043C11.4965 8.13043 7.75347 11.8735 7.75347 16.4186C7.75347 20.9638 11.4965 24.7068 16.0417 24.7068C20.5868 24.7068 24.3299 20.9638 24.3299 16.4186C24.3299 11.8735 20.5868 8.13043 16.0417 8.13043ZM16.0417 21.7658C13.1007 21.7658 10.6944 19.3596 10.6944 16.4186C10.6944 13.4776 13.1007 11.0714 16.0417 11.0714C18.9826 11.0714 21.3889 13.4776 21.3889 16.4186C21.3889 19.3596 18.9826 21.7658 16.0417 21.7658ZM24.5972 5.99154C23.5278 5.99154 22.7257 6.79362 22.7257 7.86306C22.7257 8.93251 23.5278 9.73459 24.5972 9.73459C25.6667 9.73459 26.4687 8.93251 26.4687 7.86306C26.4687 6.79362 25.6667 5.99154 24.5972 5.99154Z" fill="#91C0A7"/>
              </svg></a>
          </Link></li>
          <li className="footerlistli social-facebook "><Link href="#" target="_blank"  className="footer a"><a className="footer a footer-links li a">
            <svg width="18" height="35" viewBox="0 0 18 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.45837 11.6667H0.083374V17.5H4.45837V35H11.75V17.5H17L17.5834 11.6667H11.75V9.1875C11.75 7.875 12.0417 7.29167 13.3542 7.29167H17.5834V0H12.0417C6.79171 0 4.45837 2.33333 4.45837 6.70833V11.6667Z" fill="#91C0A7"/>
            </svg></a>
          </Link></li>
          <li className="footerlistli social-youtube "><Link href="#" target="_blank"  className="footer a"><a className="footer a footer-links li a">
              <svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http:www.google.com/www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M28.9245 3.36606L28.9337 3.36684L28.943 3.36755C30.1136 3.45759 30.734 3.67977 31.0759 3.88342C31.3563 4.05051 31.6037 4.29296 31.8396 4.82745C32.1063 5.43149 32.334 6.36194 32.478 7.82119C32.6205 9.26476 32.6667 11.0515 32.6667 13.2928C32.6667 15.5337 32.6205 17.3307 32.4778 18.7869C32.3334 20.2599 32.1049 21.2064 31.8357 21.8217C31.5964 22.3688 31.3507 22.6021 31.0905 22.7551C30.7707 22.9431 30.1719 23.1541 29.0173 23.2133L29.0111 23.2136L29.0049 23.214C23.8735 23.499 12.3524 23.4996 7.19418 23.2158C6.04271 23.1243 5.42981 22.9041 5.09089 22.7022C4.81044 22.5351 4.56309 22.2927 4.32714 21.7582C4.0605 21.1541 3.83278 20.2237 3.68873 18.7644C3.54623 17.3208 3.50004 15.5341 3.50004 13.2928C3.50004 11.0515 3.54623 9.26476 3.68873 7.82119C3.83278 6.36194 4.0605 5.43149 4.32714 4.82745C4.56309 4.29296 4.81044 4.05051 5.09089 3.88342C5.4327 3.67977 6.05318 3.45759 7.22374 3.36755L7.233 3.36684L7.24226 3.36606C12.3311 2.942 23.8357 2.942 28.9245 3.36606ZM0.583374 13.2928C0.583374 22.3345 1.31254 25.6886 7.00004 26.1261C12.25 26.4178 23.9167 26.4178 29.1667 26.1261C34.8542 25.8345 35.5834 22.3345 35.5834 13.2928C35.5834 4.25114 34.8542 0.896973 29.1667 0.459473C23.9167 0.0219726 12.25 0.0219726 7.00004 0.459473C1.31254 0.896973 0.583374 4.25114 0.583374 13.2928ZM15.8189 18.0709C14.8492 18.5558 13.7084 17.8507 13.7084 16.7666V9.81916C13.7084 8.73506 14.8492 8.02996 15.8189 8.51479L22.7663 11.9885C23.8411 12.5259 23.8412 14.0598 22.7663 14.5972L15.8189 18.0709Z" fill="#91C0A7"/>
              </svg></a>
          </Link></li>
        </ul> 
  </div>
  <div className="col-12 col-md-12 col-xl-5 mt-5 mt-xl-0">
    <h4 className='footer h4'>Newsletter signup</h4>
    <form>
      <input className="footer input" type="email" placeholder="Enter your email address"></input>
      <button className="btn btn-primary btn-lg">SIGN UP</button>
    </form>
  </div>
  </div>
</div>
{/* container  */}
</footer>

</>
  )
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [homepageRes] = await Promise.all([
    fetchAPI("/homepage", { populate: "*" }),
   ])

  return {
    props: {
      homepage: homepageRes.data,
      
    },
  }
}
