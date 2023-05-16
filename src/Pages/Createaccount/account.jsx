import React from "react";
import "./account.css";
import { Signinbottom } from "../Signin/sign";
import amzon from "./Screenshot 2023-05-09 065016.png";
import { useNavigate } from "react-router-dom";

export function Account() {
  let navigate = useNavigate();

  function bringmetohomepage() {
    navigate("/");
  }
  function bringtosigninpage() {
    navigate("/signin");
  }
  return (
    <div className="create_account_main">
      <img className="img" src={amzon} onClick={bringmetohomepage}></img>
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
        <p className="emialpara_createaccount">Email (optional)</p>
        <div className="emial_createaccount">
          <input type="text" className="enter_email"></input>
        </div>
        <p className="passwordpara_createaccount">Password</p>
        <div className="password_createaccount">
          <input
            type="text"
            className="enter_password"
            placeholder="At least 6 character"
          ></input>
        </div>
        <p className="first_top_para">
          <i clasName="i_itali">i</i> Passwords must be at least 6 characters.
        </p>
        <div className="div_second_para">
          <p className="second_para_createaccount">
            By enrolling your mobile phone number, you consent to receive
            automated security notifications via text message from Amazon.
            Message and data rates may apply.
          </p>
        </div>
        <button className="button_createaccount">Continue</button>
        <div className="hhr_line_createaccount"></div>
        <div className="two_lines">
          <p className="have_account">
            Already have an account?{" "}
            <a href="#" className="mid_link" onClick={bringtosigninpage}>
              Sign in
            </a>
          </p>
          <p className="buying_account">
            Buying for work?{" "}
            <a href="#" className="mid_link">
              Create a free business account
            </a>
          </p>
        </div>
        <div className="lastpara_createaccount">
          By creating an account or logging in, you agree to Amazon’s
          <a href="#" className="mid_condition mid_link">
            Conditions of Use{" "}
          </a>{" "}
          and{" "}
          <a href="#" className="mid_link">
            Privacy Policy.
          </a>
        </div>
      </div>
      <div className="createaccount_footer">
        <Signinbottom />
      </div>
    </div>
  );
}
