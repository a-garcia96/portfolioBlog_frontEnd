import NavBar from "../components/NavBar/NavBar"
import "../styles/index.scss";
import Head from "next/head"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
