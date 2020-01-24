import styled from "styled-components";

export const LoadingWrapper = styled.div`
  box-sizing: border-box;
  padding: 32px;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  background: white;
`;

export const LoadingImg = styled.img`
  width: 120px;
`;
