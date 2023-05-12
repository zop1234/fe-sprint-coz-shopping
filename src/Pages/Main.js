import React, {useState, useEffect} from "react";
import Card from '../Components/Card';

export default function Main() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch('http://cozshopping.codestates-seb.link/api/v1/products?count=4', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section className="pt-28">
      <div className="ml-10 mb-5 text-2xl font-bold">상품 리스트</div>
      <section className="flex justify-evenly">
        {data && data.map((x) => <Card key={x.id} data={x}/>)}
      </section>
    </section>
  );
}