import { useState,useContext } from "react"
import { Recipes } from "./Recipes"
import { RecipeContext } from "../RecipeContext"
export const RecipesList = () => {
  const [recipe, setRecipe] = useContext(RecipeContext)
  
  

   
  
  
return (
  <div>
    
    {recipe.map(recipes => (
    
    <Recipes title={recipes.title}  instruction={recipes.instruction}  /> ))}
    
  </div>
)
}



// display: grid;
// grid-template-columns: repeat(3, 1fr);
// grid-template-rows: repeat(3, 1fr);
// grid-column-gap: 6px;
// grid-row-gap: 3px;