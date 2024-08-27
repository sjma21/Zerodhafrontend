import React from 'react';

function NotFound() {
    return (  
        <div className="container p-5 mb-5">
        <div className="row text-center">
         
          <h1 className="mt-5">404 Not Found</h1>
          <p>
           Sorry, the page you are looking for does not exist.
          </p>
          <a href="/" style={{textDecoration:"none" }}>Return back to home page</a>

        </div>
      </div>
    );
}

export default NotFound;