import styled from "styled-components";

export const PostCardWrappper = styled.div`
  box-shadow: 0 0 4px #888888;
  border-radius: 6px;
  margin-bottom: 16px;
`;

export const PostImg = styled.img`
  width: 100%;
  border-radius: 6px 6px 0 0;
`;

export const PostContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

export const PostInfo = styled.div`
  font-size: 0.9em;
  box-sizing: border-box;
`;
export const PostUserName = styled.div`
  font-weight: 600;
`;

export const PostDate = styled.div`
  font-size: 0.9em;
  color: #777;
  margin-bottom: 8px;
`;

export const PostAction = styled.a`
  margin: 0 2px;
  cursor: pointer;
  & img {
    opacity: 0.7;
  }
  &:hover img {
    opacity: 1;
  }
`;
export const UploadWrapper = styled.div`
  display: flex;
  align-items: stretch;
`;
export const UploadInputLabel = styled.label`
  text-align: center;
  border: 1px dashed #aaa;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  & img {
    margin-right: 8px;
    opacity: 0.6;
  }
`;
export const UploadInput = styled.input`
  display: none;
`;
export const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3399ff;
  color: white;
  border: none;
  width: auto;
  box-sizing: border-box;
  font-size: 1.1em;
  box-sizing: border-box;
  padding: 4px 16px;
`;
