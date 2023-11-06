import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./components/Footer/index.css"
import "./components/Sidebar/index.css"
import "./components/Navbar/index.css"
import "./screen/ContactScreen/indexContact.css"
import "./screen/HomeScreen/indexHome.css"
import App from "./App";
import { AppProvider } from './context.js'

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>
);