import React from "react";
import Header from "../../components/landingpage/Header";
import HeroSection from "../../components/landingpage/HeroSection";
import Footer from "../../components/landingpage/Footer";
import "../../styles/landingpagestyle/landingpage.css";


const LandingPage = ()=>{
    return(
        <div className="container-main-landingpage">
            <Header/>
            <HeroSection/>
            <Footer/>
        </div>
    )
}
export default LandingPage;