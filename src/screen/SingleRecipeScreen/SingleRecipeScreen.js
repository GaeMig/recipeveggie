import {useEffect, useState} from "react"
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import React from 'react'
import { Link } from "react-router-dom"
const API_KEY='834589bea170469cbd4d9dee6fd46785'



function SingleRecipeScreen() {

  let params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${API_KEY}`)
    const  detailData = await data.json(); 
    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails()
  },[params.name])

  return (
    <Wrapper>
      <div className="container">
        <br></br>
        <div className="containerTitle">
    <h3 className="singleTitle">{details.title}</h3>
    </div>
    <div className="containerImage">
    <img className="singleImage" src={details.image} alt={details.title}></img>
     </div>
     <div>
      <div className="contSummary">
       <h4 className="titleEl">Summary</h4>
     <p className="summary" dangerouslySetInnerHTML={{__html: details.summary}}></p>
     </div>

     <hr className="lineHr"></hr>
     <div className="containerIns">
     <h4 className="titleEl">Instructions</h4>
     <p className="insBox" dangerouslySetInnerHTML={{__html:details.instructions}}></p>
     </div>
     </div>

     <hr className="lineHr"></hr>

     <div className="containerIngred">
      <ul>
     <h4 className="titleEl titleIng">Ingredients</h4>
        {details?.extendedIngredients?.map((ingredient) => 
        
        <li className="listIng" key={ingredient.id}>
        •  {ingredient.original}
        </li>
        
        )}
      </ul>
     </div>

     <hr className="lineHr"></hr>



     <div className="containerTime">
      <h4 className="titleEl">Preparation Time <p className="minutes">{details.readyInMinutes} minutes</p> </h4>
     </div>

     <br></br>

     </div>
    <Link to={"/"}>
      <div>
        <p className="backHome"> Back to Home</p>
        </div>
      </Link>
  </Wrapper>
  )
}

const Wrapper = styled.div`
margin-top: 100px;

.container{
  width: 80%;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.7);


}


.singleTitle{
  text-align: center;
  font-weight: 800;
  font-family: 'Courier New', Courier, monospace;
  color: #343a40ff;
}

.containerImage{
  text-align: center;
}

.singleImage{
  border-radius: 8px;
  margin-top: 15px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.7);
}

@media screen and (max-width:750px){
  .singleImage{
    width: 390px;
  }
}

@media screen and (max-width:500px){
  .singleImage{
    width: 350px;
  }
}

@media screen and (max-width:430px){
  .singleImage{
    width: 250px;
  }
}


.titleEl{
  font-weight: 600;
  font-size: 22px;
  font-family: 'Courier New', Courier, monospace;
  margin-top: 25px;

}

.contSummary{
  margin-left: 35px;
}

.summary{
  margin-top: 15px;
}

.lineHr{
  width: 100%;
 margin-top: 35px;

text-align: center;
}

.containerIngred{
  margin-top: 35px;
}

.titleIng{
  text-align: center;
}

.listIng{
  margin-top: 15px;
  text-align: center;
}



.containerIns{
  margin-left: 35px;
  
}

.insBox{
  margin-top: 15px;
}

.containerTime{
text-align: center;
}

.minutes{
  margin-top: 15px;
  font-weight: 400;
  font-size: 15px;
}

.backHome{
  font-size: 20px;
  font-weight: 700;
  font-family: 'Courier New', Courier, monospace;
  text-align:center; 
  color: #343a40ff;
  margin-top: 25px;
  margin-bottom: 25px;
}

.backHome:hover{
font-size: 22px;
transition: 0.7s;
}
`



export default SingleRecipeScreen