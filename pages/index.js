import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from "next/Link"
import '../js/soluna'

import { fetchAPI } from "../lib/api"
import ImagesSlider from '../components/slider'
import Slider from "react-slick";
import ReactMarkdown from "react-markdown";

import Offers from '../components/offers'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

export default function Home({ homepage, offers, footers, header }) {

  return (
    <>

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Soluna Beach Club - Dubai beach club" />
        <meta name="keywords" content="Dubai beach club, best beach clubs in Dubai, beach club palm jumeirah, pool clubs in Dubai, beach lounge Dubai, top beach clubs Dubai, beach clubs Dubai offers, beach club membership Dubai, jumeriah beach restaurants, beach club restaurants, beach club Dubai brunch, Risen café Dubai" />
        <meta name="author" content="" />

        <title>Soluna Beach Club</title>

      </Head>



      <Navbar header={header} />


      {/* <!-- video section --> */}
      <div id="video" className="section">
        <div className="container" >
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="video-background hidden-xs">
                <iframe width="100%" height="650px" src={`https://www.youtube.com/embed/${homepage.attributes.yt_video_id}?autoplay=0&amp;mute=1&amp;controls=0&amp;loop=1&amp;showinfo=0`} title="YouTube video player" frameBorder="0" allow=''></iframe>
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
                <ReactMarkdown>{homepage.attributes.description}</ReactMarkdown>
              </div>
              <div className="text-left mb-5 mb-xl-0">
                <div className="h3-left">{homepage.attributes.openingHours.title}</div>
                <div>
                  <ReactMarkdown>{homepage.attributes.openingHours.opening_hours}</ReactMarkdown>
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
              <Link href={`http://localhost:3000${homepage.attributes.sub_section.link}`}><a className="Link btn btn-link">Find out more</a></Link>
              
            </div>
          </div>
          

          <ImagesSlider homepage={homepage} />

        </div>
        {/* <!-- /container --> */}
      </div>
      <div id="offers">
        <Offers offers={offers} /></div>


      {/* <!-- instagram gallery feed --> */}
      <div id="instagram" className='section'>
        <div className="container-fluid" >
          <div className="instagram text-center">
            <h2 className="h2 wow fadeInDown ">INSTAGALLERY</h2>
            {/* <!-- follow us --> */}
            <a href="#" target="_blank" className="btn btn-outline-primary" rel="nofollow">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="path" d="M16.0417 3.31793C20.3194 3.31793 20.8542 3.31793 22.592 3.45161C27.0035 3.58529 29.0087 5.72417 29.1424 10.002C29.276 11.7398 29.276 12.1408 29.276 16.4186C29.276 20.6964 29.276 21.2311 29.1424 22.8353C29.0087 27.1131 26.8698 29.252 22.592 29.3856C20.8542 29.5193 20.4531 29.5193 16.0417 29.5193C11.7639 29.5193 11.2292 29.5193 9.625 29.3856C5.21354 29.252 3.20833 27.1131 3.07465 22.8353C2.94097 21.0974 2.94097 20.6964 2.94097 16.4186C2.94097 12.1408 2.94097 11.6061 3.07465 10.002C3.20833 5.72417 5.34722 3.58529 9.625 3.45161C11.2292 3.31793 11.7639 3.31793 16.0417 3.31793ZM16.0417 0.376953C11.6302 0.376953 11.0955 0.376953 9.49132 0.510634C3.60937 0.777995 0.401042 3.98633 0.133681 9.86827C0 11.4724 0 12.0072 0 16.4186C0 20.8301 0 21.3648 0.133681 22.969C0.401042 28.8509 3.60937 32.0592 9.49132 32.3266C11.0955 32.4603 11.6302 32.4603 16.0417 32.4603C20.4531 32.4603 20.9878 32.4603 22.592 32.3266C28.474 32.0592 31.6823 28.8509 31.9496 22.969C32.0833 21.3648 32.0833 20.8301 32.0833 16.4186C32.0833 12.0072 32.0833 11.4724 31.9496 9.86827C31.6823 3.98633 28.474 0.777995 22.592 0.510634C20.9878 0.376953 20.4531 0.376953 16.0417 0.376953ZM16.0417 8.13043C11.4965 8.13043 7.75347 11.8735 7.75347 16.4186C7.75347 20.9638 11.4965 24.7068 16.0417 24.7068C20.5868 24.7068 24.3299 20.9638 24.3299 16.4186C24.3299 11.8735 20.5868 8.13043 16.0417 8.13043ZM16.0417 21.7658C13.1007 21.7658 10.6944 19.3596 10.6944 16.4186C10.6944 13.4776 13.1007 11.0714 16.0417 11.0714C18.9826 11.0714 21.3889 13.4776 21.3889 16.4186C21.3889 19.3596 18.9826 21.7658 16.0417 21.7658ZM24.5972 5.99154C23.5278 5.99154 22.7257 6.79362 22.7257 7.86306C22.7257 8.93251 23.5278 9.73459 24.5972 9.73459C25.6667 9.73459 26.4687 8.93251 26.4687 7.86306C26.4687 6.79362 25.6667 5.99154 24.5972 5.99154Z" fill="#1B3557" />
              </svg>
              Follow us on Instagram
            </a>
          </div>

          <div id="insta" >
            <div className="instagallery hidden-xs">
              <iframe className="iframe" width={100} height={100} src="https://www.solunabeachclub.ae/instagram/" title="Instagram" frameBorder="0" allow='' ></iframe>
            </div>
          </div>
        </div>

      </div>

      <Footer footers={footers} />

    </>
  )
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [headerRes, homepageRes, offerRes, footersRes] = await Promise.all([
    fetchAPI("/header-menu", { populate: "*" }),
    fetchAPI("/homepage", { populate: "*" }),
    fetchAPI("/offers", { populate: "*" }),
    fetchAPI("/footer", { populate: "*" }),
  ])

  return {
    props: {
      header: headerRes,
      homepage: homepageRes.data,
      offers: offerRes,
      footers: footersRes.data,
    },
  }
}









