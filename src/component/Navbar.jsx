import React from 'react'
import { IoNotifications } from 'react-icons/io5'
const Navbar = () => {
  return (
    <div class="flex justify-between p-10">
      <div>
        <img src="../assets/img/img1-512w.png" />
      </div>
      <div className='flex'>
        <p className='pr-5' style={{ color: '#1A1363', fontWeight: '600' }}>Feedback</p>
        <IoNotifications style={{ color: '#1A1363' }} />
      </div>
    </div>
  )
}

export default Navbar