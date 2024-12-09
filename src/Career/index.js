import React, { useState } from "react";

const Career = () => {
  const [activeForm, setActiveForm] = useState("student");

  const StudentForm = () => (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Student Form</h2>
      <div>
        <label
          htmlFor="studentName"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="studentName"
          placeholder="Enter your name"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="studentName"
          className="block text-sm font-medium text-gray-700"
        >
          Mobile
        </label>
        <input
          type="number"
          id="studentName"
          placeholder="Enter your Mobile Number"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="studentAge"
          className="block text-sm font-medium text-gray-700"
        >
          Age
        </label>
        <input
          type="number"
          id="studentAge"
          placeholder="Enter your age"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="studentGoal"
          className="block text-sm font-medium text-gray-700"
        >
          Career Goal
        </label>
        <textarea
          id="studentGoal"
          placeholder="Describe your career goals"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );

  const TeacherForm = () => (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Teacher Form</h2>
      <div>
        <label
          htmlFor="teacherName"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="teacherName"
          placeholder="Enter your name"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="teacherName"
          className="block text-sm font-medium text-gray-700"
        >
          Mobile
        </label>
        <input
          type="number"
          id="teacherName"
          placeholder="Enter your Mobile Number"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="teacherSubject"
          className="block text-sm font-medium text-gray-700"
        >
          Subject
        </label>
        <input
          type="text"
          id="teacherSubject"
          placeholder="Enter your subject"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="teacherExperience"
          className="block text-sm font-medium text-gray-700"
        >
          Years of Experience
        </label>
        <input
          type="number"
          id="teacherExperience"
          placeholder="Enter your experience in years"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Career Options
        </h1>
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setActiveForm("student")}
            className={`px-4 py-2 rounded-md ${
              activeForm === "student"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setActiveForm("teacher")}
            className={`px-4 py-2 rounded-md ${
              activeForm === "teacher"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Teacher
          </button>
        </div>
        <div>
          {activeForm === "student" ? <StudentForm /> : <TeacherForm />}
        </div>
      </div>
    </div>
  );
};

export default Career;
