import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Routes/Home";
import Search from "./Routes/Search";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
