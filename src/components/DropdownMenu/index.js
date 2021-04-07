import React, { useState, useRef } from "react";
import { useAlert } from "react-alert";
import { useHistory } from "react-router";

import ArrowIcon from "assets/images/arrow_down.svg";
import { Container, Menu, DropdownButton, active, inactive } from './style';

import firebase from "firebase";
import User from "models/user";

import { AlertType } from "../../utils/AlertType";

const DropdownMenu = () => {
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
      <Menu theme={isActive ? active : inactive}
        ref={dropdownRef}
      >
        <ul>
          <li>
            <a onClick={signOut}>Logout</a>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default DropdownMenu;
