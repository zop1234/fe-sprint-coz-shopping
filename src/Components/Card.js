import React, { useState } from 'react';
import Modal from './Modal';
import StarOn from '../img/star-on.png';
import StarOff from '../img/star-off.png';


export default function Card({data, bookmark_true}) {
  const [mark, setMark] = useState(bookmark_true ? true : false);
  const [modal, setModal] = useState(false);

  const markHandler = () => {
    if (mark) {
      setMark(false);
      const result = JSON.parse(localStorage.getItem('bookmark')).filter((x) => x.id !== data.id);
      localStorage.setItem('bookmark', JSON.stringify(result));
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

    return window.location.reload();
  }

  const modalClickHandler = () => {
    setModal(true)
  }
  
  switch (data.type) {
    case "Product":
      return (
        <>
          <section className="w-264 h-264 relative mt-4">
            <img className="w-264 h-52 rounded-xl cursor-pointer" src={data.image_url} alt={data.id} onClick={modalClickHandler}></img>
            <section className='flex justify-between mt-1'>
              <div className="font-bold cursor-pointer" onClick={modalClickHandler}>{data.title}</div>
              <div>
                <div className='text-right font-bold text-violet-600'>{data.discountPercentage}%</div>
                <div className='font-semibold'>{data.price}원</div>
              </div>
            </section>
            {mark ? <img className="absolute top-40 right-4 cursor-pointer" src={StarOn} alt="북마크" onClick={markHandler}></img> : 
            <img className="absolute top-40 right-4 cursor-pointer" src={StarOff} alt="북마크" onClick={markHandler}></img>}
          </section>
          <Modal imgUrl={data.image_url} title={data.title} modal={modal} setModal={setModal} mark={mark} setMark={setMark} data={data}/>
        </>
      );
    case "Category":
      return (
        <>
          <section className="w-264 h-264 relative mt-4">
            <img className="w-264 h-52 rounded-xl cursor-pointer" src={data.image_url} alt={data.id} onClick={modalClickHandler}></img>
            <section className='mt-1'>
              <div className="font-bold cursor-pointer" onClick={modalClickHandler}>#{data.title}</div>
            </section>
            {mark ? <img className="absolute top-40 right-4 cursor-pointer" src={StarOn} alt="북마크" onClick={markHandler}></img> : 
            <img className="absolute top-40 right-4 cursor-pointer" src={StarOff} alt="북마크" onClick={markHandler}></img>}
          </section>
          <Modal imgUrl={data.image_url} title={`#${data.title}`} modal={modal} setModal={setModal} mark={mark} setMark={setMark} data={data}/>
        </>
      );
    case "Exhibition":
      return (
        <>
          <section className="w-264 h-264 relative mt-4">
            <img className="w-264 h-52 rounded-xl cursor-pointer" src={data.image_url} alt={data.id} onClick={modalClickHandler}></img>
            <section className='mt-1 mt-1'>
              <div className="font-bold cursor-pointer" onClick={modalClickHandler}>{data.sub_title}</div>
              <div>{data.title}</div>
            </section>
            {mark ? <img className="absolute top-40 right-4 cursor-pointer" src={StarOn} alt="북마크" onClick={markHandler}></img> : 
            <img className="absolute top-40 right-4 cursor-pointer" src={StarOff} alt="북마크" onClick={markHandler}></img>}
          </section>
          <Modal imgUrl={data.image_url} title={data.sub_title} modal={modal} setModal={setModal} mark={mark} setMark={setMark} data={data}/>
        </>
      );
    case "Brand":
      return (
        <>
          <section className="w-264 h-264 relative mt-4">
            <img className="w-264 h-52 rounded-xl cursor-pointer" src={data.brand_image_url} alt="product" onClick={modalClickHandler}></img>
            <section className='flex justify-between mt-1'>
              <div className="font-bold cursor-pointer" onClick={modalClickHandler}>{data.brand_name}</div>
              <div>
                <div className='text-right font-bold'>관심고객수</div>
                <div className='text-right font-semibold'>{data.follower}명</div>
              </div>
            </section>
            {mark ? <img className="absolute top-40 right-4 cursor-pointer" src={StarOn} alt="북마크" onClick={markHandler}></img> : 
            <img className="absolute top-40 right-4 cursor-pointer" src={StarOff} alt="북마크" onClick={markHandler}></img>}
          </section>
          <Modal imgUrl={data.brand_image_url} title={data.brand_name} modal={modal} setModal={setModal} mark={mark} setMark={setMark} data={data}/>
        </>
      );
    default:
      return null;
  }
}