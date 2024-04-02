import React from "react";
import "../../styles/landingpagestyle/footer.css";
import copyright from"../../assets/copyrightimg.png";
import twitter from"../../assets/Twitter logo.png";
import facebook from"../../assets/facebook logo.png";
import instagram from"../../assets/instagram logo.png";
import linkedin from"../../assets/linkedin logo.png";

const Footer = ()=>{
    return(
            <div className="container-main-footer">
                <footer className="container-main-footer-1">
                    <div className="container-main-footer-rap">
                    <div className="container-footer-right-content">
                    <img className="container-main-footer-copyright-img" src={copyright} alt="copyright"/>
                    <p className="container-footer-p">2023 EatGoodNaija|Powered by EatGoodNaija</p>
                    </div>

                    <div className="container-footer-left-content">
                    <img className="container-main-footer-twitter-img" src={twitter} alt="twitter"/>
                    <img className="container-main-footer-facebook-img" src={facebook} alt="copyright"/>
                    <img className="container-main-footer-instagram-img" src={instagram} alt="copyright"/>
                    <img className="container-main-footer-linkedin-img" src={linkedin} alt="copyright"/>
                    </div>
                   </div>
                    </footer>
          </div>
             
    )
}
export default Footer;