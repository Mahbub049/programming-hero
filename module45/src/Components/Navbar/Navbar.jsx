import { Link } from "react-router-dom";
import About from "../About/About";
import Users from "../Users/Users";

const Navbar = () => {
    return (
        <div>
            <Link to={'/about'}>About</Link>
            <Link to={'users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
        </div>
    );
};

export default Navbar;