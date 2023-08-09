import React, { useContext, useEffect } from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, Sidebar, ThemeSettings } from "./component";
import { useStateContext } from "./contexts/ContextProvider";
import DashBoard from "./pages/Dashboard";
import Registration from "./pages/Registration";
import Customer from "./pages/Customer";
import Login from './pages/Login'
import HomePage from "./pages/HomePage";
import Coaches from "./pages/Coaches";
function App() {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  // const activeMenu = true;
  return (

    <Router>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" exact element={<DashBoard />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/viewmember" element={<Customer />} />
        <Route path="/coaches" element={<Coaches />} />
      </Routes>
    </Router>

    // <BrowserRouter>
    //   <div className="flex relative dark:bg-main-dark-bg">
    //     {activeMenu ? (
    //       <div className="w-72 fixed sidebar" style={{ backgroundColor: 'rgb(26, 19, 99)' }}>
    //         <Sidebar />
    //       </div>
    //     ) : (
    //       <div className="w-0 dark:bg-secondary-dark-bg">
    //         <Sidebar />
    //       </div>
    //     )}
    //     <div className={
    //       activeMenu
    //         ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
    //         : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
    //     }>
    //       <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
    //         <Navbar />
    //       </div>
    //       <div>
    //         <Routes>
    //           {/* Dashboard */}
    //           <Route path="/" element={<DashBoard />} />
    //           <Route path="/dashboard" element={<DashBoard />} />
    //           <Route path="/registration" element={<Registration />} />
    //           <Route path="/viewmember" element={<Customer />} />
    //         </Routes>

    //       </div>
    //     </div>
    //   </div>
    //   <Login />
    // </BrowserRouter>

  );
}

export default App;
