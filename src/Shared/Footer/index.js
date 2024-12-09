import React from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "../../Image/logo.jpeg";
function Footer() {
  return (
    <div className="bg-gray-900 text-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="text-white text-3xl font-bold p-4">
            SHREEJI TUITION
          </div>
        </div>
        <div className="container mx-auto text-center py-2">
          <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
          <p className="text-lg mb-4">
            Ready to start your journey with us? Get in touch for Education
          </p>
          <span className="text-xl">
            <h2 className="text-2xl font-semibold">Get In Touch</h2>
            <p>📱Phone Number +918009657788 </p>
            <p>✉️ Email :- shreejihometuton@gmail.com</p>
            <p>Website:- www.shreejituition.com</p>
          </span>
        </div>

        <div className="flex space-x-4 mb-4 md:mb-0">
          <ul className="flex space-x-6 font-bold">
            <li>
              <Link to={"/"}> Home </Link>
            </li>
            <li>
              <Link to={"/Career"}> Career </Link>
            </li>
            <li>
              <Link to={"/Courses"}> Courses </Link>
            </li>
            <li>
              <Link to={"/Faculty"}> Faculty </Link>
            </li>
            <li>
              <Link to={"/Gallery"}> Gallery </Link>
            </li>
            <li>
              <Link to={"/Contact"}> Contact </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4 text-white bg-[#500B28]">
        Shri ji Tution 2024 All Rights Reserved Designed & Develoved by Prashant
        Rai
      </div>
    </div>
  );
}
export default Footer;
