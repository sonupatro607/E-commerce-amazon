import React from "react";
import "./App.css";
import {
  NavScroll,
  Navbar1,
  Slider,
  Products,
  Bottomsignin,
  Footer,
} from "./Pages/Homepage/homepage";
import {
  Todaysdeal,
  Navbar3,
  Categorys,
  Dropdownfilter,
  Productsdealslist,
  Pagebuttons,
  Bottomsection,
} from "./Pages/Todaysdeal/todaysdeal";
import { Signin, Signinbottom } from "./Pages/Signin/sign";
import { Account } from "./Pages/Createaccount/account";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const api = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 3,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpgg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 4,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <React.Fragment>
                <NavScroll />
                <Navbar1 />
                <Slider />
                <Products />;
                <Bottomsignin />
                <Footer />
              </React.Fragment>
            }
          />
          <Route
            exact
            path="/todaysdeal"
            element={
              <React.Fragment>
                <Todaysdeal />
                <Navbar3 />
                <Categorys />
                <Dropdownfilter />
                <Productsdealslist />
                <Pagebuttons />
                <Bottomsection />
              </React.Fragment>
            }
          />
          <Route
            exact
            path="/signin"
            element={
              <React.Fragment>
                <Signin />
                <Signinbottom />
              </React.Fragment>
            }
          />
          <Route
            exact
            path="/signin/createaccount"
            element={
              <React.Fragment>
                <Account />
              </React.Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
