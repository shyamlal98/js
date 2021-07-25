import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>

            <img className="header_logo" src={process.env.PUBLIC_URL + '/tinder.png'} alt="tinder logo"/>

            <IconButton>
                <ForumIcon fontSize="large" className="hedaer_icon"></ForumIcon>
            </IconButton>
            
        </div>
    )
}

export default Header
