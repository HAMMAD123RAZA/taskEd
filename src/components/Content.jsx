import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import db from '../firebase/DbConfig';

const Content = () => {
  const [course, setCourses] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const querySnapShot = await getDocs(collection(db, "courses"));
      const fetchedCourses = querySnapShot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCourses(fetchedCourses);
    } catch (error) {
      console.error("Error in fetching:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "courses", id));
      setCourses(course.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const handleEdit = (courseData) => {
    navigate(`/edit/${courseData.id}`, { state: { course: courseData } });
  };

  const filterData = course.filter((item) =>
    item.courseName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center p-2">
        <div>
          <p className="text-4xl font-bold">Courses</p>
          <p>Manage Your Course List Here</p>
        </div>
        <Link
          to="/create"
          className="bg-gray-700 my-2 hover:bg-white hover:text-gray-700 font-bold border-2 border-gray-700 text-white p-2 rounded-lg"
        >
          Add New Course
        </Link>
      </div>

      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search..."
        className="border my-6 border-gray-400 rounded-xl p-2 w-1/3"
      />

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-xs text-black uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">Course Name</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Payable Price</th>
              <th scope="col" className="px-6 py-3">Discount Status</th>
              <th scope="col" className="px-6 py-3">Discount Value</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((course) => (
              <tr key={course.id} className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-black">{course.courseName}</td>
                <td className="px-6 py-4">{course.coursePrice}</td>
                <td className="px-6 py-4">{course.coursePrice}</td>
                <td className="px-6 py-4">{course.discountStatus}</td>
                <td className="px-6 py-4">{course.discountValue}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(course)}
                    className="bg-gray-700 my-2 hover:bg-white hover:text-gray-700 font-bold border-2 border-gray-700 text-white px-4 py-2 rounded-lg"
                    >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="bg-red-600 my-2 hover:bg-white hover:text-red-600 font-bold border-2 border-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;
