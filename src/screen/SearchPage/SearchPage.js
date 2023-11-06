import React from "react";
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from "styled-components";
import { HiClipboardList } from "react-icons/hi";
import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";


const API_KEY = '834589bea170469cbd4d9dee6fd46785'

function SearchPage() {

  

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();


  const getSerched = async (name) => {

    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&number=12&tags=vegetarian`
      )
   const recipes = await data.json();
   setSearchedRecipes(recipes.results)
  }

  useEffect(() => {
  getSerched(params.search);
  },[params.search])
  return( 
    <>
    <Search></Search>
    <Wrapper>
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
     {searchedRecipes.map((recipe) => {
       return(
        <div className="ingredient">
          <img src={recipe.image} alt={recipe.title}></img>
          <h4>{recipe.title}</h4>
          <Link to={"/recipe/" + recipe.id} className="see-more">  
          <h5>Recipe</h5>
          <HiClipboardList className='icon ' />
        </Link>
        </div>
           )
       })}
         </div>
       </header>
     </div>   
    </Wrapper>
    </>  
   )

 
}

   const Wrapper = styled.div`
   cursor: pointer;
   .App{
    text-align: center;
   }
   .App-header{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
   }

   h4{
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
   }

   .Wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
   }
   .ingredient{
    width: 450px;
    height: 380px;
    border-radius: 8px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.3);
    display: flex;
    justify-content:space-between ;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 25px;
    background-color: #FFEFD5;
   }

   .ingredient:hover{
    margin-top: 20px;
    transition: 0.5s;
   } 
   .ingredient img:hover{
    width: 440px;
   }


   .ingredient img{
    height: 250px;
    width: 430px;
    border-radius: 10px;
    margin-top: 0px;
   }
    
   .see-more{
    font-size: large;
    
    display: grid;
    grid-template-columns: 2fr auto;
    align-items: center;
    gap: 0.7rem;
   
   }

   .icon{
    color:#99B780;
   }

   `





export default SearchPage