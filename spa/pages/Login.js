import React, { useState, useContext } from "react";
import { Context } from "../Context";
import { Redirect } from "react-router-dom";
import { Header } from "../components/header/Header";
import { LoginForm } from "../components/login/LoginForm";
import axios from "axios";
import { Loading } from "../components/loading/Loading";

export default () => {
  const { isAuth, activateAuth } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const API_BASE_URL = "http://localhost:3000/";
  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  const onSubmit = ({ email, password }) => {
    setLoading(true);
    axios
      .post(API_BASE_URL + "auth/login", {
        email,
        password
      })
      .then(
        response => {
          setLoading(false);
          activateAuth(response.data.token);
        },
        error => {
          console.log(error);
          setLoading(false);
          alert("Datos invalidos");
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
      <Header title="Login"></Header>
      <LoginForm onSubmit={onSubmit}></LoginForm>
    </>
  );
};
