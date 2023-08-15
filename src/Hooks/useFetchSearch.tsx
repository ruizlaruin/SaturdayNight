import { useState, useEffect } from "react";
import { Result } from "../Interfaces/apiInterface";

const useFetchSearch = (url: string, name: string, page?: number) => {
  const [chars, setChars] = useState<Result[]>([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState<any>(null);

  //API consumption
  const fetchData = async (name: string, page?: number) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setChars(data);
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  useEffect(() => {
    try {
      setLoader(false);
      fetchData(name);
    } catch (err) {
      setError(err);
      console.error(err);
    } finally {
      setLoader(true);
    }
  }, [name]);

  return [chars, loader, error];
};
export default useFetchSearch;
