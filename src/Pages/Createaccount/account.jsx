import React from "react";
import "./account.css";
import { Signinbottom } from "../Signin/sign";
import amzon from "./Screenshot 2023-05-09 065016.png";
export function Account() {
  return (
    <div className="create_account_main">
      <img className="img" src={amzon}></img>
      <div className="box_ctn_createaccount">
        <h3 className="head_createaccount">Create Account</h3>
        <p className="para_createaccount">Your name</p>
        <input
          type="text"
          className="enter_name"
          placeholder="First and last name"
        ></input>
        <p className="para_createaccount">Mobile number</p>
        <div className="mobileno">
          <div className="country_code">
            <select className="drop_down_country_code">
              <option>IN +91</option>
              <option>HRG +503</option>
              <option>AM +76</option>
              <option>KR +87</option>
            </select>
            <input
              type="text"
              className="enter_number"
              placeholder="Mobile number"
            ></input>
          </div>
        </div>
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
      <div className="createaccount_footer">
        <Signinbottom />
      </div>
    </div>
  );
}
