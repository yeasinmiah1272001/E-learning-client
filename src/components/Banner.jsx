import Container from "./Container";
import banner1 from "../assets/banner/banner-img.png";
import banner2 from "../assets/banner/admin-2.jpg";
import banner3 from "../assets/banner/5.png";
import banner4 from "../assets/banner/3.png";
import banner5 from "../assets/banner/admin-4.jpg";

const Banner = () => {
  return (
    <div className="py-16 lg:py-24 bg-[#BBE8EB] h-auto lg:h-[627px] relative">
      <Container className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Left Section */}
        <div className="text-center lg:text-left lg:max-w-[50%] px-4 lg:px-0">
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight text-gray-800">
            Master The Skills <br /> Drive Your Career.
          </h1>
          <p className="mt-4 text-gray-600 text-base lg:text-lg leading-relaxed">
            Through a combination of lectures, readings, and discussions, gain a
            solid foundation in educational psychology and elevate your career.
          </p>
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white py-3 px-6 lg:px-8 rounded-lg shadow-md transition duration-300">
            View All
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-auto relative">
          {/* Main Banner Image */}
          <img
            src={banner1}
            alt="Educational Banner"
            className="w-full h-auto max-w-md lg:max-w-none"
          />

          {/* Floating Card 1 */}
          <div className="h-36 w-72 p-4 bg-white absolute bottom-16 lg:bottom-24 left-6 rounded-md shadow-md">
            <img
              className="h-11 w-11 rounded-full"
              src={banner5}
              alt="Profile"
            />
            <h1 className="text-lg font-semibold mt-2">Brian Cumin</h1>
            <p className="text-sm text-gray-600 mt-1">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
            </p>
          </div>

          {/* Floating Element 1 */}
          <img
            className="absolute top-4 left-5 animate-bounce"
            src={banner4}
            alt="Floating Element"
          />

          {/* Floating Element 2 */}
          <img
            className="absolute top-10 right-0 animate-spin"
            src={banner3}
            alt="Floating Element"
          />

          {/* Floating Card 2 */}
          <div className="h-24 w-36 p-4 bg-white absolute bottom-40 lg:bottom-56 right-4 rounded-md shadow-md animate-bounce">
            <img
              className="h-11 w-11 rounded-full mb-2"
              src={banner2}
              alt="Profile"
            />
            <h1 className="text-sm font-medium">Congratulations</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
