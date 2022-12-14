import { useState, useEffect } from "react"
import { Navbar } from "../Navbar"
import { database } from "../recipeComponents/recipeDatabase"

export const Comments = () => {
    const [comments, setComments] = useState([])
    

    useEffect(() => {
        getComments()
        console.log(getComments())
        
    }, [])
    
    
    const getComments = async () => {
        const db = await database()
        const response = await db.getAll("RecipeComments")
        
        setComments(response.map((res) => {
           console.log(comments)
           console.log(res)
          return {
            recipe: res
        }
         
           
        }))
    }

    return(
        <div>
      <Navbar/>
       
            <h1 className="com-header">Comments</h1>
          
           {comments.map((test, index) => {
            return (
                <div className="com-rec">
                <div className="holder">
                <h1 key={index}> {test.recipe.label}</h1>
                <p > {test.recipe.cuisineType}</p>
                <img src={test.recipe.image} />
                <p> {test.recipe.mealType}</p>
                <div className="com-hol">
                <p>{test.recipe.input.comment}</p>
                </div>
             </div>
                </div>
            )
           })}
        </div>
    )
}