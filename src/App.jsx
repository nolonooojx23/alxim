import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Career from "./pages/career/Career";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import Partner from "./pages/partner/Partner";
import Products from "./pages/products/Products";
import Tavsiya from "./pages/tavsiya/Tavsiya";
import Tavsiyalar from "./pages/tavsiyalar/Tavsiyalar";
import Foyda from "./components/Foyda";
import Advice from "./components/Advice";
import Menejer from "./components/Menejer";
import SimpleTavsiyalar from "./components/SimpleTavsiyalar";
import BatafsilProduct from "./components/BatafsilProduct";
import SimpleYutuqlar from "./components/SimpleYutuqlar";
import { useTranslation } from "react-i18next";
import SimplePartner from "./components/SimplePartner";
import { useFetch } from "./useFetch";

function App() {
  const [loader, setLoader] = useState(true);
  const { i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
    setLoader(false);
  };

  // useEffect(()=> {
  //   localStorage.getItem("i18nextLng") ? setLoader(false) : setLoader(true)
  // },[])
 
  const {data} = useFetch('https://alximik.pythonanywhere.com/main/all_info/')
  
  return (
    <div className="App">
      {loader ? (
        <>
          <div className="loader">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h2>Kerakli tilni tanlang! <p style={{color:"#f1f1f1"}}> Выберите язык!</p></h2>
            <div className="btn_group">
              <button onClick={() => handleClick("uz")}>uz</button>
              <button onClick={() => handleClick("ru")}>ru</button>
              <button onClick={() => handleClick("en")}>en</button>
            </div>
          </div>
        </>
      ) : (" ")}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/products"
            element={<Products />}
            loader="loader.."
          ></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/career" element={<Career />}></Route>
          <Route path="/partners" element={<Partner />}></Route>
          <Route path="/tavsiya/:id" element={<Tavsiya />}></Route>
          <Route path="/tavsiyalar" element={<Tavsiyalar />}></Route>
          {/* <Route path="/tavsiyalar#tavsiya_content/:id" element={<SimpleTavsiyalar />}></Route> */}
          <Route path="/product/:id" element={<BatafsilProduct />}></Route>
          <Route path="/partners/:id" element={<SimplePartner />}></Route>
          <Route path="/news/:id" element={<SimpleYutuqlar />}></Route>
          <Route path="/foyda/:id" element={<Foyda />}></Route>
          <Route path="/advice/:id" element={<Advice />}></Route>
          <Route path="/menejer/:id" element={<Menejer />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
