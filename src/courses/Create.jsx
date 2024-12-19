import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import db from '../firebase/DbConfig';

const Create = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    courseDuration: '',
    coursePrice: '',
    coursePrivateStatus: '',
    courseLevel: '',
    isFree: '',
    discountStatus: '',
    discountValue: '',
    category: '',
    subCategory: '',
    courseShortDescription: '',
    courseDescription: '',
    requirements: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "courses"), formData);
      alert("Course added successfully!");
      setFormData({
        courseName: "",
        courseDuration: "",
        coursePrice: "",
        coursePrivateStatus: "",
        courseLevel: "",
        isFree: "",
        discountStatus: "",
        discountValue: "",
        category: "",
        subCategory: "",
        courseShortDescription: "",
        courseDescription: "",
        requirements: "",
      });
    } catch (error) {
      console.error("Error adding course: ", error);
      alert("Failed to add course.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center p-6 bg-gray-200 min-h-screen">
        <div className="w-full max-w-4xl bg-white shadow-md rounded px-8 py-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseName">
                Course Name
              </label>
              <input
                id="courseName"
                type="text"
                placeholder="Enter Course Name"
                value={formData.courseName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseDuration">
                Course Duration
              </label>
              <input
                id="courseDuration"
                type="text"
                placeholder="Enter Course Duration"
                value={formData.courseDuration}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coursePrice">
                Course Price
              </label>
              <input
                id="coursePrice"
                type="text"
                placeholder="Enter Course Price"
                value={formData.coursePrice}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coursePrivateStatus">
                Course Private Status
              </label>
              <select
                id="coursePrivateStatus"
                value={formData.coursePrivateStatus}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Select...</option>
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseLevel">
                Course Level
              </label>
              <select
                id="courseLevel"
                value={formData.courseLevel}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Select...</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isFree">
                Is Free?
              </label>
              <select
                id="isFree"
                value={formData.isFree}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Select...</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discountStatus">
                Discount Status
              </label>
              <select
                id="discountStatus"
                value={formData.discountStatus}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Select...</option>
                <option>Available</option>
                <option>Not Available</option>
              </select>
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discountValue">
                Discount Value
              </label>
              <input
                id="discountValue"
                type="text"
                placeholder="Enter Discount Value"
                value={formData.discountValue}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Select...</option>
                <option>Web </option>
                <option>Finance</option>
                <option >Fashion</option>
                <option >Tech</option>
              </select>
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subCategory">
                Sub Category
              </label>
              <select
                id="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>FullSTack</option>
                <option>Frontend</option>

              </select>

            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseShortDescription">
                Course Short Description
              </label>
              <textarea
                id="courseShortDescription"
                placeholder="Enter Course Short Description"
                value={formData.courseShortDescription}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="2"
              ></textarea>
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseDescription">
                Course Description
              </label>
              <textarea
                id="courseDescription"
                placeholder="Enter Course Description"
                value={formData.courseDescription}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
              ></textarea>
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="requirements">
                Requirements
              </label>
              <textarea
                id="requirements"
                placeholder="Enter Requirements"
                value={formData.requirements}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="2"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-gray-700 my-2 hover:bg-white hover:text-gray-700 font-bold border-2 border-gray-700 text-white p-2 rounded-lg"
          >
            Add Now
          </button>
        </div>
      </div>
    </form>
  );
};

export default Create;
