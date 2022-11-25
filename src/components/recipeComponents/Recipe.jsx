import { useEffect, useState } from "react";
import { database } from "./recipeDatabase";

export const Recipe = ({ recipe, removefav, storefav}) => {
  const [isFav, setIsFav] = useState(false);
  const [comment, setComment] = useState("");
  
  const getComment = async (e) => {
    e.preventDefault();
    setComment(e.target.value);
  
  };

 useEffect(() => {
    const isFavorite = async () => {
      const db = database;

      setIsFav(
        (await db.get("FavRecipeToStore", recipe?.uri)) !== undefined
          ? true
          : false
      );
    };
    // const result =  isFavorite(recipe?.uri)
    // console.log('this is result', result)
    // setIsFav(result);
    isFavorite();



  }, [recipe]);

  return recipe ? (
    <div className="recipe-card">
      <h1 className="title">{recipe?.label}</h1>
      <p>{recipe?.cuisineType}</p>
      <img src={recipe?.image} />
      <p>{recipe?.mealType}</p>
      <p className="para">{recipe?.ingredientLines}</p>
      {isFav ? (
        <button className="rem-btn"
          onClick={async () => {
            removefav(recipe?.uri);
          }}
        >
          Remove
        </button>
      ) : (
        <button className="fav-btn"
          onClick={async () => {
            const favObj = {
              label: recipe?.label,
              cuisineType: recipe?.cuisineType?.[0],
              image: recipe?.image,
              mealType: recipe?.mealType,
              ingredientLines: recipe?.ingredientLines,
              uri: recipe?.uri,
            };
            console.log("this is favobj,", favObj);
            //  (await database).add("favorites", favObj)
            storefav(favObj);
          }}
        >
          Favorite
        </button>
      )}
      <form>
        <textarea value={comment} onChange={getComment} />
        <button className="com-btn"
          onClick={ async(e) => {
            e.preventDefault();
            const commentObj = {
              label: recipe?.label,
              cuisineType: recipe?.cuisineType?.[0],
              image: recipe?.image,
              mealType: recipe?.mealType,
              input: { comment },
            };
            console.log(commentObj);
            setComment(commentObj);
            const db = database
            await db.put("RecipeComments", commentObj)
          }}
        >
          Comment
        </button>
      </form>
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
