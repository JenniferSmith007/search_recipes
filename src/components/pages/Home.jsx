import { Navbar } from "../Navbar";
import { RecipeList } from "../RecipeList";
import { useAPI } from "../RecipeContext";
import { useEffect } from "react";
import { useState } from "react";
import { Recipe } from "../Recipe";

export const Home = () => {
  let logo = "Recip-Easy";
  const [ingredients, setIngredients] = useState("");
  const { data, fetchData } = useAPI();
  console.log(`this is data ${JSON.stringify(data)}`);
  useEffect(() => {
    // fetchData("banana,blueberry,oat");
  }, []);
  return (
    <div className="home_page">
      <Navbar />
      <h1>{logo}</h1>
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

      {data?.map((r, index) => {
        return (
          
            <Recipe recipe={r} key={index} />
         
        );
      })}
      <RecipeList />
    </div>
  );
};
