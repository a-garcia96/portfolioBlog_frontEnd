import React from "react";
import axios from "axios";
import https from "https";
import AllPosts from "../../components/AllPosts/AllPosts";

axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

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
    const postsRes = await axios.get(`${process.env.STRAPI_URL}/posts`);
  
  
    return {
      props: {
        posts: postsRes.data
      }
    }
  }