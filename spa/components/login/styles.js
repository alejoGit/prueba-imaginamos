import styled from "styled-components";

export const Form = styled.form`
  box-sizing: border-box;
  padding: 16px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const InputIcon = styled.img`
  height: 40px;
  background-color: #f1f1f1;
  box-sizing: border-box;
  padding: 8px;
  border: 1px solid #bbb;
  border-right: none;
  border-radius: 4px 0 0 4px;
`;

export const Input = styled.input`
  flex: 1;
  border: 1px solid #bbb;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 0 4px 4px 0;
`;

export const RegisterLinkWrapper = styled.div`
  text-align: center;
  margin: 16px 0;
  & > a {
    color: #0066ff;
  }
`;
