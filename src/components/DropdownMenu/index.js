import React, { useState, useRef } from "react";
import { useAlert } from "react-alert";
import { useHistory } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ArrowIcon from "assets/images/arrow_down.svg";
import { Container, Menu, DropdownButton, active, inactive } from "./style";

import firebase from "firebase";
import User from "models/user";

import { AlertType } from "../../utils/AlertType";
import { Creators as LoginActions } from "../../store/ducks/login";

const DropdownMenu = ({ loginRequest }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const alert = useAlert();
  const history = useHistory();

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        User.removeUser();
        history.replace("/");
        loginRequest();
      })
      .catch((error) => {
        alert.show("Logout falhou!", { type: AlertType.INFO });
      });
  };

  return (
    <Container>
      <DropdownButton onClick={onClick}>
        <img src={ArrowIcon} alt="arrow" />
      </DropdownButton>
      <Menu theme={isActive ? active : inactive} ref={dropdownRef}>
        <ul>
          <li>
            <a onClick={signOut}>Logout</a>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...LoginActions }, dispatch);

export default connect(null, mapDispatchToProps)(DropdownMenu);
