import React from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import Card from './Card';
import "../css/Profile.css";

import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination, Navigation]);

const members = [
    {
        username: "Username",
        date: "Date",
        profile_pic: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        category:"#Category",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aperiam amet vel dolorem. Atpariatur nobis repellat itaque iusto molestiae iure sapiente totam quae, quo consequatur enimeum quis minima.",
        img:"https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    },
    {
        username: "Username",
        date: "Date",
        profile_pic: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        category: "#Category",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aperiam amet vel dolorem. Atpariatur nobis repellat itaque iusto molestiae iure sapiente totam quae, quo consequatur enimeum quis minima.",
        img: "https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"

    },
    {
        username: "Username",
        date: "Date",
        profile_pic: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        category:"#Category",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aperiam amet vel dolorem. Atpariatur nobis repellat itaque iusto molestiae iure sapiente totam quae, quo consequatur enimeum quis minima.",
        img:"https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    },
    {
        username: "Username",
        date: "Date",
        profile_pic: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        category:"#Category",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aperiam amet vel dolorem. Atpariatur nobis repellat itaque iusto molestiae iure sapiente totam quae, quo consequatur enimeum quis minima.",
        img:"https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    },
    {
        username: "Username",
        date: "Date",
        profile_pic: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        category:"#Category",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aperiam amet vel dolorem. Atpariatur nobis repellat itaque iusto molestiae iure sapiente totam quae, quo consequatur enimeum quis minima.",
        img:"https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    },
    {
        username: "Username",
        date: "Date",
        profile_pic: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        category:"#Category",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aperiam amet vel dolorem. Atpariatur nobis repellat itaque iusto molestiae iure sapiente totam quae, quo consequatur enimeum quis minima.",
        img:"https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    },
];

const Profile = () => {

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

    <Swiper
    effect={"coverflow"}
    grabCursor={true}
    spaceBetween={10}
    slidesPerView={"1"}
    breakpoints={{
      220: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      840: {
        slidesPerView: 2,
        spaceBetween: -10,
      },
      1020: {
        slidesPerView: 2,
        spaceBetween: -40,
      },
      1220: {
        slidesPerView: 3,
        spaceBetween: -40,
      },
    }}
    centeredSlides={true}
    loop={true}
    // coverflowEffect={{
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: true,
    // }}
    pagination={true}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
      {members.map((member, i) => (
        <SwiperSlide key={`slide-${i}`}>
          <Card member={member} i={i} />
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};

export default Profile;
