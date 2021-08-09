import React, { Fragment, useEffect, useState } from 'react';
import './Activity.css';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { followRequests } from '../../data/requests';

const Activity = () => {

    const [requests, showRequests] = useState(false);

    useEffect(()=>{
        return ()=>{
            showRequests(false);
        }
    },[])

    const confirmRequest = () =>{

    }

    const deleteRequest = () =>{

    }

    return (
        <div>
            {!requests ? <div className="activity">
                <div onClick={()=>showRequests(true)} className="activity__requests">
                    <div>
                        <p className="heading">Follow Requests</p>
                        <p className="trailing">kenrebel07 + 40 others</p>
                    </div>
                    <KeyboardArrowRightIcon />
                </div>
                <p className="heading">Recent Acitivity</p>
                <div className="activity__notifs">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLQK_NpZ0DpwVwu9WDyAtuDpTTq428DlYnFUNmYEaw=s900-c-k-c0x00ffffff-no-rj" alt="J"/>
                    <div>
                        <span className="username">so_marianne </span>
                        <span>mentioned you in a comment: @kenrebel07 majority people already know what movies they're are in because of how successful they were at the box office</span>
                    </div>
                </div>
                <div className="activity__notifs">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLQK_NpZ0DpwVwu9WDyAtuDpTTq428DlYnFUNmYEaw=s900-c-k-c0x00ffffff-no-rj" alt="J"/>
                    <div>
                        <span className="username">so_marianne </span>
                        <span>mentioned you in a comment: @kenrebel07 majority people already know what movies they're are in because of how successful they were at the box office</span>
                    </div>
                </div>
                <div className="activity__notifs">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLQK_NpZ0DpwVwu9WDyAtuDpTTq428DlYnFUNmYEaw=s900-c-k-c0x00ffffff-no-rj" alt="J"/>
                    <div>
                        <span className="username">so_marianne </span>
                        <span>mentioned you in a comment: @kenrebel07 majority people already know what movies they're are in because of how successful they were at the box office</span>
                    </div>
                </div>
                <div className="activity__notifs">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLQK_NpZ0DpwVwu9WDyAtuDpTTq428DlYnFUNmYEaw=s900-c-k-c0x00ffffff-no-rj" alt="J"/>
                    <div>
                        <span className="username">so_marianne </span>
                        <span>mentioned you in a comment: @kenrebel07 majority people already know what movies they're are in because of how successful they were at the box office</span>
                    </div>
                </div>
                <div className="activity__notifs">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLQK_NpZ0DpwVwu9WDyAtuDpTTq428DlYnFUNmYEaw=s900-c-k-c0x00ffffff-no-rj" alt="J"/>
                    <div>
                        <span className="username">so_marianne </span>
                        <span>mentioned you in a comment: @kenrebel07 majority people already know what movies they're are in because of how successful they were at the box office</span>
                    </div>
                </div>
                <div className="activity__notifs">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLQK_NpZ0DpwVwu9WDyAtuDpTTq428DlYnFUNmYEaw=s900-c-k-c0x00ffffff-no-rj" alt="J"/>
                    <div>
                        <span className="username">so_marianne </span>
                        <span>mentioned you in a comment: @kenrebel07 majority people already know what movies they're are in because of how successful they were at the box office</span>
                    </div>
                </div>
                <div className="activity__notifs">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLQK_NpZ0DpwVwu9WDyAtuDpTTq428DlYnFUNmYEaw=s900-c-k-c0x00ffffff-no-rj" alt="J"/>
                    <div>
                        <span className="username">so_marianne </span>
                        <span>mentioned you in a comment: @kenrebel07 majority people already know what movies they're are in because of how successful they were at the box office</span>
                    </div>
                </div>
                <div className="activity__notifs">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLQK_NpZ0DpwVwu9WDyAtuDpTTq428DlYnFUNmYEaw=s900-c-k-c0x00ffffff-no-rj" alt="J"/>
                    <div>
                        <span className="username">so_marianne </span>
                        <span>mentioned you in a comment: @kenrebel07 majority people already know what movies they're are in because of how successful they were at the box office</span>
                    </div>
                </div>
            </div>
            :
            <div className="activity__requests__full">
                {followRequests.map(req => <div className="requests__request">
                    <img src={req.imageUrl} alt="J"/>
                    <div>
                        <p className="request__username">{req.username}</p>
                        <p className="request__fullName">{req.fullName}</p>
                    </div>
                    <button className="btn btn-primary" onClick={confirmRequest}>Confirm</button>
                    <button className="btn btn-secondary" onClick={deleteRequest}>Delete</button>
                </div>)}
            </div>}
        </div>
    )
}

export default Activity
