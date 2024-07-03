import React from 'react';
import { FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa";
import { HiDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';
import logo from "../assets/riteshLogo.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-5">
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 rounded-full border-4 border-white shadow-md"
          style={{ boxShadow: "0 0 10px 0 rgba(255, 255, 255, 0.5)" }}
        />
      </div>
      <div className=" flex flex-col items-center gap-4">
        <div className="flex items-center gap-5 text-2xl">
          <a 
            href="https://www.linkedin.com/in/riteshbhadana/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/riteshbhadana" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-600 transition duration-300"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.kaggle.com/riteshbhadana" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-sky-700 transition duration-300"
          >
            <FaKaggle />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
