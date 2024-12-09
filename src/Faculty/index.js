import React from "react";
import Slider from "../Component/Slider/Slider";

const facultyMembers = [
  {
    name: "Jamwant Singh",
    title: "Director",
    bio: "This is a very experience Person , specialized for management. He has worked with top Coaching and is passionate about teaching aspiring.",
    imageUrl:
      "https://img.freepik.com/free-photo/beautiful-young-woman-posing-park_1153-6549.jpg?ga=GA1.1.1277803213.1731861520&semt=ais_hybrid",
    linkedin: "",
    github: "",
  },
  {
    name: "Aniket Singh",
    title: "Co Director",
    bio: "This is a very experience teacher, specialized for English. He has worked with top Coaching and is passionate about teaching aspiring.",
    imageUrl:
      "https://img.freepik.com/free-photo/beautiful-young-woman-posing-park_1153-6549.jpg?ga=GA1.1.1277803213.1731861520&semt=ais_hybrid",
    linkedin: "",
    github: "",
  },
  {
    name: "Pooja singh",
    title: "Teacher",
    bio: "This is a very experience teacher, specialized for Maths. He has worked with top Coaching and is passionate about teaching aspiring.",
    imageUrl:
      "https://img.freepik.com/free-photo/beautiful-young-woman-posing-park_1153-6549.jpg?ga=GA1.1.1277803213.1731861520&semt=ais_hybrid",
    linkedin: "",
    github: "",
  },
];

const Faculty = () => {
  return (
    <div className="min-h-[14rem] bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Meet Our Faculty
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          Our instructors are experts in their fields and are dedicated to
          helping you achieve your learning goals. Get to know them below.
        </p> */}
        <Slider />
      </div>
    </div>
  );
};

export default Faculty;
