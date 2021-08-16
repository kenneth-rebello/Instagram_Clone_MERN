import './Header.css';

import React, { useState } from 'react';

import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InboxIcon from '@material-ui/icons/Inbox';
import InboxOutlinedIcon from '@material-ui/icons/InboxOutlined';
import ExploreIcon from '@material-ui/icons/Explore';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import Activity from './Activity';
import { Link } from 'react-router-dom';

const Header = () => {

    const [active, setActive] = useState("home");
    const [activity, showActivity] = useState(false);
    const [user, showUser] = useState(false);
    
    const toggleActivity = () => {
        showActivity(!activity);
    }
    const toggleUser = () => {
        showUser(!user);
    }
    
    return (
        <nav className="header__main">
            <Link to="/" onClick={()=>setActive("home")}>
                <img 
                    className="header__title"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
                    alt="Instagram"
                    height="40px"
                />
            </Link>
            <input className="header__search" placeholder="&#128269; Search"/>
            <div className="header__icons">
                <span className="icon">
                    <Link to="/" onClick={()=>setActive("home")}>
                        {active==="home" ? 
                            <HomeIcon fontSize={'inherit'} /> : <HomeOutlinedIcon fontSize={'inherit'} />
                        }
                    </Link>
                </span>
                <span className="icon">
                    <Link to="/direct" onClick={()=>setActive("direct")}>
                        {active==="direct" ? 
                            <InboxIcon fontSize={'inherit'}/> : <InboxOutlinedIcon fontSize={'inherit'}/>
                        }
                    </Link>
                </span>
                <span className="icon">
                    <Link to="/explore" onClick={()=>setActive("explore")}>
                        {active==="explore" ? 
                            <ExploreIcon fontSize={'inherit'}/> : <ExploreOutlinedIcon fontSize={'inherit'}/>
                        }
                    </Link>
                </span>
                <div className="icon dropdown">
                    <button onClick={toggleActivity}> 
                        {activity ? 
                            <FavoriteIcon fontSize={'inherit'}/>
                            :
                            <FavoriteBorderOutlinedIcon fontSize={'inherit'}/>
                        }
                    </button>
                </div>
                
                    {activity && <div id="activity" className="header__activity dropdown-content">
                    <ClickAwayListener onClickAway={toggleActivity}>
                        <div>
                            <Activity/> 
                        </div>
                    </ClickAwayListener>
                    </div>}
                <span className="icon dropdown">
                    <button onClick={toggleUser}> 
                        <img src="https://kenneth-rebello.github.io/images/me.png" 
                            alt="J"
                        />
                    </button>
                </span>
                {user && <div id="profile" className="header__profile dropdown-content">
                    <ClickAwayListener onClickAway={toggleUser}>
                        <div className="header__userOptions">
                            <Link to="/kenrebel" className="header__userOption" onClick={toggleUser}>
                                <AccountCircleOutlinedIcon fontSize={'inherit'}/>
                                <p>User</p>
                            </Link>
                            <Link to="/saved" className="header__userOption" onClick={toggleUser}>
                                <BookmarkBorderOutlinedIcon fontSize={'inherit'}/>
                                <p>Saved</p>
                            </Link>
                            <Link to="/settings" className="header__userOption last" onClick={toggleUser}>
                                <SettingsOutlinedIcon fontSize={'inherit'}/>
                                <p>Settings</p>
                            </Link>
                            <div className="header__userOption" onClick={toggleUser}>
                                <p>Log Out</p>
                            </div>
                        </div>
                    </ClickAwayListener> 
                </div>}
            </div>
        </nav>
    )
}

export default Header
