import React, { useEffect, useState } from "react";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import { Container, Box, Title, Content, Text, LinkText } from "./style";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <Container>
      <Box>
        <Title>Login</Title>
        <Content>
          <InputCustom label="e-mail" type="email" func={setEmail} />
          <InputCustom label="senha" type="password" func={setEmail} />
          <ButtonCustom
            label="acessar"
            type="button"
            colorFont="#222"
            func={() => setEmail("teste")}
          />

          <Text>
            Ainda não tem login? faça agora!
            <LinkText colorFont="#91f70e" to="cadastrar">
              cadastrar agora
            </LinkText>
          </Text>
        </Content>
      </Box>
    </Container>
  );
};

export default Login;
