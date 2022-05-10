import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contato from "./components/Pages/Contato"

function App() {
  return <>
    <BrowserRouter>
      <Header className='header' id='header' style={{border:'1px solid'}} />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/" element={<Contato />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App;
