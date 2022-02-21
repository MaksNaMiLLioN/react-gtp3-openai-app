import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="navbar section__padding">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__links">
        <ul className="navbar__links--items">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#whatgpt">What is GPT?</a>
          </li>
          <li>
            <a href="#openai">Open AI</a>
          </li>
          <li>
            <a href="#possibility">Case Studies</a>
          </li>
          <li>
            <a href="#book">Library</a>
          </li>
        </ul>
      </div>

      <div className="navbar__login">
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>

      <div className="navbar__smallscreen">
        <div className="">
          <RiMenu3Line size={40} onClick={() => setToggle(true)} />
        </div>

        {toggle && (
          <div>
            <div className="navbar__smallscreen--overlay slide-bottom">
              <div className="navbar__smallscreen--links">
                <div className="navbar__smallscreen--close-icon">
                  <RiCloseLine size={40} onClick={() => setToggle(false)} />
                </div>
                <ul className="navbar__links--items">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#whatgpt">What is GPT?</a>
                  </li>
                  <li>
                    <a href="#openai">Open AI</a>
                  </li>
                  <li>
                    <a href="#possibility">Case Studies</a>
                  </li>
                  <li>
                    <a href="#book">Library</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
