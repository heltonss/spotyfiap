import React from "react";
import { useHistory } from "react-router";
import { Container, Box, Title, Content, Close } from "./style";

const Modal = ({ title, children, maxWidth }) => {
  const history = useHistory();
  const isRootPath = history.location.pathname !== "/";

  return (
    <Container>
      <Box maxWidth={maxWidth}>
        <Title>
          {title}
          <Close onClick={() => history.goBack()}>{isRootPath && "X"} </Close>
        </Title>
        <Content>{children}</Content>
      </Box>
    </Container>
  );
};

export default Modal;
