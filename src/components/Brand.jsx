import Marquee from "react-fast-marquee";
import brand1 from "../assets/brand/h_1.png";
import brand2 from "../assets/brand/h_2.png";
import brand3 from "../assets/brand/h_3.png";
import brand4 from "../assets/brand/h_4.png";
import brand5 from "../assets/brand/h_5.png";
import brand6 from "../assets/brand/h_6.png";
import Container from "./Container";
const Brand = () => {
  return (
    <Container className={"py-6"}>
      <h1 className="text-center text-2xl font-semibold">
        340+ Leading Universities And Companies
      </h1>
      <Marquee className="border border-gray-300 mt-7 rounded-md">
        <div className="flex justify-center items-center space-x-20 mx-auto  p-4  ">
          <img className="" src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
          <img src={brand4} alt="" />
          <img src={brand5} alt="" />
          <img src={brand6} alt="" />
        </div>
      </Marquee>
    </Container>
  );
};

export default Brand;
