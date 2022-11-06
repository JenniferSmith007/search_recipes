import { useState,createContext,useEffect } from "react"
import axios from "axios"

export const RecipeContext = createContext()





export const RecipeInformationProvider = ({children}) => {
    const [recipe,setRecipe] = useState()
    useEffect(() => {
      let apiid = import.meta.env.VITE_APIID
      let apikey = import.meta.env.VITE_APIKEY
      
      const fetchData = async () => {
          const resp = await axios.get(`https://api.edamam.com/api/recipes/v2?q=chicken&app_key=${apikey}&_cont=CHcVQBtNNQphDmgVQntAEX4BYldtBAQARGJGB2EWa1BxBAYGUXlSB2IQZAQiVwYPRjFGBDFGMlFwVlFTF2RHBzEbMFAhDVcVLnlSVSBMPkd5AAMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&diet=balanced&health=kosher&type=public&app_id=${apiid} `)
          setRecipe(resp.data.hits.map(recipes => 
          <div>
              <h1>{recipes.recipe.label}</h1>
              <p>{recipes.recipe.cuisineType[0]}</p>
              <img src={recipes.recipe.image} />
              <p>{recipes.recipe.mealType}</p>
              <p>{recipes.recipe.ingredientLines}</p>
             
          </div>
          ))
          
          console.log(resp.data.hits)
       
         
      }
      fetchData()
    }, [])
    
  return (
    <div>
        <RecipeContext.Provider value={{recipe,setRecipe}}>
            {children}
        </RecipeContext.Provider>
    </div>
  )  
}