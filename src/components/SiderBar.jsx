import React, { useState } from 'react';
import {
  FaDigitalOcean,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaCalendarPlus,
  FaCalendarAlt,
} from 'react-icons/fa';

export default function SiderBar() {
  const [showSidebar, setSidebar] = useState(true);

  const sidebarWidthSize = showSidebar ? 'w-60' : 'w-18';
  const sidebarMinIcon = showSidebar ? 'block' : 'hidden';
  const sidebarLogoSize = showSidebar ? (
    <FaDigitalOcean size={70} color="#FBBF24" />
  ) : (
    <FaDigitalOcean size={30} color="#FBBF24" />
  );
  const sidebarIconButton = showSidebar ? (
    <FaArrowCircleLeft size={30} />
  ) : (
    <FaArrowCircleRight size={30} />
  );
  function handleToogleSideBar() {
    setSidebar(currentShowSidebar => !currentShowSidebar);
  }
  return (
    <div>
      <div
        className={`flex flex-col h-screen justify-between bg-gray-800 ${sidebarWidthSize}`}
      >
        <div className="left-full flex flex-row align-middle justify-center">
          <span
            className={`text-center text-white	pt-5 font-semibold text-6xl ${sidebarMinIcon}`}
          >
            SAG-
          </span>
          <span className=" pt-5">{sidebarLogoSize}</span>
        </div>

        <main>
          <ul>
            <li
              className={`hover:bg-gray-600 active:bg-gray-300 
            p-1 left-full flex flex-row 
            align-middle justify-center`}
            >
              <FaCalendarAlt size={30} color="#FBBF24 " />
              <span
                className={`text-center px-3 text-white 
                font-semibold text-xl ${sidebarMinIcon}`}
              >
                Consulta Pedido
              </span>
            </li>
          </ul>
        </main>
        <footer className="flex flex-row justify-between align-middle p-2">
          <span className={`pt-5 text-white  ${sidebarMinIcon} `}>
            lcc &copy; System
          </span>
          <button
            className="bg-gray-800 hover:bg-yellow-400 text-2xl text-white py-1 px-1 rounded-full"
            onClick={handleToogleSideBar}
          >
            <span className="pt-5">{sidebarIconButton} </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
