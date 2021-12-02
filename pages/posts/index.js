import React from "react";
import axios from "axios";
import AllPosts from "../../components/AllPosts/AllPosts";

function Posts({posts}) {
    return (
        <div className="container">
            <h1>All Posts</h1>
            <AllPosts posts={posts}/>
        </div>
    )
}

export default Posts;

export async function getStaticProps(){
    const postsRes = await axios.get("http://localhost:1337/posts");
  
  
    return {
      props: {
        posts: postsRes.data
      }
    }
  }