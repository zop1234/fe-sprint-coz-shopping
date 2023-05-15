import React, {useState, useEffect} from "react";
import Card from '../Components/Card';

export default function Main() {
  const [data, setData] = useState("");
  const bookmarkData = JSON.parse(localStorage.getItem("bookmark"));
  console.log(bookmarkData);

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
    <main className="pt-28">
      <div className="ml-10 mb-5 text-2xl font-bold">상품 리스트</div>
      <section className="flex justify-evenly">
        {data && data.map((x) => {
          const local = JSON.parse(localStorage.getItem('bookmark')).filter((y) => y.id === x.id);
          if (local.length) {
            return <Card key={x.id} data={x} bookmark_true={true}/>
          }
          return <Card key={x.id} data={x} />
        })}
      </section>
      <div className="ml-10 mb-5 text-2xl font-bold mt-10">북마크 리스트</div>
      <section className="flex justify-evenly">
        {bookmarkData && 0 < bookmarkData.length && bookmarkData.length <= 4 &&
        bookmarkData.map((x) => <Card key={x.id} data={x} bookmark_true={true}/>)
        }
        {bookmarkData && bookmarkData.length > 4 &&
        bookmarkData.slice(bookmarkData.length-4).map((x) => <Card key={x.id} data={x} bookmark_true={true}/>)
        }
      </section>
    </main>
  );
}