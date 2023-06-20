import React, { useState } from "react";

const Categories = ({categories , filterMenus}) => {

  const [styleCate , setStyleCate ] = useState('all')

  return (
    <div className="btn-container">

    {
      categories.map(item => (
        <button
          key = {item}
          type="button"
          // highlight class  for highlight main category
          className={ item === styleCate ? "filter-btn highlight" : "filter-btn" }
          onClick={ () => {
            setStyleCate(item)
            filterMenus(item)
          }}
        >
          {item}
        </button>
      ))
    }
    </div>
  );
};

export default Categories;
