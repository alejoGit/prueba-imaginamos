import React from "react";
import {
  ProfileCardWrapper,
  ProfileTitle,
  ProfileCardItem,
  LogoutWrapper
} from "./styles";
import cakeIcon from "../../assets/cake-24px.svg";
import friendsIcon from "../../assets/face-24px.svg";
import passwordIcon from "../../assets/https-24px.svg";
export const ProfileCard = ({ user, logout }) => {
  return (
    <>
      <ProfileCardWrapper>
        <ProfileTitle>{user.name}</ProfileTitle>
        <ProfileCardItem>
          <img src={cakeIcon} alt="Imaginamos" />
          <span>{user.birthday}</span>
        </ProfileCardItem>
        <ProfileCardItem>
          <img src={friendsIcon} alt="Imaginamos" />
          <span>6 amigos</span>
        </ProfileCardItem>
        <ProfileCardItem>
          <img src={passwordIcon} alt="Imaginamos" />
          <span>Cambiar contraseña</span>
        </ProfileCardItem>
        <LogoutWrapper>
          <a href="#" onClick={logout}>
            Cerrar sesión
          </a>
        </LogoutWrapper>
      </ProfileCardWrapper>
    </>
  );
};
