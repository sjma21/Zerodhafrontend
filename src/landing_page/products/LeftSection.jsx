import React from 'react';
import "../../index.css"
function LeftSection({imageURL, productName, productDesciption, tryDemo, learnMore, googlePlay, appStore}) {
    return (
        <div className='container'>
          <div className="row">

            <div className="col-6 p-5">
              <img src={imageURL} alt="" />
            </div>
            <div className="col"></div>
            <div className="col-5 p-5 mt-5">
               <h1>{productName}</h1>
               <p>{productDesciption}</p>
               <div className='leftsection'>
               <a href={tryDemo} style={{textDecoration:"none"}} className='productshover'> Try Demo <i class="fa-solid fa-arrow-right"></i></a>
               <a href={learnMore} style={{textDecoration:"none", marginLeft: "50px"}} className='productshover'> Learn More <i class="fa-solid fa-arrow-right"></i></a>
               </div>
              
              <div className="mt-3">
              <a href={googlePlay} style={{textDecoration:"none"}} className='leftSectionbutton'> <img src="media/images/googlePlayBadge.svg" alt="" /> </a>
              <a href={appStore} style={{textDecoration:"none", marginLeft: "50px"}} > <img src="media/images/appstoreBadge.svg" alt="" /></a>
              </div>
              
            </div>
          </div>
        </div>
    );
}

export default LeftSection;