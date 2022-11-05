import { Link } from "react-router-dom";
export const Comments = () => {
    return(
        <div>
             <Link to='/' className='home'>Home</Link>
        <Link to='/favorites' className='favorites'>favorite </Link>
       
            <h1>Comments</h1>
        </div>
    )
}