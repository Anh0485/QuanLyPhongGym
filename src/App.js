import React, { useContext, useEffect } from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, Sidebar, ThemeSettings } from "./component";
import { useStateContext } from "./contexts/ContextProvider";
import DashBoard from "./pages/Dashboard";
import Registration from "./pages/Registration";
import Customer from "./pages/Customer";
function App() {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  // const activeMenu = true;
  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        {/* <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray
             text-white"
              style={{ background: 'blue', borderRadius: '50%' }} >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div> */}
        {activeMenu ? (
          <div className="w-72 fixed sidebar" style={{ backgroundColor: 'rgb(26, 19, 99)' }}>
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div className={
          activeMenu
            ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
            : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
        }>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<DashBoard />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/viewmember" element={<Customer />} />

            </Routes>

          </div>
        </div>

        <div>
          {/* Tạo đường dẫn mục trong navbar */}


        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
