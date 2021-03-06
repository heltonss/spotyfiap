import "./config/ReactotronConfig";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { useEffect } from "react";
import Sidebar from "components/Sidebar";
import Player from "components/Player";
import Header from "components/Header";
import ErrorBox from "components/ErrorBox";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import store from "store";
import Routes from "routes";
import { Wrapper, Container, Content } from "./assets/styles/components";

import {
  transitions,
  positions,
  Provider as AlertProvider,
  types,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const App = () => {
  const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: "30px",
    type: types.SUCCESS,
    transition: transitions.SCALE,
    containerStyle: {
      zIndex: 100000000000,
    },
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Wrapper>
            <AlertProvider template={AlertTemplate} {...options}>
              <Container>
                <Sidebar />
                <Content>
                  <ErrorBox />
                  <Header />
                  <Routes />
                </Content>
              </Container>
              <Player />
            </AlertProvider>
          </Wrapper>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
