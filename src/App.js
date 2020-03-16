import React from "react";
import { Route, Router, Switch } from "react-router";
import NewArrivalPage from "./new_arraival/new_arrival_page";
import SettingPage from "./setting/setting_page";
import MenubarContaier from "./_common/component/menubar/menubar_container";
import "./App.scss";

function App() {
  return (
    <>
      <div className="root">Hello, Convini App !</div>
      <div id="main">
        <NewArrivalPage />
        <SettingPage />
        <MenubarContaier />
      </div>
    </>
  );
}

export default App;
