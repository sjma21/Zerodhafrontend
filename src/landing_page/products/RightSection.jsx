import React from 'react';

function RightSection({imageURL, productName, productDesciption, learnMore}) {
    return ( 
        <div className="container mt-2">
            <div className="row mt-5">
                <div className="col-5 mt-5 p-5">
                    <h1 style={{marginTop:"70px"}}>{productName}</h1>
                    <p style={{lineHeight:"2rem"}}>{productDesciption}</p>
                    <a href={learnMore} style={{textDecoration:"none"}} className='productshover'> Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col"></div>
                <div className="col-6 p-2">
                <img src={imageURL} alt="" />
                </div>
            </div>
        </div>
     );
}

export default RightSection;