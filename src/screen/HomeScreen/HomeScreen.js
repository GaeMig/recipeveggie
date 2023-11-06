import React from "react";
import  Recipes  from "../../components/Recipes/Recipes";
import Loading from "../../components/Loading/Loading";
import  ErrorMessage  from "../../components/ErrorMessage/ErrorMessage";
import { Helmet } from "react-helmet";
import { useGlobalContext } from "../../context";
import Search from "../../components/Search/Search";


const HomeScreen = () => {

  const { isLoading, data, isError } = useGlobalContext()
 


  return <>
  <Helmet>
    <title>Recipe Veggie</title>
  </Helmet>


           <Search></Search> 
        {!isLoading && isError ? (
          <ErrorMessage>No Recipes Found</ErrorMessage>
        ) : !isLoading && !isError ? (
          <Recipes data={data.recipe} />
        ) : (
          <Loading />
        )}
       
  </>;
};



export default HomeScreen;