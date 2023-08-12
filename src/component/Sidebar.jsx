import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel, mdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import '../css/style.css'


// import { links } from '../data/dummy.js'
import { links } from '../data/data'
const Sidebar = () => {

    const location = useLocation();
    const { activeMenu, setActiveMenu, currentColor, currentTextColor } = useStateContext()



    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-gray-700 ';

    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

    const isActive = (name) => location.pathname === `/${name}`;

    const [hovered, setHovered] = useState(false);

    const activeText = {
        color: "#1A1363",
        fontWeight: 700
    };

    const normalText = {
        color: "#fff"
    };

    const hoverLink = {
        color: "#1A1363"
    };


    return (
        <div className="ml-3 h-screen
        md:overflow-hidden overflow-auto
        md:hover:overflow-auto pb-10">
            {activeMenu && (
                <>
                    <div className='flex justify-between items-center'>
                        <Link to="/"
                            onClick={() => setActiveMenu(false)}
                            className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-white items-center" >
                            {/* <SiShopware /> */}
                            <span>Gym</span>
                        </Link>
                        <TooltipComponent content="Menu" position='BottomCenter'>
                            <button type="button" onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
                                <MdOutlineCancel />
                            </button>
                        </TooltipComponent>
                    </div>
                    <div className='mt-10'>
                        {links.map(item => (
                            <NavLink to={`/${item.name}`}
                                key={item.name}
                                onClick={() => { }}
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                                style={({ isActive }) => ({
                                    backgroundColor: isActive ? currentColor : '',
                                })}
                            >
                                <span
                                    onMouseEnter={() => setHovered(true)}
                                    onMouseLeave={() => setHovered(false)}
                                    style={isActive(item.name) ? activeText : (hovered ? hoverLink : normalText)}
                                    // style={isActive(item.name) ? activeText : normalText}
                                    className='sidebar-item'
                                >
                                    {item.icon}
                                </span>
                                <span className='sidebar-item'
                                    style={isActive(item.name) ? activeText : normalText}
                                >{item.title}</span>
                            </NavLink>
                        ))}
                    </div>
                </>
            )
            }
        </div >
    )
}

export default Sidebar