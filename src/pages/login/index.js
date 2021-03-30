import React, { useEffect, useState } from "react";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import { Container, Box, Title, Content, Text, LinkText } from "./style";
import firebase from "firebase";

const Login = () => {
  const [email, setEmail] = useState("teste@teste.com.br");
  const [password, setPassword] = useState("123456");

  useEffect(() => {
    console.log(email);
  }, [email]);

  const signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => console.log(userCredential.user))
      .catch((error) => console.log({ error }));
  };

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
            func={() => signIn()}
          />

          <Text>
            Ainda não tem login? faça agora!
            <LinkText colorfont="#91f70e" to="cadastrar">
              cadastrar agora
            </LinkText>
          </Text>
        </Content>
      </Box>
    </Container>
  );
};

export default Login;
