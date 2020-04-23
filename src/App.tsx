import React, { createContext, useReducer, Dispatch } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SettingPage from "./setting/setting_page";
import ProductPage from "./find/product_page";
import "./App.scss";
import {
  ProductAction,
  ProductReducer,
  InitialProductState,
} from "src/find/product_reducer";

export const Context = createContext({
  find: {
    state: InitialProductState,
    dispatch: (() => true) as Dispatch<ProductAction>,
  },
});

const App: React.FC = () => {
  const [findState, findDispatch] = useReducer(
    ProductReducer,
    InitialProductState
  );

  return (
    <>
      <div id="main">
        <Context.Provider
          value={{ find: { state: findState, dispatch: findDispatch } }}
        >
          <Router>
            <Switch>
              <Route path="/" component={ProductPage} exact />
              <Route path="/setting" component={SettingPage} exact />
            </Switch>
          </Router>
        </Context.Provider>
      </div>
    </>
  );
};

export default App;
