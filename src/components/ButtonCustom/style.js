import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.background || "#91f70e"};
  border: none;
  color: ${(props) => props.colorFont || "#fff"};
  border-radius: 25px/25px;
  padding: 5px 15px;
  margin-top: 10px;
  text-transform: uppercase;
`;
