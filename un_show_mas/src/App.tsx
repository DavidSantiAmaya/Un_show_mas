import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import PagesModel1 from "./Components/PagesModel1/pagesModel1";
import PagesModel2 from "./Components/PagesModel2/pagesModel2";
import PagesModel3 from "./Components/PagesModel3/pagesModel3";
import PageReact from "./Components/React/pageReact";
import JuegoReact from "./Components/Juego/juegoReact";
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/PagesModel1" element={<PagesModel1 />} />
          <Route path="/PagesModel2" element={<PagesModel2 />} />
          <Route path="/PagesModel3" element={<PagesModel3 />} />
          <Route path="/React" element={<PageReact />} />
          <Route path="/Juego" element={<JuegoReact/>} />

        </Routes>
      </Router>
      <Footer />
    </>
  )

}

export default App

