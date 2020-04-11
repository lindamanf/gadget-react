import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SettingPage from "./setting/setting_page";
import FindPage from "./find/find_page";
import MenubarContainer from "./_common/component/menubar/menubar_container";
import "./App.scss";

function App() {
  return (
    <>
      <div id="main">
        <MenubarContainer />
        <Router>
          <Switch>
            <Route path="/" component={FindPage} exact />
            <Route path="/setting" component={SettingPage} exact />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
