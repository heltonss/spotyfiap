import React, { useState, useEffect } from "react";
import Modal from "components/modal";
import InputCustom from "components/InputCustom";
import InputEmail from "components/InputEmail";
import ButtonCustom from "components/ButtonCustom";
import { Text, LinkText } from "./style";
import firebase from "firebase";
import { useAlert } from "react-alert";
import { useHistory } from "react-router";
import { AlertType } from "../../utils/AlertType";
import validator from "email-validator";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [isValidRegister, setIsValidRegister] = useState(true);
  const history = useHistory();
  const alert = useAlert();

  const createuser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert.show("ok, pode logar!", { type: AlertType.SUCCESS });
        setTimeout(() => {
          history.push("/");
        }, 2000);
      })
      .catch((error) =>
        alert.show("contate o suporte!", { type: AlertType.SUCCESS })
      );
  };

  useEffect(() => {
    setIsValidRegister(validator.validate(email) && password.length >= 6);
  }, [email, password]);

  console.log(isValidRegister);
  return (
    <Modal title="cadastrar">
      <InputEmail label="e-mail" type="email" func={setEmail} />
      <InputCustom label="senha" type="password" func={setPassword} />
      <ButtonCustom
        label="cadastrar usuário"
        type="button"
        colorFont="#222"
        disabled={!isValidRegister}
        func={() => createuser()}
      />
      <Text>
        Já tem usuário? faça seu login
        <LinkText colorfont="#91f70e" to="/">
          ir para login
        </LinkText>
      </Text>{" "}
    </Modal>
  );
};

export default Register;
