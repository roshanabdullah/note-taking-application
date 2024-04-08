import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header>
      <h1>Keep your notes safe here!</h1>
      <FontAwesomeIcon className="person-icon" icon={faUser}></FontAwesomeIcon>
    </header>
  );
}

export default Header;
