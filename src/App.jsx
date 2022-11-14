import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Favorites } from "./components/pages/Favorites";
import { Comments } from "./components/pages/Comments";

import { RecipeInformationProvider } from "./components/recipeComponents/RecipeContext";
function App() {
  return (
    <div className="App">
      <RecipeInformationProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/favorites/*" element={<Favorites />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </Router>
      </RecipeInformationProvider>
    </div>
  );
}

export default App;
