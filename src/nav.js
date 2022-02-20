import React from "react";
import { Logo, Input, Button, ConnectButton } from "web3uikit";
import "./style.css";
import * as mainjs from "./appjs/main.js";

const Nav = () => {
  return (
    <div className="nav Hide">
      <div className="childObj">
        <Logo color="black" theme="icon" />
      </div>
      <div className="subnav">
        <Input
          label="Search"
          name="Test text Input"
          onChange={function noRefCheck() {}}
          prefixIcon="search"
          size="regular"
          type="text"
          width="25vw"
        />
      </div>
      <div className="subnav">
        <Button
          id="test-button-outline"
          onClick={function noRefCheck() {}}
          text="Explorer"
          theme="outline"
          type="button"
        />

        <Button
          id="test-button-outline"
          onClick={mainjs.test}
          text="Profile"
          theme="outline"
          type="button"
        />
      </div>
      <div className="subnav">
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default Nav;
