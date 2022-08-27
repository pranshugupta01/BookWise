import {  Switch, useLocation } from "react-router";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Pages/Dashboard";
import Team from "./components/Pages/Team";
import Calender from "./components/Pages/Calender";
import Documents from "./components/Pages/Documents";
import Projects from "./components/Pages/Projects";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Home, Auth } from "./components";
function App() {
  return (
    
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
      </Routes>
    
  );
}

export default App;
