import React, {useState, useEffect} from "react";
import Filter from '../Components/Filter';
import Card from "../Components/Card";

export default function Products() {
  const [entireData, setEntireData] = useState('');
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("every");
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) return;
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch('http://cozshopping.codestates-seb.link/api/v1/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const fetchResponse = await response.json();
      if (filter === "every") {
        setEntireData(fetchResponse);
        setIsLoading(false);
      }
      else {
        const result = await fetchResponse.filter((x) => x.type === filter);
        setEntireData(result);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [filter, isLoading]);

  useEffect(() => {
    function handleScroll() {
      const {scrollTop} = document.documentElement;
      const {innerHeight} = window;
      const {scrollHeight} = document.body;
      if (scrollTop + innerHeight === scrollHeight) {
        setPage(page + 1);
      };
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [page, filter])

  useEffect(() => {
    if (isLoading) return;
    const fetchData = () => {
      setIsLoading(true);
      const newData = entireData.slice(page * 12, (page + 1) * 12);
      setData(prev => [...prev, ...newData]);
      setIsLoading(false);
    }
    fetchData();
  }, [page, entireData, isLoading])

  return (
    <main className="pt-28 flex flex-col justify-center items-center">
      <Filter filter={filter} setFilter={setFilter} setPage={setPage} setData={setData} setEntireData={setEntireData}/>
      <section className="flex flex-wrap justify-around w-1128 mt-10">
        {data && data.map((x) => {
          const local = JSON.parse(localStorage.getItem('bookmark')).filter((y) => y.id === x.id);
          if (local.length) {
            return <Card key={x.id} data={x} bookmark_true={true}/>
          }
          return <Card key={x.id} data={x} />
        })}
        {isLoading && <div>로딩중...</div>}
      </section>
    </main>
  );
}