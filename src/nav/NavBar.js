import React, { useContext } from "react";
import UserContext from "../auth/UserContext";
import { Link, NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

//Navbar - displays on every page of the app.
//When user is logged in, shows links to main areas of site. 
//When logout shows link to Login and Signup forms.

const NavBar = ({ logout }) => {
    const { currentUser } = useContext(UserContext);
    console.debug("Navigation", "currentUser=", currentUser);

    const loggedInNav = () => {
        return (
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/companies">
                        Companies
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/jobs">
                        Jobs
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/profile">
                        Profile
                    </NavLink>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/" onClick={logout}>
                        Log out {currentUser.first_name || currentUser.username}
                    </Link>
                </NavItem>
            </Nav>
        )
    }

    const loggedOutNav = () => {
        return (
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/login">
                        Login
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/signup">
                        Sign Up
                    </NavLink>
                </NavItem>
            </Nav>

        )
    }

    return (
        <Navbar className="Navigation navbar-expand-lg" color="secondary" dark>
            <NavbarBrand href="/">
                Jobly
            </NavbarBrand>
            {currentUser ? loggedInNav() : loggedOutNav()}
        </Navbar>
    );
}

export default NavBar;
