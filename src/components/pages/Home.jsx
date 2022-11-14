import { Navbar } from "../Navbar";
import { Ingredients } from "../recipeComponents/IngredientsList";



export const Home = () => {
  let logo = "Recip-Easy";
  return(
    <>
  <h1>{logo}</h1>
  <Navbar />
  <Ingredients />
  
    </>
  )

 
  
  
};
