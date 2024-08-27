import React from 'react';
import "../../index.css"
function Hero() {
    return ( 
        <div className="container border-bottom mb-5">
            <div className="row text-center mt-5 p-3">
                <h1>Technology</h1>
                <h3 className='text-muted mt-3'>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mt-2 mb-5'>Check out our <a href="" className='productshover'>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;