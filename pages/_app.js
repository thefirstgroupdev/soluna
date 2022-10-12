import {React, useEffect} from 'react'
//import "../js/jquery-3.2.1.slim.min.js"
// import "../public/bootstrap.min.css"
//import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'

import "bootstrap/dist/css/bootstrap.min.css";
import('bootstrap/dist/js/bootstrap') 

import('../public/slick/slick.min.js') 

import "../styles/soluna.css";

import "../styles/slick.css";
import "../styles/slick-theme.css";

//import "../js/wow.min.js"
//import "../js/masonry.pkgd.min.js"

import "../js/soluna.js"
//import "../public/slick/slick.min.js"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // typeof document !== undefined 
    // ? import('bootstrap/dist/js/bootstrap') 
    // : null;
    // typeof window !== "undefined"
    // ? import('../public/slick/slick.min.js')
    // : null
  }, []);
  return (<>
    <Component {...pageProps} />
    </>)
}

export default MyApp
