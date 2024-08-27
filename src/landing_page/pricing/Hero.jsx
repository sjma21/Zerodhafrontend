import React from 'react';

function Hero() {
    return (
        <div className="container border-bottom">
            <div className="row p-5 mt-5 border-bottom text-center fs-5">
                <h1>Pricing</h1>
                <p>Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>
            <div className="row p-5 mt-2 text-center">
                <div className="col-4 p-5">
                    <img src="media/images/pricing0.svg" alt="" />
                    <h2>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/intradayTrades.svg" alt="" />
                    <h2 className='fs-3'>Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/pricing0.svg" alt="" />
                    <h2>Free direct MF</h2>
                    <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                </div>
            </div>
        </div>

    );
}

export default Hero;