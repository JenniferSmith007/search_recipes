import {RecipeList} from "./RecipeList";
import { useAPI } from "./RecipeContext";

import {useState } from "react";

export const Ingredients = () => {
    const [ingredients, setIngredients] = useState("");
    const {  fetchData } = useAPI();
    return (
        <div className="ingredients_list">
          <input
            placeholder="SearchHolder"
            onChange={(e) => {
              setIngredients(e.target.value);
            }}
          ></input>
    
          <button
            onClick={() => {
              fetchData(ingredients);
            }}
          >
            Click here
          </button>
    
       
          <RecipeList />
        </div>
    )  
}