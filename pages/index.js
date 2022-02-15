import axios from 'axios';
import https from "https";
import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header/Header';
import ToolBelt from '../components/ToolBelt/ToolBelt';
import HomeLatestPosts from '../components/HomeLatestPosts/HomeLatestPosts';

axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

function Home(props) {

  return (
    <>
      <Head>
        <title>{props.homeData.title}</title>
        <meta name="description" content={props.homeData.description} />
      </Head>
      <Header homeData={props.homeData} />
      <section>
        <div className='container'>
          <h2>ABT</h2>
          <img src='https://via.placeholder.com/350/fffffff' alt='profile photo'></img>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu non odio euismod. Nisi est sit amet facilisis. Sit amet porttitor eget dolor morbi non arcu risus. Eleifend quam adipiscing vitae proin sagittis nisl. Congue quisque egestas diam in arcu cursus euismod. At in tellus integer feugiat scelerisque. Nunc eget lorem dolor sed viverra ipsum nunc. Imperdiet massa tincidunt nunc pulvinar. Justo nec ultrices dui sapien eget. A arcu cursus vitae congue mauris rhoncus.</p>
          <ToolBelt />
        </div>
      </section>
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