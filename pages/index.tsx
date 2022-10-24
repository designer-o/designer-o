import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-5 sm:px-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Hero />
      </div>
      <About />
      <Skills />
    </div>
  );
};

export default Home;
