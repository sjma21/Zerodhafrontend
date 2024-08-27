import React from 'react';

function Brokerage() {
    return (  
        <div className="container border-top">
           
            <div className="row p-5 mt-2">
                <div className="col-8 p-2 text-center">
                   <a href="" style={{fontSize:"20px"}} className='aboutmatter'>Brokerage calculator</a>
                   <ul style={{textAlign:"left", lineHeight:"2.5rem", fontSize: "12px", marginTop:"10px"}} className='text-muted'>
                    <li >Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                   </ul>
                </div>
                <div className="col-4 p-2 ">
                    <a href=""  style={{fontSize:"20px"}} className='aboutmatter'>List of charges</a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;