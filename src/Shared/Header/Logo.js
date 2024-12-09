import React from 'react';
import { GraduationCap } from 'lucide-react';
import logo from "../../Image/logo.jpeg";


const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
        <div className='h-auto w-[60px] lg:w-[90px] p-1'>
        <img src={logo} />
        </div>
      <GraduationCap className="h-8 w-8 animate-bounce text-indigo-600 hidden sm:block" />
      <div>
        <h1 className="text-xl text-nowrap font-bold text-gray-900">SHREE JI TUITION</h1>
        <p className="text-xs text-indigo-600">Transform Your Life with Tuition</p>
        <p className="text-xs text-indigo-600 pt-1">शिक्षा से बेहतर कोई मित्र नहीं।</p>
        
      </div>
    </div>
  );
};

export default Logo;