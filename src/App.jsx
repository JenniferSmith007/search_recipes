import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/pages/Home'
import { Favorites } from './components/pages/Favorites'
import { Comments } from './components/pages/Comments'
import style from "./style/style";
function App() {



  return (
    <div className="App">
   
   <Router>
  <Routes>
    <Route path="/*" element={<Home/>} />
    <Route path="/favorites/*" element={<Favorites />} />
    <Route path="/comments" element={<Comments />} />
  </Routes>
</Router>


  </div>
  )
}

export default App
