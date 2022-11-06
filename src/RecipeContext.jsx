import { useState,createContext } from "react"


export const RecipeContext = createContext()





export const RecipeInformationProvider = (props) => {
    const [recipe,setRecipe] = useState(
    [
    {
          title: 'Tandoori Chicken',
          // image: img,
          instruction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at risus viverra. Auctor eu augue ut lectus arcu bibendum at varius vel. Justo eget magna fermentum iaculis eu. Tellus orci ac auctor augue mauris augue neque gravida.',
         
        },
        {
          title: 'Eggs',
          // image: img,
          instruction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at risus viverra. Auctor eu augue ut lectus arcu bibendum at varius vel. Justo eget magna fermentum iaculis eu. Tellus orci ac auctor augue mauris augue neque gravida.',
         
        },
        {
          title: 'salad',
          // image: img,
          instruction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at risus viverra. Auctor eu augue ut lectus arcu bibendum at varius vel. Justo eget magna fermentum iaculis eu. Tellus orci ac auctor augue mauris augue neque gravida.',
         
        }])
  return (
    <div>
        <RecipeContext.Provider value={[recipe,setRecipe]}>
            {props.children}
        </RecipeContext.Provider>
    </div>
  )  
}