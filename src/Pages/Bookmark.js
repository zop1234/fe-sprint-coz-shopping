import React, {useState, useEffect} from "react";
import Filter from '../Components/Filter';
import Card from "../Components/Card";

export default function Bookmark() {
  const [data, setData] = useState("");
  const [filter, setFilter] = useState("every");

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("bookmark"));
    if (filter === "every") {
      return setData(local);
    }
    setData(local.filter((x) => x.type === filter));
  }, [filter]);

  return (
    <main className="pt-28 flex flex-col justify-center items-center">
      <Filter filter={filter} setFilter={setFilter} setData={setData}/>
      <section className="flex flex-wrap justify-around w-1128 mt-10">
        {data && data.map((x) => <Card key={x.id} data={x} bookmark_true={true} />)}
      </section>
    </main>
  );
}