import styled from "styled-components";

export const Form = styled.form`
  box-sizing: border-box;
  padding: 16px 32px;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 16px;
  height: 40px;
  border: 1px solid #bbb;
  box-sizing: border-box;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 8px;
  &[data-status="input__failed"] {
    border-color: red;
  }
`;

export const RegisterLinkWrapper = styled.div`
  text-align: center;
  margin: 16px 0;
  & > a {
    color: #0066ff;
  }
`;
