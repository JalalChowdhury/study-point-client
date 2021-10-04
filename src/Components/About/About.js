import React from 'react';
import { useEffect, useState } from 'react';
import aboutImage from "../../Images/aboutImg.png";
import Team from '../Team/Team';
import "./About.css";

const About = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('./teamFakeData.json')
            .then(res => res.json())
            .then(data => setTeams(data));
    }, [])

    return (
        <div>
            <div className="about-header row  d-flex justify-content-center align-items-center px-4 mb-3">
                <div className="col-md-7 ps-5  d-flex justify-content-center align-items-center ">
                    <div>
                        <h1>
                            The world needs people like you. And you need people like us.
                        </h1>
                        <p>
                            We believe that any enterprising individual has the ability to change the world. But we also recognise that changing
                            the world by yourself is hard. Really hard. That’s why we exist!
                        </p>
                    </div>
                </div>
                <div className="col-md-5  d-flex justify-content-center align-items-center">
                    <img src={aboutImage} alt="" />
                </div>
            </div>
            <div>
                <h1 className="team-header">Our <span className="salmon-color">Teams</span> </h1>
                <div className="row row-cols-1 row-cols-md-4 g-4 px-5">
                    {
                        // console.log(courses);
                        teams.map(team =>

                            <Team
                                key={team.id}
                                team={team}
                            >
                            </Team>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default About;