// import tan from '../assets/recipeImages/tan.jpeg'
export const FakeRecipe = () => {
    let title = document.createElement("h1") 
    title.innerText = "Tandoori Chicken"
    let img = document.createElement("img")
    img.src = 'src/assets/recipeImages/tan.jpeg'
    console.log(img)
    document.body.appendChild(title)
    document.body.appendChild(img)
    return (
        <div>
          
        </div>
    )
}