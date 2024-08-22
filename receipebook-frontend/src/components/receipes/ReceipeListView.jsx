import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import defaultReceipes from "../../assets/data/receipes.json";

function ReceipeListView({
  searchValue,
  currentCategory = { id: null, name: "All" },
}) {
  const [receipes, setReceipes] = useState(defaultReceipes);
  const title = currentCategory.name;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const receipes = await axios.get(
          "/receipes/" + (currentCategory.id ?? "")
        );
        setReceipes(receipes.data);
      } catch (error) {
        console.error("Error occured", error);

        setReceipes(
          defaultReceipes.filter((each) => {
            return currentCategory.receipes
              ? currentCategory.receipes.includes(each.id)
              : true;
          })
        );
      }
    };
    fetchData();
  }, [currentCategory.id]);
  //to simulate lazy loading 
  //for(let i=0;i<1000000000;i++){
  //   let v = "Hey";
  // }
  return (
    <>
      <h1>{title}</h1>
      <div className="content">
        {receipes.map((each) => {
          return !searchValue ||
            each.id.includes(searchValue) ||
            each.name.includes(searchValue) ? (
            <Card key={each.id} {...each} />
          ) : null;
        })}
      </div>
    </>
  );
}

export default ReceipeListView;
