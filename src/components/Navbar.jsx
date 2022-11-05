import { Link } from "react-router-dom";
export const Navbar = () => {
return (
    <div>
        <Link to='/' className='home'>Home</Link>
         <Link to='/favorites' className='favorites'>favorite </Link>
         <Link to='/comments' className='comments'>Comments</Link>
    </div>
)
}
