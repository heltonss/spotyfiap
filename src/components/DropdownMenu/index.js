import React, { useState, useRef } from "react";
import ArrowIcon from "assets/images/arrow_down.svg";
import { Container, Menu, DropdownButton, active, inactive } from './style';

const DropdownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

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
            <a href="/saved">Logout</a>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default DropdownMenu;
