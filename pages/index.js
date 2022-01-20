import axios from 'axios';
import https from "https";
import Head from "next/head";

import HomeHeader from '../components/HomeHeader/HomeHeader';
import HomeLatestPosts from '../components/HomeLatestPosts/HomeLatestPosts';

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

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
      <Container>
        <section>
          <Row>
            <h2>{props.homeData.section1}</h2>
            <article><p>{props.homeData.section1body}</p></article>
          </Row>
        </section>
        <section>
          <h2>{props.homeData.section2}</h2>
          <HomeLatestPosts posts={props.posts} />
        </section>

      </Container>

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