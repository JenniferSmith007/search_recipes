// import tan from '../assets/recipeImages/tan.jpeg'
import { Comment } from "./features/comment"
export const FakeRecipe = () => {

    let recipeCard = document.createElement("div")
    recipeCard.id = 'recipe_card'
    let title = document.createElement("h1") 
    title.innerText = "Tandoori Chicken"
    let img = document.createElement("img")
    img.src = 'src/assets/recipeImages/tan.jpeg'
    console.log(img)
    let directions = document.createElement("div")
    directions.innerText = 'Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod.'
    let commentButton = document.createElement("button")
    commentButton.innerText = "Comment"
    let favoriteButton = document.createElement("button")
    favoriteButton.innerText = "Favorite"
   document.body.appendChild(recipeCard)
    recipeCard.appendChild(img)
    recipeCard.appendChild(directions)
    recipeCard.appendChild(commentButton)
    recipeCard.appendChild(favoriteButton)
    
  commentButton.addEventListener("click", (e) => {
    Comment()
  })
    return (
        <div>
         
        </div>
    )
}


// display: grid;
// grid-template-columns: repeat(3, 1fr);
// grid-template-rows: repeat(3, 1fr);
// grid-column-gap: 6px;
// grid-row-gap: 3px;