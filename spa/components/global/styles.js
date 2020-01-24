import styled from "styled-components";

export const Button = styled.button`
  text-transform: uppercase;
  border: none;
  width: 100%;
  background: #3399ff;
  box-shadow: 0 10px 3px #cccccc;
  color: white;
  box-sizing: border-box;
  padding: 8px 16px;
  font-size: 1.1em;
  &[disabled] {
    opacity: 0.3;
  }
`;
