import React from "react";
import { useSelector } from "react-redux";

const Data = () => {
  const data = useSelector((state) => state.categoryReducer);

  console.log(data, "this is saga effect");

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Data;
