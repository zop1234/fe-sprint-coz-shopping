import React, { useState, useEffect } from 'react';

// export default function Card({data, idx}) {
//   // const [data, setData] = useState("");

//   // useEffect(() => {
//   //   fetch('http://cozshopping.codestates-seb.link/api/v1/products', {
//   //     method: 'GET',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     }
//   //   })
//   //     .then((res) => res.json())
//   //     .then((data) => console.log(data));
//   // }, []);
//   console.log(data);
//   return (
//     <section className="w-264 h-264">
//       {() => {
//         switch (data.type) {
//           case "Product":
//             return (
//               <>
//                 <img className="w-264 h-52 rounded-xl" src={data.image_url} alt={data.id}></img>
//                 <span className="font-bold">{data.title}</span>
//               </>
//             );
//           case "Category":
//             return (
//               <>
//                 <img className="w-264 h-52 rounded-xl" src={data.image_url} alt={data.id}></img>
//                 <span className="font-bold">{data.title}</span>
//               </>
//             );
//           case "Exhibition":
//             return (
//               <>
//                 <img className="w-264 h-52 rounded-xl" src={data.image_url} alt={data.id}></img>
//                 <span className="font-bold">{data.sub_title}</span>
//               </>
//             );
//           case "Brand":
//             return (
//               <>
//                 <img className="w-264 h-52 rounded-xl" src={data.brand_image_url} alt="product"></img>
//                 <span className="font-bold">{data.brand_name}</span>
//               </>
//             );
//           default:
//             return (
//               <>
//                 <img className="w-264 h-52 rounded-xl" src={data.brand_image_url} alt="product"></img>
//                 <span className="font-bold">{data.brand_name}</span>
//               </>
//             );
//         }
//       }}
//       <span className="font-bold">{data.title}</span>
//     </section>
//   );
// }


export default function Card({data}) {
  switch (data.type) {
    case "Product":
      return (
        <section className="w-264 h-264">
          <img className="w-264 h-52 rounded-xl" src={data.image_url} alt={data.id}></img>
          <section className='flex justify-between mt-1'>
            <div className="font-bold">{data.title}</div>
            <div>
              <div className='text-right font-bold text-violet-600'>{data.discountPercentage}%</div>
              <div className='font-semibold'>{data.price}원</div>
            </div>
          </section>
        </section>
      );
    case "Category":
      return (
        <section className="w-264 h-264">
          <img className="w-264 h-52 rounded-xl" src={data.image_url} alt={data.id}></img>
          <section className='mt-1'>
            <div className="font-bold">#{data.title}</div>
          </section>
        </section>
      );
    case "Exhibition":
      return (
        <section className="w-264 h-264">
          <img className="w-264 h-52 rounded-xl" src={data.image_url} alt={data.id}></img>
          <section className='mt-1 mt-1'>
            <div className="font-bold">{data.sub_title}</div>
            <div className="font-semibold">{data.title}</div>
          </section>
        </section>
      );
    case "Brand":
      return (
        <section className="w-264 h-264">
          <img className="w-264 h-52 rounded-xl" src={data.brand_image_url} alt="product"></img>
          <section className='flex justify-between mt-1'>
            <div className="font-bold">{data.brand_name}</div>
            <div>
              <div className='text-right font-bold'>관심고객수</div>
              <div className='text-right font-semibold'>{data.follower}명</div>
            </div>
          </section>
        </section>
      );
    default:
      return null;
  }
}