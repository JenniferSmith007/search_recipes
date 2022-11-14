

export const Recipe = ( {recipe} ) => {

  return recipe ? (
    <div className="recipe-card">
      <h1 className="title">{recipe?.label}</h1>
      <p>{recipe?.cuisineType?.[0]}</p>
      <img src={recipe?.image} />
      <p>{recipe?.mealType}</p>
      <p className="para">{recipe?.ingredientLines}</p>
      <button>Favorite</button>
      <button>Comment</button>
    </div>
  ) : (
    <></>
  );
};
