import React from "react";

function Footer() {
  const year = new Date().toDateString();
  return (
    <footer>
      <p>Today's date: {year}</p>
      <p>Have a nice day :)</p>
    </footer>
  );
}

export default Footer;
