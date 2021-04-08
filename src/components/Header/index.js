import React, { useEffect } from "react";
import { Container, Search, User, IconPerson } from "./style";
import DropdownMenu from "components/DropdownMenu";
import UserFirebase from "models/user";
import { connect } from "react-redux";

const Header = ({ loading }) => {
  return (
    <Container>
      <Search>
        <input placeholder="Search" />
      </Search>
      {(loading || UserFirebase.getUser) && (
        <User>
          <IconPerson />
          {UserFirebase.getUser.email}
          <DropdownMenu />
        </User>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: state.login.loading,
});

export default connect(mapStateToProps, null)(Header);
