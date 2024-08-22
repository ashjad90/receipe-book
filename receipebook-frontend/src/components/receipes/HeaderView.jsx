import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../common/SearchBar";

function HeaderView({changeHandler}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="title">
        Category
        <SearchBar onChange={changeHandler}/>
        <i
          className="fa-solid fa-circle-plus"
          onClick={() => navigate("/receipe-form")}
        ></i>
      </div>
      <hr></hr>
    </>
  );
}
export default HeaderView;
