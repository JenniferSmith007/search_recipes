import { Recipe } from "../recipeComponents/Recipe";
import {
  useAPI,
  RecipeContext as context,
} from "../recipeComponents/RecipeContext";
import { useEffect } from "react";
import { Navbar } from "../Navbar";
// named import using the variable in the file
export const RandomRecipe = () => {
  const { data, fetchData } = useAPI();

  useEffect(() => {
    const getRandomRecipe = async () => {
      await fetchData("kosher");
    };
    getRandomRecipe();
  }, []);
  //  compon mount trig use effect call get ran recipe -> call fetch data -. loads data into data prop in context -> information

  return (
    <div >
      <div className="nav">
        <Navbar />
      </div>

      {context.status === "init" ? (
        <p>Loading</p>
      ) : (
        <Recipe recipe={data?.[Math.floor(Math.random() * data?.length-1)]?.recipe} />
      )}
    </div>
  );
};
