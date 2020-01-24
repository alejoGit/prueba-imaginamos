import React from "react";
import { LoadingWrapper, LoadingImg } from "./styles";
import loadingGif from "../../assets/loader.gif";
export const Loading = props => {
  return (
    <LoadingWrapper>
      <LoadingImg src={loadingGif} alt="Loading.." />
    </LoadingWrapper>
  );
};
