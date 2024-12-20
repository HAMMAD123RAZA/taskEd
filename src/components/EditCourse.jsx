import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import db from '../firebase/DbConfig';

const EditCourse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { course } = location.state;

  const [formData, setFormData] = useState({
    courseName: course.courseName || '',
    coursePrice: course.coursePrice || '',
    discountStatus: course.discountStatus || '',
    discountValue: course.discountValue || '',
    coursePrivateStatus: course.coursePrivateStatus || '',
    isFree: course.isFree || false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const courseRef = doc(db, 'courses', course.id);
      await updateDoc(courseRef, formData);
      navigate('/');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Edit Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
          placeholder="Course Name"
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          name="coursePrice"
          value={formData.coursePrice}
          onChange={handleChange}
          placeholder="Course Price"
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          name="discountStatus"
          value={formData.discountStatus}
          onChange={handleChange}
          placeholder="Discount Status"
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          name="discountValue"
          value={formData.discountValue}
          onChange={handleChange}
          placeholder="Discount Value"
          className="border p-2 w-full rounded"
        />
        <label>
          <input
            type="checkbox"
            name="isFree"
            checked={formData.isFree}
            onChange={() =>
              setFormData((prev) => ({ ...prev, isFree: !prev.isFree }))
            }
          />
          Is Free
        </label> <br />
        <button type="submit"
            className="bg-gray-700 my-2 hover:bg-white hover:text-gray-700 font-bold border-2 border-gray-700 text-white p-1 rounded-lg"
            >
          Update Course
        </button>
      </form>
    </div>
  );
};

export default EditCourse;