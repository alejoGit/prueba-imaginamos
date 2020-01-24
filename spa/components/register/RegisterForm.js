import React, { useState, useEffect } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input } from "./styles";
import { Button } from "../global/styles";

export const RegisterForm = ({ onSubmit }) => {
  const name = useInputValue("");
  const birthDay = useInputValue("");
  const email = useInputValue("");
  const password = useInputValue("");
  const passwordConfirmation = useInputValue("");

  const handleSubmit = event => {
    event.preventDefault();
    if (!name.validate.isValid) {
      alert("Porfavor ingrese su nombre");
      return;
    }
    if (!birthDay.validate.isValid) {
      alert("Porfavor ingrese su fecha de cumpleaños");
      return;
    }
    if (!email.validate.isValid) {
      alert("Porfavor ingrese su correo electrónico");
      return;
    }
    if (!password.validate.isValid) {
      alert("Porfavor ingrese su contraseña");
      return;
    }
    if (!passwordConfirmation.validate.isValid) {
      alert("Porfavor confrime su contraseña");
      return;
    }
    if (password.value.length < 6) {
      alert("La contraseña debe tener por lo menos 6 caracteres");
      return;
    }
    if (password.value !== passwordConfirmation.value) {
      alert("Las contraseñas no coinciden");
      return;
    }

    onSubmit({
      name: name.value,
      birthday: birthDay.value,
      email: email.value,
      password: password.value
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} novalidate>
        <Input
          name="name"
          placeholder="Nombre completo"
          {...name}
          data-status={name.validate.validateClass}
        />
        <Input
          name="birthday"
          placeholder="Fecha de cumpleaños"
          {...birthDay}
          data-status={birthDay.validate.validateClass}
        />
        <Input
          name="email"
          placeholder="Correo electrónico"
          {...email}
          data-status={email.validate.validateClass}
        />
        <Input
          name="password"
          placeholder="Contraseña"
          {...password}
          data-status={password.validate.validateClass}
          type="password"
        />
        <Input
          name="passwordConfirmation"
          placeholder="Confirmar contraseña"
          {...passwordConfirmation}
          data-status={passwordConfirmation.validate.validateClass}
          type="password"
        />
        <Button>Ingresar</Button>
      </Form>
    </>
  );
};
