import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./todaysdeaal.css";
import { NavScroll, Navbar1, Bottomsignin, Footer } from "../Homepage/homepage";
import rating4 from "./fourstar.png";
import rating3 from "./threestar.png";
import rating2 from "./twostar.png";
import rating1 from "./one1star.png";
import prime from "./primestar.png";
import drowdown from "./design.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Todaysdeal = () => {
  return (
    <div>
      <NavScroll />
      <Navbar1 />
    </div>
  );
};
export function Navbar3() {
  return (
    <div className="navbar3">
      <a href="#" className="linknav3 todaysdeal">
        Today's Deals
      </a>
      <a href="#" className="linknav3 alldeal">
        All Deals
      </a>
      <a href="#" className="linknav3 watcheddeal">
        Watched Deals
      </a>
      <a href="#" className="linknav3 subscribesave">
        Subscribe & Save
      </a>
      <a href="#" className="linknav3 coupons">
        Coupons
      </a>
      <a href="#" className="linknav3 clearance">
        Clearance
      </a>
      <a href="#" className="linknav3 openbox">
        Refurbished & Open Box
      </a>
    </div>
  );
}

export function Categorys() {
  const navigate = useNavigate();

  function Alldeals() {
    navigate("/todaysdeal");
  }
  return (
    <div className="todaysdeals">
      <h3 className="todaysdealheading">Today's Deals</h3>
      <div className="dealslistrow">
        <a href="#" className="deals Alldeals1" onClick={Alldeals}>
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/all_deals.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">All Deals </p>
        </a>
        <a href="twitter.com" className="deals Alldeals2">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">Deal of the Day</p>
        </a>
        <a href="#" className="deals Alldeals3">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/amazon_business.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">Lightning Deals</p>
        </a>
        <a href="#" className="deals Alldeals4">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">Mobiles</p>
        </a>
        <a href="#" className="deals Alldeals5">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/electronics.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">Electronics</p>
        </a>
        <a href="#" className="deals Alldeals6">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/computer_accessories.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">
            Mobiles & <br />
            computer
            <br />
            accessories
          </p>
        </a>
        <a href="#" className="deals Alldeals7">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/Icons_Beauty1.png"
            alt="not found"
          ></img>
          <p className="caption caption1">
            Beauty & <br />
            Makeup
          </p>
        </a>
        <a href="#" className="deals Alldeals8">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/clothinghalos-model-icon.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">Clothing</p>
        </a>
        <a href="#" className="deals Alldeals9">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/footwear-icon.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">Footwear</p>
        </a>
        <a href="#" className="deals Alldeals10">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/jewelleryhalos.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">
            Jewellery,
            <br />
            Luggage,
            <br />
            Watches
          </p>
        </a>
        <a href="#" className="deals Alldeals11">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/PB-icon.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">
            Amazon <br />
            Brands &<br />
            more
          </p>
        </a>
        <a href="#" className="deals Alldeals12">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/health__households.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">
            Health &<br />
            Household
          </p>
        </a>
        <a href="#" className="deals Alldeals13">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/Home__kitchen.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">
            Home & <br />
            Kitchen
          </p>
        </a>
        <a href="#" className="deals Alldeals14">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/grocery.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">Grocery</p>
        </a>
        <a href="#" className="deals Alldeals15">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_ASIN-Icons_150x150_Books.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">
            Books & <br />
            Stationery
          </p>
        </a>
        <a href="#" className="deals Alldeals16">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_ASIN-Icons_150x150_PCA.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">
            Grooming &
            <br />
            Wellness
          </p>
        </a>
        <a href="#" className="deals Alldeals17">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/bankt1/All_ASIN-Icons_Template_2_332.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">Kids & Baby</p>
        </a>
        <a href="#" className="deals Alldeals18">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/bankt1/All_ASIN-Icons_Template_2_332.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">
            Sports &<br />
            Fitness
          </p>
        </a>
        <a href="#" className="deals Alldeals19">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/sports.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">
            Car &<br />
            motorbike
            <br />
            accessories
          </p>
        </a>
        <a href="#" className="deals Alldeals20">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/automobiles.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">
            Musical
            <br />
            Instruments
          </p>
        </a>
        <a href="#" className="deals Alldeals21">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/music.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">Pet Supplies</p>
        </a>
        <a href="#" className="deals Alldeals22">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/pet.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">
            Video games
            <br />& Software
          </p>
        </a>
        <a href="#" className="deals Alldeals23">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jupiter21P1/All_ASIN-Icons_150x150_VG.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">
            Large
            <br />
            Appliances
          </p>
        </a>
        <a href="#" className="deals Alldeals24">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/home_appliances.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">Furniture</p>
        </a>
        <a href="#" className="deals Alldeals25">
          <img
            className="dealimg Alldealimg"
            src="https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/furniture.jpg"
            alt="not found"
          ></img>
          <p className="caption caption1">
            Amazon
            <br />
            Business
          </p>
        </a>
      </div>
    </div>
  );
}
export function Dropdownfilter() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        <p className="sort"> Sort By: Featured</p>
      </Dropdown.Toggle>
      <FontAwesomeIcon icon={faCaretDown} className="dropdowntoggle" />
      <Dropdown.Menu className="togglearrow">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export function Productsdealslist() {
  return (
    <div className="productsdivs">
      <div className="left">
        <a href="#" className="filter aldeal1">
          All deals
        </a>
        <a href="#" className="filter aldeal2">
          Available
        </a>
        <a href="#" className="filter aldeal3">
          Upcoming
        </a>
        <a href="#" className="filter aldeal4">
          Watchlist
        </a>
        <h4 className="leftheading price">Price</h4>
        <a href="#" className="filterprice All1">
          All
        </a>
        <a href="#" className="filterprice All2">
          Under ₹500
        </a>
        <a href="#" className="filterprice All3">
          ₹500 to ₹1,000
        </a>
        <a href="#" className="filterprice All4">
          ₹1,000 to ₹2,000
        </a>
        <a href="#" className="filterprice All5">
          ₹2,000 to ₹5,000
        </a>
        <a href="#" className="filterprice All6">
          ₹5,000 and Above
        </a>
        <h4 className="leftheading Discount">Discount</h4>
        <a href="#" className="filtediscount DiscountAll1">
          All deals
        </a>
        <a href="#" className="filtediscount DiscountAll2">
          10% off or more
        </a>
        <a href="#" className="filtediscount DiscountAll3">
          25% off or more
        </a>
        <a href="#" className="filtediscount DiscountAll4">
          50% off or more
        </a>
        <a href="#" className="filtediscount DiscountAll5">
          70% off or more
        </a>
        <h4 className="leftheading Review">Average Customer Review</h4>
        <div className="ratingdiv 4stardiv">
          <img src={rating4} className="ratingimg 4starimg"></img>
          <a href="#" className="filterlink 4star">
            and up
          </a>
        </div>
        <div className="ratingdiv 3stardiv">
          <img src={rating3} className="ratingimg 3starimg"></img>
          <a href="#" className="filterlink 3star">
            and up
          </a>
        </div>
        <div className="ratingdiv 2stardiv">
          <img src={rating2} className="ratingimg 2starimg"></img>
          <a href="#" className="filterlink 2star">
            and up
          </a>
        </div>
        <div className="ratingdiv 1stardiv">
          <img src={rating1} className="ratingimg 1starimg"></img>
          <a href="#" className="filterlink 1star">
            and up
          </a>
        </div>
        <h4 className="leftheading dealtype">Deal Type</h4>
        <a href="#" className="filterdealtype Dealtype1">
          All deals
        </a>
        <a href="#" className="filterdealtype Dealtype2">
          Deal of the day
        </a>
        <a href="#" className="filterdealtype Dealtype3">
          Lightning deal
        </a>
        <a href="#" className="filterdealtype Dealtype4">
          Best deal
        </a>
        <h4 className="leftheading prime">Prime Programmes</h4>
        <div className="primediv prime1">
          <input type="checkbox" className="primwchwckbox primecheck1"></input>
          <label for="label1" className="primecheck primecheck0">
            <img src={prime} className="primeimg"></img>
          </label>
        </div>
        <div className="primediv prime2">
          <input type="checkbox" className="primwchwckbox primecheck2"></input>
          <label for="label2" className="primecheck primecheck1">
            Prime Early Access deals
          </label>
        </div>
        <div className="primediv prime3">
          <input type="checkbox" className="primwchwckbox primecheck3"></input>
          <label for="label3" className="primecheck primecheck2">
            Prime Exclusive deals
          </label>
        </div>
      </div>
      <div className="right">
        <div className="rightdiv rightdiv1">
          <div className="products product1">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv1">
          <div className="products product1">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv2">
          <div className="products product2">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv3">
          <div className="products product3">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv4">
          <div className="products product4">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv5">
          <div className="products product5">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv6">
          <div className="products product6">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv7">
          <div className="products product7">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv8">
          <div className="products product8">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv9">
          <div className="products product9">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv10">
          <div className="products product10">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv11">
          <div className="products product11">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv12">
          <div className="products product12">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv13">
          <div className="products product13">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv14">
          <div className="products product14">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv15">
          <div className="products product15">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv16">
          <div className="products product16">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv17">
          <div className="products product17">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv18">
          <div className="products product18">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv19">
          <div className="products product19">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="rightdiv rightdiv20">
          <div className="products product20">
            <a href="#" className="product1link productlink">
              <img
                src="https://m.media-amazon.com/images/I/41ZRDb8-1XL._AC_UF226,226_FMjpg_.jpg"
                className="product1img productimg"
              ></img>
              <div className="offdeal offdeal1">
                <div className="off percent1">Up to 50% off</div>
                <span className="DealoftheDay day1">Deal of the Day</span>
              </div>
              <p className="divsparas Electric1">
                Furniture Deals from Amazon Brands & More{" "}
              </p>
            </a>
          </div>
          <div className="products product2">
            <a href="#" className="product2link productlink">
              <img
                src="https://m.media-amazon.com/images/I/51Zeot9-ZUL._AC_UF226,226_FMjpg_.jpg"
                className="product2img productimg"
              ></img>
              <div className="offdeal offdeal2">
                <div className="off percent2">Up to 50%</div>
                <span className="DealoftheDay day2">Deal of the Day</span>
              </div>
              <p className="divsparas Electric2">
                Wallets, Combos & Messenger Bags from Contacts
                <br /> & Vogard{" "}
              </p>
            </a>
          </div>
          <div className="products product3">
            <a href="#" className="product3link productlink">
              <img
                src="https://m.media-amazon.com/images/I/31gP2BqbcDL._AC_UF226,226_FMjpg_.jpg"
                className="product3img productimg"
              ></img>
              <div className="offdeal offdeal3">
                <div className="off percent3">Up to 50%</div>
                <span className="DealoftheDay day3">Deal of the Day</span>
              </div>
              <p className="divsparas Electric3">
                Save Big On Personal Care Appliances{" "}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Pagebuttons() {
  const [previous, setPrevious] = useState(false);
  const [second, setSecond] = useState(false);
  let navigate = useNavigate();

  function Defaultpage() {
    navigate("/todaysdeal");
  }
  function changepage() {
    setSecond(true);
    Prev();
  }
  function changepage1() {
    navigate("/");
  }
  function Prev() {
    setPrevious(true);
    // navigate("/todaysdeal");
  }
  return (
    <div className="pagebuttons">
      <a href="#" className="Restrictionlink">
        Restrication apply
      </a>
      <div className="buttonsdiv">
        <button
          className="previous"
          type="submit"
          onClick={Prev}
          value={previous}
        >
          previous
        </button>
        <button className="btnn one" type="submit" onClick={Defaultpage}>
          1
        </button>
        <button
          className="btnn two"
          type="submit"
          onClick={changepage1}
          value={second}
        >
          2
        </button>
        <button className="btnn three" type="submit" onClick={changepage}>
          3
        </button>
        <button className="nextpage" type="submit" onClick={changepage}>
          ...
        </button>
        <button className="lastpage" type="submit" onClick={changepage}>
          316
        </button>
        <button className="Next" type="submit" onClick={changepage}>
          Next
        </button>
      </div>
    </div>
  );
}

export function Bottomsection() {
  return (
    <div className="bottomsection">
      <div className="siginbtn">
        <Bottomsignin />
      </div>
      <div className="footerdiv">
        <Footer />
      </div>
    </div>
  );
}
