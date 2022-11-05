import { Link } from "react-router-dom";
export const Home = () => {
return (
    <div>
         <Link to='/favorites' className='favorites'>favorite </Link>
         <Link to='/comments' className='comments'>Comments</Link>
         
        <h1>Home</h1>
    </div>
)
}