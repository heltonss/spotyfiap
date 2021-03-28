import React from 'react';
import { Container, Search, User } from './style';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img src="https://avatars1.githubusercontent.com/u/5309073?v=4" alt="avatar" />
      Helton
    </User>
  </Container>
);

export default Header;
