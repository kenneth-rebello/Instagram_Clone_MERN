import React from 'react';
import './ProfilePage.css';
import ProfileHeader from '../../components/profile/ProfileHeader';
import PostsGrid from '../../components/posts/PostsGrid';
import GridOnIcon from '@material-ui/icons/GridOn';

const ProfilePage = () => {
    return (
        <div className="profile">
            <ProfileHeader/>
            <div className="gridHeader">
                <GridOnIcon fontSize="inherit"/> POSTS
            </div>
            <PostsGrid/>
        </div>
    )
}

export default ProfilePage
