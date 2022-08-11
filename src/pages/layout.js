import { Outlet, Link } from "react-router-dom";
const Layout = () => <>
        <p> Layout </p>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listing">Listing</Link>
          </li>
          <li>
            <Link to="/detail">Detail</Link>
          </li>
        </ul>
      </nav>

      <Outlet /> 
    </>

export default Layout;