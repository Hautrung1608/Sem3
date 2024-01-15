import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderUser() {
  return (
    <>
    <Link to="/"
      className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
    >
      <li>Home</li>
    </Link>

    <Link to="/online-recharge"
      className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12  text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
      >
      <li>Recharge</li>
    </Link>

    <Link to="/post-bill"
      className="flex font-normal hover:font-bold w-[100px] h-6 justify-center items-center  text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
    >
      <li>Post Bill</li>
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
    <Link to="contact"
      className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
    >
      <li>Contact</li>
    </Link>
    <Link to="my-account"
      className="flex font-normal hover:font-bold w-30 h-6 justify-center items-center px-12  text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
    >
      <li>Account</li>
    </Link>

 
  </>
  )
}
