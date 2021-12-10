import NavBar from "../components/NavBar/NavBar"
import "../styles/index.scss";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
