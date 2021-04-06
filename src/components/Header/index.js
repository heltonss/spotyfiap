import React from 'react';
import { Container, Search, User } from './style';
import DropdownMenu from "components/DropdownMenu";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img src="https://avatars1.githubusercontent.com/u/5309073?v=4" alt="avatar" />
      Helton
      <DropdownMenu/>
    </User>
  </Container>
);

export default Header;
