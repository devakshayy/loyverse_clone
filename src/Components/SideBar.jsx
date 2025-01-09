import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { links } from "../data/links.jsx";
import { Link } from "react-router-dom";

const SideBar = ({ isSidebarOpen }) => {
  const [opneDropDownIdx, setDropDownIdx] = useState(null);

  const handleDropLinks = (idx) => {
    setDropDownIdx((prvIdx) => (prvIdx === idx ? null : idx));
  }
  return (
    <aside
      className={`fixed top-0 left-0 
                       z-40  h-screen 
                       pt-[55px] bg-white
                       border-r border-gray-200
                       transition-all duration-300 overflow-auto
                       ${isSidebarOpen ? "w-[300px]" : "w-[70px]"} `}
    >
      <div className="h-full overflow-auto">
        <ul className="space-y-2 flex flex-col items-center  justify-center font-medium">
          {isSidebarOpen ? (
            <>
              {links.map((link, idx) => (
                <Link
                  to={link.path}
                  key={idx}
                  className="  w-full  active:border-l-4 border-indigo-500 px-[10px] py-[14px]"
                >
                  <div className="text-xs flex justify-between gap-2 items-center">
                      <div className="flex items-center gap-2">
                      {link.icon}
                      {link.title}
                      </div>
                    { link.links &&  <button onClick={()=> handleDropLinks(idx)}><MdKeyboardArrowDown /></button>  } 
                  </div>
                  { opneDropDownIdx === idx && link.links && (     //here the && checks if it there and procede not everyone have the sub link so...
                    <ul >
                      {link.links.map((item, index) => (
                        <li key={index} className="pl-8 hover:text-[#5ba4ff] hover:bg-[#f2f2f2] hover:shadow-md py-1 w-full text-[15px]">
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </Link>
              ))}
            </>
          ) : (
            <>
              {links.map((link, idx) => (
                <Link
                  to={link.path}
                  key={idx}
                  className="px-[21px] hover:bg-[#f2f2f2] hover:shadow-md active:border-l-4 border-indigo-500 py-[14px]"
                >
                  <li> {link.icon} </li>
                </Link>
              ))}
            </>
          )}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
