import { useEffect, useState } from "react";
import { Result } from "../../Interfaces/apiInterface";
import Loader from "../../Components/Loader";
import Cards from "../../Components/Cards";
import Paginator from "../../Components/Paginator";
import { Link } from "react-router-dom";

const Home = () => {
  const [chars, setChars] = useState<Result[]>([]);
  const [loader, setLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  //API consumption
  const fetchData = async (currentPage: number) => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}`
      );
      const data = await res.json();
      setChars(data.results);
      //console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      setLoader(false);
      fetchData(currentPage);
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(true);
    }
  }, [currentPage]);

  return (
    <>
      <div
        className="d-flex flex-wrap align-items-betwen  justify-content-center mx-3"
        style={{ background: "rgb(184, 184, 72)" }}
      >
        <div className="gx-5 d-flex flex-wrap align-content-around mx-3">
          {!loader ? (
            <Loader />
          ) : (
            chars.map((char, i) => {
              return (
                <div
                  key={i}
                  className="py-2 px-2 d-flex flex-wrap align-items-center justify-content-center"
                >
                  <Link
                    className="text-decoration-none "
                    to={`/details/${char.id}`}
                  >
                    <Cards chars={char} />
                  </Link>
                </div>
              );
            })
          )}
        </div>

        <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
};
export default Home;
