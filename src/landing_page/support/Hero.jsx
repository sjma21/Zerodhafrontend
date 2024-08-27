import React from 'react';
import "../../index.css";
function Hero() {
    return (  
       <section className="container-fluid" id="supportHero" >
         <div className="p-5" id="supportWrapper">
            <h4>Support Portal</h4>
            <a href="">Track Tickets</a>
         </div>
         <div className="p-5  " id="supportWrapper">
           <div className="col-6 " >
            <h2>Search for an answer or browse help topics to create a ticket</h2>
            <input type="text" placeholder = "Eg: how do o activate F&O, why is my order getting rejected."/> <br />
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a> <br />
            <a href="">Kite user manual</a>
           </div>
           <div className="col-6 p-5" >
           <h2>Featured</h2>
           <p>The account maintenance charge has been deducted but is not yet reflected in today's Kite balances for a few of our clients. Only the actual available funds will be usable for trades.</p>
           </div>
         </div>
       </section>
    );
}

export default Hero;