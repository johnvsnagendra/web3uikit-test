import React from "react";
import ReactDOM from "react-dom";
import Nav from "./nav";
import Body from "./body";
import Footer from "./footer";
import { MoralisProvider } from "react-moralis";

const appId = "xxxx";
const serverUrl = "xxx";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <Nav />
      <Body />
      <Footer />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
