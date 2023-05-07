import React, { useEffect, useState } from "react";
import QuoraBox from "./QuoraBox";
import "./css/Feed.css";
import Post from "./Post";
import axios from "axios";
import {useSelector } from "react-redux";

function Feed() {
  const category = useSelector((state) => state.filter.category);
  const [prev, setPrev] = useState(category);
  if(prev!== category){
    setPrev(category);
  }
console.log(category, prev);


  const [posts, setPosts] = useState([]);
  let Link="/api/questions"; 
    if(prev!==null){
      Link=`/api/questions?category=${prev}`;
    }
    const handlePost = () => {
      axios
          .get(Link)
          

          .then((res) => {
            console.log(res.data.reverse());
            setPosts(res.data);
          })
          .catch((e) => {
            console.log(e);
          });
    }
  useEffect(() => {
    handlePost();
    // let Link="/api/questions"; 
    // if(category!==null){
    //   Link=`/api/questions?category=${category}`;
    // }
    // axios
    //   .get(Link)
      
    //   .then((res) => {
    //     console.log(res.data.reverse());
    //     setPosts(res.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }, [prev]);
  return (
    <div className="feed">
      <QuoraBox />
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  );
}

export default Feed;
