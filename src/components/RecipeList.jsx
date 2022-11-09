import { Recipes } from "./Recipe"
import { RecipeContext } from "./RecipeContext"
import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
export const RecipeList =() => {
    const [recipe, setRecipe] = useState()
    const context = useContext(RecipeContext)

    useEffect(() => {
        
        context.fetchData()
        console.log('this is context', context)
    }, [])
    return (
        <div>
           
            {context.status === 'init' ? (
                <p>Loading</p>
            ): (
               <Recipes data={recipe} />
                
            )}
           
        </div>
    )
}