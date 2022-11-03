import {React, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import "../js/soluna.js"
import "../styles/soluna.css"


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  return (<>
    <Component {...pageProps} />
    </>)
}

export default MyApp