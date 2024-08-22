import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import ReceipeList from "./pages/ReceipeList";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import "https://kit.fontawesome.com/e474b10bd0.js";
import CreateReceipe from "./pages/CreateReceipe";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/receipe-list" element={<ReceipeList />}></Route>
            <Route
              path="/receipe-form/:id?"
              element={<CreateReceipe />}
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
