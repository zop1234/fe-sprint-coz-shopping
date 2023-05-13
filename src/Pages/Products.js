import React, {useState, useEffect} from "react";
import Filter from '../Components/Filter';
import Card from "../Components/Card";

export default function Products() {
  const [data, setData] = useState("");
  const [filter, setFilter] = useState("every");

  useEffect(() => {
    fetch('http://cozshopping.codestates-seb.link/api/v1/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (filter === "every") {
          return setData(data);
        }
        const result = data.filter((x) => x.type === filter);
        setData(result);
      })
  }, [filter]);

  return (
    <main className="pt-28 flex flex-col justify-center items-center">
      <Filter filter={filter} setFilter={setFilter}/>
      <section className="flex flex-wrap justify-around w-1128 mt-10">
        {data && data.map((x) => <Card key={x.id} data={x} />)}
      </section>
    </main>
  );
}