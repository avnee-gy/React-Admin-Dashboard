import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillPersonPlusFill,
  BsCalendar2EventFill,
  BsPeopleFill,
  BsBuildingFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <div id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img
            src='./src/logo.png'
            alt="logo"
            className="logo w-5/6 mr-10"
          ></img>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-sublist-item font-light text-s ">MAIN MENU
            <ul className="sidebar-sublist">
                <li className="sidebar-list-item">
                <a href="" className="active-page flex">
                    <BsGrid1X2Fill className="icon" />
                    Dashboard
                </a>
                </li>
                <li className="sidebar-list-item">
                <a href="" className="flex">
                    <BsFillPersonPlusFill className="icon" /> Recruitment
                </a>
                </li>
                <li className="sidebar-list-item">
                <a href="" className="flex">
                    <BsCalendar2EventFill className="icon" /> Schedule
                </a>
                </li>
                <li className="sidebar-list-item">
                <a href="" className="flex">
                    <BsPeopleFill className="icon" /> Employee
                </a>
                </li>
                <li className="sidebar-list-item">
                <a href="" className="flex">
                    <BsBuildingFill className="icon" /> Department
                </a>
                </li>
            </ul>
        </li>
        <li className="sidebar-sublist-item" >OTHER
            <ul className="sidebar-sublist">
        <li className="sidebar-list-item">
          <a href="" className="flex">
            <BsMenuButtonWideFill className="icon" /> Support
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="" className="flex">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
        </ul></li>
      </ul>
    </div>
  );
}

export default Sidebar;
