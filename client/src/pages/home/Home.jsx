import { useEffect, useState } from "react";
import React from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/SideBar'
import "./home.css"
import axios from "axios";
export default function Home() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      console.log(res);
    };
    fetchPosts();
  }, []);
  return (
    <>
    <Header />
    <div className='home'>
        <Posts />
        <Sidebar />
    </div>
    </>
  )
}
