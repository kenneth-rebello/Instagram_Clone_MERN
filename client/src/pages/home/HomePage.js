import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import PostItem from '../../components/posts/PostItem';


import { posts } from '../../data/posts';


const HomePage = () => {
    
    return (
        <div className="home">
            <div className="home__feed">
                {posts.map(post => <PostItem key={post.id} post={post} />)}
            </div>
            <div className="home__sidebar">
                <div className="sidebar__panel">
                    <Link to="/kenrebel">
                        <img 
                            src="https://kenneth-rebello.github.io/images/me.png" 
                            alt="G"
                        />
                    </Link>
                    <div className="text">
                        <Link to="/kenrebel"><p className="username">kenrebel</p></Link>
                        <p className="fullName">Kenneth Rebello</p>
                    </div>
                </div>
                <div className="sidebar__about">
                    <div className="links">
                        {instagramLinks.map(link => 
                            <a href={link.url} key={link.name} target="_blank" rel="noreferrer">{link.name}{` - `}</a>
                        )}
                    </div>
                    <p>&copy; 2021 INSTAGRAM FROM KENNETH</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage

const instagramLinks = [
    {name:"About", url:"https://about.instagram.com/"},
    {name:"Help", url:"https://help.instagram.com/"},
    {name:"Press", url:"https://about.instagram.com/blog/"},
    {name:"API", url:"https://developers.facebook.com/docs/instagram"},
    {name:"Jobs", url:"https://www.instagram.com/about/jobs/"},
    {name:"Privacy", url:"https://www.instagram.com/legal/privacy/"},
    {name:"Terms", url:"https://www.instagram.com/legal/terms/"},
    {name:"Locations", url:"https://www.instagram.com/explore/locations/"},
    {name:"Hashtags", url:"https://www.instagram.com/directory/hashtags/"},
]