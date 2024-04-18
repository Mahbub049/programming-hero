import { NavLink } from "react-router-dom";
import About from "../About/About";
import Users from "../Users/Users";
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
        </div>
    );
};

export default Navbar;