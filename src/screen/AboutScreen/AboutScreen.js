import React from "react";
import Cereals from "../../assets/img/cereali.jpg"
import Legumes from "../../assets/img/legumi.avif"
import Milk from "../../assets/img/latteDer.jpg"
import Egg from "../../assets/img/uova.jpeg"
import Vegetables from "../../assets/img/vegetali.jpeg"
import Fruit from "../../assets/img/frutta.jpg"
import Seeds from "../../assets/img/seminoci.jpg"
import Brewer from "../../assets/img/lievitodibirra.jpg"

import styled from "styled-components";
import { Helmet } from "react-helmet"
 


const AboutScreen = () => {
  return <>
  <Wrapper>
    <Helmet>
     <title> Recipe Veggy Foods </title>
    </Helmet>
    
   <div className="container">
    <h4 className="subtitle">Here is a list of essential foods for vegetarians</h4>
    <br></br>
   </div>
   <div className="container">
   <h4 className="title">Cereals</h4>
   <img src={Cereals} 
   alt="img cereals" 
   className="img-foods"
   ></img>
   <p className="text-foods">
   Cereals are, among all foods for vegetarians, the cornerstone of diets. These are rice, kamut, barley, spelt, amaranth, wheat and flours of all types, wholemeal, corn, wheat which give rise to an infinite variety of products, including bread, pasta, polenta, chapati, poori, millet, and so on around the world. These foods provide vitamins, such as the very important vitamin B, often lacking in vegetarian diets, iron, fiber and carbohydrates. It is best to consume them for breakfast and lunch.
   </p>
   <hr className="hr"></hr>
   </div>

   <div className="container">
   <h4 className="title">Legumes</h4>
   <img src={Legumes} 
   alt="img legumes" 
   className="img-foods-left"
   ></img>
   <p className="text-foods">
   Among the foods with the highest protein content for a healthy vegetarian diet, there are legumes. Soya, peas, chickpeas, beans, lentils, broad beans are a substitute when you decide to no longer eat meat or fish. Thanks to the complementarity of their amino acids, they are able to provide complete proteins and isoflavones. They can be taken 7 days a week, according to the vegetarian table reported in the text "The Mediterranean hourglass and the vegetarian option", a self-management, teaching and personalization manual food.
   </p>
   <hr className="hr"></hr>
   </div>

   <div className="container">
   <h4 className="title">Milk and derivatives</h4>
   <img src={Milk} 
   alt="img milk and derivatives" 
   className="img-foods"
   ></img>
   <p className="text-foods">
   Foods for vegetarians often also include cow's or goat's milk and derivatives, if you are not strictly vegan. These foods are important because they contain calcium, vitamin D, proteins and a certain amount of saturated fats. It is important not to abuse them, so a couple of times a week cheese and milk even every morning.
   </p>
   <hr className="hr"></hr>
   </div>


   <div className="container">
   <h4 className="title">Vegetables</h4>
   <img src={Vegetables} 
   alt="img Vegetables" 
   className="img-foods-left"
   ></img>
   <p className="text-foods">
   Vegetables, in second place in the ranking of foods for vegetarians, are also very important as they contain a high quantity of nutrients, vitamins and iron above all. Green leafy vegetables should never be missing. The list of all plant foods essential for a correct vegetarian diet also includes seaweed, less known but rich in properties, which can complement soups: these are allaria seaweed, dulse seaweed, kelp seaweed, nori seaweed. and wakame. They are always present in main meals.
   </p>
   <hr className="hr"></hr>
   </div>

   
   <div className="container">
   <h4 className="title">Egg</h4>
   <img src={Egg} 
   alt="img egg" 
   className="img-foods"
   ></img>
   <p className="text-foods">
   Fats, proteins, vitamin B12 (the first that tends to drop when switching to a veg diet)
   and iron: the intake of eggs, among all vegetarian foods, is of fundamental importance.
   It is recommended to consume it a couple of times a week.
   </p>
   <hr className="hr"></hr>
   </div>

   <div className="container">
   <h4 className="title">Fruit</h4>
   <img src={Fruit} 
   alt="img fruit" 
   className="img-foods-left"
   ></img>
   <p className="text-foods">
   Vitamins, mineral salts, iron: these are the main contributions
   nutritional values ​​of fruit, one of the vegetarian foods
   essential, especially the dry one, which recharges the body
   iron and noble sugars important for its proper functioning.

   </p>
   <hr className="hr"></hr>
   </div>

   <div className="container">
   <h4 className="title">Seeds and nuts</h4>
   <img src={Seeds} 
   alt="img seeds and nuts" 
   className="img-foods"
   ></img>
   <p className="text-foods">
   Seeds and nuts represent foods with high nutritional value and essential sources
    of proteins, iron, fibre, calcium, minerals and micronutrients for vegetarians.
    Flax seeds, walnuts, sesame seeds, peanuts, melon seeds, pumpkin seeds, almonds,
    pine nuts, sunflower seeds, are all products that help rebalance the diet.
    In particular, peanut butter, even recommended for athletes,
    provides notable protein support.
   </p>
   <hr className="hr"></hr>
   </div>

   <div className="container">
   <h4 className="title">Brewer's yeast</h4>
   <img src={Brewer} 
   alt="img brewer's yeast" 
   className="img-foods-left"
   ></img>
   <p className="text-foods">
   Already known at the time of the Sumerians, Babylonians and Egyptians,
    brewer's yeast, taken naturally or in the form of tablets,
    represents an excellent support for vitamin B deficiency,
    the first that can occur in a vegetarian diet.
    It is in fact very rich in group B proteins (except the famous B12, which must be integrated in another way),
    trace elements, natural enzymes, essential amino acids.
   </p>
   <hr className="hr"></hr>
   </div>



  </Wrapper>
   </>;
};

 const Wrapper = styled.section`
 .titleAb{
  color: #343a40ff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 }
 .title{
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 25px;
  color: #343a40ff;
 }
 .subtitle{
  text-align: center;
  margin-top: 35px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #343a40ff;
 }

 .img-foods{
  float: right;
  border-radius: 15px;
  width: 430px; 
  opacity: 0.8;
  box-shadow: 1.5px 3px;
  height: 245px;
  margin-left: 5px;
 }

 .img-foods-left{
  float: left;
  border-radius: 15px;
  width: 430px; 
  opacity: 0.8;
  box-shadow: 1.5px 3px;
  height: 245px;
  margin-right: 5px;
 }

 .img-foods:hover{
 opacity: 1;
 }
 .img-foods-left:hover{
 opacity: 1;
 }
 .text-foods{
  color: black;
  padding: 5%;
  text-align: center;
  
 }
 .hr{
  color: black;
  margin-top: 75px;
 }

 @media screen and (max-width:450px) {
  .img-foods{
    width: 370px;
    margin-right: 12px ;
    margin-bottom: 15px;
  }
  .img-foods-left{
    width: 370px;
    margin-left: 12px ;
    margin-bottom: 15px;
  }
}

 @media screen and (max-width:400px) {
  .img-foods{
    width: 350px;
    margin-right: -10px ;
    margin-bottom: 15px;
  }
  .img-foods-left{
    width: 350px;
    margin-left: -10px ;
    margin-bottom: 15px;
  }
}

`

export default AboutScreen;