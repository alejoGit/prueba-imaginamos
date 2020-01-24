import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInputValue } from "../../hooks/useInputValue";
import {
  Form,
  InputWrapper,
  InputIcon,
  Input,
  RegisterLinkWrapper
} from "./styles";
import { Button } from "../global/styles";
import userIcon from "../../assets/person-24px.svg";
import passwordIcon from "../../assets/https-24px.svg";

export const LoginForm = ({ onSubmit }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const [disabled, setDisabled] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (email.validate.isValid && password.validate.isValid) {
      onSubmit({
        email: email.value,
        password: password.value
      });
    } else {
      setDisabled("disabled");
      email.validate.validate(email.value);
      password.validate.validate(password.value);
    }
  };

  useEffect(() => {
    if (email.validate.isValid && password.validate.isValid) {
      setDisabled("");
    } else {
      setDisabled("disabled");
    }
  }, [email.validate.isValid, password.validate.isValid]);

  return (
    <>
      <Form onSubmit={handleSubmit} novalidate>
        <InputWrapper>
          <InputIcon src={userIcon} />
          <Input name="email" placeholder="Email" {...email} />
        </InputWrapper>
        <InputWrapper>
          <InputIcon src={passwordIcon} />
          <Input
            type="password"
            name="password"
            placeholder="Contraseña"
            {...password}
          />
        </InputWrapper>
        <Button disabled={disabled}>Ingresar</Button>
      </Form>
      <RegisterLinkWrapper>
        <Link to="/register">Registro</Link>
      </RegisterLinkWrapper>
    </>
  );
};
