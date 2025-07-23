"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Link from "next/link";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <header className="relative flex flex-col justify-center items-center w-full">
        
        {/* Navbar Top Section */}
        <div className="text-white fixed top-0 left-0 flex justify-between items-center w-full px-4 mt-4 md:px-10 py-4 h-20 z-50">

          {/* Logo */}
          <h1 className="border rounded-lg px-4 md:px-6 py-4 text-xl border-gray-500 text-yellow-100">
            <span className="font-semibold text-2xl text-yellow-200">PORTFOLIO</span> DH_DaniYaaL
          </h1>

          {/* Menu Button */}
          <div className="border-2 border-[#8D8D8D] px-2 py-2 inline-flex rounded-xl gap-1">

            {/* UI/UX Badge */}
            {/* <div className="border border-yellow-300 px-3 md:px-5 py-1 inline-flex rounded-lg items-center">
              <h1 className="text-base text-yellow-100"></h1>
            </div> */}

            {/* Toggle Menu Icon */}
            <button
              className="border border-gray-500 px-1 py-1 rounded-lg text-yellow-100 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

        </div>

        {/* Responsive Links */}
        <div
          className={`fixed top-24 origin-top right-4 w-[90%] sm:w-64 bg-gradient-to-b from-[#4c4c31] to-black text-white transform transition-transform duration-300 ${
            isOpen ? "translate-y-0 scale-y-100 opacity-100" : "-translate-y-16 scale-y-0 opacity-0"
          } flex flex-col gap-6 p-4 rounded-lg shadow-lg text-xl font-medium z-50`}
        >
          <ul className="space-y-3 text-xl font-light scale-y-105">
            <br />
            <hr />
            <li className="hover:scale-y-150"><Link href="/">HOME</Link></li>
            <hr />
            <li className="hover:scale-y-150"><Link href="/about">ABOUT</Link></li>
            <hr />
            <li className="hover:scale-y-150"><Link href="/">PROJECT</Link></li>
            <hr />
            <li className="hover:scale-y-150"><Link href="/skills">SKILLS</Link></li>
            <hr />
            <li className="hover:scale-y-150"><Link href="/contact">CONTACT</Link></li>
          </ul>
        </div>
        
      </header>
    );
}
// className={`absolute top-24 origin-top right-10 w-[110%] sm:w-64 bg-gradient-to-b from-[#4c4c31] to-black text-white transform transition-transform duration-300 ${
//   isOpen ? "translate-y-0 scale-y-100 opacity-100" : "-translate-y-16 scale-y-0 opacity-0"
// } flex flex-col gap-6 p-4 rounded-lg shadow-lg text-xl font-medium z-50`}