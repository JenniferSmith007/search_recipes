import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Favorites } from "./components/pages/Favorites";
import { Comments } from "./components/pages/Comments";
import {RandomRecipe} from "./components/pages/RandomRecipe"
import { RecipeInformationProvider } from "./components/recipeComponents/RecipeContext";
import "./index.css";

function App() {
  return (
    <div className="App">
      <RecipeInformationProvider>
        <Router>
          <Routes>
            <Route path="/*" exact element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/random-recipe" element={<RandomRecipe />} />
          </Routes>
        </Router>
      </RecipeInformationProvider>
    </div>
  );
}

export default App;


// exact prop -> inforces that exact formatting for url only specfic path render route 