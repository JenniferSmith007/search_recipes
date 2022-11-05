import { Link } from "react-router-dom";
export const Favorites = () => {
    return(
        <div>
             <Link to='/' className='home'>Home</Link>
             <Link to='/comments' className='comments'>Comments </Link>
            <h1>Favorites</h1>
        </div>
    )
}