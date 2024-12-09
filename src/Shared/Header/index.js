import React from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "../../Image/logo.jpeg";
import Headerbg from "../../Image/bg.jpg";

function Header() {
  return (
    <>
      <div className="" style={{ backgroundImage: `url(${Headerbg})` }}>
        <div className="flex item justify-between h-2 w-full text-xl font-bold">
          <p>ONLINE </p>
          <p>OFFLINE </p>
          <p>HOME TUITION </p>
        </div>
        <div className="container mx-auto flex justify-between items-center">
          <div className="h-28 w-36 ml-10">
          <img src={logo} alt="" />
          </div>{" "}
          <div className="text-yellow-400 text-2xl font-bold">
            SHREE JI NETRALAY
          </div>
          <nav>
            <ul className="flex space-x-6 text-black text-xl font-bold pb-6 md:">
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
          </nav>
        </div>
        <div className="text-yellow-400 text-5xl font-bold text-center mb-4">
          SHREE JI TUITION
        </div>

        <div className="container mx-auto text-white">
          <h1 className=" text-indigo-700 text-2xl text-center md:text-3xl font-bold mb-0">
            Transform Your Life with Tuition
          </h1>
        </div>
        <div className="flex item justify-between w-full text-xl font-bold pt-6">
          <p className="text-black text-xl w-fit">
            New Batches Starting Soon....
          </p>
          <p className="text-black  text-xl w-fit">
            India's Biggest And Most Trusted Tuition Platform
          </p>
          <div>
            <p className="text-black  text-xl w-fit">
              "शिक्षा से बेहतर कोई मित्र नहीं।"
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
