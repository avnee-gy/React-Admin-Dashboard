import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify, BsCaretDown}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left p-2 flex w-1/3' >
          <input className='border-2 rounded-md border-slate-100' type="search" placeholder="Search"/>
          {/* <button type="submit"><BsSearch  className='icon'/></button> */}
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
            <button className="dropbtn flex text-black" >Admirra John
            <BsCaretDown className='icon'/>
  </button>
        </div>
    </header>
  )
}

export default Header