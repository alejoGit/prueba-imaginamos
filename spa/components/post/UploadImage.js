import React, { useState, useContext } from "react";
import { Context } from "../../Context";
const axios = require("axios");
import {
  UploadInput,
  UploadButton,
  UploadInputLabel,
  UploadWrapper
} from "./styles";
import uploadIcon from "../../assets/add_a_photo-24px.svg";

export const UploadImage = ({ refreshPosts }) => {
  const API_BASE_URL = "http://localhost:3000/";
  const { getToken } = useContext(Context);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Subir archivo");
  const onFormSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myImage", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + getToken()
      }
    };
    axios
      .post(API_BASE_URL + "posts", formData, config)
      .then(response => {
        setFile(null);
        setFileName("Subir archivo");
        document.getElementById("idInputUpload").value = "";
        refreshPosts();
      })
      .catch(error => {});
  };
  const onChange = e => {
    setFileName(e.target.files[0].name);
    setFile(e.target.files[0]);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h5>Subir publicación</h5>
      <UploadWrapper>
        <UploadInputLabel>
          <img src={uploadIcon} />
          <span id="file_name">{fileName}</span>
          <UploadInput
            id="idInputUpload"
            type="file"
            name="myImage"
            onChange={onChange}
          />
        </UploadInputLabel>

        <UploadButton type="submit">
          <span> Subir foto</span>
        </UploadButton>
      </UploadWrapper>
    </form>
  );
};

export default UploadImage;
