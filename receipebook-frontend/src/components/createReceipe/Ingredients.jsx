import React, { memo, useState } from "react";
import receipeCss from "../../styles/pages/newReceipe.module.scss";

const units = ["kilo", "dozen", "litre", "count"];
const defaultIngredient = { name: "", value: "", unit: units[0] };

function Ingredients({ingredients, setValues}) {
  console.log('Ingredients');
  return (
    <section className={receipeCss.receipeIngredientSection}>
      <h2>Ingredients</h2>
      <BlankIngredient addIngredient={(value)=> setValues([...ingredients, value])}/>
      <AllIngredients ingredients={ingredients}/>
    </section>
  );
}
function AllIngredients( {ingredients} ) {
  return (
    <ol>
      {ingredients.map((each, index) => (
        <li key={each.name + index}>
          <EachIngredient ingredient={each} />
        </li>
      ))}
    </ol>
  );
}
function EachIngredient({ ingredient = defaultIngredient }) {
  return (
    <>
      <span>{ingredient.name}</span>&nbsp;
      <span>
        {ingredient.value}&nbsp; {ingredient.unit}
      </span>
    </>
  );
}

function BlankIngredient({ addIngredient }) {
  const [ingredient, setIngredient] = useState(defaultIngredient);
  const handleChange = (e) => {
    setIngredient({ ...ingredient, [e.target.name]: e.target.value });
  };
   return (
    <div className={receipeCss.blankIngredient}>
      <div>
        <input
          className={receipeCss.inputBasics}
          type="text"
          name="name"
          value={ingredient.name}
          onChange={handleChange}
        />
      </div>
      {/* &nbsp; */}
      <div>
        <input
          className={receipeCss.inputSmall + " " + receipeCss.inputBasics}
          type="number"
          name="value"
          value={ingredient.value}
          onChange={handleChange}
        />
      </div>
      {/* &nbsp; */}
      <div>
        <select value={ingredient.unit} name="unit" onChange={handleChange}>
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <div>
        <i
          className="fa-solid fa-circle-plus"
          onClick={() => {
            addIngredient(ingredient);
            setIngredient(defaultIngredient);
          }}
        ></i>
      </div>
    </div>
  );
}
export default memo(Ingredients);
