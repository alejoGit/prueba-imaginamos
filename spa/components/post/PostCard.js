import React from "react";
import {
  PostCardWrappper,
  PostImg,
  PostContentWrapper,
  PostInfo,
  PostUserName,
  PostDate,
  PostAction
} from "./styles";
import likeIcon from "../../assets/favorite_border-24px.svg";
import deleteIcon from "../../assets/delete-24px.svg";
// import placeholder from "../../assets/placeholder.jpg";
export const PostCard = ({ id, image, created_at, user, onDeleteClick }) => {
  const IMG_BASE_URL = "http://localhost:3000/img/";
  return (
    <PostCardWrappper>
      <PostImg src={IMG_BASE_URL + image} alt="Imaginamos" />
      <PostContentWrapper>
        <PostInfo>
          <PostUserName>{user}</PostUserName>
          <PostDate>{created_at}</PostDate>
        </PostInfo>
        <div>
          <PostAction>
            <img src={likeIcon} />
          </PostAction>
          <PostAction onClick={() => onDeleteClick(id)}>
            <img src={deleteIcon} />
          </PostAction>
        </div>
      </PostContentWrapper>
    </PostCardWrappper>
  );
};
