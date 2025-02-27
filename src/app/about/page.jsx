import "./index.scss";
import "../home.scss";
import Link from "next/link";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "../../components/contactCard";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { GiBlackBook } from "react-icons/gi";
import { GoRocket } from "react-icons/go";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function About() {
    return (
        <DashboardLayout>
        <div className="about-page">
        <div className="home__top">
                    <h1 className='home-title'>
                        About Me
                    </h1>
                    <div className="availability">
                        <div className="available">
                            <div className="green_blink"></div>
                            <span>
                                Available for work
                            </span>
                        </div>
                        <div className="contact-btn">
                            <Link href="/contact">
                                <span>
                                    Contact Me
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <p className='home-about'>
                    My journey has been shaped by my passion for building products that drives impact and solves user needs. I have worked on a variety of projects ranging from web applications to mobile apps. I am a product manager with a technical knowledge and a knack for building products that users love.
                </p>
                  <div className="about__section_wrapper">
                                        <div className="home_about__section_card">
                                            <HiOutlineAcademicCap />
                                            <h4>
                                                Academic Education
                                            </h4>
                                            <ul>
                                                <li>
                                                University of Lagos – B.A in Creative Arts<br /><br/>
                                                2020 - 2025
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="home_about__section_card">
                                            <GiBlackBook />
                                            <h4>
                                                Non-Formal Education
                                            </h4>
                                            <ul>
                                            <li>
                                                University of Alberta - Software product management (Coursera)<br /><br/>
                                                2023<br /><br/>
                                                <a href="https://coursera.org/share/3c07f0c2133d85e778013d95c05420bb">
                                                    See Certificate
                                                </a>
                                                </li>
                                                <li>
                                                Scrum Master Certification (Coursera)<br /><br/>
                                                2023<br /><br/>
                                                <a href="https://coursera.org/share/e388bd12ce23fd10d5a38b01d8e340c5">
                                                    See Certificate
                                                </a>
                                                </li>
                                                <li>
                                                    Python complete course - NitHub (University of Lagos)<br /><br/>
                                                    2025
                                                </li>
                                                <li>
                                                React Deep Dive (Educative)<br /><br/>
                                                2024
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="home_about__section_card">
                                            <GoRocket />
                                            <h4>
                                                Experience
                                            </h4>
                                            <ul>
                                                <li>
                                                Alvonant - A tech outsourcing company that connects businesses with developers.<br /><br/>
                                                Junior Product Manager<br /><br/>
                                                2024<br /><br/>
                                                </li>
                                                <li>
                                                Brooi - A vacation rental platform that connects property owners with travelers.<br /><br/>
                                                Product Manager<br /><br/>
                                                2022 - 2025<br /><br/>
                                                <a href="https://www.brooi.com">
                                                    See Project
                                                </a>
                                                </li>
                                                <li>
                                                Lingroks - An AI powered text and audio translator that helps you learn new languages.<br /><br/>
                                                Technical Product Manager<br /><br/>
                                                2024 - 2025<br /><br/>
                                                <a href="https://www.lingroks.live">
                                                    See Project
                                                </a>
                                                </li>
                                                {/* <li>
                                                Nithub - A tech hub where students can build to become software engineers.<br /><br/>
                                                Frontend Developer (6 months programme)<br /><br/>
                                                2025<br /><br/>
                                                </li> */}
                                            </ul>
                                        </div>
                                        <div className="home_about__section_card">
                                            <LiaCertificateSolid />
                                            <h4>
                                                Certifications
                                            </h4>
                                            <ul>
                                               <li>
                                                Project Management Professional (PMP) - PMI -- In view<br /><br/>
                                                2025
                                               </li>
                                            </ul>
                                        </div>
                                    </div>
                
                  <div className="home_stacks">
                                    <h3 className="home_stacks-header">
                                        Stacks
                                    </h3>
                                    <div className="home__stacks_wrapper">
                                        <div className="home__stack_card">
                                            <img src="/ClickUp_idfty-HNVU_0.svg" alt="clickup" />
                                            <h4>
                                                ClickUp
                                            </h4>
                                        </div>
                                        <div className="home__stack_card">
                                            <img src="/trello.svg" alt="trello" />
                                            <h4>
                                                Trello
                                            </h4>
                                        </div>
                                        <div className="home__stack_card">
                                            <img src="/notion-2.svg" alt="notion" />
                                            <h4>
                                                Notion
                                            </h4>
                                        </div>
                                        <div className="home__stack_card">
                                            <img src="/postman.svg" alt="postman" />
                                            <h4>
                                                API Testing
                                            </h4>
                                        </div>
                                        <div className="home__stack_card">
                                            <img src="/github.svg" alt="github" />
                                            <h4>
                                                Github
                                            </h4>
                                        </div>
                                        <div className="home__stack_card">
                                            <img src="/user.svg" alt="user research" />
                                            <h4>
                                                User research
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="see-more">
                                        <Link href="/stack">
                                            <span>
                                                View full stack
                                            </span>
                                            <IoIosArrowRoundForward />
                                        </Link>
                                    </div>
                                </div>
                <ContactCard />
        </div>
        </DashboardLayout>
    );
}