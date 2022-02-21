import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="header section__padding">
      <div className="header__content">
        <p className="header__content--title">
          Let’s Build Something amazing with GPT-3 OpenAI
        </p>
        <p className="header__content--desc">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header__inputs">
          <input type="text" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="header__tags">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header__main-img">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
