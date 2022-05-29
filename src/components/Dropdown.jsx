import React , {useEffect, useState} from 'react';
import classes from './Dropdown.module.css'
import users from '../Data/screenData'
import UserCard from '../Card/UserCard';
function Dropdown(props) {
    const [currentUser , setCurrentUser] = useState("Udit");
    
    return (
        <div className={classes.dropdown}>
            <span>{users.filter((user)=> user.name == currentUser).map((user)=>{return(
                <UserCard title={user.name} source={user.image_src} isCurrentUser={true}/>
            )})}</span>
            <div className={classes.dropdowncontent}>
                <ul>
                {users.map((user)=> <li className={classes.userli}><button className={classes.userbutton} onClick={()=>{setCurrentUser(user.name)}}><UserCard title={user.name} source={user.image_src} isCurrentUser={false}/></button></li>)}
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;