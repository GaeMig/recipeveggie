import React from "react";
import { LinkComponent, SocialComponent } from "../../Utils/links";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { useGlobalContext } from "../../context";
import Img from "../../assets/img/vega.png"


const Sidebar = () => {
 const {isSidebarOpen, closeSidebar} = useGlobalContext();

  return <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar-content">
          <header className="nav-header container">
             <div className="nav-brand">
            <h3>
            <img src={Img} alt="img-leaf" className="img-leaf"></img>
            <span className="titleVe">eggie Recipe</span>    
            </h3>             
            </div>
             <button 
             className="nav-toggler btn icon-btn"
             onClick={closeSidebar}>
              <VscArrowSmallLeft className="nav-icon"/>
             </button>
          </header>
          <div className="container">
            <LinkComponent classLink='sidebar-links'></LinkComponent>
          </div>
          <SocialComponent classSocial="sidebar-social"></SocialComponent>
        </div>
   </aside>;
};

export default Sidebar;