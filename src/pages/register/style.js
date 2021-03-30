import { Link } from "react-router-dom";
import styled from "styled-components";

export const Text = styled.p`
  margin-top: 20px;
  font-size: 12px;
`;

export const LinkText = styled(Link)`
  color: ${(props) => props.colorfont || "#fff"};
  text-decoration: none;
  display: block;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
