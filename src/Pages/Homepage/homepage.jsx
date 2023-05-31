import React from "react";
import { Api } from "../Api";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
  faCaretDown,
  faCartArrowDown,
  faBars,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import InputGroup from "react-bootstrap/InputGroup";
import Carousel from "react-bootstrap/Carousel";
import "./homepage.css";
import logo from "./amazontoplogo.png";
import amazonlogo from "./amazonlogo.png";
import { useNavigate } from "react-router-dom";
export function NavScroll() {
  let navigate = useNavigate();

  function bringmehomepage() {
    navigate("/");
  }
  return (
    // first navbar
    <Navbar className="newone" bg="light" expand="lg">
      <Container fluid className="newone">
        <Navbar.Brand href="#">
          <img className="imglogo" src={logo} onClick={bringmehomepage}></img>
          <a href="" className="location1">
            <span className="head1">Hello</span>
            <br />
            <span>
              <FontAwesomeIcon className="icon2" icon={faLocationDot} />
            </span>
            <span className="tag1">Select your address</span>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <div className="d-flex">
            <InputGroup className="mb-3">
              <Dropdown className="dropdown1">
                <Dropdown.Toggle variant="dangerous" id="dropdown-basic">
                  <span className="all">All</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Form.Control
                type="search"
                placeholder="Search amazon.in"
                className="me-0"
                aria-label="Search"
              />
              <Button variant="warning">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </InputGroup>
          </div>
        </Navbar.Collapse>
        <a href="#" className="dropbox1">
          <span className="drop1">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAmVBMVEX/mTMSiAf/////lycAgQAAAIgAAIUAAH4AAIIAAIMAAHwAAHPi4u+kpMvz8/kAAHjn5/Lt7fXd3ey5uddPT6GZmcWDg7n6+v7Ly+HIyOJERJxlZao+PponJ5L29vy0tNbW1uggIJCfn8iGhrsYGJBNTaB2drQQEIx+fripqc5ra62QkMBXV6QiIpFfX6i+vtwyMpw6Opg1NZe0gadDAAAEvUlEQVR4nO3ba3OiSBiG4UzvdDcip8YDiAdQZAIxExP//4/btzHjZH1Nze6HpVPlc1Ul0eiH9g7Q2JKHBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/+gvuPYg4BqacGjCoQmHJhyacF+hSTI5LFd7uV8tD5PE9WDEF2gSHNbaGyklpVRq5Omfh8D1kBw3qaZ6pCiGVFrr/oYc6SZ3OyinTZIpdZCeevnhNyY1jf/jRXm0vejG6S7kssnObhmeNxMbcTSiEuZIt2aeZ7eancNxOWzy7NFrn3cnI/p9pbTfcmFO3ZxaeVN3A3PWJNrS5lAEmb3d5wgvt7KgoMe2kauhuWoSPdK2QHvIwt5ZpPTtQF/p+S7tVbQNPbqK4qhJRluJ17VGZB3di2yPF/o62AxdJkzbUZRt5mZwjpo0lOTY3wrtFGMPHq/vP5N+JxJHiuLomOKmycyTXinOUewLX1IYSTmW7/cpiSjpOTMno3PSJNA049TnQ4gIae8J6cVrSkWbSNdvJvRITbOPdnJO66RJo1QzM3RjaY8YMhLVVmR+JraViGhzEZn9vZnZp7kYnosmCy31+UR180oH1a4QWWyiODJxJhqajaPTpn80oee5OM130WSlVL3pZ11hJO0daiLWITUJ12KiaM+Spn9ssamVKhyMz0GTVNsDrOi6/o5fiVKLdmVis2qFLkXl27OV/rhCh1mdDj9AB01qmoftnz+Z2ir5+Cjk08JP49RfPElxHNvdpZvao2vhyVE9/AAdNHmkOfZ8ihpK2l4m4y4fJ7ryKp2M8248oe1D7vrHDc3Z++EHOHwTmojlr9tRISciHB/beZ3v87puj+OdmMiV+fUE6WI6Hr5J6amnaFEuzptK6av8GAfrKmzDah3Ex/zR798Iik1e5tGT8srBRzh8k7lSLf1ID9NlWNF5yHLcBuugLd6KNl0H87E9N0m7p+Zgj66tUvPBRzh8k2cl/fNZRzLbxut2kczXaWFXIEdFsG6TfH6KH2fnPSb3pXoefITDN3lVanpZBTDhytd12o6kNWrTg/ZPu8vKYzRV6nXwEQ7fRErvkiSLIpNWeViovokqdnmVmii6LBJE3u8D8mCcNEmqYzhbnqT2/TiOvX37Js/e6q1Hv4l9LX8+H8IyT++mCbaTK1fHkzccTz7OO8Hveafp550mWM/vct6Zn085cH7ywe3z2JTOY9O7PY/F+50b9vS++PyiP3tfPLm398WiHv15/aTs109Wd7N+gnW2G4p/uR6b3c96rMiv1u2bT9btgztat+8/3zmY989xbn6+I+7t8x18DngLPi++YYrrChhcf3IDrlO6IdqOpCpSXM/2D/11j234yXWPwy+bXOD6WO5rXkc9vdvrqAWut78N/5dx08f/3zF/fvr/7is0+WrQhEMTDk04NOHQhHv4DtcevsE1NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMT7m/cNifkUwM0UQAAAABJRU5ErkJggg=="
              className="imgindia"
            ></img>
          </span>
          <span className="drop1">
            <h4 className="indiahead">EN</h4>
            {/* <div className="languageslection">
              <ul>
                <li>avinash1</li>
                <li>avinash2</li>
                <li>avinash3</li>
              </ul>
            </div> */}
          </span>
          <span className="drop1">
            <FontAwesomeIcon className="toggle1" icon={faCaretDown} />
          </span>
        </a>
        <a href="#" className="dropbox2">
          <span className="drop2">Hello, sign in</span>
          <br />
          <span className="drop3">
            <h4 className="Account">Account & Lists</h4>
          </span>
          <span className="drop1">
            <FontAwesomeIcon className="toggle2" icon={faCaretDown} />
          </span>
        </a>
        <a href="#" className="dropbox3">
          <span className="drop7">Returns</span>
          <br />
          <span className="drop5">
            <h4 className="Account">& Orders</h4>
          </span>
        </a>
        <a href="#" className="dropbox4">
          <span className="drop6">
            <FontAwesomeIcon className="cartlogo" icon={faCartArrowDown} />
          </span>
          <span className="drop8">
            <h4 className="Account">Cart</h4>
          </span>
        </a>
      </Container>
    </Navbar>
  );
}

export function Navbar1() {
  let navigate = useNavigate();
  function todaysdeal() {
    navigate("/todaysdeal");
  }
  return (
    <div className="navbar1">
      <a href="#" className="first1">
        <FontAwesomeIcon className="homeburger" icon={faBars} />
        <h4 className="All">All</h4>
      </a>
      <a href="#" className="first2">
        <p className="AmazonminiTV">Amazon miniTV</p>
      </a>
      <a href="#" className="first3">
        <p className="sell">sell</p>
      </a>
      <a href="#" className="first4">
        <p className="BestSellers">Best Sellers</p>
      </a>
      <a href="#" className="first5">
        <p className="Mobiles">Mobiles</p>
      </a>
      <a href="" className="first6" onClick={todaysdeal}>
        <p className="TodayDeals">Today's Deals</p>
      </a>
      <a href="#" className="first7">
        <p className="CustomerService">Customer Service</p>
      </a>
      <a href="#" className="first8">
        <p className="Electronics">Electronics</p>
      </a>
      <a href="#" className="first9">
        <p className="Prime ">Prime</p>
        <FontAwesomeIcon className="primetoggle" icon={faCaretDown} />
      </a>
      <a href="#" className="first10">
        <p className="NewRelease">New Release</p>
      </a>
      <a href="#" className="first11">
        <p className="NewRelease">
          New Launches from Mobiles,Electronics & more | Shop now
        </p>
      </a>
    </div>
  );
}

export function Slider() {
  return (
    <Carousel className="carousel">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Push/3000x1200_V42._CB590402966_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/ATF/revised/new/Haircare-Herofader-PC._CB594539534_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Sports/April/Getfitdays/GW/Hero/Unrec/Graphic-6-3000X1200-unrec._CB590412541_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/Vernac/2021/Gw-Hero/Mobile_tall_Hero_revision_3000x1200._CB604857279_.jpg"
          alt="Forth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg"
          alt="Fivth slide"
        />
      </Carousel.Item>
      <div className="div_section_background">
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg"
          alt="Fivth slide"
        />
      </div>
    </Carousel>
  );
}

export function Products() {
  let navigate = useNavigate();
  function signinnext() {
    navigate("/signin");
  }
  return (
    <div className="main-ctn">
      <div className="div1">
        <div className="div111">
          <h2 className="pharhead">
            Up to 50% off | Monitor
            <br />
            blood sugar at home
          </h2>
          <a href="#" className="pharlink">
            <img
              className="pharimg"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/CC_low_3._SY304_CB592656736_.jpg"
            ></img>
            <p className="pharpara">vist the store</p>
          </a>
        </div>
        <div className="div112">
          <h2 className="Revamphead">Revamp your home in style</h2>
          <div className="div1121">
            <div className="div11211">
              <a href="#" className="badlink">
                <img
                  className="badimg"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg"
                ></img>
                <p className="badpara">
                  Bedsheets, curtains & <br />
                  more
                </p>
              </a>
            </div>
            <div className="div11212">
              <a href="#" className="decorlink">
                <img
                  className="decorimg"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg"
                ></img>
                <p className="decorpara">Home decoration</p>
              </a>
            </div>
          </div>
          <div className="div1122">
            <div className="div11221">
              <a href="#" className="storelink">
                <img
                  className="storeimg"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg"
                ></img>
                <p className="storepara">Home storage</p>
              </a>
            </div>
            <div className="div11222">
              <a href="#" className="lightlink">
                <img
                  className="lightimg"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg"
                ></img>
                <p className="lightpara">Lighting solutions</p>
              </a>
            </div>
          </div>
          <a href="#" className="ExploreAll">
            Explore all
          </a>
        </div>
        <div className="div113">
          <h2 className="Revamphead1">Starting ₹79 | Amazon Brands & more</h2>
          <div className="div1131">
            <div className="div11311">
              <a href="#" className="badlink1">
                <img
                  className="badimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile2-kitchen_186x116_in-en._SY116_CB612501062_.jpg"
                ></img>
                <p className="badpara1">Choppers & more</p>
              </a>
            </div>
            <div className="div11312">
              <a href="#" className="decorlink1">
                <img
                  className="decorimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/home_186._SY116_CB592083129_.jpg"
                ></img>
                <p className="decorpara1">String lights & more</p>
              </a>
            </div>
          </div>
          <div className="div1132">
            <div className="div11321">
              <a href="#" className="storelink1">
                <img
                  className="storeimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/kitchen186._SY116_CB592083129_.jpg"
                ></img>
                <p className="storepara1">Kitchen storage & containers</p>
              </a>
            </div>
            <div className="div11322">
              <a href="#" className="lightlink1">
                <img
                  className="lightimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile4-home_186x116_in-en._SY116_CB612501080_.jpg"
                ></img>
                <p className="lightpara1">Wall stickers & more</p>
              </a>
            </div>
          </div>
          <a href="#" className="ExploreAll1">
            Shop now
          </a>
        </div>
        <div className="div114">
          <div className="div1141">
            <h2 className="Signinhead">
              Sign in for your best
              <br />
              experience
            </h2>
            <button className="signinbutton" type="submit" onClick={signinnext}>
              Sign in securely
            </button>
          </div>
          <a className="sponsorlink">
            <img
              className="sponsorimg"
              src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
            ></img>
          </a>
        </div>
      </div>
      <div className="div2">
        <div className="div211">
          <h2 className="pharhead2">
            Bluetooth Calling
            <br />
            Smartwatch starts at...
          </h2>
          <a href="#" className="pharlink2">
            <img
              className="pharimg2"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
            ></img>
            <p className="pharpara2">Shop Now</p>
          </a>
        </div>
        <div className="div212">
          <h2 className="Revamphead2">
            Home appliances | Up to <br /> 55% off
          </h2>
          <div className="div1131">
            <div className="div21211">
              <a href="#" className="badlink1">
                <img
                  className="badimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                ></img>
                <p className="badpara1">Air conditioners </p>
              </a>
            </div>
            <div className="div21212">
              <a href="#" className="decorlink1">
                <img
                  className="decorimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                ></img>
                <p className="decorpara1">Refrigerators</p>
              </a>
            </div>
          </div>
          <div className="div1132">
            <div className="div21221">
              <a href="#" className="storelink1">
                <img
                  className="storeimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                ></img>
                <p className="storepara1">Microwaves</p>
              </a>
            </div>
            <div className="div21222">
              <a href="#" className="lightlink1">
                <img
                  className="lightimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                ></img>
                <p className="lightpara1">Washing machines</p>
              </a>
            </div>
          </div>
          <a href="#" className="ExploreAll2">
            See more
          </a>
        </div>
        <div className="div213">
          <h2 className="pharhead3">
            Up to 70% off | Clearance
            <br />
            store
          </h2>
          <a href="#" className="pharlink3">
            <img
              className="pharimg3"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
            ></img>
            <p className="pharpara3">See more</p>
          </a>
        </div>
        <div className="div214">
          <h2 className="Revamphead3">Up to 60% off | Styles for women</h2>
          <div className="div1131">
            <div className="div31211">
              <a href="#" className="badlink1">
                <img
                  className="badimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg"
                ></img>
                <p className="badpara1">Women's Clothing </p>
              </a>
            </div>
            <div className="div31212">
              <a href="#" className="decorlink1">
                <img
                  className="decorimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg"
                ></img>
                <p className="decorpara1">Footwear+Handbags</p>
              </a>
            </div>
          </div>
          <div className="div1132">
            <div className="div31221">
              <a href="#" className="storelink1">
                <img
                  className="storeimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg"
                ></img>
                <p className="storepara1">Watches</p>
              </a>
            </div>
            <div className="div31222">
              <a href="#" className="lightlink1">
                <img
                  className="lightimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg"
                ></img>
                <p className="lightpara1">Fashion jewellery</p>
              </a>
            </div>
          </div>
          <a href="#" className="ExploreAll3">
            See all offers
          </a>
        </div>
      </div>
      <div className="div3">
        {Api.map((item, index) => {
          return (
            <>
              <div className="Api_CTN">
                <img src={item.image} className="Api_img"></img>
                <p className="Api_price">{item.price}</p>
                <div className="btns_add">
                  <button type="submit" className="addto_cart">
                    Add to Cart
                  </button>
                  <button type="submit" className="buy_now">
                    Buy Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="div4">
        {Api.map((item, index) => {
          return (
            <>
              <div className="Api_CTN">
                <img src={item.image} className="Api_img1"></img>
                <p className="Api_price">{item.price}</p>
                <div className="btns_add">
                  <button type="submit" className="addto_cart">
                    Add to Cart
                  </button>
                  <button type="submit" className="buy_now">
                    Buy Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="div5">
        {Api.map((item, index) => {
          return (
            <>
              <div className="Api_CTN">
                <img src={item.image} className="Api_img1"></img>
                <p className="Api_price">{item.price}</p>
                <div className="btns_add">
                  <button type="submit" className="addto_cart">
                    Add to Cart
                  </button>
                  <button type="submit" className="buy_now">
                    Buy Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="div6">
        <div className="div211">
          <h2 className="pharhead6">
            Sell on Amazon with 1-
            <br />
            Click Launch Support
          </h2>
          <a href="#" className="pharlink6">
            <img
              className="pharimg6"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/March23/LR_379X304._SY304_CB595115209_.jpg"
            ></img>
            <p className="pharpara6">Register now</p>
          </a>
        </div>
        <div className="div212">
          <h2 className="Revamphead10">
            Home shopping from local <br />
            shops
          </h2>
          <div className="div1131">
            <div className="div101211">
              <a href="#" className="badlink1">
                <img
                  className="badimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/1_1x_posy._SY116_CB647373111_.jpg"
                ></img>
                <p className="badpara1">Carpets & doormats</p>
              </a>
            </div>
            <div className="div101212">
              <a href="#" className="decorlink1">
                <img
                  className="decorimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/2_1x_unho._SY116_CB647373111_.jpg"
                ></img>
                <p className="decorpara1">Bed linen</p>
              </a>
            </div>
          </div>
          <div className="div1132">
            <div className="div101221">
              <a href="#" className="storelink1">
                <img
                  className="storeimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/3_1x_plai._SY116_CB647373111_.jpg"
                ></img>
                <p className="storepara1">Living room furniture</p>
              </a>
            </div>
            <div className="div101222">
              <a href="#" className="lightlink1">
                <img
                  className="lightimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/4_1x_kmnk._SY116_CB647373111_.jpg"
                ></img>
                <p className="lightpara1">Cushion covers</p>
              </a>
            </div>
          </div>
          <a href="#" className="ExploreAll10">
            See all offers
          </a>
        </div>
        <div className="div213">
          <h2 className="Revamphead11">
            Under ₹499 | Pocket- <br />
            friendly fashion
          </h2>
          <div className="div1131">
            <div className="div111211">
              <a href="#" className="badlink1">
                <img
                  className="badimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-1-186-116._SY116_CB636055991_.jpg"
                ></img>
                <p className="badpara1">Clothing</p>
              </a>
            </div>
            <div className="div111212">
              <a href="#" className="decorlink1">
                <img
                  className="decorimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-3-186-116._SY116_CB636055991_.jpg"
                ></img>
                <p className="decorpara1">Backpacks</p>
              </a>
            </div>
          </div>
          <div className="div1132">
            <div className="div111221">
              <a href="#" className="storelink1">
                <img
                  className="storeimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-2-186-116._SY116_CB636055991_.jpg"
                ></img>
                <p className="storepara1">Footwear</p>
              </a>
            </div>
            <div className="div111222">
              <a href="#" className="lightlink1">
                <img
                  className="lightimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-4-186-116._SY116_CB636055991_.jpg"
                ></img>
                <p className="lightpara1">View all</p>
              </a>
            </div>
          </div>
          <a href="#" className="ExploreAll11">
            See all offers
          </a>
        </div>
        <div className="div214">
          <h2 className="Revamphead12">Try Prime today</h2>
          <div className="div1131">
            <div className="div121211">
              <a href="#" className="badlink1">
                <img
                  className="badimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/PC_QuadCard_186X116-1._SY116_CB616375594_.jpg"
                ></img>
                <p className="badpara1">FREE one delivery</p>
              </a>
            </div>
            <div className="div121212">
              <a href="#" className="decorlink1">
                <img
                  className="decorimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/PC_QuadCard_186X116-2._SY116_CB616375594_.jpg"
                ></img>
                <p className="decorpara1">
                  Latest movies and TV <br />
                  shows
                </p>
              </a>
            </div>
          </div>
          <div className="div1132">
            <div className="div121221">
              <a href="#" className="storelink1">
                <img
                  className="storeimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/PC_QuadCard_186X116-3._SY116_CB616375594_.jpg"
                ></img>
                <p className="storepara1">Ad-free music</p>
              </a>
            </div>
            <div className="div121222">
              <a href="#" className="lightlink1">
                <img
                  className="lightimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/PC_QuadCard_186X116-4._SY116_CB616375594_.jpg"
                ></img>
                <p className="lightpara1">
                  Get unlimited 5% <br /> cashback on shopping
                </p>
              </a>
            </div>
          </div>
          <a href="#" className="ExploreAll12">
            Enjoy all the benefits of Prime
          </a>
        </div>
      </div>
      <div className="div7">
        {Api.map((item, index) => {
          return (
            <>
              <div className="Api_CTN">
                <img src={item.image} className="Api_img1"></img>
                <p className="Api_price">{item.price}</p>
                <div className="btns_add">
                  <button type="submit" className="addto_cart">
                    Add to Cart
                  </button>
                  <button type="submit" className="buy_now">
                    Buy Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="div8">
        {Api.map((item, index) => {
          return (
            <>
              <div className="Api_CTN">
                <img src={item.image} className="Api_img1"></img>
                <p className="Api_price">{item.price}</p>
                <div className="btns_add">
                  <button type="submit" className="addto_cart">
                    Add to Cart
                  </button>
                  <button type="submit" className="buy_now">
                    Buy Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="div9">
        {Api.map((item, index) => {
          return (
            <>
              <div className="Api_CTN">
                <img src={item.image} className="Api_img1"></img>
                <p className="Api_price">{item.price}</p>
                <div className="btns_add">
                  <button type="submit" className="addto_cart">
                    Add to Cart
                  </button>
                  <button type="submit" className="buy_now">
                    Buy Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="div10">
        <div className="div211">
          <h2 className="Revamphead4">
            Up to 40% off | Daily <br />
            essentials
          </h2>
          <div className="div1131">
            <div className="div41211">
              <a href="#" className="badlink1">
                <img
                  className="badimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_2_1x._SY116_CB616376703_.jpg"
                ></img>
                <p className="badpara1">Laundry essentials </p>
              </a>
            </div>
            <div className="div41212">
              <a href="#" className="decorlink1">
                <img
                  className="decorimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_1_1x._SY116_CB616376703_.jpg"
                ></img>
                <p className="decorpara1">Household cleaners</p>
              </a>
            </div>
          </div>
          <div className="div1132">
            <div className="div41221">
              <a href="#" className="storelink1">
                <img
                  className="storeimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_4_1x._SY116_CB616376703_.jpg"
                ></img>
                <p className="storepara1">Oral care</p>
              </a>
            </div>
            <div className="div41222">
              <a href="#" className="lightlink1">
                <img
                  className="lightimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_3_1x._SY116_CB616376703_.jpg"
                ></img>
                <p className="lightpara1">Air freshners</p>
              </a>
            </div>
          </div>
          <a href="#" className="ExploreAll4">
            See all offers
          </a>
        </div>
        <div className="div212">
          <h2 className="Revamphead5">
            Electronics devices for <br /> home office
          </h2>
          <div className="div1131">
            <div className="div51211">
              <a href="#" className="badlink1">
                <img
                  className="badimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg"
                ></img>
                <p className="badpara1">
                  Smartwatches & fitness <br /> trackers
                </p>
              </a>
            </div>
            <div className="div51212">
              <a href="#" className="decorlink1">
                <img
                  className="decorimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg"
                ></img>
                <p className="decorpara1">Tablets</p>
              </a>
            </div>
          </div>
          <div className="div1132">
            <div className="div51221">
              <a href="#" className="storelink1">
                <img
                  className="storeimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg"
                ></img>
                <p className="storepara1">Laptops</p>
              </a>
            </div>
            <div className="div51222">
              <a href="#" className="lightlink1">
                <img
                  className="lightimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg"
                ></img>
                <p className="lightpara1">Monitors</p>
              </a>
            </div>
          </div>
          <a href="#" className="ExploreAll5">
            See more
          </a>
        </div>
        <div className="div213">
          <h2 className="pharhead4">
            Relive Your First Love only
            <br />
            on miniTV
          </h2>
          <a href="#" className="watchlink">
            <img
              className="pharimg4"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/DeskCC-GuturGu379x304_V4._SY304_CB591872322_.jpg"
            ></img>
            <p className="pharpara4">Watch for FREE | miniTV</p>
          </a>
        </div>
        <div className="div214">
          <h2 className="Revamphead6">
            Up to 70% off | Shoes, <br /> jewellery & more
          </h2>
          <div className="div1131">
            <div className="div61211">
              <a href="#" className="badlink1">
                <img
                  className="badimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/March_2023/PC_QC/Shoes_low_res._SY116_CB613242605_.png"
                ></img>
                <p className="badpara1">Sports shoes</p>
              </a>
            </div>
            <div className="div61212">
              <a href="#" className="decorlink1">
                <img
                  className="decorimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/March_2023/PC_QC/Jewl_low_res._SY116_CB613242605_.png"
                ></img>
                <p className="decorpara1">Jewellery & accessories</p>
              </a>
            </div>
          </div>
          <div className="div1132">
            <div className="div61221">
              <a href="#" className="storelink1">
                <img
                  className="storeimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/March_2023/PC_QC/Watches_low_res._SY116_CB613242605_.png"
                ></img>
                <p className="storepara1">
                  Watches & <br /> smartwatches
                </p>
              </a>
            </div>
            <div className="div61222">
              <a href="#" className="lightlink1">
                <img
                  className="lightimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/March_2023/PC_QC/Lugg_low_res._SY116_CB613242605_.png"
                ></img>
                <p className="lightpara1">
                  Bags, wallets & <br /> luggage
                </p>
              </a>
            </div>
          </div>
          <a href="#" className="ExploreAll6">
            See more offers
          </a>
        </div>
      </div>
      <div className="div11">
        {Api.map((item, index) => {
          return (
            <>
              <div className="Api_CTN">
                <img src={item.image} className="Api_img11"></img>
                <p className="Api_price">{item.price}</p>
                <div className="btns_add">
                  <button type="submit" className="addto_cart">
                    Add to Cart
                  </button>
                  <button type="submit" className="buy_now">
                    Buy Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="div12">
        {Api.map((item, index) => {
          return (
            <>
              <div className="Api_CTN">
                <img src={item.image} className="Api_img12"></img>
                <p className="Api_price">{item.price}</p>
                <div className="btns_add">
                  <button type="submit" className="addto_cart">
                    Add to Cart
                  </button>
                  <button type="submit" className="buy_now">
                    Buy Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="div13">
        <div className="div211">
          <h2 className="pharhead5">
            Gardening essentials | <br /> Starting ₹99
          </h2>
          <a href="#" className="flowerlink">
            <img
              className="pharimg5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/MSO_May/compressed_379x304_compressed._SY304_CB592193370_.jpg"
            ></img>
            <p className="pharpara5">See more</p>
          </a>
        </div>
        <div className="div212">
          <h2 className="Revamphead7">
            Summer appliances from <br /> local stores
          </h2>
          <div className="div1131">
            <div className="div71211">
              <a href="#" className="badlink1">
                <img
                  className="badimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/1_2x_qwerfgp._SY116_CB592066874_.jpg"
                ></img>
                <p className="badpara1">Air conditioners</p>
              </a>
            </div>
            <div className="div71212">
              <a href="#" className="decorlink1">
                <img
                  className="decorimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/1_2x_qwerfgf._SY116_CB592066874_.jpg"
                ></img>
                <p className="decorpara1">Refrigerators</p>
              </a>
            </div>
          </div>
          <div className="div1132">
            <div className="div71221">
              <a href="#" className="storelink1">
                <img
                  className="storeimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/1_2x_qwerfgk._SY116_CB592066874_.jpg"
                ></img>
                <p className="storepara1">Microwaves</p>
              </a>
            </div>
            <div className="div71222">
              <a href="#" className="lightlink1">
                <img
                  className="lightimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/1_2x_qwerfgv._SY116_CB592066874_.jpg"
                ></img>
                <p className="lightpara1">Washing machine</p>
              </a>
            </div>
          </div>
          <a href="#" className="ExploreAll7">
            See all offers
          </a>
        </div>
        <div className="div213">
          <h2 className="Revamphead8">
            Starting ₹99 | Tools & <br />
            home improvement
          </h2>
          <div className="div1131">
            <div className="div81211">
              <a href="#" className="badlink1">
                <img
                  className="badimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116_1a._SY116_CB610512345_.jpg"
                ></img>
                <p className="badpara1">
                  Spin mops, Wipes & <br /> more
                </p>
              </a>
            </div>
            <div className="div81212">
              <a href="#" className="decorlink1">
                <img
                  className="decorimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116_2b._SY116_CB610512345_.jpg"
                ></img>
                <p className="decorpara1">
                  Drill machines, tool kits <br /> & more
                </p>
              </a>
            </div>
          </div>
          <div className="div1132">
            <div className="div81221">
              <a href="#" className="storelink1">
                <img
                  className="storeimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116_3c._SY116_CB610512345_.jpg"
                ></img>
                <p className="storepara1">Bathroom accessories</p>
              </a>
            </div>
            <div className="div81222">
              <a href="#" className="lightlink1">
                <img
                  className="lightimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116._SY116_CB610509523_.jpg"
                ></img>
                <p className="lightpara1">
                  Extension boards, plugs <br /> more
                </p>
              </a>
            </div>
          </div>
          <a href="#" className="ExploreAll8">
            See more
          </a>
        </div>
        <div className="div214">
          <h2 className="Revamphead9">
            Minimum 50% off | Top <br />
            styles for her{" "}
          </h2>
          <div className="div1131">
            <div className="div91211">
              <a href="#" className="badlink1">
                <img
                  className="badimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/WA/1_1X._SY116_CB618751254_.jpg"
                ></img>
                <p className="badpara1">
                  Allen solly, Fort Collins
                  <br /> & more
                </p>
              </a>
            </div>
            <div className="div91212">
              <a href="#" className="decorlink1">
                <img
                  className="decorimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/WA/2_1X._SY116_CB618751254_.jpg"
                ></img>
                <p className="decorpara1">Biba, Aurelia & more</p>
              </a>
            </div>
          </div>
          <div className="div1132">
            <div className="div91221">
              <a href="#" className="storelink1">
                <img
                  className="storeimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/WA/3_1X._SY116_CB618751254_.jpg"
                ></img>
                <p className="storepara1">
                  Womanista, Mimosa & <br /> more
                </p>
              </a>
            </div>
            <div className="div91222">
              <a href="#" className="lightlink1">
                <img
                  className="lightimg1"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/WA/4_1X._SY116_CB618751254_.jpg"
                ></img>
                <p className="lightpara1">Harpa, only & more</p>
              </a>
            </div>
          </div>
          <a href="#" className="ExploreAll9">
            See all deals
          </a>
        </div>
      </div>
      <div className="div14">
        {Api.map((item, index) => {
          return (
            <>
              <div className="Api_CTN">
                <img src={item.image} className="Api_img14"></img>
                <p className="Api_price">{item.price}</p>
                <div className="btns_add">
                  <button type="submit" className="addto_cart">
                    Add to Cart
                  </button>
                  <button type="submit" className="buy_now">
                    Buy Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
export function Bottomsignin() {
  let navigate = useNavigate();

  function navigates() {
    navigate("/signin");
  }
  return (
    <div className="div15">
      <div className="div151"></div>
      <p className="recompara">See personalized recommendation</p>
      <Button className="sign" onClick={navigates}>
        <p className="sign_btnnnn">Sign in</p>
      </Button>
      <div className="div152">
        <p className="new">New customer?</p>
        <a href="#" className="start">
          start here.
        </a>
      </div>

      <div className="div151"></div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="div16">
      <a href="#" className="backtotoplink">
        <div className="div161">
          <p className="backtotoppara">Back to top</p>
        </div>
      </a>
      <div className="div162">
        <div className="div1621">
          <div className="emptydiv"></div>
          <div className="gettoknow">
            <h2 className="footerhead gettoknowheading">Get to Know Us</h2>
            <a href="#" className="footerlink gettoknowsub gettoknow1">
              About Us
            </a>
            <a href="#" className="footerlink gettoknowsub gettoknow2">
              Careers
            </a>
            <a href="#" className="footerlink gettoknowsub gettoknow3">
              Press Releases
            </a>
            <a href="#" className="footerlink gettoknowsub gettoknow4">
              Amazon Science
            </a>
          </div>
          <div className="ConnectwithUs">
            <h2 className="footerhead ConnectwithUsheading">Connect with Us</h2>
            <a href="#" className="footerlink ConnectwithUssub ConnectwithUs1">
              Facebook
            </a>
            <a href="#" className="footerlink ConnectwithUssub ConnectwithUs2">
              Twitter
            </a>
            <a href="#" className="footerlink ConnectwithUssub ConnectwithUs3">
              Instagram
            </a>
          </div>
          <div className="MakeMoneywithUs">
            <h2 className="footerhead MakeMoneywithUsheading">
              Make Money with Us
            </h2>
            <a
              href="#"
              className="footerlink MakeMoneywithUssub MakeMoneywithUs1"
            >
              Sell on Amazon
            </a>
            <a
              href="#"
              className="footerlink MakeMoneywithUssub MakeMoneywithUs2"
            >
              Sell under Amazon Accelerator
            </a>
            <a
              href="#"
              className="footerlink MakeMoneywithUssub MakeMoneywithUs3"
            >
              Protect and Build Your Brand
            </a>
            <a
              href="#"
              className="footerlink MakeMoneywithUssub MakeMoneywithUs4"
            >
              Amazon Global Selling
            </a>
            <a
              href="#"
              className="footerlink MakeMoneywithUssub MakeMoneywithUs5"
            >
              Become an Affiliate
            </a>
            <a
              href="#"
              className="footerlink MakeMoneywithUssub MakeMoneywithUs6"
            >
              Fulfilment by Amazon
            </a>
            <a
              href="#"
              className="footerlink MakeMoneywithUssub MakeMoneywithUs7"
            >
              Advertise Your Products
            </a>
            <a
              href="#"
              className="footerlink MakeMoneywithUssub MakeMoneywithUs8"
            >
              Amazon Pay on Merchants
            </a>
          </div>
          <div className="LetUsHelpYou">
            <h2 className="footerhead LetUsHelpYouheading">Let Us Help You</h2>
            <a href="#" className="footerlink LetUsHelpYousub LetUsHelpYou1">
              COVID-19 and Amazon
            </a>
            <a href="#" className="footerlink LetUsHelpYousub LetUsHelpYou2">
              Your Account
            </a>
            <a href="#" className="footerlink LetUsHelpYousub LetUsHelpYou3">
              Returns Centre
            </a>
            <a href="#" className="footerlink LetUsHelpYousub LetUsHelpYou4">
              100% Purchase Protection
            </a>
            <a href="#" className="footerlink LetUsHelpYousub LetUsHelpYou5">
              Amazon App Download
            </a>
            <a href="#" className="footerlink LetUsHelpYousub LetUsHelpYou6">
              Help
            </a>
          </div>
          <div className="emptydiv"></div>
        </div>
        <div className="div1622">
          <div className="footerimglogo">
            <img src={amazonlogo} className="amazonfooterlogo"></img>
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                <FontAwesomeIcon className="globe" icon={faGlobe} />
                <span className="english">English</span>
                <FontAwesomeIcon className="upperarrow" icon={faCaretDown} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="footercitylist">
            <a href="#" className="citylist citylist1">
              Australia
            </a>
            <a href="#" className="citylist citylist12">
              Brazil
            </a>
            <a href="#" className="citylist citylist3">
              Canada
            </a>
            <a href="#" className="citylist citylist4">
              China
            </a>
            <a href="#" className="citylist citylist5">
              France
            </a>
            <a href="#" className="citylist citylist6">
              Germany
            </a>
            <a href="#" className="citylist citylist7">
              Italy
            </a>
            <a href="#" className="citylist citylist8">
              Japan
            </a>
            <a href="#" className="citylist citylist9">
              Mexico
            </a>
            <a href="#" className="citylist citylist10">
              Netherlands
            </a>
            <a href="#" className="citylist citylist11">
              Poland
            </a>
            <a href="#" className="citylist citylist12">
              Singapore
            </a>
            <a href="#" className="citylist citylist13">
              Spain
            </a>
            <a href="#" className="citylist citylist14">
              Turkey
            </a>
            <a href="#" className="citylist citylist15">
              United Arab Emirates
            </a>
          </div>
          <div className="footercoutrylist">
            <a href="#" className="citylist countrylist coutrylist1">
              United Kingdom
            </a>
            <a href="#" className="citylist countrylist coutrylist2">
              United States
            </a>
          </div>
        </div>
      </div>
      <div className="div163">
        <div className="div1631">
          <div className="secondfooter leftfirst">
            <a href="#" className="booklink booklink1">
              <p className="bookhead upbookhead1">AbeBooks</p>
              <p className="lowbookhead upbookhead2">
                Books, art <br />& collectibles
              </p>
            </a>
            <a href="#" className="booklink booklink2">
              <p className="bottombookhead1">Shopbop</p>
              <p className="lowbookhead bottombookhead2">
                Designer
                <br />
                Fashion Brands
              </p>
            </a>
          </div>
          <div className="secondfooter leftsecond">
            <a href="#" className="booklink booklink1 Abebook">
              <p className="bookhead upbookhead1">AbeBooks</p>
              <p className="lowbookhead upbookhead2">
                Books, art <br />& collectibles
              </p>
            </a>
            <a href="#" className="booklink booklink2">
              <p className="bottombookhead1">Amazon Web Services</p>
              <p className="lowbookhead bottombookhead2">
                Scalable Cloud
                <br />
                Computing Services
              </p>
            </a>
          </div>
          <div className="secondfooter leftthird">
            <a href="#" className="booklink booklink1 Audible">
              <p className="bookhead upbookhead1">Audible</p>
              <p className="lowbookhead upbookhead2">
                Download
                <br />
                Audio Books
              </p>
            </a>
            <a href="#" className="booklink booklink2">
              <p className="bottombookhead1">Prime Now</p>
              <p className="lowbookhead bottombookhead2">
                2-Hour Delivery
                <br />
                on Everyday Items
              </p>
            </a>
          </div>
          <div className="secondfooter leftfourth">
            <a href="#" className="booklink booklink1 DPReview">
              <p className="bookhead upbookhead1">DPReview</p>
              <p className="lowbookhead upbookhead2">
                Digital
                <br />
                Photography
              </p>
            </a>
            <a href="#" className="booklink booklink2">
              <p className="bottombookhead1">Amazon Prime Music</p>
              <p className="lowbookhead bottombookhead2">
                100 million songs, ad-free
                <br />
                Over 15 million podcast episodes
              </p>
            </a>
          </div>
          <div className="secondfooter leftfivth">
            <a href="#" className="booklink booklink1">
              <p className="bookhead upbookhead1">IMDb</p>
              <p className="lowbookhead upbookhead2">
                Movies, TV
                <br />& Celebrities
              </p>
            </a>
          </div>
        </div>
        <div className="div1632">
          <div className="policy">
            <a href="#" className="policylink condition">
              Conditions of Use & Sale
            </a>
            <a href="#" className="policylink privacy">
              Privacy Notice
            </a>
            <a href="#" className="policylink interest">
              Interest-Based Ads
            </a>
          </div>
          <div className="copyright">
            <p className="copyrightcontaint">
              © 1996-2023, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
