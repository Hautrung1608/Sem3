import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { motion } from "framer-motion";


import Flex from "../../designLayouts/Flex";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
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
              <a className="w-20 object-cover" >Mobile Online Rechage</a>
            </div>
          </Link>
          <div>

            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center w-auto z-50 p-0 gap-2"
            >
              <>

                <Link to="/"
                  className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                >
                  <li>Home</li>
                </Link>

                
                <Link to="/about"
                  className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                  >
                  <li>About</li>
                </Link>

                <Link to="/contact"
                  className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                >
                  <li>Contact</li>
                </Link>

                <Link to="#"
                  className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                >
                  <li>Cart</li>
                </Link>

                <div class="dropdown flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  <button class=" dropdown-toggle color:black" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="">
                      <Link to="/signup">
                        <p className="text-sm font-titleFont font-semibold  hover:text-gray cursor-pointer duration-300">
                          Sign up
                        </p>
                      </Link>
                    </a>
                    <a class="dropdown-item" href="">
                      <Link to="/signin">
                        <p className="text-sm font-titleFont font-semibold  hover:text-gray cursor-pointer duration-300">
                          Sign in
                        </p>
                      </Link>

                    </a>

                  </div>
                </div>
              </>
            </motion.ul>



          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
