import React from "react";
import Banner from "../components/Banner";
import Brand from "../components/Brand";
import PopularCategory from "../components/PopularCategory";
import FreeCourse from "../components/FreeCourse";
import AllCourse from "../components/AllCourse";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brand />
      <PopularCategory />
      <AllCourse />
      <FreeCourse />
    </div>
  );
};

export default Home;
