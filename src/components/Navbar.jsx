import { Link } from "react-router-dom";
export const Navbar = () => {
return (
    <div className="nav">
        <p className="slogan">Recipe - Easy: Your new favorite cookbook</p>
        <Link to='/' className='home'>Home</Link>
         <Link to='/favorites' className='favorites'>Favorites </Link>
         <Link to='/comments' className='comments'>Comments</Link>
         <Link to='/random-recipe' className='random-recipe'>Random Recipe</Link>
    </div>
)
}
