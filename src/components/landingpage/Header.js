import React from "react";
import "../../styles/landingpagestyle/header.css";
import Logo from "../../assets/Thai Hot Pot.png"

const Header = () => {
  return (
    <div className="container-main-header">
      <div className="container-main-header-content">
        <div className="container-left-content">
          <div className="container-left-logo-image">
            <img className="container-left-header-img1" src={Logo} alt="Nigerian Native Pot"/>
          </div>
          <div className="container-left-text">
            <p className="container-left-text-header-p">Eat Good Naija</p>
          </div>
        </div>
        <div className="container-right-content">
          <div className="container-right-list-menu">
             <nav className="container-right-navigation"> 
            
       
              <ul className="container-list-menu-ul">
               
               
                <li className="container-list-home"><a className="container-list-home-a" href="/">Home</a></li> 
               <li className="container-list-services"><a className="container-list-service-a" href="/">Services</a></li>
                <li className="container-list-menu"><a className="container-list-menu-a" href="/">Menu</a></li>
                <li className="container-list-contact"><a className="container-list-contact-a" href="/">Contact</a></li>

              </ul>
             
            </nav> 
          </div>
          <div className="container-right-signup-button-div">
            <button className="container-right-signup-button">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
