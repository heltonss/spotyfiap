import React, { useState } from "react";
import firebase from "firebase";
import Modal from "components/modal";
import { useHistory } from "react-router";
import validator from "email-validator";
import { useAlert } from "react-alert";

import Loader from "components/Loader";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import { Text, LinkText } from "./style";

import InputEmail from "components/InputEmail";
import { AlertType } from "../../utils/AlertType";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const alert = useAlert();

  const signIn = () => {
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          history.push("/home");
        }
      })
      .catch((error) => {
        setLoading(false);
        alert.show("usuário não existe!", { type: AlertType.INFO });
      });
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
      {loading ? (
        <Loader />
      ) : (
        <ButtonCustom
          label="acessar"
          type="button"
          colorFont="#222"
          func={() => signIn()}
          disabled={!validator.validate(email)}
        />
      )}
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
