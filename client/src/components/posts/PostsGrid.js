import React from 'react';
import './PostsGrid.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';


import { posts } from '../../data/posts';

const PostsGrid = () => {
    return (
        <div className="postsGrid">
            {posts.map(post => <div className="postThumbnail">
                <img src={post.imageUrl} alt="post"/>
                <div class="overlay">
                    <span><FavoriteIcon fontSize="inherit"/> 300</span>
                    <span><ModeCommentIcon fontSize="inherit"/> 3890</span>
                </div>
            </div>)}
        </div>
    )
}

export default PostsGrid
