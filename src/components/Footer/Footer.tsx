import React from "react";
import CardFooter from "./CardFooter";
import "./footer.scss";

function Footer() {
  return (
    <footer className='footer'>
      <h2>VR MODERN</h2>
      <div className='footer__info'>
        <CardFooter
          title={"All Products"}
          info={["Quest", "Rift S", "Accesorios", "Quest", "Go", "Rift"]}
        />
        <CardFooter
          title={"Information"}
          info={["Work", "Facebook Connect", "Investigation"]}
        />
        <CardFooter
          title={"Contact"}
          info={["Email", "+346723237", "Direction"]}
        />
      </div>
      <p className='rights'>Copyright ©2021 All rights reserved </p>
    </footer>
  );
}

export default Footer;
