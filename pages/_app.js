import "../styles/soluna.css"
import {React, useEffect} from 'react'
//import "../js/jquery-3.2.1.slim.min.js"
import "../styles/bootstrap.min.css"
//import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'

import "../styles/soluna.css"
//import "../js/wow.min.js"
//import "../js/masonry.pkgd.min.js"

import "../js/soluna.js"

function MyApp({ Component, pageProps }) {
//   useEffect(()=>{
//     import("bootstrap/dist/js/bootstrap");
// },[])
  return (<>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    
    <Component {...pageProps} />
    </>)
}

export default MyApp
