import React from "react";
import "../../styles/components/card.scss";
import { useNavigate } from "react-router-dom";

function Card(receipe) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="thumbnail">
        <img alt="receipe" src={receipe.url}/>
      </div>
      <div>
        <strong>{receipe.name}</strong>
      </div>
      <button onClick={()=>navigate(`/receipe-form/${receipe.id}`)}>View</button>
      <div>Prep time: {receipe.prepTime??0} min</div>
      <div>Cook time: {receipe.cookTime??0} min</div>
      <div>Serves: {receipe.serves??0}</div>
    </div>
  );
}

export default Card;
