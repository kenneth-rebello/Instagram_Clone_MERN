import React from 'react';
import './ProfileHeader.css';
import PersonIcon from '@material-ui/icons/Person';
import CheckIcon from '@material-ui/icons/Check';
import { formatNumber } from '../../helpers/NumberFormatter';

const ProfileHeader = () => {
    return (
        <div className="profileHeader">
            <div className="profileHeader__image">
                <img src="https://kenneth-rebello.github.io/images/me.png" alt="kenrebel07"/>
            </div>
            <div className="profileHeader__info">
                <div className="profileIntro">
                    <p className="username">kenrebel07</p>
                    <div className="btn-group">
                        <button className="btn btn-secondary">Message</button>
                        <button className="btn btn-secondary">
                            <PersonIcon/> <CheckIcon/>
                        </button>
                    </div>
                </div>
                <div className="profileStats">
                    <p>
                        <strong>
                            {formatNumber(1382)}
                        </strong>
                        {` `}posts
                    </p>
                    <p>
                        <strong>{formatNumber(78194291)}</strong>
                        {` `}followers
                    </p>
                    <p>
                        <strong>{formatNumber(27)}</strong>
                        {` `}following
                    </p>
                </div>
                <div className="profileDetails">
                    <h4 className="fullName">KENNETH</h4>
                    <p className="bio">Reckless Relentless</p>
                    <a href="#" target='_blank'>Link</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader
