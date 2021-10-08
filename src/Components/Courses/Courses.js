import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import "./Courses.css";
const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setCourses(data));
    
      } ,[]);
      console.log(courses);
    return (
        
    <div >
        <div className="courses-container">
        <h1>Our Courses</h1>
        
        <div className="search-box">
            <input type="text" className="p-2" placeholder="Search Course"/>
            <button className="search-btn">Search</button>
        </div>
        <div className="courses">
        <div className="row">
        {
    courses.map(course => (
        
        <div className="col-md-3 g-4">
                    <div className="card">
                        <div className="card-img">
                            <img src={course.img} alt="" className="" />
                        </div>
                        <h3>{course.title}</h3>
                        <h6>Price : {course.price} $</h6>
                        <p>{course.description} </p>
                        <NavLink to={`/enroll/${course.key}`}>
                        <button className="mt-3 enroll-btn">Enroll Now </button>
                        </NavLink>
          
                    </div>
            </div>
             ))}
        
        

        </div>
        </div>
        
        
    </div>
    </div>
    );
};

export default Courses;
