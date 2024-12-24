import React from "react";
import Banner from "../components/Banner";
import Brand from "../components/Brand";
import PopularCategory from "../components/PopularCategory";
import FreeCourse from "../components/FreeCourse";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brand />
      <PopularCategory />
      <FreeCourse />
    </div>
  );
};

export default Home;
