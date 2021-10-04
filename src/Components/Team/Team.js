import React from 'react';
import './Team.css';
const Team = (props) => {

    const { name, image, designation, email } = props.team;

    return (
        <div className="course col">
            <div className="card h-100">


                <img className="card-img img-fluid " src={image} alt="" />

                <div className="card-body py-2">
                    <h3 className="salmon-color">{name}</h3>
                    <h6> {designation} </h6>
                    <p>Email : {email}</p>
                   


                </div>


            </div>

        </div>
    );
};

export default Team;