import axios from 'axios';
import https from "https";
import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header/Header';
import ToolBelt from '../components/ToolBelt/ToolBelt';
import HomeLatestPosts from '../components/FeaturedPosts/FeaturedPosts';

axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

function Home(props) {

  return (
    <div className='home-page'>
      <Head>
        <title>{props.homeData.title}</title>
        <meta name="description" content={props.homeData.description} />
      </Head>
      <section className="home-page__section-homeHeader">
        <Header homeData={props.homeData} />
      </section>
      <section className="section-summary">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="u-text-center">
                <h2 className='heading-secondary u-margin-small'>About Me</h2>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea recusandae itaque numquam omnis facilis voluptatibus natus perferendis tenetur, vitae porro sed veritatis quia, consectetur quae. Temporibus quod asperiores optio.</p>
            </div>
            <div className="col">
              <img src='https://via.placeholder.com/350/fffffff' alt='profile photo'></img>
            </div>
          </div>
        </div>
      </section>
      <section className="section-toolbelt">
        <div className="container">
          <div className="u-text-center">
            <h2 className='heading-secondary'>My Toolkit</h2>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </section>
    </div>
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