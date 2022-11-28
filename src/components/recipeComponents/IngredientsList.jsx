import { RecipeList } from "./RecipeList";
import { useAPI } from "./RecipeContext";
import { useState } from "react";
import{database} from '../recipeComponents/recipeDatabase'

export const Ingredients = () => {
  const [ingredients, setIngredients] = useState("");
  const [diets, setDiets] = useState("");
  const [allergies, setAllergies] = useState("");
  const { fetchData, data } = useAPI();

  const storefav = async (favObj) => {
    const db = await database();
    

    await db.put("FavRecipeToStore", favObj);
    fetchData(ingredients, diets, allergies);

  };
  const removefav = async (favObj) => {
    const db = await database();
    await db.clear("FavRecipeToStore", favObj);
    fetchData(ingredients, diets, allergies);

  };
  const storeComment = async (commentObj) => {
    const db = await database();
    await db.put("RecipeComments", commentObj);
   
  };


  return (
    <div className="ingredients_list">
      <div className="search">
        <input className="input"
          placeholder="Search Recipe"
          onChange={(e) => {
            setIngredients(e.target.value);
          }}
        ></input>
      </div>
      <div className="select">
        <label htmlFor="diets" placeholder="diets"></label>
        <select
        className="sel"
          name="diets"
          id="diets"
          onChange={(e) => {
            if (e) setDiets(e.target.value);
          }}
        >
          <option className="opt">Diet</option>
          <option value="balanced">Balanced</option>
          <option value="high-fiber">High-Fiber</option>
          <option value="high-protein">High-Protien</option>
          <option value="low-sodium">Low-Sodium</option>
          <option value="low-Fat">Low-Fat</option>
          <option value="vegan">Vegan</option>
          <option value="kosher">Kosher</option>
          <option value="keto">Keto</option>
          <option value="vegetarian">Vegetarian</option>
        </select>
        <label htmlFor="allergies" placeholder="allergies"></label>
        <select className="sel"
          name="allergies"
          id="allergies"
          onChange={(e) => {
            if (e) setAllergies(e.target.value);
          }}
        >
          <option className="opt">Allergy</option>
          <option value="dairy-free">Dairy-free</option>
          <option value="egg-free">Egg-Free</option>
          <option value="soy-free">Soy-Free</option>
          <option value="peanut-free">Peanut-Free</option>
          <option value="gluten-free">Gluten-Free</option>
          <option value="tree-nut-free">Tree-nut-Free</option>
          <option value="wheat-free">Wheat-Free</option>
          <option value="fish-free">Fish-free</option>
        </select>
      </div>
      <button className="main-btn"
        onClick={() => {
          fetchData(ingredients, diets, allergies);
        }}
      >
        
      </button>

      <div className="recipes">
        <RecipeList data={data} storefav={storefav} removefav={removefav} storeComment={storeComment} />
       
      </div>
    </div>
  );
};
