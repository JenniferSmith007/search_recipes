

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



// when to put in own file => reuse if not then no own file 
// ex => recipe component reuse => own file 
// inut feild no => one place 

// -----------------------------

// favorites 
// fav : when a person click on favorite -> saving data -> storage (indexedDB) -> 

// button -> click to fav : func to store fav in indexedDB - > favs page fun : retrive the favorited page -> no state -> just store data to indexeddb 


// comments -> inexedDB -> fun : save comment to spec recipe -> appear to page 

