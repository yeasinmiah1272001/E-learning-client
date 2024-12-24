import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { category } from "../constant";
import Container from "./Container";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PopularCategory = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <Container className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        {/* Left Section */}
        <div className="col-span-1 space-y-4">
          <button className="bg-red-100 text-black font-semibold py-3 px-6 rounded-md shadow hover:bg-red-200 transition duration-300 border-l-8 border-red-600">
            Browse Category
          </button>
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 leading-tight">
            Popular Categories
          </h2>
          <div className="flex gap-4 mt-4">
            <button
              onClick={previous}
              className="bg-gray-800 text-white p-3 rounded-full shadow hover:bg-red-700 transition duration-300"
            >
              <FaArrowCircleLeft size={26} />
            </button>
            <button
              onClick={next}
              className="bg-gray-800  text-white p-3 rounded-full shadow hover:bg-red-700 transition duration-300"
            >
              <FaArrowCircleRight size={26} />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-3">
          <Slider ref={sliderRef} {...settings}>
            {category.map((item) => (
              <div key={item.id} className="p-4">
                <div className="rounded-lg border border-gray-200 shadow-md hover:shadow-lg overflow-hidden  transition group bg-gradient-to-b from-white to-gray-50">
                  <img
                    className="w-full h-56 object-cover  transition-transform duration-300 group-hover:scale-105"
                    src={item.img}
                    alt={item.name}
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-medium text-gray-800 truncate">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default PopularCategory;
