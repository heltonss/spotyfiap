import React, { useState } from "react";
import InputCustom from "components/InputCustom";
import InputEmail from "components/InputEmail";
import ButtonCustom from "components/ButtonCustom";
import { Text, LinkText } from "./style";
import firebase from "firebase";
import Modal from "components/modal";
import { useHistory } from "react-router";
import validator from "email-validator";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          history.push("/home");
        }
      })
      .catch((error) => console.log({ error }));
  };

  return (
    <Modal title="login">
      <InputEmail label="e-mail" func={setEmail} />
      <InputCustom
        label="senha"
        type="password"
        func={setPassword}
        submit={signIn}
      />
      <ButtonCustom
        label="acessar"
        type="button"
        colorFont="#222"
        func={() => signIn()}
        disabled={!validator.validate(email)}
      />
      <Text>
        Ainda não tem login? faça agora!
        <LinkText colorfont="#91f70e" to="cadastro">
          cadastrar agora
        </LinkText>
      </Text>
    </Modal>
  );
};

export default Login;
