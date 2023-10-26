import React from "react";
import { Link } from "react-router-dom";
const CATEGORIES = [
  { id: "c1", title: "category 1" },
  { id: "c2", title: "category 2" },
  { id: "c3", title: "category 3" },
];

const CategoriesPage = () => {
  return (
    <>
      <h1>Categories Page</h1>
      <ul>
        {CATEGORIES.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoriesPage;
