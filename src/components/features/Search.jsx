// import { useContext, useState } from "react"
// import { RecipeContext } from "../../RecipeContext";
// export const Search = () => {
//   const [searchRecipe, setSearchRecipe] = useState('');
// const [recipe, setRecipe] = useContext(RecipeContext)
  
// const searchRecipes = (e) => {
  
//     setSearchRecipe(e.target.value)
    
//   }
//   const searchedRecipes = (e) => {
//     e.preventDefault()
//     setRecipe(prevRecipe => [...prevRecipe, {searchRecipe:searchRecipe}])
//   }
//   return (
//     <div>
//       <form>
//         <input placeholder="Search Recipe" value={searchRecipe} onChange={searchRecipes}></input>
//         <button onClick={searchedRecipes}>Click Here</button>
//       </form>
//     </div>
//   )
// }