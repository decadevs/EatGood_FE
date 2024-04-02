import React from "react";
import "../../styles/landingpagestyle/herosection.css";
import Ellipse from "../../assets/Ellipse 291.png";
import MealCard from "../../assets/Meal Card (1).png";
import MealCard2 from "../../assets/Meal Card.png";
import MealCard3 from "../../assets/mealcared2.png";
import Section2 from "../../assets/Section2.png";
import Ricebowl from "../../assets/Rice Bowl.png";
import Soup from "../../assets/soup.png";
import Meat from "../../assets/Meat.png";
import Rawfood from "../../assets/RawFoods.png";
import Nativerice from "../../assets/NativeRice.png";
import Goatmeatrice from "../../assets/GoatMeatRice.png";

const HeroSection = () => {
  return (
    <div className="container-main-herosection">

      {/* section 1 */}

      <section className="container-section1">
        <div className="container-first-section-content">

        <div className="container-left-text-hero1">
    
          <h1 className="container-left-text-h1">
          Claim Best Offer on African <span className="container-left-span-section1-1">Food</span> & <span className="container-left-span-section1-2">Ingredients.</span>  
          </h1> 
           <p className="container-left-text-p">Our job is to filling your tummy with delicious food and  with fast and free delivery</p> 
           

          <button className="container-btn-get">Get Started</button> 
          
        
        </div>
        <div className="container-right-img">
          <div className="container-first-img">
            <img className="container-img-ellipse" src={MealCard3} alt="plate of rice"/>
          </div>
        </div>

        </div>
      </section>

      {/* section 2 */}

      <section className="container-section2">
        <h1 className="container-section2-h1">What we serve</h1>
        <div className="container-section2-main-div">
          <img className="container-section2-img" src={Section2}/>
        </div>
      </section>

{/* section 3 */}
      <section className="container-section3">
      <h1 className="container-section3-h1">Our Menu</h1>
        <div className="container-section3-main-div">
          
          
            <div className="container-section3-first-rap">
            <div className="container-rice-bowl-img">
              <img className="container-section3-image-1" src={Ricebowl}/>
              <p className="container-section3-parag-1">Rice Dishes</p>
            </div>
            <div className="container-soup-stew-img">
              <img className="container-section3-image-2" src={ Soup}/>
              <p className="container-section3-parag-2">Soups and Stews</p>
            </div>
            <div className="container-grill-rosted-img">
              <img className="container-section3-image-3" src={Meat}/>
              <p className="container-section3-parag-3">Grilled and Roasted Foods</p>
            </div>
            <div className="container-raw-foods-img">
              <img className="container-section3-image-4" src={Rawfood}/>
              <p className="container-section3-parag-4">Raw Foods</p>
            </div>
            </div>
          
           <div className="container-section3-main-second-div">
              <img className="container-section3-img1" src={Nativerice}/>
          </div>
          <div className="container-section3-main-third-div">
            <img className="container-section3-img2" src={Goatmeatrice}/>
          </div> 

          </div>

     
      
      </section>
    </div>
  );
};
export default HeroSection;