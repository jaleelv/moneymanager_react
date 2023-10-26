import React from "react";
import { useParams } from "react-router-dom";

const CategoryDetails = () => {
  const params = useParams();
  return (
    <>
      <h1>CategoryDetails</h1>
      <p>{params.CategoryId}</p>
    </>
  );
};

export default CategoryDetails;
