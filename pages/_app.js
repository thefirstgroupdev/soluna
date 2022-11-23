import { React, useEffect } from 'react'
//  import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head.js';
import Script from 'next/script.js';
import "../js/soluna.js"
import "../styles/soluna.css"



function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.min.js");
  // }, []);
  return (<>


    <Component {...pageProps} />
  </>)
}

export default MyApp