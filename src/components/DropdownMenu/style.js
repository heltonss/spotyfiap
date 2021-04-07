import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Menu = styled.div`
  cursor: pointer;
  background: #000;
  border-radius: 8px;
  position: absolute;
  top: 40px;
  right: 0;
  width: 85px;
  opacity: ${(props) => props.theme.opacity};
  visibility: ${(props) => props.theme.visibility};
  transform: ${(props) => props.theme.transform};

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li a {
    text-decoration: none;
    color: #fff;
    padding: 15px 20px;
    display: block;
  }
`;

export const DropdownButton = styled.button`
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  padding: 1px 1px;
  border: none;
`;

export const active = {
  opacity: 1,
  visibility: "visible",
  transform: "translateY(0)"
};

export const inactive = {
  opacity: 0,
  visibility: "invisible",
  transform: "translateY(-100px)"
};