import React from 'react';
import {CgClose} from 'react-icons/cg';
import StarOn from '../img/star-on.png';
import StarOff from '../img/star-off.png';

export default function Modal({imgUrl, title, modal, setModal, mark, setMark, data}) {

  const closeHandler = () => {
    setModal(false);
  }

  const markHandler = () => {
    if (mark) {
      setMark(false);
      localStorage.removeItem('bookmark');
    }
    else if (!mark) {
      setMark(true);
      if (localStorage.getItem('bookmark') === null) {
        localStorage.setItem('bookmark', JSON.stringify([data]));
      }
      else if (localStorage.getItem('bookmark') !== null) {
        const bookMarkList = [...JSON.parse(localStorage.getItem('bookmark')), data];
        localStorage.setItem('bookmark', JSON.stringify(bookMarkList));
      }
    }
  }

  return (
      <section id="modal" className={`rounded-4 ${!modal && "hidden"} duration-500 z-50`}>
        <img className="w-744 h-480 rounded-xl shadow-back" src={imgUrl} alt="배경"></img>
        <CgClose className='absolute top-4 right-4 cursor-pointer bg-opacityWhite rounded-full' size="23" onClick={closeHandler} />
        <div className="absolute bottom-4 left-14 font-bold bg-opacityWhite rounded-lg p-1">{title}</div>
        {mark ? <img className="absolute bottom-3 left-5 cursor-pointer" src={StarOn} alt="북마크" onClick={markHandler}></img> : 
          <img className="absolute bottom-3 left-5 cursor-pointer" src={StarOff} alt="북마크" onClick={markHandler}></img>}
      </section>
  );
}