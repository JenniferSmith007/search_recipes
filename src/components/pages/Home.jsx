import { Navbar } from "../Navbar";
import { Ingredients } from "../recipeComponents/IngredientsList";



export const Home = () => {
  let logo = "Recipeeasy";
  return(
    <div>
  
  <div className="nav"><Navbar /></div>
  <h1 className="main_title">{logo}</h1>
  
    <Ingredients />
    
  
  
    </div>
  )

 
  
  
};
