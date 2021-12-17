import axios from 'axios';
import Head from "next/head";

import HomeHeader from '../components/HomeHeader/HomeHeader';
import HomeLatestPosts from '../components/HomeLatestPosts/HomeLatestPosts';

function Home(props) {

  return (
    <>
      <Head>
        <title>{props.homeData.title}</title>
        <meta name="description" content={props.homeData.description} />
      </Head>
      <HomeHeader homeData={props.homeData} />
      <div className="container">
        <HomeLatestPosts posts={props.posts} />
      </div>

    </>
  );
}

export default Home;

export async function getStaticProps() {
  const homeRes = await axios.get(`${process.env.STRAPI_URL}/home`);
  const postsRes = await axios.get(`${process.env.STRAPI_URL}/posts`);



  return {
    props: {
      posts: postsRes.data,
      homeData: homeRes.data
    }
  }
}