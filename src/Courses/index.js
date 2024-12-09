import React from "react";

const Courses = () => {
  return (
    <div className=" bg-gray-50 py-10 px-4 text-center">
      <section id="services" className="py-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-600">Avilable Board</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-500">UP Board</h3>
              <p className="text-gray-600 mt-2">Duration: Full Syllabus</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-500">CBSC Board</h3>
              <p className="text-gray-600 mt-2">Duration: Full Syllabus</p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-500">ICSE Board</h3>
              <p className="text-gray-600 mt-2">Duration: Full Syllabus</p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section id="services" className="py-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-600">
            Avilabel Subject
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-500">Hindi</h3>
              <p className="text-gray-600 mt-2">Basic to Advance</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-500">English</h3>
              <p className="text-gray-600 mt-2">Basic to Advance</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-500">Maths</h3>
              <p className="text-gray-600 mt-2">Basic to Advance</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-500">Physics</h3>
              <p className="text-gray-600 mt-2">Basic to Advance</p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-500">Chemistry</h3>
              <p className="text-gray-600 mt-2">Basic to Advance</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-500">Biology</h3>
              <p className="text-gray-600 mt-2">Basic to Advance</p>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-500 mb-6">
          About Tution Fee
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          {" "}
          Shree Ji Tuition offers personalized and affordable tutoring services
          tailored to each student's needs. Our tuition fees are structured to
          provide quality education at a reasonable cost, ensuring every child
          gets the attention they deserve. We offer flexible payment plans,
          making it easier for parents to invest in their child's academic
          success. Our experienced teachers are dedicated to helping students
          excel in their studies, with a focus on strengthening their
          fundamentals. At Shree Ji Home Tuition, we believe in making quality
          education accessible to all, without compromising on excellence.
        </p>
        <span>
          श्री जी ट्यूशन व्यक्तिगत और किफायती ट्यूशन सेवाएं प्रदान करता है, जो
          प्रत्येक छात्र की आवश्यकताओं के अनुसार बनाई गई हैं। हमारी ट्यूशन फीस
          इस प्रकार संरचित है कि गुणवत्तापूर्ण शिक्षा को उचित मूल्य पर उपलब्ध
          कराया जा सके, जिससे हर बच्चे को उनकी जरूरत के अनुसार ध्यान मिल सके। हम
          लचीली भुगतान योजनाएं भी प्रदान करते हैं, जिससे माता-पिता के लिए अपने
          बच्चे की शैक्षणिक सफलता में निवेश करना आसान हो जाता है। हमारे अनुभवी
          शिक्षक छात्रों को उनकी पढ़ाई में उत्कृष्टता प्राप्त करने में मदद करने
          के लिए समर्पित हैं, और उनका ध्यान छात्रों की बुनियादी समझ को मजबूत
          करने पर केंद्रित है। श्री जी होम ट्यूशन में, हम गुणवत्ता शिक्षा को सभी
          के लिए सुलभ बनाने में विश्वास करते हैं, बिना किसी समझौते के।
        </span>
      </div>
    </div>
  );
};

export default Courses;
