import React from 'react';
import './card.css';
import { useState, useEffect } from 'react';

const Card = ({ member, i }) => {
    
  return (

    <div key={`member${i}`} className="profile-posts">
      
      <div className="post">
            <div className="post-header">
                <div className="post-user-profile">
                    <img src={member.profile_pic}alt="user-profile" />
                </div>
                <div className="post-user-details">
                    <h3 className="post-username">
                        {member.username}
                    </h3>
                    <p className="post-date">
                        {member.date}
                    </p>
                    <p className="post-tag">
                        {member.category}
                    </p>
                </div>
            </div>
            <p className="post-body">
                {member.description}
            </p>
            <div className="post-image">
                <img src={member.img} alt="article-banner"/>
            </div>
        </div>

    </div>

  );
};

export default Card;
