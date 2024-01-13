import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderGuest() {
  return (
    <>
    <Link to="/"
      className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
    >
      <li>Home</li>
    </Link>
    <Link to="feedback"
      className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
    >
      <li>Feedback</li>
    </Link>
    <Link to="about"
      className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
    >
      <li>About</li>
    </Link>
    <Link to="about"
      className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
    >
      <li>Contact</li>
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
  )
}
