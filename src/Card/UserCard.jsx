import React from 'react';
import classes from './UserCard.module.css'
function UserCard(props) {
    const {title , source,isCurrentUser} = props;
    return (
        <React.Fragment>
             <img src={source} alt={title} className={classes.imageUser}></img> 
            <h2 className={isCurrentUser?classes.userTitleCurrent:classes.userTitleList}>{title}</h2>
        </React.Fragment>
    );
}

export default UserCard;