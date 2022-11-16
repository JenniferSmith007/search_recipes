import { useEffect, useState } from "react";
import { database } from "./recipeDatabase";

export const Recipe = ({ recipe }) => {
  const [isFav, setIsFav] = useState(false);
  const storefav = async (favObj) => {
    const db = database;
    console.log("this is db", db);
    //   database.then(async (db) => {
    //     this.db = db
    //  const favorite = await db.get("FavRecipeToStore", "favorite")
    // if(favorite){
    //   for(const[key,value] of Objects.entries(favorite))
    //   this.set[key,value]
    // }
    // })
    await db.put("FavRecipeToStore", favObj);
  };

  if (self.db) {
    console.log(self.db);
  }

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
  const removefav = () => {
    
  }
  return recipe ? (
    <div className="recipe-card">
      <h1 className="title">{recipe?.label}</h1>
      <p>{recipe?.cuisineType?.[0]}</p>
      <img src={recipe?.image} />
      <p>{recipe?.mealType}</p>
      <p className="para">{recipe?.ingredientLines}</p>
      {isFav ? (
        <button    onClick={async () => {
         
          removefav(recipe?.uri);
        }}>Remove</button>
      ) : (
        <button
          onClick={async () => {
            console.log("clicked");
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
