import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/Home'
import { Favorites } from './components/Favorites'
import { Comments } from './components/Comments'
function App() {



  return (
    <div className="App">
   
   <Router>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/favoriterecipes" element={<Favorites />} />
    <Route path="/comments" element={<Comments />} />
  </Routes>
</Router>


  </div>
  )
}

export default App
