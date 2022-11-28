import { useEffect } from "react";
import { useState } from "react";
import { Navbar } from "../Navbar";
import { RecipeList } from "../recipeComponents/RecipeList";
import { database } from "../recipeComponents/recipeDatabase";
export const Favorites = () => {
  const [faved, setFaved] = useState([]);
  const removefav = async (favObj) => {
    const db = await database();
    await db.clear("FavRecipeToStore", favObj);
    getFavorite()
  };
  useEffect(() => {


    getFavorite();
  }, []);
  const getFavorite = async () => {
    const db = await database();
    const response = await db.getAll("FavRecipeToStore");
    
    setFaved(
      response?.map((test) => {
        return {
          recipe: test,
        };
      })
    );
  };
  return (
    <div>
      <Navbar />
      <h1>Favorites</h1>
      <div className="recipes">
        <RecipeList data={faved}  removefav={removefav}/>
      </div>
    </div>
  );
};
