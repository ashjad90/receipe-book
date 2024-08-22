import React, { useEffect, useState } from "react";
import axios from "axios";
import defaultCategories from "../../assets/data/categories.json";

function CategoryListView({ setCurrentCategories }) {
  const [categories, setCategories] = useState(defaultCategories);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesList = await axios.get("/categories");
        setCategories(categoriesList.data);
      } catch (error) {
        console.error("Error occured", error);
      }
    };
    fetchData();
  }, []);

  return (
    <aside>
      <ul>
        {categories.map((each) => (
          <li key={each.id} id={each.id}>
            <a onClick={() => setCurrentCategories(each)}>{each.name}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
export default CategoryListView;
