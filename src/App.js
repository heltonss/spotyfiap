import "./config/ReactotronConfig";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { useEffect } from "react";
import Sidebar from "components/Sidebar";
import Player from "components/Player";
import Header from "components/Header";
import ErrorBox from "components/ErrorBox";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "store";
import Routes from "routes";
import { Wrapper, Container, Content } from "./assets/styles/components";
import firebase from "firebase/app";
import firebaseConfig from "./config/firebase";
import {
  transitions,
  positions,
  Provider as AlertProvider,
  types,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const App = () => {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

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
      </BrowserRouter>
    </Provider>
  );
};

export default App;
