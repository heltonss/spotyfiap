import React from "react";
import { Container, Search, User, IconPerson } from "./style";
import DropdownMenu from "components/DropdownMenu";
import UserFirebase from "models/user";

const Header = () => {
  console.log(UserFirebase);
  return (
    <Container>
      <Search>
        <input placeholder="Search" />
      </Search>
      <User>
        {/* <img
          src="https://avatars1.githubusercontent.com/u/5309073?v=4"
          alt="avatar"
        /> */}
        <IconPerson />
        {UserFirebase.getUser.email}
        <DropdownMenu />
      </User>
    </Container>
  );
};

export default Header;
