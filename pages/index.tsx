import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Skills from "../components/Skills";

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  console.log(data);
  return (
    <div className="container mx-auto px-5 sm:px-10">
      <Head>
        <title>designer_o | figma expert ui ux designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Hero />
      </div>
      <About />
      <Skills />
      <Work data={data} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `https://api.dribbble.com/v2/user/shots?access_token=0cd8ca4207a6d5bd13ca0eed5e84578f04db37abaf60a37b7ad4b73b4a76502b`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};
