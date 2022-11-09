import React from 'react';
import Head from 'next/head'
import Link from 'next/Link'
import { fetchAPI } from "../lib/api"
import '../js/soluna'

import ReactMarkdown from "react-markdown";
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Image from 'next/image';

export default function Restaurants ({restaurants,footers,header}){
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
   
<Navbar header={header}/>

 <br/>
<br/>  

<div className="section" >
<div id="restaurants">
    <div className="container">

<div className="row justify-content-center">
  <div className="col-11 col-lg-9 col-xl-6 text-center">
    <h1 className='h1'>Restaurants</h1>
    <p>With three uniquely appointed restaurants serving up an extensive menu of globally inspired cuisine,
      guests will discover a stylish haven set against the backdrop of warmhearted hospitality and sublime interior.</p>
  </div>
</div>

</div>
 </div>
 </div>

 {/* Restaurant loop */}
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
    <ReactMarkdown children={restaurant.attributes.description} />
      <div className="text-lg-left">
        <a href={restaurant.attributes.web_url} className="Link btn btn-link">Visit the website</a>
      &nbsp;
      <a href={`http://localhost:1337${restaurant.attributes.menu_upload.data.attributes.url}` } className="Link btn btn-link" target='_blank'>Download Menu</a>
      </div>
  </div>
  <div className="col-11 col-lg-5 text-center wow fadeInRight">
    <div className="white-rounded-box">
        <div className="h3">Opening hours</div>
        <div>
              <ReactMarkdown children={restaurant.attributes.opening_hours} />
              </div>
        <div className="h3 mt-4">RESERVATIONS</div>
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
  const [headerRes,restaurantsRes,footersRes] = await Promise.all([
    fetchAPI("/header-menu", { populate: "*" }),
    fetchAPI("/restaurants", { populate: "*" }),
    fetchAPI("/footer", { populate: "*" }),
  ])

  return {
    props: {
      header: headerRes,
      restaurants: restaurantsRes,
      footers: footersRes.data,
      
    },
  }
}