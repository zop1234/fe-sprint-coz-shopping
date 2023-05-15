import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/logo.png';
import Name from '../img/name.png';
import {AiOutlineMenu, AiOutlineStar} from 'react-icons/ai';
import {GiPresent} from 'react-icons/gi';

export default function Navbar() {
  const [drop, setDrop] = useState(false);
  
  const menuHandler = () => {
    drop ? setDrop(false) : setDrop(true);
  }

  return (
    <header id="navbar" className="bg-white w-full h-20 shadow-2xl flex justify-between items-center fixed z-40">
      <Link to="/" className="ml-16 flex">
        <img className="w-14 h-8" src={Logo} alt="logo"></img>
        <img className="w-56 h-8 ml-4" src={Name} alt="logo-name"></img>
      </Link>
      <section className='mr-16 cursor-pointer' onClick={menuHandler}>
        <AiOutlineMenu size="40"/>
      </section>
      {drop && 
        <section className='bg-white w-52 h-36 absolute top-16 right-14 shadow-3xl rounded-lg'>
          <ul className='text-lg font-semibold w-full h-full'>
            <section className='flex justify-center items-center w-full h-1/3 border-b-2'>OOO님, 안녕하세요!</section>
            <Link to="/products/list" className='flex justify-center items-center w-full h-1/3 border-b-2' onClick={menuHandler}><GiPresent size="30"/> 상품리스트 페이지</Link>
            <Link to="/bookmark" className='flex justify-center items-center w-full h-1/3' onClick={menuHandler}><AiOutlineStar size="30"/> 북마크 페이지</Link>
          </ul>
        </section>
      }
    </header>
  );
}