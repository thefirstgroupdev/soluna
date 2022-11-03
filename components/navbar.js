import React from 'react';
import "../js/soluna"


export default function Navbar (){

    return(
<><nav className="navbar fixed-top" id="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="" href="/">
            <img src="/logo-soluna-beach-club.svg" className="img-fluid sbc-logo" alt="Soluna Beach Club" title="Soluna Beach Club" />
          </a>
      </div> 
       <div className="navbar-brand-home">
          <img src="/logo-soluna-beach-club.svg" className="img-fluid sbc-logo-home" alt="Soluna Beach Club" title="Soluna Beach Club" />
    </div> 

      <button className="navbar no-animation navbar-toggler collapsed ml-auto mr-0" type="button" data-toggle="collapse" data-target="#navbarSBC" aria-controls="navbarSBC" aria-expanded="false" aria-label="Toggle navigation" title="Toggle navigation">
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
</>
        
    )

}