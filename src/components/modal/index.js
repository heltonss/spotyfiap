import React from "react";
import { Container, Box, Title, Content } from "./style";

const Modal = ({ title, children }) => {
  return (
    <Container>
      <Box>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </Box>
    </Container>
  );
};

export default Modal;
