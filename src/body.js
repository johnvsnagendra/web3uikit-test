import React from "react";
import {
  Logo,
  Button,
  Avatar,
  Icon,
  Typography,
  Select,
  LinkTo,
  TooltipText,
  Illustration,
  CryptoCards,
} from "web3uikit";
import "./style.css";
import * as mainjs from "./appjs/main.js";

const Body = () => {
  return (
    <div className="parent">
      <div className="div1 leftnav">
        <div className="margin">
          <Logo color="white" theme="default" />
        </div>
        <Button
          color="none"
          icon="server"
          id="serverbtn"
          onClick={mainjs.one}
          size="large"
          text="Servers"
          theme=""
          type="submit"
        />
        <Button
          color="none"
          icon="eth"
          id="web3apibtn"
          onClick={mainjs.two}
          size="large"
          text="Web3 API"
          theme=""
          type="submit"
        />
        <Button
          color="none"
          icon="eth"
          id="solanaapibtn"
          onClick={mainjs.three}
          size="large"
          text="Solana API"
          theme=""
          type="submit"
        />{" "}
        <Button
          color="none"
          icon="cube"
          id="web3alertsbtn"
          onClick={mainjs.four}
          size="large"
          text="Web3 Alerts"
          theme=""
          type="submit"
        />{" "}
        <Button
          color="none"
          icon="monitor"
          id="speedynodesbtn"
          onClick={mainjs.five}
          size="large"
          text="Speedy Nodes"
          theme=""
          type="submit"
        />
      </div>
      <div id="Sec1" className="div2">
        <div className="nav">
          <div className="childObj">
            <Button
              color="white"
              icon="book"
              iconLayout="icon-only"
              id="test-button-colored-icon-only"
              onClick={function noRefCheck() {}}
              text="Colored Icon"
              theme="colored"
              type="button"
            />
            <Button
              color="white"
              icon="monitor"
              iconLayout="icon-only"
              id="test-button-colored-icon-only"
              onClick={function noRefCheck() {}}
              text="Colored Icon"
              theme="colored"
              type="button"
            />
            <Button
              color="white"
              icon="discord"
              iconLayout="icon-only"
              id="test-button-colored-icon-only"
              onClick={function noRefCheck() {}}
              text="Colored Icon"
              theme="colored"
              type="button"
            />
            <Button
              color="white"
              icon="youtube"
              iconLayout="icon-only"
              id="test-button-colored-icon-only"
              onClick={function noRefCheck() {}}
              text="Colored Icon"
              theme="colored"
              type="button"
            />
          </div>
          <div className="subnav"></div>
          <div className="subnav"></div>
          <div className="subnav">
            <Button
              color="blue"
              icon="network"
              id="test-button-primary"
              onClick={function noRefCheck() {}}
              size="large"
              text="See our roadmap"
              theme="secondary"
              type="button"
            />
            <Avatar isRounded theme="image" />
          </div>
        </div>
        {/* 
        servers body */}
        <div id="servers">
          <div className="nav">
            <div className="childObj">
              <h1 className="header-text">Servers</h1>
            </div>
          </div>
          <div className="nav">
            <div className="childObj">
              <Select
                defaultOptionIndex={0}
                onChange={function noRefCheck() {}}
                prefixText="Servers: All"
              />
            </div>
            <div className="childObj">
              <Button
                color="blue"
                icon="plus"
                id="test-button-primary"
                onClick={function noRefCheck() {}}
                size="large"
                text="Create a new Server"
                theme="primary"
                type="button"
              />
            </div>
          </div>
        </div>
        {/* 
        web3api body */}
        <div id="web3api">
          <div className="nav">
            <div className="childObj">
              <h1 className="header-text">Moralis Web3 API</h1>
            </div>
            <div className="childObj">
              <Select
                defaultOptionIndex={0}
                onChange={function noRefCheck() {}}
                prefixText="Api Version: V2"
              />
            </div>
          </div>
          <div className="nav">
            <div className="childObj">
              <Typography variant="caption14">
                The Moralis Web3 API allows you to query historical data that is
                currently not stored on your own database.
              </Typography>
            </div>

            <div className="childObj">
              <LinkTo
                address="hello@moralis.io"
                text="How to use the Moralis web3 API"
                type="helpCircle"
              />
            </div>
          </div>
          <div className="nav">
            <div className="childObj">
              <Select
                defaultOptionIndex={0}
                onChange={function noRefCheck() {}}
                prefixText="Copy API Key:"
              />{" "}
            </div>
            <div className="childObj">
              <Button
                color="blue"
                icon="download"
                id="test-button-primary"
                onClick={function noRefCheck() {}}
                size="large"
                text="API Spec"
                theme="primary"
                type="button"
              />
            </div>
          </div>
        </div>
        {/* 
        Solanaapi body */}
        <div id="solanaapi">
          <div className="nav">
            <div className="childObj">
              <h1 className="header-text">Solana API</h1>
            </div>
            <div className="childObj">
              <Select
                defaultOptionIndex={0}
                onChange={function noRefCheck() {}}
                prefixText="Api Version: V2"
              />
            </div>
          </div>
          <div className="nav">
            <div className="childObj">
              <Select
                defaultOptionIndex={0}
                onChange={function noRefCheck() {}}
                prefixText="Copy API Key:"
              />{" "}
            </div>
            <div className="childObj">
              <Button
                color="blue"
                icon="download"
                id="test-button-primary"
                onClick={function noRefCheck() {}}
                size="large"
                text="API Spec"
                theme="primary"
                type="button"
              />
            </div>
          </div>
        </div>
        {/* 
        web3 alerts body */}
        <div id="web3alerts">
          <div className="nav">
            <div className="childObj">
              <h1 className="header-text">Web3 Alerts</h1>
            </div>
          </div>
          <div className="nav">
            <div className="">
              <Illustration logo="comingSoon" />
            </div>
          </div>
          <div className="nav">
            <div className=""></div>
          </div>
        </div>
        {/* 
        Speedy Nodes body */}
        <div id="speedynodes">
          <div className="nav">
            <div className="childObj">
              <h1 className="header-text">Speedy Nodes</h1>
            </div>
          </div>
          <div className="nav">
            <div className="childObj">
              <CryptoCards
                bgColor="linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(215, 38, 243, 0.6) 42.57%, rgba(252, 84, 255, 0.336) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #AB42CB 41.37%, #45FFFF 98.29%)"
                btnText="View Endpoints"
                chain="ethereum"
                chainType="Network"
                onClick={function noRefCheck() {}}
                settingsIcon="cog"
              />
              <CryptoCards
                bgColor="linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(215, 38, 243, 0.6) 42.57%, rgba(252, 84, 255, 0.336) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #AB42CB 41.37%, #45FFFF 98.29%)"
                btnText="View Endpoints"
                chain="polygon"
                chainType="Network"
                onClick={function noRefCheck() {}}
                settingsIcon="cog"
              />
              <CryptoCards
                bgColor="linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(215, 38, 243, 0.6) 42.57%, rgba(252, 84, 255, 0.336) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #AB42CB 41.37%, #45FFFF 98.29%)"
                btnText="View Endpoints"
                chain="bsc"
                chainType="Network"
                onClick={function noRefCheck() {}}
                settingsIcon="cog"
              />
              <CryptoCards
                bgColor="linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(215, 38, 243, 0.6) 42.57%, rgba(252, 84, 255, 0.336) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #AB42CB 41.37%, #45FFFF 98.29%)"
                btnText="View Endpoints"
                chain="avalanche"
                chainType="Network"
                onClick={function noRefCheck() {}}
                settingsIcon="cog"
              />
            </div>
          </div>
          <div className="nav">
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
