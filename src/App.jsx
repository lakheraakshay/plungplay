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
import Details from "./ui/pages/products/Details";
import Manufacturer from "./ui/pages/distriibutor/Manufacturer";
import Distributor from "./ui/pages/distriibutor/Distributor";
import Contact from "./ui/pages/contact/Contact";
import Gallery from "./ui/pages/gallery/Gallery";

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
                <Route path="details" element={<Details />} />
                <Route path="manufactures" element={<Manufacturer />} />
                <Route path="distributor" element={<Distributor />} />
                <Route path="contact-us" element={<Contact />} />
                <Route path="gallery" element={<Gallery />} />
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
