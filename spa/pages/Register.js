import React, { useContext, useState } from "react";
import { Context } from "../Context";
import { Redirect } from "react-router-dom";
import { Header } from "../components/header/Header";
import { RegisterForm } from "../components/register/RegisterForm";
import axios from "axios";
import { Loading } from "../components/loading/Loading";
export default () => {
  const { isAuth, activateAuth } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const API_BASE_URL = "http://localhost:3000/";
  if (isAuth) {
    return <Redirect to="/" />;
  }
  const onSubmit = ({ name, birthday, email, password }) => {
    setLoading(true);
    axios
      .post(API_BASE_URL + "auth/register", {
        name,
        birthday,
        email,
        password
      })
      .then(
        response => {
          setLoading(false);
          activateAuth(response.data.token);
        },
        error => {
          setLoading(false);
          if (error.response.data.error === "SQLITE_CONSTRAINT") {
            alert("El email ingresado ya se encuentra registrado");
          }
        }
      );
  };

  function getLoading() {
    if (loading) {
      return <Loading />;
    }
  }
  return (
    <>
      {getLoading()}
      <Header title="Registro"></Header>
      <RegisterForm onSubmit={onSubmit}></RegisterForm>
    </>
  );
};
