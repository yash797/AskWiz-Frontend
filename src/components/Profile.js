import React from 'react';
import {useParams} from 'react-router-dom';
import "./css/Profile.css";
import { useState, useEffect } from 'react';

const Profile = () => {
  const {username}=useParams();
  console.log(username);
  const [imageURL, setImageURL] = useState('');

  useEffect(()=> {
    async function fetchRandomImage(){
        const response = await fetch('https://api.unsplash.com/photos/random/?client_id=lZE-i5apl79LE2svJXNgwPHu0b8q9Ubu1vKL4eGv_UQ');
        const data = await response.json();
        setImageURL(data.urls.regular);
    }
    fetchRandomImage();
  },[]);


  

  return (
    <>
    <div className="profile-container" >
        <div className="profile-header">
            <div className="profile-banner">
                {imageURL && <img src={imageURL} alt="random image"/>}
            </div>
        </div>
        <div className="profile-body">
            <div className="profile-photo">
                <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="profile_photo"/>
            </div>
            <div className="profile-body-container">
                <div className="user-header">
                    <h2 className="user-title">Username</h2>
                    <p className="user-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aperiam amet vel dolorem. At
                        pariatur nobis repellat itaque iusto molestiae iure sapiente totam quae, quo consequatur enim
                        eum quis minima.
                    </p>
                </div>
                <ul className="user-data">
                    <li className="data-item">40 Posts</li>
                    <li className="data-item">500 followers</li>
                    <li className="data-item">500 following</li>
                </ul>
            </div>
        </div>
    </div>

<h2 className="post-section">Recent Posts</h2>


<div className="profile-posts">
        <div className="post">
            <div className="post-header">
                <div className="post-user-profile">
                    <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="user-profile" />
                </div>
                <div className="post-user-details">
                    <h3 className="post-username">
                        Username
                    </h3>
                    <p className="post-date">
                        Apr 30
                    </p>
                    <p className="post-tag">
                        #Category
                    </p>
                </div>
            </div>
            <p className="post-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea fugiat natus illo voluptates, ab nihil enim
                labore magni laborum animi tempore aut, vitae sequi totam consectetur est nesciunt, minus iusto. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="post-image">
                <img src="https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="article-banner"/>
            </div>
        </div>

        <div className="post">
            <div className="post-header">
                <div className="post-user-profile">
                    <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="user-profile" />
                </div>
                <div className="post-user-details">
                    <h3 className="post-username">
                        Username
                    </h3>
                    <p className="post-date">
                        Apr 30
                    </p>
                    <p className="post-tag">
                        #Category
                    </p>
                </div>
            </div>
            <p className="post-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea fugiat natus illo voluptates, ab nihil enim
                labore magni laborum animi tempore aut, vitae sequi totam consectetur est nesciunt, minus iusto. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="post-image">
                <img src="https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="article-banner"/>
            </div>
        </div>

        <div className="post">
            <div className="post-header">
                <div className="post-user-profile">
                    <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="user-profile" />
                </div>
                <div className="post-user-details">
                    <h3 className="post-username">
                        Username
                    </h3>
                    <p className="post-date">
                        Apr 30
                    </p>
                    <p className="post-tag">
                        #Category
                    </p>
                </div>
            </div>
            <p className="post-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea fugiat natus illo voluptates, ab nihil enim
                labore magni laborum animi tempore aut, vitae sequi totam consectetur est nesciunt, minus iusto. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="post-image">
                <img src="https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="article-banner"/>
            </div>
        </div>

        <div className="post">
            <div className="post-header">
                <div className="post-user-profile">
                    <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="user-profile" />
                </div>
                <div className="post-user-details">
                    <h3 className="post-username">
                        Username
                    </h3>
                    <p className="post-date">
                        Apr 30
                    </p>
                    <p className="post-tag">
                        #Category
                    </p>
                </div>
            </div>
            <p className="post-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea fugiat natus illo voluptates, ab nihil enim
                labore magni laborum animi tempore aut, vitae sequi totam consectetur est nesciunt, minus iusto. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="post-image">
                <img src="https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="article-banner"/>
            </div>
        </div>

        <div className="post">
            <div className="post-header">
                <div className="post-user-profile">
                    <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="user-profile" />
                </div>
                <div className="post-user-details">
                    <h3 className="post-username">
                        Username
                    </h3>
                    <p className="post-date">
                        Apr 30
                    </p>
                    <p className="post-tag">
                        #Category
                    </p>
                </div>
            </div>
            <p className="post-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea fugiat natus illo voluptates, ab nihil enim
                labore magni laborum animi tempore aut, vitae sequi totam consectetur est nesciunt, minus iusto. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="post-image">
                <img src="https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="article-banner"/>
            </div>
        </div>

        <div className="post">
            <div className="post-header">
                <div className="post-user-profile">
                    <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="user-profile" />
                </div>
                <div className="post-user-details">
                    <h3 className="post-username">
                        Username
                    </h3>
                    <p className="post-date">
                        Apr 30
                    </p>
                    <p className="post-tag">
                        #Category
                    </p>
                </div>
            </div>
            <p className="post-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea fugiat natus illo voluptates, ab nihil enim
                labore magni laborum animi tempore aut, vitae sequi totam consectetur est nesciunt, minus iusto. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="post-image">
                <img src="https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="article-banner"/>
            </div>
        </div>

        <div className="post">
            <div className="post-header">
                <div className="post-user-profile">
                    <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="user-profile" />
                </div>
                <div className="post-user-details">
                    <h3 className="post-username">
                        Username
                    </h3>
                    <p className="post-date">
                        Apr 30
                    </p>
                    <p className="post-tag">
                        #Category
                    </p>
                </div>
            </div>
            <p className="post-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea fugiat natus illo voluptates, ab nihil enim
                labore magni laborum animi tempore aut, vitae sequi totam consectetur est nesciunt, minus iusto. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="post-image">
                <img src="https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="article-banner"/>
            </div>
        </div>
       
    </div>

    </>
  )
}

export default Profile