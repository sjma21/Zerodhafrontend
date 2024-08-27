import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Navbar from '../Navbar';
import Footer from '../Footer';

function ProductPage() {
    return (  
        <>
        
        <Hero></Hero>
        <LeftSection imageURL="media/images/kite.png" productName="Kite" productDesciption="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""> </LeftSection>
        <RightSection imageURL="media/images/console.png" productName="Console" productDesciption="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." tryDemo="" learnMore="" googlePlay="" appStore=""></RightSection>
        <LeftSection imageURL="media/images/coin.png" productName="Coin" productDesciption="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""> </LeftSection>
        <RightSection imageURL="media/images/kiteconnect.png" productName="Kite Connect API" productDesciption="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." tryDemo="" learnMore="" googlePlay="" appStore=""></RightSection>
        <LeftSection imageURL="media/images/varsity.png" productName="Varsity mobile" productDesciption="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" appStore=""> </LeftSection>
         

         <p style={{textAlign:"center"}} className='fs-4'>Want to know more about our technology stack? Check out the <a href="" className='productshover'>Zerodha.tech</a> blog.</p>
       
        <Universe></Universe>
        
        </>
    );
}

export default ProductPage;