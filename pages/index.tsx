import type { NextPage } from "next";
import Intro from "../components/intro";
import Profile from "../components/profile";
import Preview from "../components/preview";
import Head from "next/head";
// This website is inspired by Lee Robinson's portfolio website

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Howard Zhong</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="google-site-verification"
          content="qA4NIYywHFdQtbuCLy61QVcskM73Un_rL4AjlUaz9Fs"
        />
        <link
          rel="canonical"
          href="https://howardzhong.vercel.app/"
          key="canonical"
        />
      </Head>
      <Intro />
      <Preview />
      <Profile />
    </div>
  );
};

export default Home;
