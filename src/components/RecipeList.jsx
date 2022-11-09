import { Recipe } from "./Recipe";
import { useAPI, RecipeContext as context } from "./RecipeContext";
// named import using the variable in the file 
export const RecipeList = () => {
  
  const { data} = useAPI();
  
  return (
    <div>
      {context.status === "init" ? (
        <p>Loading</p>
      ) : (
        data?.map((r, index) => {
          return <Recipe recipe={r.recipe} key={index} />;
        })
      )}
    </div>
  );
};
