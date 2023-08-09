import React from 'react'
import { useStateContext } from "../contexts/ContextProvider";
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar';
const DashBoard = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  return (
    <>
      <div className="flex relative dark:bg-main-dark-bg">
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
          <div className='dashboard'>
            Dashboard
          </div>

        </div>
      </div>

    </>
  )
}

export default DashBoard