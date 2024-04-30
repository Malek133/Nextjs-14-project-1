 'use client'

import Link from "next/link";
import { AlignJustify } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from "react";

const Header = () => {
  const [toggel,setToggel]=useState(false)
  return (
    <header>
      

      <ul className="flex justify-around  py-2 items-center space-x-2 
         mx-6 px-6 bg-slate-200">

         <div className="flex md:hidden">
         {
          toggel ? ( < X onClick={() => setToggel(prev => !prev)} />) : 
          (   <AlignJustify onClick={() => setToggel(prev => !prev)} />  )
         }
         </div>



       {toggel && (
     <div className="flex flex-col space-y-2"
    // className={toggel ? "flex-row justify-center items-center space-y-1" : "hidden md:flex justify-around items-center space-x-16"}
     > 
            <li onClick={() => setToggel(prev => !prev)}>
          <Link href={'/'}>home</Link>
          </li>
        <li onClick={() => setToggel(prev => !prev)}>
            <Link href={'/about'}>Aboute</Link>
        </li>
        <li onClick={() => setToggel(prev => !prev)}>
            <Link href={'/article'}>article</Link>
        </li>
        <li onClick={() => setToggel(prev => !prev)}>
            <Link href={'/admin'}>admine</Link>
        </li>

          </div> 
        )}
          
            <li>
           <button className='bg-blue-900 text-white rounded 
           px-5 py-1 my-4'>
            <Link href={'/login'}>login</Link>
            </button>
        
            <button className='bg-blue-900 text-white rounded 
            px-5 py-1 mx-2 my-4'>
              <Link href={'/register'}>register</Link>
              </button>
              
        </li>

      </ul>
    </header>
  )
}

export default Header
