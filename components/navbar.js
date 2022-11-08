import React from 'react';
import '../js/soluna'
import Link from 'next/Link';
import Head from 'next/head.js';
import Script from 'next/script.js';
// import 'bootstrap/dist/css/bootstrap.min.css';



export default function Navbar ({header}){

    return(
<>
<Head>
       
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"/> 
     </Head>
     <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"  />
     <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" 
/>
<nav className="navbar fixed-top" id="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="" href="index.html">
            <img src="/logo-soluna-beach-club.svg" className="img-fluid sbc-logo" alt="Soluna Beach Club" title="Soluna Beach Club" />
          </a>
      </div>
      <div className="navbar-brand-home">
          <img src="/logo-soluna-beach-club.svg" className="img-fluid sbc-logo-home" alt="Soluna Beach Club" title="Soluna Beach Club" />
    </div>

        <button className="navbar-toggler collapsed ml-auto mr-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSBC" aria-controls="navbarSBC" aria-expanded="false" aria-label="Toggle navigation" title="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>

      <div className="collapse navbar-collapse" id="navbarSBC">
        {/* <ul className="navbar-nav ml-auto text-right pr-3 pr-lg-0">
          <li className="nav-item active"><a className="menu-color nav-link" href="/">{header.data.attributes}</a></li>
          <li className="nav-item"><a className="menu-color nav-link" href="/restaurants">Restaurants</a></li>
           <li className="nav-item"><a className="menu-color nav-link" href="#offers">Offers</a></li>
          <li className="nav-item"><a className="menu-color nav-link" href="#contact">Contact</a></li> 
        </ul> */}
        <ul className="navbar-nav ml-auto text-right pr-3 pr-lg-0">
    {header.data.attributes.menuItems.map((header) => (
    
      <li className="nav-item" key={header.id}><Link href={`http://localhost:3000${header.url}`}><a className="menu-color nav-link" >{header.name}</a></Link></li>

  ))}
    </ul>
      </div>

 </div>
 {/* container end */}
    </nav>

 
 
{/* navigation bar end  */}
</>
        
    )

}