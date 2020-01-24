import React from "react";
import { Img, ImgWrapper, Title } from "./styles";
import logoPng from "../../assets/logo.png";
export const Header = props => {
  return (
    <>
      <ImgWrapper>
        <Img src={logoPng} alt="Imaginamos" />
      </ImgWrapper>
      <Title>{props.title}</Title>
    </>
  );
};
