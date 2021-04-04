import React from "react";
import { useHistory } from "react-router";
import { Container, Box, Title, Content, Close } from "./style";

const Modal = ({ title, children, maxWidth }) => {
  const history = useHistory();

  return (
    <Container>
      <Box maxWidth={maxWidth}>
        <Title>
          {title}
          <Close onClick={() => history.goBack()}>X</Close>
        </Title>
        <Content>{children}</Content>
      </Box>
    </Container>
  );
};

export default Modal;
