import React, { useContext } from "react";
import { Context } from "../../Context";
import { UserPostsTitle } from "./styles";
import { PostCard } from "../post/PostCard";
import axios from "axios";
export const UserPosts = ({ posts = [], user, refreshPosts }) => {
  const { getToken } = useContext(Context);
  const API_BASE_URL = "http://localhost:3000/";
  const onDeleteClick = id => {
    console.log(id);
    axios
      .delete(API_BASE_URL + "posts/" + id, {
        headers: { Authorization: "Bearer " + getToken() }
      })
      .then(
        response => {
          console.log(response);
          refreshPosts(response.data.post.id);
          // setLoading(false);
        },
        error => {
          console.log(error);
          //setLoading(false);
        }
      );
  };
  const postList = () => {
    return posts.map(item => (
      <PostCard
        key={item.id}
        {...item}
        user={user}
        onDeleteClick={onDeleteClick}
      />
    ));
  };
  return (
    <>
      <UserPostsTitle>Mis publicaciones</UserPostsTitle>
      {postList()}
    </>
  );
};
