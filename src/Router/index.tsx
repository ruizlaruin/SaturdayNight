import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import Search from "../Pages/Search/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/search/:name" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
