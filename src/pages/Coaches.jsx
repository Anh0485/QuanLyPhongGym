import React, { useState, useEffect } from 'react'
import '../css/style.css'
// import { Coachess } from '../data/Coaches.js'
import axios from 'axios'
import { useStateContext } from "../contexts/ContextProvider";
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar';
const Coaches = () => {
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

    const [selectedCount, setSelectedCount] = useState(-1);
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([]);

    const handleSelectChange = (event) => {
        const selectedCountValue = Number(event.target.value);
        setSelectedCount(selectedCountValue);
    };
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // get data
    useEffect(() => {
        const fetchData = async () => {
            const results = await axios('http://localhost:5000/api/coaches/all');
            setSearchResults(results.data);
        }
        fetchData();

    }, [])

    useEffect(() => {
        const results = searchResults.filter(customer =>
            customer.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);

    const handleAddCoach = () => {
        console.log('add coaches')
    }

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
                    {/* Coaches */}
                    <div className='ps-10'>
                        <p className='text-title'>Active Coaches</p>
                        <div className='table' style={{ width: '1026px', backgroundColor: '#77749B', borderRadius: '20px', padding: '20px' }}>
                            <p style={{ fontSize: '20px', fontWeight: '700', color: '#fff' }}>Manage Coaches</p>
                            <div className='flex mb-5 mt-5' >
                                <label style={{ color: '#fff', marginRight: '7px' }}>Show Entities</label>
                                <select
                                    onChange={handleSelectChange}
                                    className='select-number'>
                                    <option value={-1}> All </option>
                                    {Array.from({ length: searchResults.length }).map((_, index) => (
                                        <option key={index + 1} value={index + 1}>
                                            {index + 1}
                                        </option>
                                    ))}
                                </select>
                                <form className='flex ml-2'>
                                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div class="relative">
                                        <input
                                            type="search"
                                            style={{ backgroundColor: '#5D57A3' }}
                                            id="default-search"
                                            placeholder='Search'
                                            className='input-search'
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                        />
                                    </div>
                                    <div class="inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                </form>

                            </div>
                            {selectedCount === -1 ? (
                                <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-white uppercase dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Name
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Coach ID
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Email
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    ADDRESS
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {searchResults.map((item) => (
                                                <tr class="dark:bg-gray-900 dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">{item.name}</th>
                                                    <td class="px-6 py-4 text-white">{item._id}</td>
                                                    <td class="px-6 py-4 text-white">{item.email}</td>
                                                    <td class="px-6 py-4 text-white">{item.address}</td>
                                                    <td class="px-6 py-4">
                                                        <button class="btn-edit font-medium  dark:text-blue-500 hover:underline" style={{ color: '#2B2B2B' }}>Edit</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                                    {searchResults.slice(0, selectedCount).length > 0
                                        ? (
                                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" class="px-6 py-3">
                                                            Name
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            CoachID
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Email
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            ADDRESS
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Actions
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {searchResults.slice(0, selectedCount).map((item) => (
                                                        <tr class="dark:bg-gray-900 dark:border-gray-700">
                                                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                                                {item.name}
                                                            </th>
                                                            <td class="px-6 py-4 text-white">
                                                                {item._id}
                                                            </td>
                                                            <td class="px-6 py-4 text-white">
                                                                {item.email}
                                                            </td>
                                                            <td class="px-6 py-4 text-white">
                                                                {item.address}
                                                            </td>
                                                            <td class="px-6 py-4">
                                                                <button class="btn-edit font-medium  dark:text-blue-500 hover:underline" style={{ color: '#2B2B2B' }}>Edit</button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        )
                                        : (
                                            <p> No Coachess found with ID: {selectedCount} </p>
                                        )}
                                </div>
                            )}
                            <div className='mt-4' style={{ paddingLeft: '660px' }}>
                                <btn class='btn-previous'>Previous</btn>
                                <btn class='btn-next'>Next</btn>
                            </div>
                        </div>

                    </div>
                    <div className='add-coach'>
                        <button onClick={handleAddCoach} className='btn-coach'>Add Coach</button>
                    </div>

                </div>
            </div>

        </>
        //Coaches

    )
}

export default Coaches