import React, { useState } from "react";
import Image from "../common/Image";
import navData from "../../api/navbardata.json";
import {SquareMenu , X  } from 'lucide-react';
import { Link } from "react-router";


const Header = () => {
  const[menuActive,setMenuActive]=useState(false);
  return (
    <header className="pt-4.5 pb-4.5">
      <nav  >
        <div className="container hidden lg:block ">
          <div className="flex justify-between items-center">
            {/* <link to ="/"> 
        <Image  src ="./images/logo.png" alt="logo"/>
        </link> */}
            <Image src="./images/logo.png" alt="logo" />
             
            <ul className=" flex gap-[31.98px] ">
              {navData?.map((item) => (
                <li
                  className="text-ass text-base leading-6  font-normal hover:text-primary active:text-primary"
                  key={item.id}
                >
                  <Link to= {item?.path}>
                  {item?.tittle}
                  </Link>
                </li>
              ))}
            </ul>
            <div >
              <a className="  rounded-md border border-primary text-[14px] md:text-base  font-normal py-1 px-2 md:py-2 md:px-4  text-primary transition hover:bg-primary hover:text-white">
                Book Now
              </a>
            </div>
          </div>
        </div>
        {/* ======mobile responsive navbar====== */}
        <div className="flex justify-between items-center mx-4 overflow:hidden lg:hidden ">
           <button onClick={()=>setMenuActive(true)}>
         <SquareMenu size={40}/>

         </button>
       

         <ul className={`absolute top-0 duration-300 ${menuActive ?"left-0":"-left-full "} w-full h-screen bg-ass pt-10`}  >
              <X  onClick={()=>setMenuActive(false)}
               size={30} className="text-black absolute right-4 top-2"/>
              {navData?.map((item) => (
                <li
                  className="mt-2 text-center text-black text-[25px] leading-6  font-medium"
                  key={item.id}
                >
                  {item?.tittle}
                </li>
              ))}
            </ul>
         
         
         <Image src="./images/logo.png" alt="logo" />
        </div>


        {/* ======mobile responsive navbar====== */}
       
      </nav>
    </header>
  );
};

export default Header;

