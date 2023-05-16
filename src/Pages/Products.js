import React, {useState, useEffect} from "react";
import Filter from '../Components/Filter';
import Card from "../Components/Card";

export default function Products() {
  const [entireData, setEntireData] = useState('');
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("every");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

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
          setEntireData(data);
          setData(data.slice(0, 12));
          return;
        }
        else {
          setPage(1);
          const result = data.filter((x) => x.type === filter);
          setEntireData(result);
          setData(result.slice(0, 12));
        }
      })

    
  }, [filter]);

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
  }, [page])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
    const newData = entireData.slice(page * 12, (page + 1) * 12);
    setData(prev => [...prev, ...newData]);
    setIsLoading(false);
    }
    fetchData();
  }, [page, entireData])


  return (
    <main className="pt-28 flex flex-col justify-center items-center">
      <Filter filter={filter} setFilter={setFilter}/>
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