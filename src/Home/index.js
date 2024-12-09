// src/pages/Home.js
import React from "react";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Services Section */}
        <section id="services" className="py-6 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-600">Our Services</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-indigo-500">
                  All Board Coaching
                </h3>
                <p className="mt-4 text-gray-600">
                  Navigate your career path with expert guidance.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-indigo-500">
                  Home Tution
                </h3>
                <p className="mt-4 text-gray-600">
                  Best teachers Avilabel Here
                </p>
              </div>

              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-indigo-500">
                  Career Coaching
                </h3>
                <p className="mt-4 text-gray-600">
                  Navigate your career path with expert guidance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="py-6 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-600">
              Classes Duration
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-indigo-500">
                  Daily Classes
                </h3>
                <p className="mt-4 text-gray-600">Interactive classes</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-indigo-500">
                  Monthly Test Paper
                </h3>
                <p className="mt-4 text-gray-600">
                  Tests, Sample Papers & Notes
                </p>
              </div>

              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-indigo-500">
                  Doubt Session
                </h3>
                <p className="mt-4 text-gray-600">Doubt Solving Sessions</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-indigo-500">
                  10 + Offline Centre
                </h3>
                <p className="mt-4 text-gray-600">100 + Offline centres</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-6 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-600">
              What's Guardianin Say
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <p className="text-gray-600">
                  Shree ji Tution helped me find clarity in my career and life!
                </p>
                <h3 className="mt-4 font-bold text-indigo-500">
                  {" "}
                  Bhola Prasad
                </h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <p className="text-gray-600">
                  I couldn't have grown my business without their expert
                  coaching!"
                </p>
                <h3 className="mt-4 font-bold text-indigo-500">Vikash Yadav</h3>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <div className="min-h-screen bg-gray-50 py-2 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-indigo-600 mb-8 text-center ">
              About Us
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {" "}
              <span className="font-semibold">Shri ji Tution</span>, Shree Ji
              Tuition offers expert tutoring for students from LKG to 12th grade
              across CBSE, ICSE, and UP Board. We provide personalized,
              one-on-one sessions focusing on individual student needs. Our
              experienced tutors cover all subjects, ensuring comprehensive
              understanding and academic excellence. For inquiries, call
              8009657788 and give your child the best educational support.
            </p>
            <br />
            <span>
              श्री जी ट्यूशन L.K.G से 12th कक्षा तक के छात्रों के लिए CBSE ,ICSC
              , UP बोर्ड में विशेषज्ञ ट्यूशन प्रदान करता है। हम प्रत्येक छात्र
              की आवश्यकताओं पर ध्यान केंद्रित करते हुए व्यक्तिगत, एक-से-एक सत्र
              प्रदान करते हैं। हमारे अनुभवी शिक्षक सभी विषयों को कवर करते हैं,
              जिससे व्यापक समझ और शैक्षणिक उत्कृष्टता सुनिश्चित होती है। जानकारी
              के लिए, 8009657788 पर कॉल करें और अपने बच्चे को सर्वश्रेष्ठ
              शैक्षिक सहायता प्रदान करें।
            </span>

            <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
              Why Choose Us?
            </h2>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Hands-On Learning with specific Example.</li>
              <li>Expert Teacher For All Boards.</li>
              <li>
                Comprehensive Curriculum covering from basics to advanced
                topics.
              </li>
              <li>Tailored Support with one-on-one coaching.</li>
            </ul>
            <h2 className="text-3xl font-semibold text-indigo-600 mt-8 mb-4">
              Weekly and Monthly Test
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Weekly Test</li>
              <li>Monthly Test</li>
              <li>Career Guidance</li>
            </ul>
            <h2 className="text-3xl font-semibold text-indigo-600 mt-8 mb-4">
              Our Teaching Philosophy
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We believe learning should be fun and rewarding...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
