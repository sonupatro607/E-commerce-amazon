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
