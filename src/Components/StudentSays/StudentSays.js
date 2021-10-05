import React from 'react';
import student1 from './ImagesStudent/student11.jpg';
import student2 from './ImagesStudent/student2.jpg';
import student3 from './ImagesStudent/student3.jpg';
import './StudentSays.css';

const StudentSays = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div>
                <h1 className="student-header"><span className="salmon-color">Student say</span> about us</h1>
                <div className="d-flex flex-wrap  justify-content-center align-items-center">
                    <div className="student-div d-flex justify-content-center align-items-center">
                        <img src={student1} className="student-img" alt="" />
                        <div>
                            <h4>Misbah Uddin</h4>
                            <p>This Coaching is very family friendly and the students and teachers are very supportive </p>
                        </div>
                    </div>
                    <div className="student-div d-flex justify-content-center align-items-center">
                        <img src={student2} className="student-img" alt="" />
                        <div>
                            <h4>Tasfia Chowdhury</h4>
                            <p>The teachers were very friendly and helped me as much as possible.</p>
                        </div>
                    </div>
                    <div className="student-div d-flex justify-content-center align-items-center">
                        <img src={student3} className="student-img" alt="" />
                        <div>
                            <h4>Ashab Hussen</h4>
                            <p>The teachers are just so kind that everyone feels comfortable</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentSays;