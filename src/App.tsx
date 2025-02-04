import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Views/Home";
import { Header } from "./Components/Header";
import { HomeHeader } from "./Views/HomeHeader";
import { Body } from "./Components/Body";
import { RecoilRoot } from "recoil";
import { Updater } from "./Components/Updater";
import Loading from "./Components/Loading";
import { ToastProvider } from "react-toast-notifications";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <ToastProvider autoDismissTimeout={3000} autoDismiss={true}>
          <Loading />
          {/* <Router>
          <Switch>
            <Route path="/"> */}
          <Header>
            <HomeHeader />
          </Header>
          <Body>
            <Home />
          </Body>
          {/* </Route>
          </Switch>
        </Router> */}
          <Updater />
        </ToastProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
