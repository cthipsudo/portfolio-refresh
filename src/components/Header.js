import SocialLinks from "../data/SocialLinks";
import { v4 as uuidv4 } from "uuid";

import "../styles/header.css";

const Header = () => {
  const socialLinks = SocialLinks.map((item) => {
    //console.log(item);
    return (
      <a key={uuidv4()} href={item.link} target={"_blank"} className="hover-underline-animation">
        <li className="social-item">{item.text}</li>
      </a>
    );
  });

  return (
    <header className="py-4">
      <nav role="navigation">
        <div className="navbar">
          <div className="container nav-container">
            <input type="checkbox" className="checkbox" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="logo pl-4">cthipsudo/narrator_oscar</div>
            <ul className="menu-items">{socialLinks}</ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
