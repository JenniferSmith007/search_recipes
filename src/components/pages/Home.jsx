import { Navbar } from "../Navbar";
import { Ingredients } from "../recipeComponents/IngredientsList";
import logo from '../logo.svg'


export const Home = () => {
  
  return(
    <div className="home-pg">
  
  <div className="nav"><Navbar /></div>
 <img className="logo" src={logo} />
    <Ingredients />
    
  
  
    </div>
  )

 
  
  
};
