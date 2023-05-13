import React from "react";
import everyImg from '../img/every.png';
import productImg from '../img/product.png';
import categoryImg from '../img/category.png';
import exhibitionImg from '../img/exhibition.png';
import brandImg from '../img/brand.png';

export default function Filter({filter, setFilter}) {

  const filterHandler = (type) => {
    setFilter(type);
  }

  return (
    <section className="w-554 h-28 flex justify-evenly items-center">
      <section>
        <img className="cursor-pointer" src={everyImg} alt="전체" onClick={() => filterHandler("every")}></img>
        <div className="flex justify-center items-center mt-1 font-bold cursor-pointer" onClick={() => filterHandler("every")}>
          <div className={filter === "every" ? "text-violet-800 border-b-4 border-violet-800" : ""}>전체</div>
        </div>
      </section>
      <section>
        <img className="cursor-pointer" src={productImg} alt="상품" onClick={() => filterHandler("Product")}></img>
        <div className="flex justify-center items-center mt-1 font-bold cursor-pointer" onClick={() => filterHandler("Product")}>
          <div className={filter === "Product" ? "text-violet-800 border-b-4 border-violet-800" : ""}>상품</div>
        </div>
      </section>
      <section>
        <img className="cursor-pointer" src={categoryImg} alt="카테고리" onClick={() => filterHandler("Category")}></img>
        <div className="flex justify-center items-center mt-1 font-bold cursor-pointer" onClick={() => filterHandler("Category")}>
          <div className={filter === "Category" ? "text-violet-800 border-b-4 border-violet-800" : ""}>카테고리</div>
        </div>
      </section>
      <section>
        <img className="cursor-pointer" src={exhibitionImg} alt="기획전" onClick={() => filterHandler("Exhibition")}></img>
        <div className="flex justify-center items-center mt-1 font-bold cursor-pointer" onClick={() => filterHandler("Exhibition")}>
          <div className={filter === "Exhibition" ? "text-violet-800 border-b-4 border-violet-800" : ""}>기획전</div>
        </div>
      </section>
      <section>
        <img className="cursor-pointer" src={brandImg} alt="브랜드" onClick={() => filterHandler("Brand")}></img>
        <div className="flex justify-center items-center mt-1 font-bold cursor-pointer" onClick={() => filterHandler("Brand")}>
          <div className={filter === "Brand" ? "text-violet-800 border-b-4 border-violet-800" : ""}>브랜드</div>
        </div>
      </section>
    </section>
  );
}