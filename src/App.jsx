import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";

import Index from "./ui/pages/index";
import Page404 from "./ui/pages/404";

import { ThemeProvider } from "@mui/material/styles";
import theme from './ui/theme/theme';

import { useLayoutEffect } from 'react'
import Header from "./ui/coponents/header/Header";
import Footer from "./ui/coponents/footer/Footer";
import About from "./ui/pages/about/Index";
import Products from "./ui/pages/products/Products";
import Beaverage from './ui/pages/products/Beaverage'
import Food from './ui/pages/products/Food'
import MouthFresh from './ui/pages/products/MouthFresh'
import PersonalCare from './ui/pages/products/PersonalCare'
import Manufacturer from "./ui/pages/distriibutor/Manufacturer";
import Distributor from "./ui/pages/distriibutor/Distributor";
import Contact from "./ui/pages/contact/Contact";
import Gallery from "./ui/pages/gallery/Gallery";
import Advantage from "./ui/pages/distriibutor/Advantage";
import Career from "./ui/pages/career/career";

// scroll to top
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}


function App() {
  return (
    <div>
      <ThemeProvider theme={theme} >
        <BrowserRouter>
          <Wrapper>
            <Header />
            <Routes>
              <Route path="/">
                <Route index element={<Index />} />
                {/* <Route path="blog">
                  <Route index element={<Blog />} />
                  <Route path="item" element={<Item />} />
                </Route> */}
                <Route path="about-us" element={<About />} />
                <Route path="products" element={<Products />} />
                <Route path="products/food" element={<Food />} />
                <Route path="products/beverage" element={<Beaverage />} />
                <Route path="products/mouth-freshner" element={<MouthFresh />} />
                <Route path="products/personal-care" element={<PersonalCare />} />
                <Route path="manufactures" element={<Manufacturer />} />
                <Route path="distributor" element={<Distributor />} />
                <Route path="contact-us" element={<Contact />} />
                <Route path="career" element={<Career />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="advantage" element={<Advantage />} />
              </Route>
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Wrapper>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
