import { Recipe } from "./Recipe";

export const RecipeList = ({ data, removefav, storefav, storeComment }) => {

  return (
    <div className="recipe_holder">
      {data?.map((r, index) => {
        return <Recipe recipe={r.recipe} key={index} removefav={removefav} storefav={storefav} storeComment={storeComment}  />;
        
      })}
      
    </div>
  );
};



// DOM Component takes data and renders it reuse in other components 