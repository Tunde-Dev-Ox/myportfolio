import './index.scss'
import { MdExplore, MdMiscellaneousServices } from "react-icons/md";
import { FaDiagramProject, FaGithub, FaLinkedin, FaSpotify, FaTwitter } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { GiSkills } from "react-icons/gi";
import { TbWriting } from "react-icons/tb";
import { Link } from 'react-router-dom'
import { BiCertification } from 'react-icons/bi';
import { CiMail } from 'react-icons/ci';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar--innerwrapper">
            <div className="sidebar__logo">
                <figure>
                    <img src="https://josephtunde.tech/assets/images/tunde.jpg" alt="Logo" />
                </figure>
                <div className="sidebar-header">
                    <h4>Joseph Tunde</h4>
                    <p>
                        Technical PM
                    </p>
                </div>
            </div>
            <div className="sidebar__top-nav">
                <ul>
                    <li>
                        <Link to="/">
                             <MdExplore />
                             <span className='sidebar__nav-text'>
                                Explore
                             </span>
                             <div className="list--number">
                                <span>
                                    1
                                </span>
                             </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                             <FaDiagramProject />
                             <span className='sidebar__nav-text'>
                                Work
                             </span>
                             <div className="list--number">
                                <span>
                                    2
                                </span>
                             </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/services">
                             <MdMiscellaneousServices />
                             <span className='sidebar__nav-text'>
                                Services
                             </span>
                             <div className="list--number">
                                <span>
                                    3
                                </span>
                             </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                             <ImProfile />
                             <span className='sidebar__nav-text'>
                                About
                             </span>
                             <div className="list--number">
                                <span>
                                    4
                                </span>
                             </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/skills">
                             <GiSkills />
                             <span className='sidebar__nav-text'>
                                Skills Matrix
                             </span>
                             <div className="list--number">
                                <span>
                                    5
                                </span>
                             </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog">
                             <TbWriting />
                             <span className='sidebar__nav-text'>
                                Publications
                             </span>
                             <div className="list--number">
                                <span>
                                    6
                                </span>
                             </div>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/">
                             <FaBriefcase />
                             <span className='sidebar__nav-text'>
                                Case studies
                             </span>
                             <div className="list--number">
                                <span>
                                    8
                                </span>
                             </div>
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/certifications">
                             <BiCertification />
                             <span className='sidebar__nav-text'>
                                Certifications
                             </span>
                             <div className="list--number">
                                <span>
                                    7
                                </span>
                             </div>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/">
                             <IoMdStats />
                             <span className='sidebar__nav-text'>
                                Stats
                             </span>
                             <div className="list--number">
                                <span>
                                    10
                                </span>
                             </div>
                        </Link>
                    </li> */}
                </ul>
            </div>
            <div className="sidebar__lower-nav">
            <ul>
                <li>
                    <Link to="mailto:iamjosephtunde@gmail.com">
                        <CiMail />
                    </Link>
                </li>
                <li>
                    <Link to="https://x.com/__jot">
                        <FaTwitter />
                    </Link>
                </li>
                <li>
                    <Link to="https://github.com/Tunde-Dev-Ox">
                        <FaGithub />
                    </Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/in/josephtunde/">
                        <FaLinkedin />
                    </Link>
                </li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Sidebar