import React from "react";
import { Typography } from "web3uikit";
import "./style.css";

const Footer = () => {
  return (
    <div className="footerDefault Hide">
      <>
        <Typography>
          Made With Moralis{" "}
          <a
            href="https://github.com/web3ui/web3uikit"
            target="_blank"
            rel="noreferrer"
          >
            Web3UiKit
          </a>
        </Typography>
      </>
    </div>
  );
};

export default Footer;
