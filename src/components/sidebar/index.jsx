'use client';
import './index.scss';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { CiHome, CiMail } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { PiSuitcaseSimple } from 'react-icons/pi';
import { GoStack } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useMemo } from 'react';


const Sidebar = () => {
    const sideBarData = useMemo(() => [
        { id: 1, title: 'Home', icon: <CiHome />, link: '/' },
        { id: 2, title: 'About', icon: <IoPersonOutline />, link: '/about' },
        { id: 3, title: 'Projects', icon: <PiSuitcaseSimple />, link: '/projects' },
        { id: 4, title: 'Stack', icon: <GoStack />, link: '/stack' },
        { id: 5, title: 'Blog', icon: <IoBookOutline />, link: '/blog' },
        { id: 6, title: 'Contact', icon: <CiMail />, link: '/contact' }
    ], []);

    const [active, setActive] = useState(null);

    // Only access localStorage on the client side
    useEffect(() => {
        if (typeof window !== "undefined") {
          // Get current path
          const currentPath = window.location.pathname;
          
          // Find matching sidebar item
          const activeIndex = sideBarData.findIndex(item => 
            item.link === currentPath || 
            (item.link !== '/' && currentPath.startsWith(item.link))
          );
          
          if (activeIndex !== -1) {
            setActive(activeIndex);
            localStorage.setItem('activeSidebarIndex', activeIndex);
          }
        }
      }, [sideBarData]);

    const handleActive = (index) => {
        setActive(index);
        localStorage.setItem('activeSidebarIndex', index); // Safe since it's inside a client-only function
    };

    return (
        <div className="sidebar">
            <div className="sidebar--innerwrapper">
                <Link href="/" className="sidebar__logo">
                    <figure>
                        <Image src="/tunde.png" alt="Joseph Tunde" width={50} height={50} />
                    </figure>
                    <div className="sidebar-header">
                        <h4>Joseph Tunde</h4>
                        <p>Product Manager</p>
                    </div>
                </Link>

                <div className="sidebar__top-nav">
                    <ul>
                        {sideBarData.map((item, index) => (
                            <li key={item.id} onClick={() => handleActive(index)} className={active === index ? 'list-active' : ''}>
                                <Link href={item.link}>
                                    {item.icon}
                                    <span className='sidebar__nav-text'>{item.title}</span>
                                    <IoIosArrowRoundForward className="arrow_forward" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="sidebar__lower-nav">
                    <ul>
                        <li>
                            <Link href="https://x.com/__jot" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                                <span className="social_media_text">Twitter</span>
                                <IoIosArrowRoundForward />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/Tunde-Dev-Ox" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                                <span className="social_media_text">Github</span>
                                <IoIosArrowRoundForward />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/josephtunde/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                                <span className="social_media_text">LinkedIn</span>
                                <IoIosArrowRoundForward />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
