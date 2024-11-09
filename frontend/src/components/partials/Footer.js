import React, { Fragment } from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Fragment>
        <footer>
            <p>Copyright ⓒ {year}</p>
        </footer>
    </Fragment>
  );
}

export default Footer;
