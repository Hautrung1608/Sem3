import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { motion } from "framer-motion";


import Flex from "../../designLayouts/Flex";
import HeaderUser from "./HeaderUser";
import HeaderGuest from "./HeaderGuest";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const [user,setUser] = useState(true);
  const location = useLocation();
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);
  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
              <img style={{ width:"50%" }} src="/rechar.png"></img>
            </div>
          </Link>
          <div>

            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center w-auto z-50 p-0 gap-2"
            >

            {user ? <HeaderUser/>  : <HeaderGuest/> }
            </motion.ul>



          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
