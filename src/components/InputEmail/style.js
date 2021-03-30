import styled from "styled-components";

export const Label = styled.label`
  display: block;
  margin-bottom: 15px;
  text-align: left;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 10px/10px;
  padding: 5px 10px;
  width: 100%;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const Small = styled.small`
  color: #fff000;
`;
