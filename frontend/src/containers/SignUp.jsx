import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../reducks/users/operations";
import MiniKey from "../assets/img/mini.png";
import S200 from "../assets/img/S200.png";
import CasioX from "../assets/img/CasioX.png";
import CasioS100 from "../assets/img/CasioS100.png";
import CrossX from "../assets/img/cross.png";

const SignUp = () => {
  const dispatch = useDispatch();
  const [user_name, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");
  const inputUserName = (event) => {
    setUserName(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputPassword = (event) => {
    setPassword(event.target.value);
  };
  const signUpButton = () => {
    dispatch(signUp(user_name, email, password));
    setUserName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <header>
        <section class="header-box">
          <div class="header">
            <span class="electric">Electric</span>
            <span class="views">Views</span>
          </div>

          <div class="sign-in">
            Sign In
            <a href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>
          </div>
        </section>
      </header>

      <section class="main-visual">
        <img src="img/Mask Group 5.png" alt="" />
      </section>

      <section class="content">
        <ul class="items">
          <li>
            <img src={MiniKey} class="item-image" alt="" />
            <div class="info">
              <div class="name">Casio - 77 Mini Keyboard</div>

              <div class="info-bottom">
                <div class="price">$600</div>
                <div class="add">Add +</div>
              </div>
            </div>
          </li>

          <li>
            <img src={S200} class="item-image" alt="" />
            <div class="info">
              <div class="name">Casio CT - S200 Keyboard</div>

              <div class="info-bottom">
                <div class="price">$1000</div>
                <div class="add">Add +</div>
              </div>
            </div>
          </li>

          <li>
            <img src={CasioX} class="item-image" alt="" />
            <div class="info">
              <div class="name">Casio CT - X87701N Keyboard</div>
              <div class="info-bottom">
                <div class="price">$1200</div>
                <div class="number">
                  <span class="minus">－</span>
                  <span class="count">1</span>
                  <span class="plus">+</span>
                </div>
              </div>
            </div>
          </li>

          <li>
            <img src={CasioS100} class="item-image" alt="" />
            <div class="info">
              <div class="name">Casio CT S100 Keyboard</div>

              <div class="info-bottom">
                <div class="price">$3000</div>
                <div class="add">Add +</div>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section class="popup">
        <div class="popup-inner">
          <div class="popup-preview">
            <div class="popup-inner">
              <img src={CrossX} class="close" />
              <h4>
                <span class="electric">Electric</span>
                <span class="views">Views</span>
              </h4>
              <h5>
                <b>SIGN UP</b>
              </h5>

              <div class="input">
                <input
                  type="email"
                  class="form-control"
                  onChange={inputUserName}
                  placeholder="Enter User Name"
                  value={user_name}
                  required
                />
                <input
                  type="email"
                  class="form-control"
                  onChange={inputEmail}
                  placeholder="Enter email"
                  value={email}
                  required
                />
                <br />
                <input
                  type="password"
                  class="form-control"
                  onChange={inputPassword}
                  placeholder="Password"
                  value={password}
                  required
                />
              </div>

              <button class="button" onClick={signUpButton}>
                SIGN UP
              </button>
              <p>
                Already a Member? <u>Sign In.</u>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="subtotal">
          <span class="subtotal-test">Subtotal:</span>
          <span class="subtotal-price">$1000</span>
        </div>
        <button>Check Out</button>
      </footer>
    </>
  );
};

export default SignUp;
