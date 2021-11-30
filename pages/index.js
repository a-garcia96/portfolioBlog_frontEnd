import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import HomeHeader from '../components/HomeHeader';
import HomeLatestPosts from '../components/HomeLatestPosts';

function Home({posts}) {
  
  return(
    <>
    <HomeHeader />
    <HomeLatestPosts posts={posts}/>
    </>
  );
}

export default Home;

export async function getStaticProps(){
  const postsRes = await axios.get("http://localhost:1337/posts");


  return {
    props: {
      posts: postsRes.data
    }
  }
}