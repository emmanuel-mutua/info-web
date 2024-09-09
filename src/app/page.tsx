import Navbar from "./navbar/navbar";
import HeroSection from "./hero_section/hero";
import Head from "next/head";
import OurServices from "./services/OurServices";
import Team from "./team/Team";
import JoinSection from "./joinus/JoinSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CBC Training and Management</title>
        <meta name="description" content="Discover about CBC training and management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
      <OurServices />
      <Team/>
      <JoinSection/>
    </div>
  );
}
