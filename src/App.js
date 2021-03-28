import './config/ReactotronConfig';
import React from 'react';
import Sidebar from 'components/Sidebar';
import Player from 'components/Player';
import Header from 'components/Header';
import ErrorBox from 'components/ErrorBox';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'store';
import Routes from 'routes';
import { Wrapper, Container, Content } from './assets/styles/components';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <ErrorBox />
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
