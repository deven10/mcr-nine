import React, { useContext } from "react";

import { ContextData } from "../../context/DataContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { categories } = useContext(ContextData);
  return (
    <div>
      <h2>Categories</h2>
      <div className="card-wrapper">
        {categories?.map((meeting) => (
          <Link
            to={`/category/${meeting.category}`}
            key={meeting._id}
            className="card"
          >
            <img
              className="category-img"
              src={meeting.thumbnail}
              alt={meeting.category}
            />
            <p className="category-name">{meeting.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
