import React from "react";
import { Container, Box, Title, Content } from "./style";

const Modal = ({ title, children, maxWidth }) => {
  return (
    <Container>
      <Box maxWidth={maxWidth}>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </Box>
    </Container>
  );
};

export default Modal;
