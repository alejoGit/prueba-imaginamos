import styled from "styled-components";

export const ProfileCardWrapper = styled.div`
  box-sizing: border-box;
  padding: 3% 10%;
  box-shadow: 0 0 12px #888888;
  border-radius: 8px;
`;

export const ProfileTitle = styled.h2`
  text-align: center;
  font-weight: 400;
  margin: 8px auto;
`;

export const ProfileCardItem = styled.div`
  display: flex;
  margin-bottom: 6px;
  & img {
    width: 25px;
    margin-right: 8px;
  }
`;

export const LogoutWrapper = styled.div`
  text-align: right;
  margin-top: 16px;
  & > a {
    font-size: 0.8em;
    color: #0066ff;
  }
`;

export const UserPostsTitle = styled.h2`
  text-align: left;
  font-weight: 400;
`;
