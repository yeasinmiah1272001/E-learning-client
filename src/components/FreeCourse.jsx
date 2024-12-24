import Container from "./Container";
import img1 from "../assets/1 (2).png";
import { FaStar } from "react-icons/fa";
import banner1 from "../assets/banner/shape-1.png";
import banner2 from "../assets/banner/2.png";

const FreeCourse = () => {
  return (
    <Container className="flex flex-col lg:flex-row gap-16 items-center p-6 lg:p-12 py-8">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 relative">
        <img src={img1} alt="Course illustration" className="w-full " />
        <div className="absolute  animate-bounce bottom-4 p-3 rounded-md left-52 h-20 w-32 bg-white shadow-xl shadow-black ">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-300" />
            <span>4k reviews</span>
          </div>
          <h1>Congratulations</h1>
        </div>
        <div className="absolute top-0 right-0 animate-ping">
          <img src={banner2} alt="" />
        </div>
        <div className="absolute bottom-0 right-0 animate-spin">
          <img src={banner1} alt="" />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        {/* Category Button */}
        <button className=" text-red-700 font-semibold py-3 px-6 bg-red-100    duration-300 border-l-8 border-red-600">
          Start learning Free
        </button>

        {/* Title */}
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-snug">
          Online Courses Tailored to the Needs of Learners
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg">
          Through a combination of lectures, readings, and discussions, students
          will gain a solid foundation in educational psychology.
        </p>

        {/* Features List */}
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>International course collection in 14 languages</li>
          <li>Top certifications in tech and business</li>
          <li>Access to 35,000+ top Eduan courses, anytime, anywhere</li>
        </ul>

        {/* Call-to-Action Button */}
        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white py-3 px-6 lg:px-8 rounded-lg shadow-md transition duration-300">
          View All
        </button>
      </div>
    </Container>
  );
};

export default FreeCourse;
