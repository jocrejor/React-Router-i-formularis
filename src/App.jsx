import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Cotrolat from './componets/Controlat.jsx'
import Likeapro from './componets/Likeapro.jsx'
import Home from './componets/Home.jsx'
import Header from './componets/Header.jsx'
import Footer from './componets/Footer.jsx'
import Productes from './componets/Productes.jsx'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/controlat" element={<Cotrolat />} />
        <Route path="/likeapro" element={<Likeapro />} />
        <Route path="/productes" element={<Productes />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="404" element={<Error404 />} />  

      </Routes>
      <Footer></Footer>
      
    </>
  )
}

export default App;


const Error404 = () => {
  return (
    <div>Error 404</div>
  )
}

