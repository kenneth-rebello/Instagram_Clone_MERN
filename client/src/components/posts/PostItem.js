import React from 'react';
import './PostItem.css';
import Moment from 'react-moment';
import moment from 'moment';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';
import EmojiInput from '../utils/EmojiInput';

const PostItem = ({post}) => {

    const postComment = (comment) =>{
        alert(comment);
    }

    const today = moment();
    const postDay = moment(post.timestamp);
    let ago = Math.abs(today.diff(postDay, 'minutes'));
    let time="minutes";
    if(ago>59){
        ago = Math.abs(today.diff(postDay, 'hours'));
        time = "hours"
    }
    if(ago>23){
        ago = Math.abs(today.diff(postDay, 'days'));
        time = "days"
    }
    if(ago>7){
        time="";
    }

    return (
        <div className="post">
            <div className="post__header">
                <Link to={`/${post.username}`}><img src={post.userImageUrl} alt="J"/></Link>
                <Link to={`/${post.username}`}><p>{post.username}</p></Link>
            </div>
            <img className="post__image" src={post.imageUrl} alt="P"/>
            <div className="post__actions">
                <div className="actions__left">
                    {true 
                        ? <span className="icon">
                            <FavoriteBorderIcon fontSize="inherit"/> 
                        </span>
                        : <span className="icon">
                            <FavoriteIcon fontSize="inherit"/>
                        </span>
                    }
                    <span className="icon">
                        <ModeCommentOutlinedIcon fontSize="inherit"/>
                    </span>
                    <span className="icon">
                        <SendIcon fontSize="inherit"/>
                    </span>
                </div>
                <div className="actions__right">
                    {true 
                        ? <span className="icon">
                            <BookmarkBorderIcon fontSize="inherit"/> 
                        </span>
                        : <span className="icon">
                            <BookmarkIcon fontSize="inherit"/>
                        </span>
                    }
                </div>
            </div>
            <p className="post__likes">400 likes</p>
            <div className="post__body">
                <Link to={`/${post.username}`}><span className="username">{post.username}</span></Link>
                <span className="caption">{post.caption}</span>
            </div>
            <div className="post__comments">
                
            </div>
            <p className="post__timestamp">
                {time ? ago+" "+time+" ago" : <Moment date={post.timestamp} format="MMMM DD, YYYY"/>}
            </p>

            <EmojiInput onSubmit={postComment}/>
        </div>
    )
}

export default PostItem
