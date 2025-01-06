import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout";
import { FaCopy } from "react-icons/fa";
import {Helmet} from 'react-helmet-async';

const About = () => {
    return (
        <DashboardLayout>
        <Helmet>
            <title>
                Joseph Tunde - About
            </title>
        </Helmet>
        <div className="about">
            <h1 className="about-header">About Tunde</h1>
            <div className="about_top__wrapper">
                <p className="about-subtitle">
                    Joseph Tunde, CAPM <br /> Technical Product Manager <br /> Software Developer
                </p>
                <figure>
                     <img src="/tunde.jpg" alt="Tunde" />
               </figure>
            </div>
            <div className="about__empty_div"></div>
            <div className="about--card-wrapper">
               <div className="about-content">
                    <p>
                        Joseph began his career as a self-taught software developer building web applications with HTML, CSS, and JavaScript. He later transitioned into product management working immediately with Brooi, a startup that connect property owners with tenants. He has since worked with several teams and clients to build products that solve real-world problems.
                    </p>
                    <br />
                    <p>
                       Still a student at the University of Lagos, Joseph is passionate about building products that solve real-world problems. He is currently working as a co-founder on a platform that connects students with tutors for 1-on-1 science tutoring.
                    </p>
                    <br />
                    <p>
                        His attention to detail, empathy for users and team members, and ability to communicate effectively has helped him build products that users love. He is currently open to new opportunities and is looking to work with teams that are passionate about building products that solve real-world problems.
                    </p>
                    <br />
                    <p>
                        When he is not working, Joseph enjoys playing video games, reading, composing music and streaming Spotify. He is also a huge fan of Barcelona and enjoys watching football matches.
                    </p>
                    <br />
                    <p>
                        Choosing to work with Joseph means choosing to work with a team player who is passionate about excellence and success. He is always looking to learn new things and is open to feedback that will help him grow.
                    </p>
                    <div className="home-cta--wrapper">
                    <Link to="/services" className='home-cta'>
                        What I do
                    </Link>
                    <button>
                        <FaCopy />
                        <span>
                            Email
                        </span>
                    </button>
                </div>
               </div>
            </div>
        </div>
        </DashboardLayout>
    );
}

export default About;