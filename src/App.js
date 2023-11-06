import  Navbar  from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen/HomeScreen";
import AboutScreen from "./screen/AboutScreen/AboutScreen";
import ContactScreen from "./screen/ContactScreen/ContactScreen";
import SingleRecipeScreen from "./screen/SingleRecipeScreen/SingleRecipeScreen";
import ErrorScreen from "./screen/ContactScreen/ContactScreen";

import SearchPage from "./screen/SearchPage/SearchPage"



function App() {

  return (
    <Router className='App'>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/searchpage/:search" element={<SearchPage></SearchPage>} ></Route>
        <Route path="/about" element={<AboutScreen></AboutScreen>}></Route>
        <Route path="/contact" element={<ContactScreen></ContactScreen>}></Route>
        <Route path="/recipe/:name" element={<SingleRecipeScreen></SingleRecipeScreen>}></Route>
        <Route path="*" element={<ErrorScreen></ErrorScreen>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App;