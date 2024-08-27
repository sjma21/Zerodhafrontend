import React from 'react';

function Team() {
    return ( 
        <div className="container">
        <div className="row p-5  border-top">
         <h2 className=' text-center' style={{color: "#424242"}}>People</h2>
        </div>

        <div className="row p-5 text-muted fs-6" style={{lineHeight: "1.8" , fontSize: "1.2em"}}>
        
           <div className="col-6 text-center">
             <img src="media/images/pp2.jpg" style={{ height : "57%"}} alt="" />
             <h4 className='mt-2'>Sajal Mishra</h4>
             <h6>Founder</h6>
             <h6>~A mind that loves to solve problems can change the world. With a passion for coding and a love for strategy, I strive to create innovative solutions, both in technology and in life.</h6>
           </div>
           <div className="col">
            <p>Sajal  bootstrapped and founded Zerodha in 2024 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry..</p>
            <p>"Passionate about technology and problem-solving, I'm a Computer Science student dedicated to exploring innovative solutions. With a strong foundation in coding, a love for algorithms, and a knack for building projects, I'm constantly pushing the boundaries of what's possible. When I'm not coding, you'll find me immersed in the strategic challenges of chess or on the cricket field, applying the same precision and teamwork."</p>
            
            <p>Connect on <a href="https://www.linkedin.com/in/sajal-mishra-612396258/" className='aboutmatter'>Linkedin</a> / <a href="https://github.com/sjma21" className='aboutmatter'>Github</a> / <a href="" className='aboutmatter'>Twitter</a></p> 
           </div>
              
        </div>
        
       
    </div>
     );
}

export default Team;