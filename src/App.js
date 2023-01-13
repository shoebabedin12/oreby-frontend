import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./compnents/Layout/Layout";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import Journal from "./Pages/Journal";
import NoPage from "./Pages/NoPage";
import Shop from "./Pages/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contacts />} />
            <Route path="journal" element={<Journal />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
