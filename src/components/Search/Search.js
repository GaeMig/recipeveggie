import styled from "styled-components";
 import { useState } from "react";
 import {FaSearch} from 'react-icons/fa'
 import { useNavigate } from "react-router-dom";



function Search() {

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const sumbitHandler = (e) => {
  e.preventDefault();
  navigate('/searchpage/' + input)
  };

return(
<div className="home-hero-title">
        
<h4 style={{textAlign:'center'}} className="subTitle">Search for various recipes just a click away</h4>
 <FormStyle onSubmit={sumbitHandler}>
  <div>
    <FaSearch></FaSearch>
  <input 
  onChange={(e) => setInput(e.target.value)} 
  type="text" 
  value={input}></input>
  </div>
 </FormStyle>
</div>
)
}


const FormStyle=styled.form`
margin: 0rem 2rem;
div{
  width:100%;
  position: relative;
  text-align: center;
  margin-top: 10px;
}
input{
  border: none;
  background: #FEFBF6;
  font-size:1.5rem;
  color:black;
  padding: 1rem 3rem;
  border: none;
  border-radius: 1rem;
  outline: none;
  width: 50%;
  margin-top: 15px;

}
svg{
  position: absolute;
  top: 50%;
  left:25%;
  transform: translate(100%, -50%);
  color: black;
}


`

export default Search