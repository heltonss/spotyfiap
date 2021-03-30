import React, { useState } from "react";
import Modal from "components/modal";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import { Text, LinkText } from "./style";
import firebase from "firebase";

const Register = () => {
  const [email, setEmail] = useState("htn@htn.com.br");
  const [password, setPassword] = useState("123456");

  const createuser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal title="cadastrar">
      <InputCustom label="e-mail" type="email" func={setEmail} />
      <InputCustom label="senha" type="password" func={setPassword} />
      <ButtonCustom
        label="cadastrar usuário"
        type="button"
        colorFont="#222"
        func={() => createuser()}
      />
      <Text>
        Já tem usuário? faça seu login
        <LinkText colorfont="#91f70e" to="cadastro">
          ir para login
        </LinkText>
      </Text>{" "}
    </Modal>
  );
};

export default Register;
