import { useState, useEffect } from "react";

export function useFetch(api) {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const getData = async (api) => {
    setIsPending(true);
    const req = await fetch(api);

    if (req.ok == false) {
      setIsPending(false);
      setError(true);
    } else {
      const data = await req.json();
      setData(data);
      setIsPending(false);
    }
    setIsPending(false);
  };

  useEffect(() => {
    getData(api);
  }, []);

  return { data, isPending, error };
}
