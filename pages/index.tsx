import type { NextPage } from "next";
import { Layout } from "../components/navbar/layout";
import { Nav } from "../components/navbar/navbar";
// import {Hero} from '../components/hero';
// import {Trusted} from '../components/trusted';
import { Box } from "../components/styles/box";
// import {Features1} from '../components/features1';
// import {Features2} from '../components/features2';
// import {Features3} from '../components/features3';
// import {Testimonials} from '../components/tesminonials';
// import {Statistics} from '../components/statistics';
// import {Plans} from '../components/plans';
// import {Faq} from '../components/faq';
// import {Trial} from '../components/trial';
import { Footer } from "../components/footer";
import { TempImage } from "../components/temp_img";
import { Temporary } from "../components/temporary";

const Home: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main">
        {/* <Hero />
            <Trusted />
            <Features1 />
            <Features2 />
            <Features3 />
            <Testimonials />
            <Statistics />
            <Plans />
            <Faq />
            <Trial /> */}

        <Temporary />
        <TempImage />
        <Footer />
      </Box>
    </Layout>
  );
};

export default Home;
