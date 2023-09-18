import Head from "next/head";
// import dynamic from "next/dynamic";

import LandingScreen from "@/components/LandingScreen";
// const Overview = dynamic(() => import("@/components/Overview"));
import Overview from "@/components/Overview";
// const Gallery = dynamic(() => import("@/components/Gallery"));
import Gallery from "@/components/Gallery";
// const Amenities = dynamic(() => import("@/components/Amenities"));
import Amenities from "@/components/Amenities";
// const Trainers = dynamic(() => import("@/components/Trainers"));
import Trainers from "@/components/Trainers";
// const Pricing = dynamic(() => import("@/components/Pricing"));
import Programs from "@/components/Programs";
// const Footer = dynamic(() => import("@/components/Footer"));
import Footer from "@/components/Footer";
// const BackToTop = dynamic(() => import("@/utils/components/BackToTop"));
import BackToTop from "@/utils/components/BackToTop";

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

const Index = () => {
  return (
    <>
      <Head>
        <title>Fusion Fitness</title>
      </Head>
      <LandingScreen />
      <Overview />
      <Amenities />
      <Trainers />
      <Gallery />
      <Programs />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Index;
