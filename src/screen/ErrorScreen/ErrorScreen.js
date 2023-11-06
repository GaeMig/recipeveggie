import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import animationData from "../assets/animation/animation_ln9gdtep.json";
import { Link } from "react-router-dom";

const ErrorScreen = () => {
  return <Wrapper>
    <h3>Page not found</h3>
    <Lottie animationData={animationData}
    loop={true}
    className="lottie"></Lottie>
    
    <Link to="/" className="btn btn-primary">
    go back home
    </Link>
  </Wrapper>;
};

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  display: -ms-grid;
  display: --moz-rid;
  display: --webkit-grid;
  place-items: center;
  h3 {
    text-transform: uppercase;
  }
  .btn{
    border-radius: 16px;
  }
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
  .lottie{
    width: 400px;
    height: 300px;
  }
`;

export default ErrorScreen;
