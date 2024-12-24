import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Container from "./Container";
import axios from "axios";
import CourseCard from "./CourseCard";

const AllCourse = () => {
  const [selectedProducts, setSelectedProducts] = useState("All");

  const [course, setCourse] = useState([]);

  const filterCourse =
    selectedProducts === "All"
      ? course
      : course.filter((item) => item.category === selectedProducts);

  console.log("fil", filterCourse);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/course.json");
        setCourse(response.data);
        // setLoading(false);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
        // setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <Container className={"py-8"}>
      <div>
        <h1 className="text-center text-4xl border-l-8 border-r-8 border-red-500 font-bold  w-3/4 mx-auto py-2 rounded-md shadow-lg">
          <Typewriter
            words={[
              "Explore Featured Courses",
              "Web Development",
              "App Development",
              "Data Science",
              "Ethical Hacking",
              "Digital Marketing",
            ]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
          />
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 items-center mx-auto w-full p-2 mt-6 bg-gray-100 shadow-md border border-gray-200 rounded-lg">
        {[
          "All",
          "Web Development",
          "App Development",
          "Data Science",
          "Ethical Hacking",
          "Digital Marketing",
        ].map((category, index) => (
          <button
            key={index}
            className={`px-3 py-2 rounded-full text-xl font-medium transition-all duration-300 ease-in-out focus:outline-none hover:scale-105 ${
              selectedProducts === category
                ? "bg-green-500 text-white shadow-lg transform scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-green-100"
            }`}
            onClick={() => setSelectedProducts(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto justify-center items-center mt-8">
        {filterCourse.map((item) => (
          <CourseCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default AllCourse;
