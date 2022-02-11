import axios from 'axios';
import https from "https";
import Head from "next/head";

import HomeHeader from '../components/HomeHeader/HomeHeader';
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
      <HomeHeader homeData={props.homeData} />
      <section>
        <h2>ABT</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu non odio euismod. Nisi est sit amet facilisis. Sit amet porttitor eget dolor morbi non arcu risus. Eleifend quam adipiscing vitae proin sagittis nisl. Congue quisque egestas diam in arcu cursus euismod. At in tellus integer feugiat scelerisque. Nunc eget lorem dolor sed viverra ipsum nunc. Imperdiet massa tincidunt nunc pulvinar. Justo nec ultrices dui sapien eget. A arcu cursus vitae congue mauris rhoncus.
        </p>
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