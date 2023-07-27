import React, { useContext, useEffect } from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, Sidebar, ThemeSettings } from "./component";
import { Calendar, ColorPicker, Customer, Ecommerce, Editor, Employees, Kanban, Orders } from './pages';
import { useStateContext } from "./contexts/ContextProvider";
import DashBoard from "./pages/Dashboard";
function App() {
  const { activeMenu, setActiveMenu } = useStateContext()

  // const activeMenu = true;
  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <TooltipComponent content="Settings" position="Top">
            <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray
             text-white" style={{ background: 'blue', borderRadius: '50%' }} >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
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
          `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
        }>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
        </div>

        <div>
          {/* Tạo đường dẫn mục trong navbar */}

          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<DashBoard />} />
            <Route path="/dashboard" element={<DashBoard />} />

            {/* Page */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customer />} />

            {/* App */}
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/color-picker" element={<ColorPicker />} />


          </Routes>
        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
