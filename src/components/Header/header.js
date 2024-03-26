import './header.css'
import React, { useState } from 'react';
import logo from '../../assets/images/attendme1.png';
import { HiOutlineLogout } from "react-icons/hi";
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { IoMenu } from "react-icons/io5";



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(false); 
  };


  const handleLogout = () => {
    window.location.href = '/';  
  };
  return (
      <nav className='navbar'>
        <img src={logo} alt='logo' className='logo' />
        
        <div className='desktopMenu'>
          <Link to="/vehicleRegistration" className='desktopMenuItemList'>Vehicle Registration</Link>
          <Link to="/dailyAttendance" className='desktopMenuItemList'>Daily Attendance</Link>
        </div>
        
        <button className='desktopMenuBtn' onClick={handleLogout}>
          <HiOutlineLogout className='desktopMenuIcon' /> Log Out
        </button>
  
        <IoMenu className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        
        <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
          <Link to="/vehicleRegistration" className='mobileMenuItem' onClick={handleMenuClick}>Vehicle Registration</Link>
          <Link to="/dailyAttendance" className='mobileMenuItem' onClick={handleMenuClick}>Daily Attendance</Link>
        </div>
      </nav>

  );
}

export default Navbar;