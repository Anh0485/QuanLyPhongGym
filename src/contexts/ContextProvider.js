import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
const StateContext = createContext();

const initialState = {
    notification: false,
};

export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#fff');
    const [currentTextColor, setCurrentTextColor] = useState('#1A1363');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    const login = async (email, password) => {
        try {

            const response = await axios.post('http://localhost:5000/api/users/auth', { email, password });
            console.log("Phản hồi từ API:", response.data);
            if (response.data) {
                setIsAuthenticated(true);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Login error >>>>", error);
            return false;
        }
    };

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            currentColor,
            setThemeSettings,
            isAuthenticated,
            login
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);