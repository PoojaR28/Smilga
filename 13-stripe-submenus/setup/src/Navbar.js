import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from "./context"

const Navbar = () => {
  const {openSidebar,openSubmenu,closeSubmenu}=useGlobalContext();
  const displaySubmenu=(e)=>{
    const page=e.target.textContent;
    const temp=e.target.getBoundingClientRect();
    console.log(temp,page);
openSubmenu();
  }
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe logo" className="nav-logo"/>
          <button className="btn toggle-btn"onClick={openSidebar}><FaBars/></button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>products</button>
          </li>
          <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>
        <button className="btn">Sign In</button>
      </div>
    </nav>
  )
}

export default Navbar
