import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>A-YO</title>
        <meta
          name="description"
          content="A-YO"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
