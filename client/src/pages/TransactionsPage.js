import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TransactionsPage = () => {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/categories");
  }
  return (
    <div>
      <h1>Transaction Page</h1>
      <p>
        Go to <Link to="/categories">The list of categories</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </div>
  );
};

export default TransactionsPage;
