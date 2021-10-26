import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../reducks/users/operations";
import MiniKey from "../assets/img/mini.png";
import S200 from "../assets/img/S200.png";
import CasioX from "../assets/img/CasioX.png";
import CasioS100 from "../assets/img/CasioS100.png";
import CrossX from "../assets/img/cross.png";



const Signin = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const signInButton = () => {
    dispatch(signIn(email, password));
    setEmail("");
    setPassword("");
  };
  return (
    <>
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
                <b>SIGN IN</b>
              </h5>

              <div class="input">
                <input
                  type="email"
                  onChange={inputEmail}
                  required
                  placeholder="Email address"
                  value={email}
                />{" "}
                <br />
                <input
                  type="password"
                  onChange={inputPassword}
                  required
                  placeholder="Password"
                  vlaue={password}
                />
              </div>

              <button class="button" onClick={signInButton}>
                JOIN US
              </button>
              <p>
                Already a Member? <u>Join Us.</u>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
