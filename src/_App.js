import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewArrivalPage from "./new_arraival/new_arrival_page";
import SettingPage from "./setting/setting_page";
import "./App.scss";

function App() {
  return (
    <>
      <div id="main">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={NewArrivalPage} />
            <Route path="/setting" component={SettingPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Appaaa;
