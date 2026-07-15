import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import App from './App.jsx'
import HomePage from './home/HomePage.jsx'
import SignUp from "./signup/SignUp.jsx"
import AboutPage from './about/AboutPage.jsx'
import PricingPage from './pricing/PricingPage.jsx'
import ProductPage from './products/ProductPage.jsx'
import SupportPage from './support/SupportPage.jsx'
import Navbar from './common/Navbar.jsx'
import Footer from './common/Footer.jsx'
import NotFound from './NotFound.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/pricing' element={<PricingPage/>}></Route>
      <Route path='/product' element={<ProductPage/>}></Route>
      <Route path='/support' element={<SupportPage/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
)
