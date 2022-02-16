import React, { useState } from "react";
// , useEffect
import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

function Upload() {
  const [imageSelected, setImageSelected] = useState(0);

  const initialValues = {
    post_title: "",
    post_desc: "",
    post_price: "",
    post_media: "",
  };

  const uploadImg = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "xlKm3d2!2op");
    axios
      .post("https://api.cloudinary.com/v1_1/dbvwkew7p/image/upload", formData)
      .then((response) => {
        console.log(response);
      });
  };

  const onSubmit = (values, onSubmitProps) => {
    axios.post("http://localhost:3001/upload", values).then((res) => {
      console.log(res.data);
      onSubmitProps.resetForm();
    });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.post_title) {
      errors.post_title = "Title Required";
    }
    if (!values.post_desc) {
      errors.post_desc = "Description Required";
    }
    if (!values.post_price) {
      errors.post_price = "Price Required";
    }
    // if (!values.post_media) {
    //   errors.post_media = "Picture Required";
    // }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
    uploadImg,
  });

  return (
    <div>
      <h2>Have something to sell? Sell some Toys N' Stuff here...</h2>
      <div className="img-up-container">
        <div>
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              name="post_title"
              onChange={formik.handleChange}
              value={formik.values.post_title}
            />
            <div></div>
            <div></div>
            <textarea
              rows="3"
              cols="21"
              type="text-area"
              placeholder="Description"
              name="post_desc"
              onChange={formik.handleChange}
              value={formik.values.post_desc}
            />
            <div></div>
            <input
              type="text"
              placeholder="Price $"
              name="post_price"
              onChange={formik.handleChange}
              value={formik.values.post_price}
            />
            <div></div>
            <input
              type="file"
              name="post_media"
              onChange={(event) => {
                setImageSelected(event.target.files[0]);
              }}
              value={formik.values.post_media}
            />
            <button type="submit" onClick={uploadImg}>
              Upload
            </button>
            <button type="button" className="nav">
              <Link to="/Items">Cancel</Link>
            </button>
          </form>
        </div>
      </div>
      <div>
        {formik.errors.post_title ? (
          <div>{formik.errors.post_title}</div>
        ) : null}
        {formik.errors.post_desc ? <div>{formik.errors.post_desc}</div> : null}
        {formik.errors.post_price ? (
          <div>{formik.errors.post_price}</div>
        ) : null}
        {/* {formik.errors.post_media ? (
          <div>{formik.errors.post_media}</div>
        ) : null} */}
      </div>
    </div>
  );
}

export default Upload;
