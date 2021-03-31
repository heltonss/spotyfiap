import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;

export const Box = styled.section`
  width: 90%;
  border: solid 0.5px #91f70e;
  border-radius: 10px/10px;
  background: #222;
  max-width: 300px;
  text-align: center;
  line-height: 24px;
`;

export const Content = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  background: linear-gradient(to bottom, #414141 0%, #181818 100%, transparent);
  border-radius: 10px/10px;
  padding: 8px 0;
`;

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
