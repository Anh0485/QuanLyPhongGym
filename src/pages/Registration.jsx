import React from 'react'
import '../css/style.css'
export default function Registration() {
  return (
    <div>
      <div className='ps-10 text'>
        <p className='text-line'>Become a Member!</p>
        <p className='text-title'>Register</p>
      </div>
      <form className='p-10'>
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
              Contact No.
            </label>
            <div className="mt-2">
              <input
                style={{ paddingRight: '10px', paddingLeft: '10px' }}
                type="text"
                name="number"
                id="number"
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
  )
}
