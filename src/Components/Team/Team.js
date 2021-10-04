
import React from 'react';
import './Team.css';
const Team = (props) => {

    const { name, image, designation, email } = props.team;

    return (
        <div className="course col">
            <div className="card h-100 p-3">


                <img className="card-img rounded-circle img-fluid " src={image} alt="" />

                <div className="card-body py-2">
                    <h3 className="salmon-color">{name}</h3>
                    <h6> {designation} </h6>
                    <p><i class="fas fa-envelope-square"></i> {email}</p>
                    <div className="social-links text-center">
                        <a href="https://www.facebook.com/" target="_blank" ><i class="fab fa-facebook"></i></a>
                        <a  target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram-square"></i></a>
                        <a target="_blank" href="https://www.instagram.com/"><i class="fab fa-twitter-square"></i></a>
                        <a target="_blank" href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                    </div>



                </div>


            </div>

        </div>
    );
};

export default Team;