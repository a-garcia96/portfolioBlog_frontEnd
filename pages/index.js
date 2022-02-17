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
      <section className="home-page__section-summary">
        <div className="container">
          <div className="row">
            <div className="col-1-of-2">
              <div className="u-vertical-align">
                <div className="u-text-center">
                  <h2 className='heading-secondary u-margin-small'>Passionate at heart</h2>
                </div>
                <p className='u-margin-small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea recusandae itaque numquam omnis facilis voluptatibus natus perferendis tenetur, vitae porro sed veritatis quia, consectetur quae. Temporibus quod asperiores optio.</p>
                <button className='button button__secondary'><a className='button__link' href="#">Read more &rarr;</a></button>
              </div>
            </div>
            <div className="col-1-of-2">
              <div className="home-page__profile-photo-container">
                <div className="home-page__profile-photo">
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-toolbelt">
        <div className="container">
          <div className="u-text-center">
            <h2 className='heading-secondary u-margin-small'>My Toolkit</h2>
          </div>
          <ToolBelt />
        </div>
      </section>
      <section className="section-featured-posts">

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