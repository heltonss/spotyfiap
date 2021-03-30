import React, { useState } from "react";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import { Text, LinkText } from "./style";
import firebase from "firebase";
import Modal from "components/modal";
import { useHistory } from "react-router";

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
      <InputCustom label="e-mail" type="email" func={setEmail} />
      <InputCustom label="senha" type="password" func={setPassword} />
      <ButtonCustom
        label="acessar"
        type="button"
        colorFont="#222"
        func={() => signIn()}
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
