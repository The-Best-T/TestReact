import React from 'react';
import classes from "./Navbar.module.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__links}>
                <div>
                    <Link to="/about">About site</Link>
                </div>
                <div>
                    <Link to="/posts">Posts</Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar;