import { Link } from "react-router-dom";
const Category = ({id,title,sub_title,photo}) => <> 
    <h2>Category</h2> 
    
    <div>
        <h3>{ title }</h3>
        <h5>{ sub_title }</h5>
        <Link to="/listing" >
            <img src={ photo } alt={ title } />
        </Link>
    </div>
</>
    

export default Category;