import React, { useState } from "react";
import HeadingHeader from "../commonComponents/HeadingHeader";
import { useDispatch, useSelector } from "react-redux";
import { POST_CATEGORY_PROGRESS } from "../../redux-saga/category/action/action";

const Category = () => {
  const data = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  const [formSubmit, setFormSubmit] = useState(true);
  const [postData, setPostData] = useState({
    category_name: "",
    category_heading: "",
    category_description: "",
  });
  const [updateData, setUpdateData] = useState({
    category_heading: "",
    category_description: "",
    is_active: true,
  });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const createHandleSubmit = (e) => {
    e.preventDefault();
    if (
      postData.category_name &&
      postData.category_heading &&
      postData.category_description
    ) {
      dispatch({ type: POST_CATEGORY_PROGRESS, payload: postData });
    }
    setPostData({
      ...postData,
      category_name: "",
      category_heading: "",
      category_description: "",
    });
  };
  const updateHandleSubmit = (e) => {
    e.preventDefault();
    setPostData({
      ...postData,
      category_name: "",
      category_heading: "",
      category_description: "",
    });
  };

  return (
    <>
      <HeadingHeader heading_name="Category" />
      <div className="container">
        <div>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-success my-2"
            data-bs-toggle="modal"
            data-bs-target="#create-category"
            onClick={() => setFormSubmit(true)}
          >
            Create Category
          </button>
          {/* Modal */}
          <div className="modal fade" id="create-category">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Create Category
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <form
                    onSubmit={
                      formSubmit ? createHandleSubmit : updateHandleSubmit
                    }
                  >
                    <div className="mb-3">
                      <label htmlFor="category_name" className="form-label">
                        Category
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="category_name"
                        name="category_name"
                        value={postData.category_name}
                        placeholder="Enter Category name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="category_heading" className="form-label">
                        Category Heading
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="category_heading"
                        name="category_heading"
                        placeholder="Enter Category Heading"
                        value={postData.category_heading}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <div>
                        <label
                          htmlFor="category_description"
                          className="form-label"
                        >
                          Category Description
                        </label>
                        <textarea
                          className="form-control"
                          id="category_description"
                          name="category_description"
                          rows={3}
                          value={postData.category_description}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {data.category.map((val, ind) => (
            <div className="col-6 p-2 " key={`category${ind}`}>
              <div
                className="card"
                style={{ height: "300px", overflow: "hidden" }}
              >
                <div className="card-header">{val.category_name}</div>
                <div className="card-body">
                  <h5 className="card-title">{val.category_heading}</h5>
                  <p className="card-text">{val.category_description}</p>
                </div>
                <div className="d-flex justify-content-between p-2">
                  <button className="btn btn-danger ">Delete Category</button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setFormSubmit(false)}
                  >
                    Update Category
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
