import { useState } from "react";
import { Result } from "../../Interfaces/apiInterface";
import Loader from "../../Components/Loader";
import Cards from "../../Components/Cards";
import Paginator from "../../Components/Paginator";
import { Link } from "react-router-dom";
import useFetchMultiple from "../../Hooks/useFetchMultiple";
import Carousel from "../../Components/Carousel";

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(
    +(localStorage.currentPage || 1)
  );
  const [chars, loader] = useFetchMultiple(currentPage);

  return (
    <>
      <section>
        <Carousel chars={chars} />
      </section>
      <div
        className="d-flex flex-wrap  align-content-around justify-content-evenly "
        style={{ background: "rgb(184, 184, 72)" }}
      >
        {!loader ? (
          <Loader />
        ) : (
          chars.map((char: Result, i: number) => {
            return (
              <div key={i} className="py-2">
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
      <section className="bg-warning d-flex justify-content-center align-content-center pt-3">
        <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>
    </>
  );
};
export default Home;
