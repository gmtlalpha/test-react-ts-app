import { useState, useEffect } from 'react';


function  useFetch <T>(url: RequestInfo | URL):[T:[]|null,T:boolean] {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .finally(() => setLoading(false));
    }, 1500);
  }, [url]);

  return [data, loading];
};

export default function CustomHooksTest() {

  const [data, loading] = useFetch<string>('https://jsonplaceholder.typicode.com/todos');
  if (loading) return <p>Loading....</p>;
  //   const portlandTaps = useMemo(() =>
  //     (data || []).filter((bev) => bev.producerLocation.includes("Portland")
  //   ),[data]);
  // console.log(portlandTaps.length)
  return (
    <>
      {data?.length &&
        data.map((item:{id:string,title:string}) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}
