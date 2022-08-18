import React from "react";
import { useContext } from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  DataProviderContext,
  DataContext,
} from "./context/DataProviderContext";

function App() {
  return (
    <BrowserRouter>
      <DataProviderContext>
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>
        </Switch>
      </DataProviderContext>
    </BrowserRouter>
  );
}

export default App;
