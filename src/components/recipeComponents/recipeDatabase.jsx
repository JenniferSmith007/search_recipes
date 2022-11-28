import { openDB } from "idb";

export const database = () => {
  return openDB("RecipeStore", 2, {
    upgrade(db) {
      db.createObjectStore("FavRecipeToStore", { keyPath: "uri" });
      db.createObjectStore("RecipeComments", {
        keyPath: "comments",
        autoIncrement: true,
      });
    },
  });
};
