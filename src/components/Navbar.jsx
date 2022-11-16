import { Link } from "react-router-dom";
export const Navbar = () => {
return (
    <div className="nav">
        <Link to='/' className='home'>Home</Link>
         <Link to='/favorites' className='favorites'>favorite </Link>
         <Link to='/comments' className='comments'>Comments</Link>
         <Link to='/random-recipe' className='random-recipe'>Random Recipe</Link>
    </div>
)
}
