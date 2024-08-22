import React, { useState } from "react";
import receipeCss from "../styles/pages/newReceipe.module.scss";
import Ingredients from "../components/createReceipe/Ingredients";
import UploadImage from "../components/createReceipe/UploadImage";
import Details from "../components/createReceipe/Details";
import { useNavigate, useParams } from "react-router-dom";
import defaultReceipes from "../assets/data/receipes.json";
import ErrorBoundary from "../components/common/ErrorBoundary";

const defaultValues = {
  name: "",
  description: "",
  process: "",
  ingredients: [],
  prepTime: 0,
  cookTime: 0,
  serves: 0,
  url: "",
};

function CreateReceipe() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  let params = useParams("id");
  const editReceipeId = params ? params.id : null;
  const editReceipe = defaultReceipes.find((each) => each.id === editReceipeId);

  const values = editReceipe ?? defaultValues;
  const {id, name, description, process, url, prepTime, cookTime, serves} = values;

  //create separate states to handle reload of only changed component
  const [basicDetails, setBasicDetails] = useState({id, name, description, process});
  const [imgDetails, setImgDetails] = useState({url, prepTime, cookTime, serves});
  const [ingredients, setIngredients] = useState(values.ingredients);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", {...basicDetails,...imgDetails, ingredients});
  };
  const handleClear=()=>{
    setBasicDetails({id, name, description, process});
    setImgDetails({url, prepTime, cookTime, serves});
    setIngredients(values.ingredients);
  
  }
  return (
    <section className="container">
      <div className="header-shadow"></div>
      <div className="title">{values.name ? values.name : "Add New"}</div>
      <hr></hr>
      <ErrorBoundary>
      <form onSubmit={handleSubmit}>
        <div className={receipeCss.flexColumns}>
          <UploadImage values={imgDetails} setValues={setImgDetails} />
          <Details values={basicDetails} setValues={setBasicDetails} />
          <Ingredients ingredients={ingredients} setValues={setIngredients} />
        </div>
        <footer>
          <button
            style={{ float: "right" }}
            className="button-margin"
            //onClick={()=>navigate('/receipe-list')}
            type="submit"
          >
            Save
          </button>
          {editReceipeId ? (
            <button
              style={{ float: "right", background: "red" }}
              className="button-margin"
              onClick={() => setShowModal(!showModal)}
            >
              Delete
            </button>
          ) : null}
          <button style={{ float: "right" }} className="button-margin" onClick={handleClear}>
            Clear
          </button>
        </footer>
        <dialog className={receipeCss.deleteDialog} open={showModal}>
          Are you sure you want to delete?<br/>
          <button onClick={() => setShowModal(!showModal)}>Cancel</button>
          <button onClick={()=>navigate('/receipe-list')}>Delete</button>
        </dialog>
      </form>
      </ErrorBoundary>
    </section>
  );
}

export default CreateReceipe;
