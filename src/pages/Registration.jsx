import React, { useState } from 'react'
import '../css/style.css'
import { useStateContext } from "../contexts/ContextProvider";
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar';
import { useNavigate } from 'react-router-dom';
export default function Registration() {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  const [name, setName] = useState('');
  const [dateOfJoin, setDateOfJoin] = useState('');
  const [email, setEmail] = useState('');
  const [dateExpiration, setDateExpiration] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, dateOfJoin, email, dateExpiration, city, price });
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
          <div>
            <div className='ps-10 text'>
              <p className='text-line'>Become a Member!</p>
              <p className='text-title'>Register</p>
            </div>
            <form className='p-10' onSubmit={handleSubmit}>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8 ">
                <div className="sm:col-span-4">
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Name of Participant
                  </label>
                  <div className="mt-2">
                    <input
                      style={{ paddingRight: '10px', paddingLeft: '10px' }}
                      type="text"
                      name="first-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Date of Join
                  </label>
                  <div className="mt-2">
                    <input
                      style={{ paddingRight: '10px', paddingLeft: '10px' }}
                      type="date"
                      name="date"
                      value={dateOfJoin}
                      onChange={(e) => setDateOfJoin(e.target.value)}
                      id="date"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
                <div className="sm:col-span-4">
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Email Address
                  </label>
                  <div className="mt-2">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ paddingRight: '10px', paddingLeft: '10px' }}
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Date Expiration
                  </label>
                  <div className="mt-2">
                    <input
                      value={dateExpiration}
                      onChange={(e) => setDateExpiration(e.target.value)}
                      style={{ paddingRight: '10px', paddingLeft: '10px' }}
                      type="date"
                      name="date"
                      id="date"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8'>
                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:col-start-3">
                  <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                    Price
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      name="price"
                      id="price"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8'>
                <div className="sm:col-span-2 sm:col-start-6">
                  <button className='btn-member'>Avail Membership</button>
                </div>
                <div className="sm:col-span-1 sm:col-start-8">
                  <button className='btn-cancel'>Cancel</button>
                </div>
              </div>
            </form>
          </div>
          {/* <div>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/viewmember" element={<Customer />} />
          </Routes>

        </div> */}
        </div>
      </div>

    </>

  )
}
