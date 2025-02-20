import './index.scss';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { CiHome, CiMail } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { PiSuitcaseSimple } from 'react-icons/pi';
import { GoStack } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { useState } from 'react';



const MobileHeader = () => {
        const sideBarData = [
            {
                id: 1,
                title: 'Home',
                icon: <CiHome />,
                link: '/'
            },
            {
                id: 2,
                title: 'About',
                icon: <IoPersonOutline />,
                link: '/about'
            },
            {
                id: 3,
                title: 'Projects',
                icon: <PiSuitcaseSimple />,
                link: '/projects'
            },
            {
                id: 4,
                title: 'Stack',
                icon: <GoStack />,
                link: '/stack'
            },
            {
                id: 5,
                title: 'Blog',
                icon: <IoBookOutline />,
                link: '/blog'
            },
            {
                id: 6,
                title: 'Contact',
                icon: <CiMail />,
                link: '/contact'
            }
        ]
        const [active, setActive] = useState(() => {
            return localStorage.getItem('activeSidebarIndex') 
                ? parseInt(localStorage.getItem('activeSidebarIndex')) 
                : null;
        });
    
        const handleActive = (index) => {
            const newIndex = active === index ? null : index;
            setActive(newIndex);
            localStorage.setItem('activeSidebarIndex', newIndex);  // Store the value
        };
        const [open, setOpen] = useState(false);
        const handleOpen = () => {
            setOpen(!open);
        }
    return (
        <div className="mobile_header">
            <div className="mobile-header_container">
                <Link to="/" className="mobile_header__left">
                    <figure>
                        <img src="/tunde.png" alt="Logo" />
                    </figure>
                    <div className="mobile_header__content">
                        <h4>Joseph Tunde</h4>
                        <p>
                            Technical PM
                        </p>
                    </div>
                </Link>
                <div 
                    className={`mobile__hamburger ${open ? "open" : ""}`} 
                    onClick={handleOpen}
                >
                    <div className={`hamburger__line ${open ? "line1" : ""}`}></div>
                    <div className={`hamburger__line ${open ? "line2" : ""}`}></div>
                </div>
                <div className={open ? 'mobile_menu__active' : 'mobile_nav__dropdown_wrapper'}>
                <div className="mobile_nav__dropdown">
                    <ul>
                        {
                            sideBarData.map((item, index) => (
                                <li 
                                    key={index}
                                    onClick={() => handleActive(index)}
                                    className={active === index ? 'list-active' : ''}>
                                    <Link to={item.link}>
                                        {item.icon}
                                        <span className='sidebar__nav-text'>{item.title}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="mobile_line"></div>
                    <div className="sidebar__lower-nav">
                    <ul>
                        <li>
                            <Link to="https://x.com/__jot">
                                <FaTwitter />
                                <span className="social_media_text">
                                    Twitter
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://github.com/Tunde-Dev-Ox">
                                <FaGithub />
                                <span className="social_media_text">
                                    Github
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.linkedin.com/in/josephtunde/">
                                <FaLinkedin />
                                <span className="social_media_text">
                                    LinkedIn
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MobileHeader;