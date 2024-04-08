import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  const userName = "Abdullah Roshan";
  return (
    <footer>
      <p>Copyright ⓒ {year} By {userName}</p>
    </footer>
  );
}

export default Footer;
