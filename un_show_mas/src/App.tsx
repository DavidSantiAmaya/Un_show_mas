import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Home/>
      <Footer/>
    </>
  )

}

export default App

