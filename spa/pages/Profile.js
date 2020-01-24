import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";
import { Header } from "../components/header/Header";
import { ProfileCard } from "../components/profile/ProfileCard";
import { UserPosts } from "../components/profile/UserPosts";
import { UploadImage } from "../components/post/UploadImage";
import axios from "axios";
import { Loading } from "../components/loading/Loading";
export default () => {
  const { removeAuth, getToken } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  const API_BASE_URL = "http://localhost:3000/";
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);
  const fetchData = () => {
    axios
      .get(API_BASE_URL + "users/profile", {
        headers: { Authorization: "Bearer " + getToken() }
      })
      .then(
        response => {
          setUser(response.data);
          setLoading(false);
        },
        error => {
          console.log(error);
          setLoading(false);
        }
      );
  };
  const logOut = e => {
    e.preventDefault();
    removeAuth();
  };

  const refreshPosts = () => {
    fetchData();
  };

  function getLoading() {
    if (loading) {
      return <Loading />;
    }
  }
  function refreshDeletedPost(id) {
    const deletedPost = user.posts.find(element => element.id === id);
    const index = user.posts.indexOf(deletedPost);
    user.posts.splice(index, 1);
    setUser({ ...user });
  }

  return (
    <>
      {getLoading()}
      <Header title="Perfil"></Header>
      <ProfileCard user={user} logout={logOut} />
      <UploadImage refreshPosts={refreshPosts} />
      <UserPosts
        posts={user.posts}
        user={user.name}
        refreshPosts={refreshDeletedPost}
      />
    </>
  );
};
