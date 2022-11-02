import React from 'react';
import Head from 'next/head'
import Link from 'next/Link'
import { fetchAPI } from "../lib/api"
import '../js/soluna'
import ReactMarkdown from "react-markdown";
export default function Restaurants ({restaurants}){
  // const getAnimalsContent = animals => {
  //   let content = [];
  //   for (let idx in animals) {
  //     const item = animals[idx];
  //     content.push(<li key={item.id}>{item.animal}</li>);
  //   }
  //   return content;
  // };

  // return <ul>{getAnimalsContent(animals)}</ul>;

    return(
    <>
        <Head>
           
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, sh
  rink-to-fit=no"/>
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    <meta name="author" content=""/>

    <title>Restaurants | Soluna Beach Club</title>
</Head>
   
{/* navigation bar */}
   <nav className="restaurants navbar fixed-top" id="navbar">
      <div className="container">
        
      <div className="restaurants navbar-brand-logo">
          <a className="" href="/">
            <img src="https://www.solunabeachclub.ae/wp-content/themes/soluna-theme/img/logo-soluna-beach-club.svg" className="img-fluid sbc-logo" alt="Soluna Beach Club" title="Soluna Beach Club" width="256" height="90"/>
          </a>
      </div>
        <div className="restaurants navbar-brand-home">
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
{/* navigation bar end  */}
<br/><br/>
<br/>
{/* <br/>
<br/>
<br/>  */}


<div id="restaurants">
    <div className="container-fluid">

<div className="row justify-content-center">
  <div className="col-11 col-lg-9 col-xl-6 text-center">
    <h1 className='h1'>Restaurants</h1>
    <p>With three uniquely appointed restaurants serving up an extensive menu of globally inspired cuisine,
      guests will discover a stylish haven set against the backdrop of warmhearted hospitality and sublime interior.</p>
  </div>
</div>

</div>
 </div>

 {/* Restaurant loop */}
 {restaurants.data.map((restaurant) => (
  <>
<section id="enas">
    <div className="container-fluid">


<div className="row justify-content-center">

<div className="col-12 col-lg-10">
  


<div className="carousel-layer-bg">
        <img src={`http://localhost:1337${restaurant.attributes.logo_image.data.attributes.url}`} alt="Special offer" className="img-fluid" />
        <div className="carousel-layer-logo"><img src={`http://localhost:1337${restaurant.attributes.logo.data.attributes.url}`}  alt="Risen: Rise'n'shine | Breakfast special: Get Coffee and free croissant from us" className="img-fluid" /></div>
    </div>
</div>
</div>

<div className="row mt-3 justify-content-center">

  <div className="col-11 col-lg-4 mt-3 text-left wow fadeInLeft">


    <h2  className='h2'>{restaurant.attributes.name}</h2>
    <ReactMarkdown children={restaurant.attributes.description} escapeHtml={false} />
      <div className="text-lg-left">
        <a href={restaurant.attributes.web_url} className="btn btn-link">Visit the website</a>
      <br></br> 
      <a href={`http://localhost:1337${restaurant.attributes.menu_upload.data.attributes.url}` } className="btn btn-link" target='_blank'>Download Menu</a>
      </div>
  </div>
  <div className="col-11 col-lg-5 text-center wow fadeInRight">
    <div className="white-rounded-box">
        <div className="h3">Opening hours</div>
        <div>
              <ReactMarkdown children={restaurant.attributes.opening_hours} escapeHtml={false} />
              </div>
        <div className="h3 mt-4">RESERVATIONS</div>
        <div>
        {restaurant.attributes.reserve.phone}<br/>
          <a href="">{restaurant.attributes.reserve.email}</a></div>
          <div><a href={restaurant.attributes.reserve.booking_url} className="btn btn-outline-primary">Book a Table</a></div> 
    </div>
  </div>

</div>


</div>
</section>
</>
))}



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
  const [restaurantsRes] = await Promise.all([
    fetchAPI("/restaurants", { populate: "*" }),
  ])

  return {
    props: {
      restaurants: restaurantsRes,
      
    },
  }
}