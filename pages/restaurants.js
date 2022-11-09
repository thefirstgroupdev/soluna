import React from 'react';
import Head from 'next/head'
import Link from 'next/Link'
import { fetchAPI } from "../lib/api"
import '../js/soluna'

import ReactMarkdown from "react-markdown";
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Image from 'next/image';

export default function Restaurants ({restaurants,footers,header, homepage}){

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
   
<Navbar header={header}/>

 <br/>
<br/>  

<div className="section" >
<div id="restaurants">
    <div className="container">

<div className="row justify-content-center">
  <div className="col-11 col-lg-9 col-xl-6 text-center">
    <h1 className='h1'>{homepage.attributes.sub_section.title}</h1>
    <p>{homepage.attributes.sub_section.description}</p>
  </div>
</div>

</div>
 </div>
 </div>

 {/* Restaurant content retrieval loop */}
 {restaurants.data.map((restaurant) => (
  
<section id="enas" key={restaurant.id}>
    <div className="container-fluid">


<div className="row justify-content-center">

<div className="col-12 col-lg-10">
  


<div className="carousel-layer-bg">
        <Image src={`http://localhost:1337${restaurant.attributes.logo_image.data.attributes.url}`} alt="Special offer" className="img-fluid" width={1500} height={800}/>
        <div className="carousel-layer-logo"><Image src={`http://localhost:1337${restaurant.attributes.logo.data.attributes.url}`}  alt="Restaurants" className="img-fluid" width={500} height={350}/></div>
    </div>
</div>
</div>

<div className="row mt-3 justify-content-center">

  <div className="col-11 col-lg-4 mt-3 text-left wow fadeInLeft">


    <h2  className='h2'>{restaurant.attributes.name}</h2>
    <ReactMarkdown>{restaurant.attributes.description}</ReactMarkdown>
      <div className="text-lg-left">
        <Link href={restaurant.attributes.web_url}><a  className="Link btn btn-link">Visit the website</a></Link>
      &nbsp;
      <Link href={`http://localhost:1337${restaurant.attributes.menu_upload.data.attributes.url}` } ><a className="Link btn btn-link" target='_blank'>Download Menu</a></Link>
      </div>
  </div>
  <div className="col-11 col-lg-5 text-center wow fadeInRight">
    <div className="white-rounded-box">
        <div className="h3">{restaurant.attributes.opening_hours_title}</div>
        <div>
              <ReactMarkdown>{restaurant.attributes.opening_hours} </ReactMarkdown>
              </div>
        <div className="h3 mt-4">{restaurant.attributes.reserve.title}</div>
        <div>
        {restaurant.attributes.reserve.phone}<br/>
        <Link href={`mailto:${restaurant.attributes.reserve.email}`} ><a className="Link">{restaurant.attributes.reserve.email}</a></Link>
          <div><a href={restaurant.attributes.reserve.booking_url} className="btn btn-outline-primary">Book a Table</a></div> 
    </div>
  </div>

</div>

</div>
</div>
</section>

))}



<Footer footers={footers}/>
</>

    
    )

}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [headerRes,restaurantsRes,footersRes, homepageRes] = await Promise.all([
    fetchAPI("/header-menu", { populate: "*" }),
    fetchAPI("/restaurants", { populate: "*" }),
    fetchAPI("/footer", { populate: "*" }),
    fetchAPI("/homepage", { populate: "*" }),
  ])

  return {
    props: {
      header: headerRes,
      restaurants: restaurantsRes,
      footers: footersRes.data,
      homepage: homepageRes.data,
      
    },
  }
}