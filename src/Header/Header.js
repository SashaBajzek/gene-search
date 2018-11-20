import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <a className="Header__link--main" href="http://clinvitae.invitae.com">
          <span className="Header__linkText">Invitae</span>
        </a>
        <section>
          <a
            className="Header__link--secondary"
            href="http://clinvitae.invitae.com"
          >
            <span className="Header__linkText">Clinvitae</span>
          </a>
        </section>
      </header>
    );
  }
}

export default Header;
