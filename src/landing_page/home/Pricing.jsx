import React from "react";
function Pricing(){
    return(
       <div className="container mb-5">
        <div className="row">
            <div className="col-4 ps-5">
                 <h1 className="mb-3 fs-3">Unbeatable pricing</h1>
                 <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                 <a href="#" style={{textDecoration: "none"}}>See pricing  <i class="fa-solid fa-arrow-right"></i> </a>
            </div>
            <div className="col-2"></div>
            <div className="col-6">
              <div className="row text-center">
                <div className="col">
                <img src="media/images/pricing0.svg" alt="" />
                Free account
                opening
                </div>
                <div className="col">
                <img src="media/images/pricing0.svg" alt="" />
                Free equity delivery
                and direct mutual funds
                </div>
                <div className="col mb-5">
                <img src="media/images/intradayTrades.svg" alt="" />
                Intraday and
                F&O
                

                </div>
              </div>
            </div>
        </div>
       </div>
    );
}

export default Pricing;