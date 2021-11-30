import axios from 'axios';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import HomeLatestPosts from '../components/HomeLatestPosts/HomeLatestPosts';

function Home(props) {

  return (
    <>
      <HomeHeader homeData={props.homeData} />
      <div className="container">
        <HomeLatestPosts posts={props.posts} />
      </div>

    </>
  );
}

export default Home;

export async function getStaticProps() {
  const homeRes = await axios.get("http://localhost:1337/home");
  const postsRes = await axios.get("http://localhost:1337/posts");



  return {
    props: {
      posts: postsRes.data,
      homeData: homeRes.data
    }
  }
}