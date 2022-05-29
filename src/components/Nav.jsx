import React from 'react';
import Dropdown from './Dropdown';
import classes from './Nav.module.css'
function Nav(props) {
    return (
        <div className={classes.nav}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" className={classes.logo}></img>

            <Dropdown  className={classes.dropdown}/>
        </div>
    );
}

export default Nav;