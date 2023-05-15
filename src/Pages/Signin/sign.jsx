import React, { useState } from "react";
import "./sign.css";
import amzon from "./Screenshot 2023-05-09 065016.png";
import arrowss from "./amazonarrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function Signin() {
  let navigate = useNavigate();

  function createaccount() {
    navigate("/signin/createaccount");
  }
  return (
    <div className="signin-main">
      <img className="img" src={amzon}></img>
      <div className="box_ctn">
        <h3 className="head_signin">Sign in</h3>
        <p className="para_signin">Enter mobile phone number or email</p>
        <input type="text" className="enter_email"></input>
        <button className="button">Continue</button>
        <div className="policy_ctn">
          <p className="pcy_para">
            By continuing, you agaree to Amazon's
            <a className="linn pp_link1" href="#">
              Condition of Use{" "}
            </a>
            and
            <a className="linn pp_link2" href="#">
              Privacy Notice
            </a>
          </p>
        </div>
        <select className="toggle_drp">
          <option>
            <a className="opt opt_link1">Need help?</a>
          </option>
          <option>
            <a className="opt opt_link2">Forget Password</a>
          </option>
          <option>
            <a className="opt opt_link3">Other issues with Sign-In</a>
          </option>
        </select>
      </div>
      <div className="allitem">
        <div className="leftline"></div>
        <p className="bottom_para">New to Amazon?</p>
        <div className="rightline"></div>
      </div>
      <button className="button_createbtn" onClick={createaccount}>
        Create your Amazon account
      </button>
    </div>
  );
}

export function Signinbottom() {
  return (
    <div className="extrem_btm">
      <div className="line_hr"></div>
      <div className="link_sec">
        <a href="#" className="consiton li">
          Conditions of Use{" "}
        </a>
        <a href="#" className="privacy li">
          Privacy Notice{" "}
        </a>
        <a href="#" className="help li">
          Help{" "}
        </a>
      </div>
      <p className="copyright_pra">
        © 1996-2023, Amazon.com, Inc. or its affiliates
      </p>
    </div>
  );
}
