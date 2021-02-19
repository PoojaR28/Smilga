import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [loading,setLoading]=useState(true);
  const [person,setPerson]=useState(null);
  const [title,setTitle]=useState('name');
  const [value,setValue]=useState('Random person');

  function handleChange(e){
    console.log(e.target);
  }
  return(
    <main>
    <div className="block bcg-black">    </div>

      <div className="block">
       <div className="container">
         <img src={(person && person.image || defaultImage)} alt="Random User" className="user-img"/>
         <p className="user-title">My {title} is</p>
         <p className="user-value">{value}</p>
         <div className="values-list">
           <button className="icon" data-aria-label='name' onMouseOver={handleChange}><FaUser/></button>
           <button className="icon" data-aria-label='email' onMouseOver={handleChange}><FaEnvelopeOpen/></button>
           <button className="icon" data-aria-label='age' onMouseOver={handleChange}><FaCalendarTimes/></button>
           <button className="icon" data-aria-label='street' onMouseOver={handleChange}><FaMap/></button>
           <button className="icon" data-aria-label='phone' onMouseOver={handleChange}><FaPhone/></button>
           <button className="icon" data-aria-label='password' onMouseOver={handleChange}><FaLock/></button>

         </div>
         <button className="btn" type="button">{loading ? 'Loading...':'Random User'}</button>
       </div>
      </div>
    </main>
  )
}

export default App
