import React, { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    "https://img.freepik.com/free-photo/beautiful-young-woman-posing-park_1153-6549.jpg?ga=GA1.1.1277803213.1731861520&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/beautiful-young-woman-posing-park_1153-6549.jpg?ga=GA1.1.1277803213.1731861520&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/beautiful-young-woman-posing-park_1153-6549.jpg?ga=GA1.1.1277803213.1731861520&semt=ais_hybrid",
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Gallery
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Take a peek into the exciting world of{" "}
          <span className="font-semibold">Shri ji Tution and Coaching</span>!
          Here are some snapshots from our live classes, student images, and
          events.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative">
              <img
                src={selectedImage}
                alt="Selected"
                className="max-h-screen max-w-full rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
