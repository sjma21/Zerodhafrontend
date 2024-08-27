import React from 'react';
import "../index.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        
            <nav class="navbar navbar-expand-lg  border-bottom bg-body-tertiary" style={{backgroundColor:"white"}}>
                <div class="container p-2 ms-5">
                    <Link class="navbar-brand" to="/">
                        <img src="media/images/logo.svg" style={{ width: "25%" }} alt="" />
                    </Link>
                </div>
                <div class="container p-2"></div>

                <div class="container pe-5">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <form class="d-flex" role="search">
                            <ul class="navbar-nav  mb-lg-0">
                                <li class="nav-item ps-2 pe-2 hover-text">
                                    <Link class="nav-link active" aria-current="page" to="/signup">SignUp</Link>
                                </li>
                                <li class="nav-item ps-2 pe-2 hover-text">
                                    <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                                </li>

                                <li class="nav-item ps-2 pe-2 hover-text">
                                    <Link class="nav-link active" aria-current="page" to="/product">Products</Link>
                                </li>
                                <li class="nav-item ps-2 pe-2 hover-text">
                                    <Link class="nav-link active hover-text" aria-current="page" to="/pricing">Pricing</Link>
                                </li>
                                <li class="nav-item ps-2 pe-2 hover-text">
                                    <Link class="nav-link active" aria-current="page" to="/support">Support</Link>
                                </li>
                                
                                <div class="container mt-2">
                                <i class="fa-solid fa-bars"></i>
                                </div>
                                

                                



                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
       

    );
}

export default Navbar;