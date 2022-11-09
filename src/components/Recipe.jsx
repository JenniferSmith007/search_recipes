export const Recipe = ( {recipe} ) => {
  
  return recipe ? (
    <>
      <h1>{recipe?.label}</h1>
      <p>{recipe?.cuisineType?.[0]}</p>
      <img src={recipe?.image} />
      <p>{recipe?.mealType}</p>
      <p>{recipe?.ingredientLines}</p>
    </>
  ) : (
    <></>
  );
};
