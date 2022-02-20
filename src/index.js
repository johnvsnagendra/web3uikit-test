import React from "react";
import ReactDOM from "react-dom";
import Nav from "./nav";
import Body from "./body";
import Footer from "./footer";
import { MoralisProvider } from "react-moralis";

const appId = "zUwZT9PSLy02ZLe7lqyHn5MHPk6k9o7KV70AwWub";
const serverUrl = "https://jnm2xedg402v.usemoralis.com:2053/server";

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
