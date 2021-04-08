import styled from "styled-components";
import SearchIcon from "assets/images/search.svg";
import { Person } from "@styled-icons/bootstrap/Person";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 0;
`;

export const Search = styled.div`
  background: #fff url(${SearchIcon}) no-repeat 7px center;
  display: flex;
  align-items: center;
  border-radius: 12px;
  height: 24px;
  width: 175px;
  padding: 6px 7px 6px 26px;

  input {
    flex: 1;
    font-size: 13px;
    color: "#121212";
    border: 0;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;

  img {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const IconPerson = styled(Person)`
  color: #fff;
  width: 22px;
  margin-right: 10px;
`;
