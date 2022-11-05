// import tan from '../assets/recipeImages/tan.jpeg'
import { Comment } from "./features/comment"
export const FakeRecipe = () => {
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
    document.body.appendChild(title)
    document.body.appendChild(img)
    document.body.appendChild(directions)
    document.body.appendChild(commentButton)
    document.body.appendChild(favoriteButton)

  commentButton.addEventListener("click", (e) => {
    Comment()
  })
    return (
        <div>
         
        </div>
    )
}


