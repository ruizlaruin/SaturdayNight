import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Result } from "../../Interfaces/apiInterface";
import Loader from "../../Components/Loader";
import Card from "../../Components/Card";

const Details = () => {
  const [charDetails, setCharDetails] = useState<Result>();
  const [loader, setLoader] = useState(false);
  const { id } = useParams();

  const fetchCharDetail = async () => {
    try {
      setLoader(true);
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();
      setCharDetails(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    try {
      setLoader(true);
      fetchCharDetail();
      setLoader(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  }, [id]);
  return (
    <>
      <div className=" d-flex justify-content-center flex-column align-items-center">
        {loader ? (
          <Loader />
        ) : (
          <>
            <h1>Char Details</h1>
            <Card chars={charDetails} />
          </>
        )}
      </div>
    </>
  );
};
export default Details;
